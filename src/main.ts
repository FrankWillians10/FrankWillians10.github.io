const data = document.querySelector(".informacoes-data");
const date = new Date();

let mes: unknown = date.getMonth();
let dia: unknown = date.getDate();
let ano: unknown = date.getFullYear();
if(mes === 0) {
  mes = +"01";
} else if(mes === 1) {
  mes = +"02";
} else if(mes === 2) {
  mes = +"03";
} else if(mes === 3) {
  mes = +"04";
} else if(mes === 4) {
  mes = +"05";
} else if(mes === 5) {
  mes = +"06";
} else if(mes === 6) {
  mes = +"07";
} else if(mes === 7) {
  mes = +"08";
} else if(mes === 8) {
  mes = +"09";
} else if(mes === 9) {
  mes = +"10";
} else if(mes === 10) {
  mes = +"11";
} else {
  mes = +"12";
}

if(data instanceof HTMLElement) {
  data.innerHTML = `${dia}/0${mes}/${ano}`
}
//======================================================================================================================//

const hora = document.querySelector(".informacoes-hora");

if(hora instanceof HTMLElement) {
  setInterval(() => {
    const horas = new Date();
    hora.innerHTML = `${horas.getHours()}:${horas.getMinutes()}:${horas.getSeconds()}`;
  }, 1000)
}

//======================================================================================================================//

// apiKey e9a4d66f536eb1b95acc5a7265f0f966 //

const city: string = "Campo Grande";
const apiKey: string = "e9a4d66f536eb1b95acc5a7265f0f966";
const clima = document.querySelector(".informacoes-clima")!;


function adicionaClima(temp: any) {
  if(clima instanceof Element) {
    clima.innerHTML = temp + " C";
  }
}


async function pegaApi() {
  const retorno = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
  const dado = await retorno.json();
  adicionaClima(parseInt(dado.main.temp));
}

pegaApi();

//======================================================================================================================//

// let frontEnd = document.querySelector(".efeito-texto")!;
// let k = frontEnd.innerHTML;
// let n = k.split("");

// frontEnd.innerHTML = "";
// n.forEach((item, index) => {

//   setTimeout(() => {
//     frontEnd.innerHTML += item
//     console.log(frontEnd.innerHTML += item)
//   }, index);
// });

