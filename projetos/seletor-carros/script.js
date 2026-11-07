"use strict";

const carroBranco = document.getElementById("white");
const carroVermelho = document.getElementById("red");
const botaoBranco = document.getElementById("branco");
const botaoVermelho = document.getElementById("vermelho");
const botaoResetar = document.getElementById("resetar");
const botaoAcelerar = document.getElementById("acelerar");
const botaoDesacelerar = document.getElementById("desacelerar");
const resultado = document.getElementById("result");
const pista = document.querySelector(".track");
const audio = document.querySelector("audio");

let carroSelecionado = null;
let velocidade = 0;
let retornando = false;
let posicaoY = 130;
let ultimoTempo = 0;
let animacaoId = null;

const POSICAO_INICIAL = 130;
const VELOCIDADE_MINIMA = 40;
const VELOCIDADE_MAXIMA = 300;
const PASSO_VELOCIDADE = 40;
const VELOCIDADE_RETORNO = 55;

function exibirControles(exibir) {
  const valor = exibir ? "block" : "none";
  botaoResetar.style.display = valor;
  botaoAcelerar.style.display = valor;
  botaoDesacelerar.style.display = valor;
}

function atualizarPosicaoCarro(carro) {
  const progresso = Math.min(1, Math.max(0, 1 - posicaoY / POSICAO_INICIAL));
  const escalaPerspectiva = 1 - progresso * 0.8;
  const escalaVelocidade = 1 - (velocidade / VELOCIDADE_MAXIMA) * 0.5;
  const escala = escalaPerspectiva * escalaVelocidade;
  const centroPista = pista.clientWidth / 2;
  const afastamentoFaixa = centroPista * (0.5 - progresso * 0.44);
  const centroFaixa = carro === carroBranco
    ? centroPista - afastamentoFaixa
    : centroPista + afastamentoFaixa;

  carro.style.right = "auto";
  carro.style.left = `${centroFaixa - carro.offsetWidth / 2}px`;
  carro.style.top = `${posicaoY}px`;
  carro.style.transform = `scale(${escala})`;
}

function selecionarCarro(carro, nome, outroCarro) {
  carroSelecionado = carro;
  velocidade = 0;
  retornando = false;
  posicaoY = POSICAO_INICIAL;

  carro.style.display = "block";
  outroCarro.style.display = "none";
  atualizarPosicaoCarro(carro);

  resultado.textContent = nome;
  resultado.style.color = nome === "Branco" ? "white" : "DarkRed";
  exibirControles(true);

  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Alguns navegadores bloqueiam áudio automático. O restante continua funcionando.
    });
  }
}

function atualizarMovimento(tempoAtual) {
  if (!ultimoTempo) ultimoTempo = tempoAtual;
  const segundos = (tempoAtual - ultimoTempo) / 1000;
  ultimoTempo = tempoAtual;

  if (carroSelecionado) {
    if (retornando) {
      posicaoY = Math.min(POSICAO_INICIAL, posicaoY + VELOCIDADE_RETORNO * segundos);

      if (posicaoY === POSICAO_INICIAL) {
        retornando = false;
        resultado.textContent = `${carroSelecionado === carroBranco ? "Branco" : "Vermelho"} | Início`;
      }
    } else if (velocidade > 0) {
      posicaoY -= velocidade * segundos;

      if (posicaoY <= 0) {
        posicaoY = 0;
        velocidade = 0;
        const nome = carroSelecionado === carroBranco ? "Branco" : "Vermelho";
        resultado.textContent = `${nome} | Fim da pista`;
      }
    }

    atualizarPosicaoCarro(carroSelecionado);
  }

  animacaoId = requestAnimationFrame(atualizarMovimento);
}

function acelerar() {
  if (!carroSelecionado) return;

  retornando = false;
  velocidade = velocidade === 0
    ? VELOCIDADE_MINIMA
    : Math.min(velocidade + PASSO_VELOCIDADE, VELOCIDADE_MAXIMA);
  atualizarPosicaoCarro(carroSelecionado);

  resultado.textContent = `${carroSelecionado === carroBranco ? "Branco" : "Vermelho"} | ${velocidade} px/s`;
}

function desacelerar() {
  if (!carroSelecionado) return;

  velocidade = 0;
  if (posicaoY < POSICAO_INICIAL) {
    retornando = true;
    resultado.textContent = `${carroSelecionado === carroBranco ? "Branco" : "Vermelho"} | Voltando ao início`;
  } else {
    retornando = false;
    resultado.textContent = `${carroSelecionado === carroBranco ? "Branco" : "Vermelho"} | Início`;
  }
}

function resetar() {
  velocidade = 0;
  retornando = false;
  posicaoY = POSICAO_INICIAL;
  ultimoTempo = 0;
  carroSelecionado = null;

  carroBranco.style.display = "block";
  carroVermelho.style.display = "block";

  atualizarPosicaoCarro(carroBranco);
  atualizarPosicaoCarro(carroVermelho);

  resultado.textContent = "?";
  resultado.style.color = "white";
  exibirControles(false);

  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}

botaoBranco.addEventListener("click", () => {
  selecionarCarro(carroBranco, "Branco", carroVermelho);
});

botaoVermelho.addEventListener("click", () => {
  selecionarCarro(carroVermelho, "Vermelho", carroBranco);
});

carroBranco.addEventListener("click", () => {
  selecionarCarro(carroBranco, "Branco", carroVermelho);
});

carroVermelho.addEventListener("click", () => {
  selecionarCarro(carroVermelho, "Vermelho", carroBranco);
});

botaoAcelerar.addEventListener("click", acelerar);
botaoDesacelerar.addEventListener("click", desacelerar);
botaoResetar.addEventListener("click", resetar);

// Também permite controlar o carro pelo teclado.
document.addEventListener("keydown", (evento) => {
  if (evento.key === "ArrowUp") acelerar();
  if (evento.key === "ArrowDown") desacelerar();
  if (evento.key.toLowerCase() === "r") resetar();
});

exibirControles(false);
atualizarPosicaoCarro(carroBranco);
atualizarPosicaoCarro(carroVermelho);
animacaoId = requestAnimationFrame(atualizarMovimento);
