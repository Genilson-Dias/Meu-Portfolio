const botaoMenu = document.querySelector('#botao-menu');
const menu = document.querySelector('#menu');
const linksMenu = document.querySelectorAll('#menu a');
const botaoTema = document.querySelector('#botao-tema');
const iconeTema = document.querySelector('#icone-tema');

const temaSalvo = localStorage.getItem('tema');
const prefereTemaEscuro = window.matchMedia(
  '(prefers-color-scheme: dark)',
).matches;

function aplicarTema(tema) {
  const modoEscuro = tema === 'escuro';

  document.body.classList.toggle('tema-escuro', modoEscuro);
  botaoTema.setAttribute('aria-pressed', String(modoEscuro));
  botaoTema.setAttribute(
    'aria-label',
    modoEscuro ? 'Ativar modo claro' : 'Ativar modo escuro',
  );
  botaoTema.title = modoEscuro ? 'Ativar modo claro' : 'Ativar modo escuro';
  iconeTema.textContent = modoEscuro ? '☀️' : '🌙';
}

const temaInicial =
  temaSalvo === 'escuro' || temaSalvo === 'claro'
    ? temaSalvo
    : prefereTemaEscuro
      ? 'escuro'
      : 'claro';

aplicarTema(temaInicial);

botaoTema.addEventListener('click', () => {
  const novoTema = document.body.classList.contains('tema-escuro')
    ? 'claro'
    : 'escuro';
  aplicarTema(novoTema);
  localStorage.setItem('tema', novoTema);
});

function fecharMenu() {
  menu.classList.remove('aberto');
  document.body.classList.remove('menu-aberto');
  botaoMenu.setAttribute('aria-expanded', 'false');
  botaoMenu.setAttribute('aria-label', 'Abrir menu');
}

botaoMenu.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  document.body.classList.toggle('menu-aberto', aberto);
  botaoMenu.setAttribute('aria-expanded', String(aberto));
  botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
});
linksMenu.forEach((link) => link.addEventListener('click', fecharMenu));
window.addEventListener('resize', () => {
  if (window.innerWidth > 760) fecharMenu();
});

document.querySelector('#ano').textContent = new Date().getFullYear();

const secoes = document.querySelectorAll('main section[id]');
function atualizarMenu() {
  let atual = 'inicio';
  secoes.forEach((secao) => {
    if (window.scrollY + 150 >= secao.offsetTop) atual = secao.id;
  });
  linksMenu.forEach((link) =>
    link.classList.toggle('ativo', link.getAttribute('href') === `#${atual}`),
  );
}
window.addEventListener('scroll', atualizarMenu, { passive: true });
atualizarMenu();

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      entrada.target.classList.add('visivel');
      entrada.target.querySelectorAll('[data-nivel]').forEach((barra) => {
        barra.style.width = `${barra.dataset.nivel}%`;
      });
      observador.unobserve(entrada.target);
    });
  },
  { threshold: 0.14 },
);
document
  .querySelectorAll('.revelar')
  .forEach((elemento) => observador.observe(elemento));

const formulario = document.querySelector('#formulario');
const retorno = document.querySelector('#retorno');
const campos = {
  nome: document.querySelector('#nome'),
  email: document.querySelector('#email'),
  mensagem: document.querySelector('#mensagem'),
};

function definirErro(campo, mensagem) {
  campo.classList.toggle('invalido', Boolean(mensagem));
  campo.setAttribute('aria-invalid', String(Boolean(mensagem)));
  document.querySelector(`#erro-${campo.id}`).textContent = mensagem;
  return !mensagem;
}
function validarNome() {
  const valor = campos.nome.value.trim();
  if (!valor) return definirErro(campos.nome, 'Por favor, informe seu nome.');
  if (valor.length < 3)
    return definirErro(campos.nome, 'O nome deve ter pelo menos 3 caracteres.');
  return definirErro(campos.nome, '');
}
function validarEmail() {
  const valor = campos.email.value.trim();
  const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!valor)
    return definirErro(campos.email, 'Por favor, informe seu e-mail.');
  if (!padrao.test(valor))
    return definirErro(campos.email, 'Digite um endereço de e-mail válido.');
  return definirErro(campos.email, '');
}
function validarMensagem() {
  const valor = campos.mensagem.value.trim();
  if (!valor)
    return definirErro(campos.mensagem, 'Por favor, escreva uma mensagem.');
  if (valor.length < 10)
    return definirErro(
      campos.mensagem,
      'A mensagem deve ter pelo menos 10 caracteres.',
    );
  return definirErro(campos.mensagem, '');
}

campos.nome.addEventListener('blur', validarNome);
campos.email.addEventListener('blur', validarEmail);
campos.mensagem.addEventListener('blur', validarMensagem);
Object.values(campos).forEach((campo) =>
  campo.addEventListener('input', () => {
    if (campo.classList.contains('invalido')) {
      if (campo === campos.nome) validarNome();
      if (campo === campos.email) validarEmail();
      if (campo === campos.mensagem) validarMensagem();
    }
  }),
);

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  retorno.className = 'retorno';
  retorno.textContent = '';
  const valido = [validarNome(), validarEmail(), validarMensagem()].every(
    Boolean,
  );
  if (!valido) {
    retorno.classList.add('falha');
    retorno.textContent = 'Verifique os campos destacados antes de enviar.';
    formulario.querySelector('.invalido')?.focus();
    return;
  }
  retorno.classList.add('sucesso');
  retorno.textContent =
    'Mensagem validada com sucesso. Para o envio real, conecte o formulário ao Formspree, EmailJS, Firebase ou a uma API própria.';
  formulario.reset();
  Object.values(campos).forEach((campo) =>
    campo.setAttribute('aria-invalid', 'false'),
  );
});
