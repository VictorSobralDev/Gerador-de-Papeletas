const militares = [
  {
    id: "rocco",
    nome: "Renan Fernandes De Rocco",
    nip: "19.1105.02",
    grad: "MNE-RM2 AD"
  },
  {
    id: "oliveira",
    nome: "Cainã De Oliveira Silva",
    nip: "22.1063.24",
    grad: "MNE-RM2 AD"
  },
  {
    id: "sobral",
    nome: "Victor Emanoel Sobral",
    nip: "22.2912.29",
    grad: "MN-RM2"
  },
  {
    id: "deolindo",
    nome: "Lauro Deolindo Menezes Munhoz",
    nip: "22.2917.25",
    grad: "MN-RM2"
  },
  {
    id: "fidelis",
    nome: "Gusthavo V. Fidelis Dos S. Oliveira",
    nip: "24.0680.21",
    grad: "MN-RM2"
  },
  {
    id: "andre",
    nome: "André Luiz Dos Santos",
    nip: "24.0659.27",
    grad: "MN-RM2"
  }
];

function nomesNegritos(nome) {

  if (nome === "Renan Fernandes De Rocco") {
    return nome.replace("Rocco", "<strong>Rocco</strong>");
  }
  
  if (nome === "Cainã De Oliveira Silva") {
    nome = nome.replace(/^C/, "<strong>C</strong>");
    return nome.replace("Oliveira", "<strong>Oliveira</strong>");
  }

  if (nome === "Victor Emanoel Sobral") {
    return nome.replace("Sobral", "<strong>Sobral</strong>");
  }

  if (nome === "Lauro Deolindo Menezes Munhoz") {
    return nome.replace("Deolindo", "<strong>Deolindo</strong>");
  }

  if (nome === "Gusthavo V. Fidelis Dos S. Oliveira") {
    return nome.replace("Fidelis", "<strong>Fidelis</strong>");
  }

  if (nome === "André Luiz Dos Santos") {
    return nome.replace("André Luiz", "<strong>André Luiz</strong>");
  }
}

function girarModal() {
  const modal = document.querySelector('.modal');
  const girarIcone = document.querySelector('.girar-icone');
  modal.classList.toggle('visible');
  girarIcone.classList.toggle('rodou');
}

function selecionarTodos() {
  const botaoTodos = document.getElementById('todos');
  const selecTodos = document.querySelectorAll('.selec-todos');
  selecTodos.forEach(checkbox => {
    checkbox.checked = botaoTodos.checked;
  });
}

const botaoHorarioFixo = document.querySelectorAll('.horario-fixo');
botaoHorarioFixo.forEach((botaoSelecionado) => {
  botaoSelecionado.addEventListener('click', () => {
    botaoHorarioFixo.forEach(b => b.classList.remove('selecionado'));
    botaoSelecionado.classList.add('selecionado');
  });
});

function gerarVia(militar, dataLicenca, dataRegresso) {
  return `
    <div class="via">
      <div class="topo">
        <div class="titulo">
          <img src="./assets/brasao.png" class="brasao" alt="Brasão da Marinha">
          <div class="paragrafo-titulo">
            <strong>
              <p>MARINHA DO BRASIL</p>
              <p>CAPITANIA DOS PORTOS</p>
              <p>DE SÃO PAULO</p>
            </strong>
          </div>
        </div>
        <strong>
          <p id="titulo">PAPELETA DE LICENÇA ESPECIAL (até 24h)</p>
        </strong>
      </div>

        <div class="corpo">
          <div class="grad-nip">
            <p class="ajuste-linha"><strong>GRAD/ESP:</strong> <span>${militar.grad}</span></p>
            <p class="nip" class="ajuste-linha"><strong> NIP:<span>${militar.nip}</span></p>
          </div>
            <p class="nome-guerra"><strong>Nome:</strong> ${nomesNegritos(militar.nome)}</p>
            <p><strong>Setor/Divisão:</strong> GAP</p>
            <p><strong>Data/Hora Licença:</strong> <span class="span-font">${dataLicenca}</span></p>
            <p><strong>Data/Hora Regresso:</strong> <span class="span-font">${dataRegresso}</span></p>
            <p><strong>Motivo:</strong> <span class="span-font">LICENÇA ESPECIAL</span></p>
        </div>

        <div class="assinaturas">
          <div class="linha-autorizo">
            <div class="coluna-esquerda">
              <p>Autorizo:</p>
            </div>
      
            <div class="coluna-direita">
              <p class="linha-ass">________________________</p>
              <p class="encarrega">Encarregado do militar</p>
            </div>
          </div>
      
          <div class="assinatura-final">
            <span>JOSE ANGELO NASARIO DE ARAUJO</span><br>
            <span>Capitão de Fragata (RM1-IM)</span><br>
            <span>Encarregado do GAP</span>
          </div>
        </div>
    </div>`;
}

