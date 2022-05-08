// import quadrado from './quadrado.js';
// import numeroAleatorio from './numeroAleatorio.js';

// console.log(quadrado.perimetroQuadrado(5));
// console.log(numeroAleatorio());

// fetch('https://ranekapi.origamid.dev/wp-json/api/produto')1;

// async function fetchProdutos(url) {
//   const response = await fetch(url);
//   const json = await response.json();
//   return response;
// }

// const precos = [
//   'Crédito',
//   'R$ 200',
//   'R$ 400',
//   'Contas Pagar',
//   'R$ 300',
//   'R$ 400',
//   'Meus dados',
// ];

// const precosFiltro = precos.filter((p) => p.includes('R$'));
// console.log(precosFiltro);

// const precosNumeros = precosFiltro.map((preco) => Number(preco.replace('R$ ', '')));
// console.log(precosNumeros);

const grupoA = 100;
const grupoB = 200;

if (grupoA > grupoB) {
  console.log('Grupo A ganhou');
} else {
  console.log('Grupo B ganhou');
}

const vencedor = grupoA > grupoB ? 'Grupo A venceu' : 'Grupo B venceu';
console.log(vencedor);

const active = true;
const button = active && 'Butão está ativo';
console.log(button);
