pragma solidity >=0.4.25 <0.6.0;
//pragma experimental ABIEncoderV2;

contract RetailerFinance
{
    address public Unilever;
    address public Retailer;
    address public Bank;
    address public Distributor;

    enum StateType {OrderCreated, PendingCreditCheck, SendtoBank, CreditApproved, OrderPlaced, OrderPickListReady,
                    OrderAmountReceived, OrderDelivered, OrderChecked, OrderClosed,Terminated }
    struct Item {
        string name;
        uint amount;
    }

    struct Order {
        uint id;
        //mapping (uint => Item) items;
        string itemname;
        uint quantity;
        uint256 price;
        uint256 total;
        StateType State;
    }

    StateType public State;
    uint numOrders = 0;
    mapping (uint => Order) public orders;

    constructor(address pUnilever, address pRetailer, address pBank, address pDistributor) public {
        Unilever = pUnilever;
        Retailer = pRetailer;
        Bank = pBank;
        Distributor = pDistributor;
        return;
    }

    function CreateOrder(string memory itemstr, uint quantity) public
    {
        numOrders++;
        //orderId = numOrders++;
        orders[numOrders].id = numOrders;
        orders[numOrders].State = StateType.OrderCreated;
        // for(uint i = 0; i<_array.length; i++)
        // {
        //    orders[numOrders].items[i] = Item({name:_array[i].name,amount:_array[i].amount});
        // }
        orders[numOrders].itemname = itemstr;
        orders[numOrders].quantity = quantity;
        //orders[numOrders].Retailer = msg.sender;
     }

    // function Get(uint orderid) public view returns (uint) {
    //     //Order storage ord = orders[orderid];
    //     //o.State = StateType.Terminated;
    //     return orders[orderid].id;
    // }
    function Terminate(uint orderid) public {
        Order storage o = orders[orderid];
        if (Retailer != msg.sender)
        {
            revert('');
        }
        o.State = StateType.Terminated;
    }

    //Distributor calculates price for the order
    // function Calculate(uint256 price1, uint256 price2, uint256 price3, uint256 discount) public
    function Calculate(uint orderid, uint uprice, uint discount) public
    {
        Order storage o = orders[orderid];
        if (o.State != StateType.OrderCreated)
        {
            revert('');
        }
        if (Distributor != msg.sender)
        {
            revert('Only distributor can calculate discount');

        }
        o.price = ((o.quantity * uprice) / 100) * (100 - discount);
        Distributor = msg.sender;
        o.State = StateType.PendingCreditCheck;
    }

    function CheckCredit(uint orderid) public
    {
        Order storage o = orders[orderid];
        if (o.State != StateType.PendingCreditCheck)
        {
            revert('');
        }
        if (Distributor != msg.sender)
        {
            revert('');
        }
        //need logic to check credit limit
        o.State = StateType.SendtoBank;
    }

    function ApproveCredit(uint orderid, uint256 creditlimit) public
    {
        Order storage o = orders[orderid];
       if (o.State != StateType.SendtoBank)
        {
            revert('');
        }
        if (Bank != msg.sender)
        {
            revert('');

        }
        if(o.price > creditlimit)
        {
            revert('Cannot order as does not have the required credit limit');
        }

        o.State = StateType.CreditApproved;
    }

    function PlaceOrder(uint orderid) public
    {
        Order storage o = orders[orderid];
        if (msg.sender != Distributor)
        {
            revert('');

        }
        if (o.State != StateType.CreditApproved )
        {
            revert('');
        }
        o.State = StateType.OrderPlaced;
    }
    function OrderReady(uint orderid) public
    {
        Order storage o = orders[orderid];
        if (o.State != StateType.OrderPlaced)
        {
            revert('');
        }
        if (Unilever != msg.sender)
        {
            revert('');
        }
        o.State = StateType.OrderPickListReady;
    }

    function TransferMoney(uint orderid) public
    {
        Order storage o = orders[orderid];
        if (o.State != StateType.OrderPickListReady)
        {
            revert('');
        }
        if (Bank != msg.sender)
        {
            revert('');
        }
        o.State = StateType.OrderAmountReceived;
    }
    function DeliverOrder(uint orderid) public
    {
        Order storage o = orders[orderid];
        if (Distributor != msg.sender)
        {
            revert('');

        }
        if (o.State != StateType.OrderAmountReceived)
        {
            revert('');
        }
        o.State = StateType.OrderDelivered;
    }
    function CheckOrder(uint orderid) public
    {
        Order storage o = orders[orderid];
        if (Retailer != msg.sender)
        {
            revert('');
        }
        if (o.State != StateType.OrderDelivered)
        {
            revert('');
        }
        o.State = StateType.OrderChecked;
    }

    function CloseOrder(uint orderid) public
    {
        Order storage o = orders[orderid];
        if (Unilever != msg.sender)
        {
            revert('');
        }
        if (o.State != StateType.OrderChecked)
        {
            revert('');
        }
        o.State = StateType.OrderClosed;
    }
}