function gerarTemplateHTML(militar, dataLicenca, dataRegresso) {
  return `
<header>
    <a href="Gerar-Papeletas.html" class="hover-logo">
        <div class="logo">
            <img src="./assets/Marinha-do-brasil-Logo.png" alt="Logo Marinha">
        </div>
        <div class="text">
            <h1> Chão ? </h1>
        </div>
    </a>

    <div id="icone" onclick="girarModal()" class="girar-icone hover">
        <i class="fa-solid fa-bars"></i>
    </div>

    <div class="modal militares" id="modal">
        <li>
            <a href="./Gerar-Papeletas.html" class="nav">
                <i class="fa-solid fa-house"></i>
                <div>Home</div>
            </a>

            <a href="./papeleta.html" class="nav">
                <i class="fa-solid fa-print"></i>
                <div>Modelo Papeleta</div>
            </a>

            <a href="./Sobre.html" class="nav">
                <i class="fa-regular fa-lightbulb"></i>
                <div>Sobre</div>
            </a>
        </li>
    </div>

</header>

  <div class="pagina">
            ${gerarVia(militar, dataLicenca, dataRegresso) +
    gerarVia(militar, dataLicenca, dataRegresso)
    }
        </div>
        <div class="rodape">
            <p>IMPRIMIR 2 VIAS (UMA DO MILITAR E OUTRA DO CONTRAMESTRE)</p>
        </div>
    </div>
      <script src="https://kit.fontawesome.com/9a0ab34c93.js" crossorigin="anonymous"></script>
     <script src="./script.js"></script>`;
}

