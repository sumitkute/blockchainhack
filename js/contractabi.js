var contractAbi =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "creditlimit",
				"type": "uint256"
			}
		],
		"name": "ApproveCredit",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "uprice",
				"type": "uint256"
			},
			{
				"name": "discount",
				"type": "uint256"
			}
		],
		"name": "Calculate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "CheckCredit",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "CheckOrder",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "CloseOrder",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "itemstr",
				"type": "string"
			},
			{
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "CreateOrder",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "DeliverOrder",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getAllOrders",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getOrd",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "OrderReady",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "PlaceOrder",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "Terminate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "TransferMoney",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "paramManufacturer",
				"type": "address"
			},
			{
				"name": "paramRetailer",
				"type": "address"
			},
			{
				"name": "paramBank",
				"type": "address"
			},
			{
				"name": "paramDistributor",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "",
				"type": "uint256"
			},
			{
				"components": [
					{
						"name": "id",
						"type": "uint256"
					},
					{
						"name": "itemname",
						"type": "string"
					},
					{
						"name": "quantity",
						"type": "uint256"
					},
					{
						"name": "price",
						"type": "uint256"
					},
					{
						"name": "total",
						"type": "uint256"
					},
					{
						"name": "State",
						"type": "uint8"
					}
				],
				"indexed": false,
				"name": "",
				"type": "tuple"
			}
		],
		"name": "OrderList",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"name": "id",
						"type": "uint256"
					},
					{
						"name": "itemname",
						"type": "string"
					},
					{
						"name": "quantity",
						"type": "uint256"
					},
					{
						"name": "price",
						"type": "uint256"
					},
					{
						"name": "total",
						"type": "uint256"
					},
					{
						"name": "State",
						"type": "uint8"
					}
				],
				"indexed": false,
				"name": "",
				"type": "tuple[]"
			}
		],
		"name": "OrderListA",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "Bank",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "Distributor",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getPeople",
		"outputs": [
			{
				"components": [
					{
						"name": "id",
						"type": "uint256"
					},
					{
						"name": "itemname",
						"type": "string"
					},
					{
						"name": "quantity",
						"type": "uint256"
					},
					{
						"name": "price",
						"type": "uint256"
					},
					{
						"name": "total",
						"type": "uint256"
					},
					{
						"name": "State",
						"type": "uint8"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "Manufacturer",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "orders",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "itemname",
				"type": "string"
			},
			{
				"name": "quantity",
				"type": "uint256"
			},
			{
				"name": "price",
				"type": "uint256"
			},
			{
				"name": "total",
				"type": "uint256"
			},
			{
				"name": "State",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "Retailer",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "State",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];