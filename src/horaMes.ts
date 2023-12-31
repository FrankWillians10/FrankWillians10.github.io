export function horaMes() {
  const data = document.querySelector(".informacoes-data");
  const date = new Date();
  
  let mes: unknown = date.getMonth();
  let dia: unknown = date.getDate();
  let ano: unknown = date.getFullYear();
  if(mes === 0) {
    mes = 1;
  } else if(mes === 1) {
    mes = 2;
  } else if(mes === 2) {
    mes = 3;
  } else if(mes === 3) {
    mes = 4;
  } else if(mes === 4) {
    mes = 5;
  } else if(mes === 5) {
    mes = +6;
  } else if(mes === 6) {
    mes = 7;
  } else if(mes === 7) {
    mes = 8;
  } else if(mes === 8) {
    mes = 9;
  } else if(mes === 9) {
    mes = 10;
  } else if(mes === 10) {
    mes = 11;
  } else {
    mes = 12;
  }
  
  if(data instanceof HTMLElement) {
      data.innerHTML = `${dia}/${mes}/${ano}`
  }
  //======================================================================================================================//
  
  const hora = document.querySelector(".informacoes-hora");
  
  if(hora instanceof HTMLElement) {
    setInterval(() => {
      const horas = new Date();
      hora.innerHTML = `${horas.getHours()}:${horas.getMinutes()}:${horas.getSeconds()}`;
    }, 1000)
  }
  
  if(hora instanceof HTMLElement) {
      setInterval(() => {
        const horas = new Date();
        hora.innerHTML = `${horas.getHours()}:${horas.getMinutes()}:${horas.getSeconds()}`;
      }, 1000)
    }
}

horaMes();