function pesquisar() {
    // Busca a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toUpperCase();

    //console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    if (!campoPesquisa.trim()) { //se campo pesquisa vazio ou apenas com espaço em branco, mostra mensagem e encerra. 
        section.innerHTML = "<p>Digite um texto para a pesquisa</p>";
        return;
    }
  
    // Itera sobre cada dado e constrói o HTML para cada resultado
    for (let dado of dados) {
        if (dado.nome_popular.toUpperCase().includes(campoPesquisa) || dado.nome_científico.toUpperCase().includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.nome_popular}</a>
              </h2>
              <p class="descricao-meta">Nome científico: ${dado.nome_científico}  -  Família: ${dado.familia}  -  Tem importância médica: ${dado.importancia_medica} </p> 
              ${dado.descricao}
              <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
          `;
        } 
        if (!resultados) {
            resultados = "<p>Não encontrado</p>";
        }   
    }
  
    // Insere os resultados construídos na seção HTML
    section.innerHTML = resultados;
  }

// console.log(dados); 
// console.log(dados[2].titulo);


