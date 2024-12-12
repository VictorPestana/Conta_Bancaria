import readlinesync = require("readline-sync");
import { colors } from "./src/util/cores";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";

export function main() {
  let opcao: number;

  // // Crias Novas Instancias (Objetos) da Classe Conta
  // const c1 = new Conta(1, 123, 1, 'Jonas', 100000);
  // c1.visualizar();

  // // Saque
  // console.log(c1.sacar(100));
  // c1.visualizar();

  // const c2 = new Conta(2, 123, 2, 'Aline', 200000);
  // c2.visualizar();

  // // Deposito
  // c2.depositar(100.0);
  // c2.visualizar();

  // Contas Correntes

  const cc1 = new ContaCorrente(3, 789, 1, "Andressa", 100000, 1000);
  cc1.visualizar();

  // Saque na Conta Corrente
  cc1.sacar(100500);
  cc1.visualizar();

  // Depósito na Conta Corrente
  cc1.depositar(2000);
  cc1.visualizar();

  console.log();

  while (true) {
    console.log(colors.bg.black, colors.fg.blue);
    console.log("=============================================================");
    console.log();
    console.log(" Banco Itáum ");
    console.log();
    console.log("=============================================================");
    console.log();
    console.log(" 1 - Criar Conta ");
    console.log(" 2 - Listar Todas As Contas ");
    console.log(" 3 - Buscar Conta Por Numero ");
    console.log(" 4 - Atualizar Dados da Conta ");
    console.log(" 5 - Apagar Conta ");
    console.log(" 6 - Sacar ");
    console.log(" 7 - Depositar ");
    console.log(" 8 - Transferir Valores Entre Contas ");
    console.log(" 9 - Sair ");
    console.log();
    console.log("=============================================================");
    console.log();
    console.log(colors.reset);

    opcao = readlinesync.questionInt("Escolha uma opcao: ");

    if (opcao === 9) {
      console.log("\nSaindo de Banco Itáum...\n");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("Criar Conta");
        break;
      case 2:
        console.log("Listar Todas As Contas");
        break;
      case 3:
        console.log("Consultar dados da Conta - por número");
        break;
      case 4:
        console.log("Atualizar Dados da Conta");
        break;
      case 5:
        console.log("Apagar uma Conta");
        break;
      case 6:
        console.log("Saque");
        break;
      case 7:
        console.log("Depósito");
        break;
      case 8:
        console.log("Transferência Entre Contas");
        break;
      case 9:
        console.log("Saindo do programa...");
        process.exit(0);
        break;
      default:
        console.log("Opção inválida.");
        break;
    }
  }
}

export function sobre(): void {
  console.log(colors.bg.black, colors.fg.blue);
  console.log("=========================================");
  console.log("Projeto Desenvolvido por: ");
  console.log("Victor Pestana - victorpestanavgp@gmail.com");
  console.log("https://github.com/VictorPestana");
  console.log("=========================================");
  console.log(colors.reset);
}

main();
