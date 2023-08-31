let btn = document.querySelector("#new-citacao");
let citacao = document.querySelector(".citacao");
let pessoa = document.querySelector(".pessoa");

const citacoes = [{
    citacao: `"A melhor maneira de se encontrar é se perder no serviço aos outros."`,
    pessoa: `Mahatma Gandhi`
},{
    citacao: `"Se você quer viver uma vida feliz, conecte-a a um objetivo, não a pessoas ou coisas."`,
    pessoa: `Albert Einstein`
},{
    citacao: `"No seu melhor, o homem é o mais nobre de todos os animais; separado da lei e da justiça, ele é o pior."`,
    pessoa: `Aristóteles`
},{
    citacao: `"Seu tempo é limitado, então não o desperdice vivendo a vida de outra pessoa."`,
    pessoa: `Steve Jobs`
},{
    citacao: `"Me diga e eu esqueço. Ensine-me e eu me lembro. Envolva-me e eu aprendo."`,
    pessoa: `Benjamin Franklin`
},{
    citacao: `"Se você olhar para o que tem na vida, sempre terá mais. Se você olhar para o que não tem na vida, nunca terá o suficiente."`,
    pessoa: `Oprah Winfrey`
},{
    citacao: `"Você só ocupa meus pensamentos. Não meus sentimento"`,
    pessoa: `Andre - Técnico Senac`
},{
    citacao: `"Nossas vidas começam a terminar no dia em que nos tornamos silenciosos sobre as coisas que importam."`,
    pessoa: `Martin Luther King, Jr.`
}];

btn.addEventListener("click" , function(){
    let random = Math.floor(Math.random()*citacoes.length);
    citacao.innerText = citacoes[random].citacao
    pessoa.innerText = citacoes[random].pessoa
});

//Math random - gerar numero decimal aleatorio entre 0 e 1;
//Math floor - arredonda resultado para baixo;
