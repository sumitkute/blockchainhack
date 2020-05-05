var OrderStateEnum = {
    OrderCreated: 0,
    DiscountGiven: 1,
    CreditChecked: 2,
    CreditApproved: 3,
    OrderPlaced:4,
    OrderReady: 5,
    OrderAmountReceived: 6,
    OrderDelivered: 7,
    OrderChecked:8,
    OrderClosed: 9,
    Terminated: 10,
    properties: {
        0: {name: "Order Created", value: 0, code: "OC"},
        1: {name: "Discount Given", value: 1,code: "DG"},
        2: {name: "Credit Checked", value: 2, code: "CC"},
        3: {name: "Credit Approved", value: 3, code: "CA"},
        4: {name: "Order Placed", value: 4, code: "OP"},
        5: {name: "Order Ready", value: 5, code: "OR"},
        6: {name: "Order Amount Received", value: 6, code: "OAR"},
        7: {name: "Order Delivered", value: 7, code: "OD"},
        8: {name: "Order Verified", value: 8, code: "OV"},
        9: {name: "Order Completed", value: 9, code: "OC"},
        10: {name: "Order Terminated", value: 10,  code: "OT"},
        
    }
  };

  var OrderNextStateEnum = {
    CalcuateDiscount: 0,
    PendingCreditCheck: 1,
    ApproveCredit: 2,
    PlaceOrder: 3,
    ReadyOrderForDelivery:4,
    ReceiveOrderAmount: 5,
    DelivereOrder: 6,
    CheckOrder:7,
    CloseOrder: 8,
    Closed: 9,
    properties: {
        0: {name: "Calculate Discount", value: 0, owner: "Distributor"},
        1: {name: "Pending Credit Checked", value: 1, owner: "Distributor"},
        2: {name: "Approve Credit", value: 2, owner: "Bank"},
        3: {name: "Place Order", value: 3,  owner: "Distributor"},
        4: {name: "Ready Order For Delivery", value: 4, code: "OP", owner: "Manufacturer"},
        5: {name: "Receive Order Amount", value: 5, code: "OR", owner: "Bank"},
        6: {name: "Deliver Order ", value: 6, code: "OMR", owner: "Distributor"},
        7: {name: "Check Order", value: 7, code: "OD", owner: "CheckOrder"},
        8: {name: "Close Order", value: 8, code: "OV", owner: "Manufacturer"},
        9: {name: "Closed", value: 9, code: "OT"},
        
    }
  };


function InitManufacturerConfig() {
    $('#contractaddress').val("0xd7e736733b07b2fd6e7e454031f73c8b3cf18d28");
    $('#accountAddress').val("0xba0f650c46cff63bb26c4675727f93511bcdb574");
    $('#nodeEndPoint').val("wss://manufacturer.blockchain.azure.com:3300/3TBibxPKZWTyfQV1CmISAx46");
    $('#accountpass').val("Password@1234");
}
function InitRetailerConfig() {
    $('#contractaddress').val("0xd7e736733b07b2fd6e7e454031f73c8b3cf18d28");
    $('#accountAddress').val("0xba0f650c46cff63bb26c4675727f93511bcdb574");
    $('#nodeEndPoint').val("wss://manufacturer.blockchain.azure.com:3300/3TBibxPKZWTyfQV1CmISAx46");
    $('#accountpass').val("Password@1234");
}
function InitBankConfig() {
    $('#contractaddress').val("0xd7e736733b07b2fd6e7e454031f73c8b3cf18d28");
    $('#accountAddress').val("0xba0f650c46cff63bb26c4675727f93511bcdb574");
    $('#nodeEndPoint').val("wss://manufacturer.blockchain.azure.com:3300/3TBibxPKZWTyfQV1CmISAx46");
    $('#accountpass').val("Password@1234");
}
function InitDistributorConfig() {
    $('#contractaddress').val("0xd7e736733b07b2fd6e7e454031f73c8b3cf18d28");
    $('#accountAddress').val("0xba0f650c46cff63bb26c4675727f93511bcdb574");
    $('#nodeEndPoint').val("wss://manufacturer.blockchain.azure.com:3300/3TBibxPKZWTyfQV1CmISAx46");
    $('#accountpass').val("Password@1234");
}