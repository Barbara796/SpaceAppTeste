const apiKey = "UMDQ2uXQXQ2KlPZZTqLcARchTYMueoZHrvi52wxF"

async function listaImagenes(){
  try{

    let fetchImagen = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2017-07-08&end_date=2017-07-16`)
    let imagen = await fetchImagen.json()
    console.log(imagen)

    imagen.map(elemento => {
      console.log(elemento)
      const card = document.querySelector("[data-ul]");
      const conteudo = 
        `<li class="card">
          <img class="card__image" src="${elemento.url}" alt="bla">
          <h3 class="card__title">${elemento.title}</h3>
        </li>` ;

        card.innerHTML = card.innerHTML + conteudo;
        return card;

    });
    
  }
  catch(error){
    console.log(error)
  }
}

listaImagenes()