function gerarPapeletas() {
  const selecionados = document.querySelectorAll('.selec-todos:checked');
  const horarioSelecionado = document.querySelector('input[name="horario"]:checked');

  if (selecionados.length === 0 && !horarioSelecionado) {
    alert("Selecione pelo menos um militar e um horário.");
    return;
  }

  if (selecionados.length === 0) {
    alert("Selecione pelo menos um militar.");
    return;
  }

  if (!horarioSelecionado) {
    alert("Faltou o horário seu apagado.");
    return;
  }

  const valorSelecionado = horarioSelecionado.value;
  const ehHorarioFixo = valorSelecionado.includes(':');

  const horaLicenca = new Date();
  const horaRegresso = new Date(horaLicenca);
  horaRegresso.setDate(horaLicenca.getDate() + 1);
  if (ehHorarioFixo) {

    var dataLicenca = formatarDataHora(horaLicenca, valorSelecionado);
  } else {

    let minutosAtuais = horaLicenca.getMinutes();
    let resto = minutosAtuais % 5;
    if (resto !== 0) {
      if (resto < 3) {
        horaLicenca.setMinutes(minutosAtuais - resto); 
      } else {
        horaLicenca.setMinutes(minutosAtuais + (5 - resto));
      }
    }

    horaLicenca.setMinutes(horaLicenca.getMinutes() + parseInt(valorSelecionado));
    var dataLicenca = formatarDataHora(horaLicenca, `${horaLicenca.getHours()}:${horaLicenca.getMinutes()}`);
  }

  const dataRegresso = formatarDataHora(horaRegresso, "08:00");

  let papeletasHtml = '';
  selecionados.forEach(checkbox => {
    const militar = militares.find(m => m.id === checkbox.id);
    if (!militar) return;
    papeletasHtml += gerarTemplateHTML(militar, dataLicenca, dataRegresso);
  });

  const novaJanela = window.open('', '_blank');
  novaJanela.document.write(`<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Papeleta de Licença Especial</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap');

@page {
  size: A4 portrait;
  margin: 1cm 0.5cm;
}

body {
  font-family: "Times New Roman", Times, serif;
  font-size: 14pt;
  margin: 0;
  padding: 0;
  background: rgba(224, 224, 224, 0.486);
}

header {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #2a60b1fa;
  justify-content: space-between;
  font-family: "Sriracha", cursive !important;

  & a {
      display: flex;
      align-items: center;
      text-decoration: none;
  }
}

.logo {
  margin-top: 7px;
  padding-left: 30px;
  display: flex;
  align-items: center;

  & img {
      width: 170px;
      height: auto;
  }
}

.text {
  padding-left: 0px;
  color: #fff;
  font-size: 20px; 
  font-family: "Sriracha", cursive !important;
}

.hover-logo {
  transition: 0.5s;
}

.hover-logo:hover {
  transform: scale(1.1)
}

#icone {
  color: #fff;
  font-size: 40px;
  height: auto;
  cursor: pointer;
  z-index: 2;
  position: absolute;
  right: 300px;
  transition: 0.6s;
}

.hover.rodou {
  transform: scale(1.3);
}

.girar-icone {
  transition: transform 0.5s ease;
}

.girar-icone.rodou {
  transform: rotate(-90deg);
}

.modal {
  top: 60px;
  width: 280px !important;
  height: 170px;
  position: absolute;
  right: 290px;
  z-index: 1;
  border: 5px double #2f6cc7a2;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.219) 0px 5px 20px;
  border-radius: 20px;
  transition: all 0.5s ease, opacity 0.3s ease;
  visibility: hidden;
  opacity: 0;
  transform: translateY(-10%);
}

.modal.visible {
  visibility: visible;
  opacity: 1;
  transform: translateY(0%);
}

li {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: self-start;
  font-size: 20px;
  color: #000;
  text-decoration: none;
  text-align: left;
  margin-left: 15px;
}

.nav {
  text-decoration: none;
  column-gap: 20px;
  color: #000;
  text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.219);
  transition: 0.5s;
}

.nav:hover {
  transform: scale(1.3);
  transform-origin: bottom left;
}

.pagina {
  width: 100%;
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  text-align: center;
}

.via {
  display: inline-block;
  vertical-align: top;
  width: 48%;
  margin: 0.5%;
  border: 1px solid black;
  font-weight: normal;
  padding: 10px;
  box-sizing: border-box;
  height: 98%;
  page-break-inside: avoid;
}

.topo {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 0;
  justify-content: center;
}

.brasao {
  width: 180px;
  margin: 4px 0 0 3px;
}

.titulo {
  display: flex;
  justify-content: start;
  align-items: start;
  line-height: 0.4;
  text-align: center;
  font-weight: bold;
  font-size: 21pt;
  letter-spacing: 2px;
}

#titulo {
  font-weight: bold;
  font-size: 23pt;
  margin-left: 35px;
  margin-bottom: -1.4cm;
}

.corpo {
  margin-top: 40px;
  margin-left: 30px;
  text-align: left;
  line-height: 0.9;
  font-size: 25pt;
}

.grad-nip {
  display: flex;
  text-align: left;
  column-gap: 40px;
  margin-bottom: -0.3cm;
}

.ajuste-linha {
  margin-bottom: 0cm;
}

.nome-guerra {
  margin-top: 0.2cm;
}

.assinaturas {
  font-size: 23pt;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -25px;
}

.linha-autorizo {
  display: flex;
  justify-content: center;
  gap: 1.5cm;
  text-align: center;
  width: 100%;
  position: relative;
  left: -55px;
  top: -15px;
}

.coluna-esquerda {
  text-align: left;
  position: relative;
  left: -10px;
}

.coluna-direita {
  margin: 0px;
  font-size: 20pt;
  text-align: center;
  position: relative;
  top: 35px;
  left: -15px;
}

.linha-ass {
  position: relative;
  top: 5px;
  font-size: 20pt;
}

.encarrega {
  font-size: 20pt;
  margin-bottom: 30px;
}

.assinatura-final {
  text-align: center;
  font-weight: bold;
  font-size: 16pt;
  line-height: 1.2;
  position: relative;
  left: 20px;
}

.rodape {
  text-align: center;
  font-weight: bold;
  font-size: 25pt;
  margin-top: 80px;
  page-break-after: always;
}

body,
.via,
.corpo,
.titulo,
.assinaturas,
.nome-guerra,
.grad-nip,
.span-font {
  font-weight: normal !important;
}

strong {
  font-weight: bold !important;
}

@media print {
    body {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      zoom: 50%;
      background-color: white;
    }

    header {
      display: none;
    }
}
</style>
</head>
<body>
${papeletasHtml}
<script>
window.onload = () => window.print();
</script>
</body>
</html>`);
}

function formatarDataHora(data, horaStr) {
  const [h, m] = horaStr.split(':');
  data.setHours(parseInt(h), parseInt(m));
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  const hora = String(data.getHours()).padStart(2, '0');
  const min = String(data.getMinutes()).padStart(2, '0');
  return `${dia}/${mes}/${ano} ${hora}:${min}`;
}