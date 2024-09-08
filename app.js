function pesquisar(){
    //Obtém a seção HTML onde os resultados serão exibidos

let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value;

if(!campoPesquisa){
    section.innerHTML = "<p>Nada foi encontrado. Você digitou uma palavra inválida</p>";
    return;
}

campoPesquisa = campoPesquisa.toLowerCase();

//inicializar uma string vazia para amazenar os resultados
let resultados = "";
let titulo = "";
let descricao ="";
let tags = "";

//para cada dado dentro da lista de dados
for(let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
//cria um novo elemento HTML para cada resultado

if(titulo.includes(campoPesquisa) || 
descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
//cria um novo elemento
    resultados += 
    `
     <div class="item-resultado">
                                <div class="card">
                                <img src="${dado.imagem}" alt="${dado.imagem_descricao}">
                            </div>
                                <h2>
                                    <a href="#" target="_blank">${dado.titulo}</a>
                                </h2>
                                <p class="descricao-meta">${dado.descricao}</p>
                                <a href="${dado.link}" target="_blank"> <button class="card-button">More info</button> </a>
                                <a href="#" class="btn">Order Now</a>
                            </div>
    
    
    `;
}


}

if(!resultados){
    resultados = "<p>Nada foi encontrado</p>"
}

// Atribui os resultados gerados à seção HTML
section.innerHTML = resultados;

}

