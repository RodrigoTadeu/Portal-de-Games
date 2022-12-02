function PesquisarJogo() {
    var search = document.getElementById('search').value;

    buscaJogos(search)
}


function buscaJogos (search) {
    fetch(`https://api.rawg.io/api/games?key=2593b69c89bd4133969d268c420cf6fd&search=${search}`)
        .then (response => response.json ()) 
        .then (jogo => {
            console.log(jogo.results)
            var jogos = jogo.results
            var mostrarjogos = '';

            for(var i =0; i<jogos.length; i++) {
                mostrarjogos += `
                <div>
                    <img class="gameImg" src="${jogos[i].background_image}">
                    <div class="name1">
                    <h4>${jogos[i].name}
                    </div>
                </div>
                `;
            }

            document.getElementById('a').innerHTML = mostrarjogos;
        })
            /*var jogos = response.data;
            var mostrarjogos = '';

            for(var i =0 ; i<jogos.lenght; i++) {
                mostrarjogos += `
                <div>
                    <img src="${jogos[i].background_image}">
                    <h4>${jogos[i].name}
                </div>
                `
            }

            document.getElementById('a').innerHTML = mostrarjogos;
        })

        .catch(function (error) {
            console.log(error)
        })*/
}

