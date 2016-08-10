// var Web3 = require('web3');
var web3 = new Web3();
var eth = web3.eth;
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
console.log(web3);
var coinbase = eth.coinbase;
var balance = eth.getBalance(coinbase);
var defaultAccount = eth.defaultAccount;

// console.log(web3);
var transaction = {
	'from': "0x4884711efc182b3a377c9ec015963443afbdb519",
	'to': "0x99Fc781Bb64c1C932b4379424d7a11EB22777E94",
	'value': web3.toWei(11, "ether")

}
var transactionResult = web3.eth.sendTransaction(transaction);
console.log(transactionResult)