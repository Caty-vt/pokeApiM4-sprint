async function buscarpokemon() {
    try {
      let busqueda = document.getElementById("pokemonInput").value
      let response = await fetch("https://pokeapi.co/api/v2/pokemon/"+busqueda);
      let data = await response.json();
        console.log(data);

      console.log('“Información Enviada”.');
    } catch (err) {
      console.log(err);
      console.log("error");
    }
  }
// card de Pokemon encontrado y posterior modal con grafico
//intentare 








//   guardar next de manera global
  let nextpoke = ""


  async function cargarpokemon() {
      try {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon");
        let data = await response.json();
        document.getElementById("siguiente").hidden = false;
        console.log(data);
        let listado = document.getElementById("pokemones");
        let guardar = "";
        for (let index = 0; index < data.results.length; index++) {
            guardar +=`            
            <div class="col my-2">
                    <div class="card mx-auto bibcard shadow " style="width: 18rem;">
                            <h5 class="card-title">${data.results[index].name}</h5>
                    </div>
                </div> `;
            
        }
        listado.innerHTML =guardar
        console.log('“Información Enviada”.');
        nextpoke = data.next;

        // innerHTML cards
        console.log(nextpoke)
        
      } catch (err) {
        console.log(err);
        console.log("error");
      }
    }
  async function siguienterpokemon() {
      try {
        if (nextpoke != "") {
            let response = await fetch(nextpoke);
            let data = await response.json();
            
            console.log(data);
            console.log('“Información Enviada”.');
            nextpoke = data.next;            
            
            let listado = document.getElementById("pokemones");
            let guardar = "";
            for (let index = 0; index < data.results.length; index++) {
                guardar +=`            
                <div class="col my-2">
                        <div class="card mx-auto bibcard shadow " style="width: 18rem;">
                                <h5 class="card-title">${data.results[index].name}</h5>
                        </div>
                    </div> `;
                
            }
            listado.innerHTML =guardar

        } else {
        alert("Precione el boton cargar primero")    
        }
        
      } catch (err) {
        console.log(err);
        console.log("error");
      }
    }
    function borrar(){
        nextpoke ="";
        let listado = document.getElementById("pokemones");
        listado.innerHTML ="";
      }