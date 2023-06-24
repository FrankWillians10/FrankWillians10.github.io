export function climaTempo() {
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
  
}

climaTempo();