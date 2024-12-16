import readlinesync = require("readline-sync");
import { colors } from "./src/util/cores";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {
  let opcao, agencia, numero, tipo, saldo, limite, aniversario, numeroDestino: number;
  let valor: number;
  let titular: string;
  const tipoContas = ["Conta Corrente", "Conta Poupanca"];

  // Criando um Objeto da Classe ContaController
  const contas = new ContaController();

  //Novas Instâncias da Classe ContaCorrente (Objetos)
  contas.cadastrar(
    new ContaCorrente(contas.gerarNumero(), 1234, 1, "Amanda Magro", 1000000.0, 100000.0)
  );
  contas.cadastrar(
    new ContaCorrente(contas.gerarNumero(), 4578, 1, "João da Silva", 1000.0, 100.0)
  );

  // Novas Instâncias da Classe ContaPoupança (Objetos)
  contas.cadastrar(
    new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10)
  );
  contas.cadastrar(
    new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15)
  );

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

        console.log("Digite o Número da Agência: ");
        agencia = readlinesync.questionInt("");

        console.log("Digite o Nome do Titular: ");
        titular = readlinesync.question("");

        console.log("Escolha o tipo da Conta: ");
        tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

        console.log("Digite o Saldo da Conta: ");
        saldo = readlinesync.questionFloat();

        switch (tipo) {
          case 1:
            console.log("Digite o Limite da Conta: ");
            limite = readlinesync.questionFloat("");
            contas.cadastrar(
              new ContaCorrente(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                limite
              )
            );
            break;
          case 2:
            console.log("Digite o Dia do Aniversário da Poupança: ");
            aniversario = readlinesync.questionInt("");
            contas.cadastrar(
              new ContaPoupanca(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                aniversario
              )
            );
            break;
        }

        keyPress();
        break;
      case 2:
        console.log("Listar Todas As Contas");
        contas.listarTodas();
        keyPress();
        break;
      case 3:
        console.log("Consultar dados da Conta - por número");

        console.log("Digite o Número da Conta: ");
        numero = readlinesync.questionInt("");

        contas.procurarPorNumero(numero);

        keyPress();
        break;
      case 4:
        console.log("\n\nAtualizar dados da Conta\n\n");

        console.log("Digite o número da Conta: ");
        numero = readlinesync.questionInt("");

        let conta = contas.buscarNoArray(numero);

        if (conta != null) {
          console.log("Digite o Número da agência: ");
          agencia = readlinesync.questionInt("");

          console.log("Digite o novo Nome do Titular da conta: ");
          titular = readlinesync.question("");

          console.log("\nDigite o novo Saldo da conta (R$): ");
          saldo = readlinesync.questionFloat("");

          tipo = conta.tipo;

          switch (tipo) {
            case 1:
              console.log("Digite o novo Limite da Conta (R$): ");
              limite = readlinesync.questionFloat("");
              contas.atualizar(
                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
              );
              break;
            case 2:
              console.log("Digite o novo Dia do aniversário da Conta Poupança: ");
              aniversario = readlinesync.questionInt("");
              contas.atualizar(
                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
              );
              break;
          }
        } else {
          console.log("\nA Conta não foi encontrada!");
        }

        keyPress();
        break;
      case 5:
        console.log("Apagar uma Conta");

        console.log("Digite o Número da Conta: ");
        numero = readlinesync.questionInt("");

        contas.deletar(numero);

        keyPress();
        break;
      case 6:
        console.log("Saque");

        console.log("Digite o Número da Conta: ");
        numero = readlinesync.questionInt("");

        console.log("Digite o Valor Do Saque: ");
        valor = readlinesync.questionFloat("");

        contas.sacar(numero, valor);

        keyPress();
        break;
      case 7:
        console.log("Depósito");

        console.log("Digite o Número da Conta: ");
        numero = readlinesync.questionInt("");

        console.log("Digite o Valor Do Depósito: ");
        valor = readlinesync.questionFloat("");

        contas.depositar(numero, valor);

        keyPress();
        break;
      case 8:
        console.log("Transferência Entre Contas");

        console.log("Digite o Número da Conta de Origem: ");
        numero = readlinesync.questionInt("");

        console.log("Digite o Número da Conta de Destino: ");
        numeroDestino = readlinesync.questionInt("");

        console.log("Digite o Valor Da Transferencia: ");
        valor = readlinesync.questionFloat("");

        contas.transferir(numero, numeroDestino, valor);

        keyPress();
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

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();
