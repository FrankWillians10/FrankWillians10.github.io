export function efeitoMaquinaDeEscrever() {
  let frontEnd = document.querySelector(".efeito-texto")!;
let k = frontEnd.innerHTML;
let n = k.split("");

frontEnd.innerHTML = "";
n.forEach((item, index) => {

  setTimeout(() => {
    frontEnd.innerHTML += item
  }, index * 70);
});
}

efeitoMaquinaDeEscrever();