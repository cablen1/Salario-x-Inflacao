import entradaDados from "readline-sync";

console.log("1 - Listar salarios de 2010 a 2020");
console.log("2 - Listar IPCA de 2010 a 2020");
console.log("3 - Comparação entre o percentual de aumento do salário mínimo e o percentual de aumento do IPCA");

let escolha = Number(entradaDados.question("Digite o numero da sua escolha: "));//usando metodo do readline para ler a entrada do usuário

let salarios = [
  { ano: 2010, valor: 510.0 },
  { ano: 2011, valor: 545.0 },
  { ano: 2012, valor: 622.0 },
  { ano: 2013, valor: 678.0 },
  { ano: 2014, valor: 724.0 },
  { ano: 2015, valor: 788.0 },
  { ano: 2016, valor: 880.0 },
  { ano: 2017, valor: 937.0 },
  { ano: 2018, valor: 954.0 },
  { ano: 2019, valor: 998.0 },
  { ano: 2020, valor: 1045.0 },
];

let ipca = [
  { ano: 2010, valor: 5.91 },
  { ano: 2011, valor: 6.5 },
  { ano: 2012, valor: 5.84 },
  { ano: 2013, valor: 5.91 },
  { ano: 2014, valor: 6.41 },
  { ano: 2015, valor: 10.67 },
  { ano: 2016, valor: 6.29 },
  { ano: 2017, valor: 2.95 },
  { ano: 2018, valor: 3.75 },
  { ano: 2019, valor: 4.31 },
  { ano: 2020, valor: 4.52 },
];


switch (escolha) {
  case 1:
    //percorre a lista de salarios e exibe o ano e o valor do salário mínimo
    for (let salario of salarios) {
      let ano = salario.ano;
      let valor = salario.valor;
      console.log("Ano:" + " ".padStart(34, ".") + " " + ano);
      console.log("Salário mínimo:" + " ".padStart(24, ".") + "R$ " + valor.toFixed(2).replace(".", ","));
      console.log("\n");
    }
    break;
  case 2:
    //percorre a lista de ipca e exibe o ano e o valor do índice de inflação
    for (const indice of ipca) {
      let ano = indice.ano;
      let valor = indice.valor;
      console.log("Ano:" + " ".padStart(35, ".") + " " + ano);
      console.log("IPCA:" + " ".padStart(35, ".") + valor.toFixed(2) + "%");
      console.log("\n");
    }
    break;
  case 3:
    //percorre a coleção e pega os valores de salario , ipca e calcula as variações e apresenta o resultado final na tela 
    for(let i= 1; i < salarios.length; i++){
      
      if (i === 1) {
    console.log("Ano:" + " ".padStart(15, ".") + salarios[0].ano);
    console.log("Salário" + " ".padStart(15, ".") + "R$ " + salarios[0].valor.toFixed(2).replace("."," ,"));
    console.log("Crescimento salário" + " ".padStart(15, ".") + "N/A");
    console.log("IPCA:" + " ".padStart(15, ".") + ipca[0].valor.toFixed(2) + "%\n\n");
    console.log("======================")
  }


      let atual = salarios[i].valor
      let anterior = salarios[i - 1].valor
      
      let diferenca = ((atual - anterior) / anterior * 100)

      let ipcaAtual = ipca[i].valor
      
      console.log("Ano:" + " ".padStart(25, ".") + salarios[i].ano)
      console.log("Salário" + " ".padStart(22, ".") + "R$ " + atual.toFixed(2).replace(".",","))
      console.log("Crescimento salário" + " ".padStart(10, ".") + diferenca.toFixed(2) + "%")
      console.log("IPCA:" + " ".padStart(24, ".")+ ipcaAtual.toFixed(2).replace(".",",") + "\n\n")   
      console.log("======================")    
    } 
    break;
  default:
    console.log("Opção inválida. Por favor, escolha uma opção válida!");
    break;
}
