# Meu Portfólio

## Descrição do projeto

Este projeto foi criado como um portfólio pessoal e profissional para apresentar Genilson Dias da Cruz Júnior, incluindo sua formação, habilidades, áreas de atuação, projetos em destaque, localização e canais de contato.

A página foi desenvolvida em HTML, CSS e JavaScript, com foco em um layout moderno, visual atrativo e responsivo para diferentes tamanhos de tela. O objetivo principal foi criar uma presença digital profissional, com boa usabilidade, navegação clara e elementos visuais que reforcem a identidade do perfil do desenvolvedor.

## Estrutura do projeto

- `index.html`: contém toda a estrutura da landing page, com as seções principais do portfólio.
- `style.css`: define o visual da página, incluindo layout, cores, tipografia, responsividade e animações.
- `script.js`: adiciona interatividade, como menu mobile, tema claro/escuro, destaque de links ativos, validação do formulário e efeitos de scroll.
- `assets/`: armazena os arquivos visuais do projeto, como a foto profissional e o logo.
- `projetos/`: contém os projetos apresentados no portfólio, cada um com sua própria página.

## Seções incluídas

### 1. Cabeçalho e navegação
O cabeçalho possui um menu com links para:
- Início
- Sobre
- Projetos
- Habilidades
- Localização
- Contato

A navegação foi pensada para ser simples, direta e acessível, com destaque visual para o item ativo e suporte ao menu em dispositivos menores.

### 2. Hero / apresentação inicial
A seção inicial apresenta uma mensagem de boas-vindas e um texto principal destacando o perfil profissional. Há também:
- nome do profissional
- área de atuação (Desenvolvedor de Software e Desenvolvedor Mobile)
- descrição curta da proposta de trabalho
- botões de ação para conhecer os projetos e entrar em contato
- links para redes sociais, e-mail e contato profissional

### 3. Sobre
A seção “Sobre” apresenta uma visão geral da trajetória, objetivos e áreas de interesse do desenvolvedor. Também inclui:
- formação acadêmica
- instituição de ensino
- área de atuação
- localização
- lista de especialidades e interesses

### 4. Projetos em destaque
A página apresenta projetos desenvolvidos pelo autor. Cada projeto conta com:
- capa com iniciais do nome do projeto
- categoria do projeto
- descrição resumida
- tags técnicas
- link para abrir a aplicação correspondente dentro da pasta `projetos/`

Projetos incluídos:
- **Lâmpada Interativa** (`projetos/lampada/`): interação de ligar e desligar uma lâmpada.
- **Seletor de Carros** (`projetos/seletor-carros/`): seleção interativa de carros.
- **Lista de Tarefas** (`projetos/lista-tarefas/`): aplicação web para organizar tarefas.

### 5. Habilidades
A seção de habilidades mostra o nível de familiaridade com tecnologias e áreas de desenvolvimento, com barras de progresso em porcentagem. As habilidades foram divididas em grupos, como:
- Desenvolvimento Web
- Desenvolvimento de Software
- Mobile e Design

Isso ajuda a transmitir o nível de conhecimento e domínio em cada área.

### 6. Localização
Foi incluído um bloco de localização geral com uma descrição de privacidade, mostrando apenas a cidade e estado do profissional. Também há um mapa incorporado com a localização de Pirambu, Sergipe, Brasil.

### 7. Contato
A seção de contato reúne:
- e-mail profissional
- telefone
- disponibilidade para projetos, estágio e oportunidades
- formulário para envio de mensagem

O formulário foi implementado com validação em JavaScript para validar nome, e-mail e mensagem antes do envio.

## Estilo visual

O design da página foi pensado para ter uma identidade visual moderna e tecnológica. Algumas características destacadas:
- paleta com azul, roxo, bege e tons neutros
- uso de tipografia moderna com Google Fonts
- bordas arredondadas e sombras suaves
- cards com destaque visual
- botões com hover e efeitos de elevação
- layout com espaço bem distribuído para leitura e navegação

## Interatividade implementada

No JavaScript, foram adicionados recursos como:
- menu responsivo para celulares
- alternância entre tema claro e escuro
- persistência da escolha do tema no navegador
- atualização visual do menu conforme a seção ativa
- animação de elementos ao entrar na tela
- validação de campos em tempo real e no envio do formulário
- atualização automática do ano no rodapé

## Acessibilidade e boa prática

A página também foi desenvolvida levando em consideração alguns aspectos de acessibilidade, como:
- botão para pular para o conteúdo
- uso de labels e atributos `aria-label`
- foco visível para navegação por teclado
- textos e botões com contrastes adequados
- uso de `aria-live` para mensagens do formulário
- mapa carregado de forma leve e com `loading="lazy"`

## Tecnologias usadas

- HTML5
- CSS3
- JavaScript
- Google Fonts
- Imagens locais
- Mapa embutido do Google Maps

## Como visualizar o projeto

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto no navegador.
3. Localize o arquivo `index.html`.
4. Abra-o em qualquer navegador moderno.

Também é possível servir a página localmente com um servidor simples, caso prefira.

## Observações

O portfólio foi criado como uma página profissional de apresentação, com caráter estático e visual forte. Os projetos são servidos a partir de suas pastas locais no próprio repositório.

Além disso, o formulário de contato foi preparado para validação front-end, mas ainda precisa ser conectado a uma API real, como Formspree, EmailJS, Firebase ou um backend próprio, para envio efetivo de mensagens.

## Objetivo do projeto

O projeto tem como objetivo apresentar o profissional de forma clara, organizada e moderna, reforçando sua imagem digital como desenvolvedor de software, com foco em tecnologia, design e soluções funcionais.
