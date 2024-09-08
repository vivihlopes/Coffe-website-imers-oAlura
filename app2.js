function mostrarPersonagemSorte() {
    // Obtém a lista de dados
    let dados = getDados();
  
    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * dados.length);
  
    // Seleciona o personagem aleatório
    let personagemSorte = dados[indiceAleatorio];
  
    // Exibe o personagem na seção de resultados
    let section = document.getElementById("resultados-pesquisa");
    section.innerHTML = `
      <div class="item-resultado">
        <h2>
          <a href="${personagemSorte.link}" target="_blank">${personagemSorte.titulo}</a>
        </h2>
        <p class="descricao-meta">${personagemSorte.descricao}</p>
        <a href=${personagemSorte.link} target="_blank">Mais informações</a>
      </div>
    `;
  }
  
  function getDados() {
    return dados;
  }