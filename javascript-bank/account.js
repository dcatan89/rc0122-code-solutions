/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var deposit = new Transaction('deposit', amount);
  if (amount && typeof amount !== 'string' && amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  var withdraw = new Transaction('withdrawal', amount);
  if (amount && typeof amount !== 'string' && amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(withdraw);
    return true;
  } else {
    return false;
  }
};
