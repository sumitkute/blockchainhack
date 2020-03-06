var OrderStateEnum = {
    OrderCreated: 0,
    PendingCreditCheck: 1,
    SendtoBank: 2,
    CreditApproved: 3,
    OrderPlaced:4,
    OrderReady: 5,
    OrderAmountReceived: 6,
    OrderDelivered: 7,
    OrderVerified:8,
    OrderCompeted: 9,
    properties: {
        0: {name: "Order Created", value: 0, code: "OC"},
        1: {name: "Pending Credit Check", value: 1, code: "PC"},
        2: {name: "Send to Bank", value: 1, code: "SB"},
        3: {name: "Credit Approved", value: 2, code: "CA"},
        4: {name: "Order Placed", value: 3, code: "OP"},
        5: {name: "Order Ready", value: 4, code: "OR"},
        6: {name: "Order Amount Received", value: 5, code: "OMR"},
        7: {name: "Order Delivered", value: 6, code: "OD"},
        8: {name: "Order Verified", value: 7, code: "OV"},
        9: {name: "Order Completed", value: 8, code: "OT"},
    }
  };

function InitManufacturerConfig() {
    $('#contractaddress').val("0x91DCCf00A04F9De62249c837987e768903E51d14");
    $('#accountAddress').val("0xba0f650c46cff63bb26c4675727f93511bcdb574");
    $('#nodeEndPoint').val("wss://manufacturer.blockchain.azure.com:3300/3TBibxPKZWTyfQV1CmISAx46");
    $('#accountpass').val("Password@1234");
}
function InitRetailerConfig() {
    $('#contractaddress').val("0x91DCCf00A04F9De62249c837987e768903E51d14");
    $('#accountAddress').val("0xba0f650c46cff63bb26c4675727f93511bcdb574");
    $('#nodeEndPoint').val("wss://manufacturer.blockchain.azure.com:3300/3TBibxPKZWTyfQV1CmISAx46");
    $('#accountpass').val("Password@1234");
}
function InitBankConfig() {
    $('#contractaddress').val("0x91DCCf00A04F9De62249c837987e768903E51d14");
    $('#accountAddress').val("0xba0f650c46cff63bb26c4675727f93511bcdb574");
    $('#nodeEndPoint').val("wss://manufacturer.blockchain.azure.com:3300/3TBibxPKZWTyfQV1CmISAx46");
    $('#accountpass').val("Password@1234");
}
function InitDistributorConfig() {
    $('#contractaddress').val("0x91DCCf00A04F9De62249c837987e768903E51d14");
    $('#accountAddress').val("0xba0f650c46cff63bb26c4675727f93511bcdb574");
    $('#nodeEndPoint').val("wss://manufacturer.blockchain.azure.com:3300/3TBibxPKZWTyfQV1CmISAx46");
    $('#accountpass').val("Password@1234");
}