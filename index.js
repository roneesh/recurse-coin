$(document).ready(function() {
	var web3 = new Web3();
	var eth = web3.eth;
	web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:8545'));

	var rcABI = 
[ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "Test3RecurseCoin" } ], "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8", "value": "2" } ], "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "mint", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "kill", "outputs": [], "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string", "value": "😎" } ], "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [], "type": "function" }, { "inputs": [ { "name": "initialSupply", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "initial Supply", "template": "elements_input_uint", "value": "" }, { "name": "tokenName", "type": "string", "index": 1, "typeShort": "string", "bits": "", "displayName": "token Name", "template": "elements_input_string", "value": "" }, { "name": "decimalUnits", "type": "uint8", "index": 2, "typeShort": "uint", "bits": "8", "displayName": "decimal Units", "template": "elements_input_uint", "value": "" }, { "name": "tokenSymbol", "type": "string", "index": 3, "typeShort": "string", "bits": "", "displayName": "token Symbol", "template": "elements_input_string", "value": "" } ], "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Mint", "type": "event" } ];

	var rcAddress = '0x791E39A210B49811459531A54790377540eFfcde';
	var recurseCoin = eth.contract(rcABI).at(rcAddress);
	var wallet = web3.eth.defaultAccount = web3.eth.accounts[0];

	if ($('#password')) {
		var pwd = $('#password')
		// web3.personal.unlockAccount(wallet, )
	}

	console.log(recurseCoin);

	console.log(wallet);

	$('#send-coins').on('click', function() {
		$('.status-box').removeClass('status-success status-error');
		var value = $('#amount').val();
		var transaction = recurseCoin.mint(wallet, parseInt(value, 10));
		if (transaction) {
			$('.status-box').addClass('status-success');
			$('.status-msg').text('Success! you added ' + value + ' recurse coins to account ' + wallet + ' on transaction ' + transaction);
		}
	});
});