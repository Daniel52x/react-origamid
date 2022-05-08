const menu = {
  seletor: '.principal',
};

console.log(menu.seletor.toUpperCase());

const upperName = (name) => name.toUpperCase();

const lowerName = (name) => {
  return name.toLowerCase();
};

console.log(upperName('andre'));
console.log(lowerName('andre'));

function handleMouse({ clientX, clientY }) {
  console.log(clientX, clientY);
}

document.addEventListener('click', handleMouse);

const frutas = ['banana', 'uva'];
const [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lados, perimetro] = useQuadrado;
console.log(lados, perimetro(lados));

function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

showList('Google', 'Andre', 'Rafael', 'Julio');

const numeros = [10, 5, 20];
const maior = Math.max(...numeros);
console.log(maior);

const numeros2 = [...numeros, 24, 32, 32];
console.log(numeros2);

const carro = {
  cor: 'azul',
  portas: 4,
};

carroAno = { ...carro, ano: 2008 };

console.log(carro, carroAno);
