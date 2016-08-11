$(document).ready(function() {
	var web3 = new Web3();
	var eth = web3.eth;
	web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:8545'));

	$('#send-coins').on('click', function() {
		var transaction = {
			'from': $('#from-field').val(),
			'to': $('#to-field').val(),
			'value': web3.toWei(parseInt($('#amount').val(), 10), "ether"),
			'pwd' : $('#password').val()
		}
		var transactionResult = web3.eth.sendTransaction(transaction);
		alert(transactionResult);
	});
});