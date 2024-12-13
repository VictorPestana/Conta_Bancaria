export abstract class Conta {
  // Modelo de Dados
  private _numero: number;
  private _agencia: number;
  private _tipo: number;
  private _titular: string;
  private _saldo: number;

  // Geramos o Método Construtor
  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number
  ) {
    this._numero = numero;
    this._agencia = agencia;
    this._tipo = tipo;
    this._titular = titular;
    this._saldo = saldo;
  }

  // Gerar os Métodos Getter`s e Setter`s

  /**
   * Getter numero
   * @return {number}
   */
  public get numero(): number {
    return this._numero;
  }

  /**
   * Getter agencia
   * @return {number}
   */
  public get agencia(): number {
    return this._agencia;
  }

  /**
   * Getter tipo
   * @return {number}
   */
  public get tipo(): number {
    return this._tipo;
  }

  /**
   * Getter titular
   * @return {string}
   */
  public get titular(): string {
    return this._titular;
  }

  /**
   * Getter saldo
   * @return {number}
   */
  public get saldo(): number {
    return this._saldo;
  }

  /**
   * Setter numero
   * @param {number} value
   */
  public set numero(value: number) {
    this._numero = value;
  }

  /**
   * Setter agencia
   * @param {number} value
   */
  public set agencia(value: number) {
    this._agencia = value;
  }

  /**
   * Setter tipo
   * @param {number} value
   */
  public set tipo(value: number) {
    this._tipo = value;
  }

  /**
   * Setter titular
   * @param {string} value
   */
  public set titular(value: string) {
    this._titular = value;
  }

  /**
   * Setter saldo
   * @param {number} value
   */
  public set saldo(value: number) {
    this._saldo = value;
  }

  public sacar(valor: number): boolean {
    if (valor > this._saldo) {
      console.log("Saldo Insuficiente!");
      return false;
    }
    this._saldo -= valor;
    return true;
  }

  public depositar(valor: number) {
    this.saldo += valor;
  }

  public visualizar() {
    let tipo: string;

    switch (this._tipo) {
      case 1:
        tipo = "Conta Corrente";
        break;
      case 2:
        tipo = "Conta Poupança";
        break;
      default:
        tipo = "Tipo Inválido";
    }
    console.log("\n\n*****************************************************");
    console.log("Dados da Conta:");
    console.log("*****************************************************");
    console.log("Numero da Conta: " + this._numero);
    console.log("Agência: " + this._agencia);
    console.log(`Tipo da Conta: ${tipo}`);
    console.log("Titular: " + this._titular);
    console.log("Saldo: " + this._saldo.toFixed(2));
  }
}
