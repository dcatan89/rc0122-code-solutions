/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (!balance || typeof balance === 'string' || balance < 0 || !Number.isInteger(balance)) {
    return null;
  } else {
    var $account = new Account(this.nextAccountNumber, holder);
    $account.deposit(balance);
    this.accounts.push($account);
    this.nextAccountNumber++;
    return this.nextAccountNumber - 1;
  }
};
