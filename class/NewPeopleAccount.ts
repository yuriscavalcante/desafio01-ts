import { DioAccount } from "./DioAccount";

export class NewPeopleAccount extends DioAccount {
  newDeposit = (value: number) => {
    this.deposit(value + 10);
  };
}
