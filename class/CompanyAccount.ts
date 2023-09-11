import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    if (this.getStatus()) {
      this.deposit(value);
      console.log("Voce fez um emprestimo de: R$", value);
    }
  };
}
