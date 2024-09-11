function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa for uma strig vazia não mostra nada
    if (campoPesquisa == "") {
        section.innerHTML = "Nada foi encontrado. Pois campo de pesquisa em branco"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    console.log(campoPesquisa)

    // Inicializa uma string vazia para armazenar os resultados da pesquisa

    let resultados = "";
    let = nome = "";
    let = descricao = "";
    let esporte = "";

    // Itera sobre os dados da pesquisa
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        esporte = dado.esporte.toLowerCase()

        //se nome includes nomePesquisa, se tiver o nome faça
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || esporte.includes(campoPesquisa)) {
            // Constrói o HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2> 
                    <a href=${dado.links.instagram} target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.links.wikipedia} target="_blank">Mais informações</a>
            </div>
        `;

        }
        
        if (!resultados) {
            resultados = "Nada foi encontrado"
        }
       
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}