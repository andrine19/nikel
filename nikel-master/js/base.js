const nome = "Douglas";
let nome2 = "";
let pessoaDefault = {
    nome: "Douglas",
    idade: "25",
    trabalho: "Dev" 
}

let nomes = ["Douglas","Pamela","Gabriela"]
let pessoas = [
    {
        nome: "Douglas",
        idade: "25",
        trabalho: "Dev"  
    },
    {
        nome: "Pamela",
        idade: "29",
        trabalho: "Vendedora"
    },
    {
        nome: "Gabriela",
        idade: "20",
        trabalho: "Maquiadora"
    }
]

function alterarnome() {
    nome2 = "Carolini"
    console.log("Valor alterado:")
    console.log(nome2)
}

function recebeEalteranome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("trabalho:");
    console.log(pessoa.trabalho);  
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("trabalho:");
        console.log(item.trabalho); 
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Bruna",
    idade: "21",
    trabalho: "Professora"
});

imprimirPessoas();
