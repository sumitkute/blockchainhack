pragma solidity >=0.4.25 <0.6.0;
pragma experimental ABIEncoderV2;

contract RetailerFinance
{
    address public Manufacturer;
    address public Retailer;
    address public Bank;
    address public Distributor;

    enum StateType {OrderCreated, DiscountGiven, CreditChecked, CreditApproved, OrderPlaced, OrderReady,
                    OrderAmountReceived, OrderDelivered, OrderChecked, OrderClosed,Terminated }
    enum NextStateType {CalcuateDiscount, PendingCreditCheck, ApproveCredit, PlaceOrder, ReadyOrderForDelivery,
                    ReceiveOrderAmount, DelivereOrder, CheckOrder, CloseOrder, Closed, Terminated }
    struct Order {
        uint id;
        string itemname;
        uint quantity;
        uint256 price;
        uint256 total;
        StateType State;
        NextStateType NextState;
    }

    event OrderList(uint, Order);
    event OrderListA(Order[]);

    StateType public State;
    uint numOrders = 0;
    mapping (uint => Order) public orders;

    constructor(address pManufacturer, address pRetailer, address pBank, address pDistributor) public {
        Manufacturer = pManufacturer;
        Retailer = pRetailer;
        Bank = pBank;
        Distributor = pDistributor;
        return;
    }

    function CreateOrder(string memory itemstr, uint quantity) public
    {
        if (Retailer != msg.sender)
        {
           revert('Only Retailer can create order');
        }
        numOrders++;
        orders[numOrders].id = numOrders;
        orders[numOrders].State = StateType.OrderCreated;
        orders[numOrders].NextState = NextStateType.CalcuateDiscount;
        // for(uint i = 0; i<_array.length; i++)
        // {
        //    orders[numOrders].items[i] = Item({name:_array[i].name,amount:_array[i].amount});
        // }
        orders[numOrders].itemname = itemstr;
        orders[numOrders].quantity = quantity;
        //orders[numOrders].Retailer = msg.sender;
        //return orders[numOrders].id;
        
     }

    function Terminate(uint orderid) public {
        Order storage o = orders[orderid];
        if (Retailer != msg.sender)
        {
            revert('');
        }
        o.State = StateType.Terminated;
        o.NextState = NextStateType.Terminated;
    }

    //Distributor calculates price for the order
    // function Calculate(uint256 price1, uint256 price2, uint256 price3, uint256 discount) public
    function Calculate(uint orderid, uint uprice, uint discount) public
    {
        Order storage o = orders[orderid];
        if (o.State != StateType.OrderCreated)
        {
            revert('The state can be called only when its order created');
        }
        if (Distributor != msg.sender)
        {
           revert('Only distributor can calculate discount');

        }
        //o.price = (o.quantity * uprice) * (1-(discount/100));
        o.price = ((o.quantity * uprice) / 100) * (100 - discount);
        o.State = StateType.DiscountGiven;
        o.NextState = NextStateType.PendingCreditCheck;
    }

    function CheckCredit(uint orderid) public
    {
        Order storage o = orders[orderid];
        if (o.State != StateType.DiscountGiven)
        {
            revert('Not a correct State');
        }
        if (Distributor != msg.sender)
        {
            revert('Not a Distributor');
        }
        //need logic to check credit limit
        o.State = StateType.CreditChecked;
        o.NextState = NextStateType.ApproveCredit;
    }

    function ApproveCredit(uint orderid, uint256 creditlimit) public
    {
        Order storage o = orders[orderid];
       if (o.State != StateType.CreditChecked)
        {
            revert('Not a correct State');
        }
        if (Bank != msg.sender)
        {
            revert('Not a correct Bank');

        }
        if(o.price >= creditlimit)
        {
            revert('Cannot order as does not have the required credit limit');
        }

        o.State = StateType.CreditApproved;
        o.NextState = NextStateType.PlaceOrder;
    }

    function PlaceOrder(uint orderid) public
    {
        Order storage o = orders[orderid];
        if (msg.sender != Distributor)
        {
            revert('Not a Distrubutor');

        }
        if (o.State != StateType.CreditApproved )
        {
            revert('Not a correct State');
        }
        o.State = StateType.OrderPlaced;
        o.NextState = NextStateType.ReadyOrderForDelivery;
    }
    function OrderReady(uint orderid) public
    {
        Order storage o = orders[orderid];
        if (o.State != StateType.OrderPlaced)
        {
            revert('Not a correct State');
        }
        if (Manufacturer != msg.sender)
        {
            revert('Not a Manufacturer');
        }
        o.State = StateType.OrderReady;
        o.NextState = NextStateType.ReceiveOrderAmount;
    }

    function TransferMoney(uint orderid) public
    {
        Order storage o = orders[orderid];
        if (o.State != StateType.OrderReady)
        {
            revert('Not a correct State');
        }
        if (Bank != msg.sender)
        {
            revert('Not a Bank');
        }
        o.State = StateType.OrderAmountReceived;
        o.NextState = NextStateType.DelivereOrder;
    }
    function DeliverOrder(uint orderid) public
    {
        Order storage o = orders[orderid];
        if (Distributor != msg.sender)
        {
            revert('Not a Distributor');

        }
        if (o.State != StateType.OrderAmountReceived)
        {
            revert('Not a correct State');
        }
        o.State = StateType.OrderDelivered;
        o.NextState = NextStateType.CheckOrder;
    }
    function CheckOrder(uint orderid) public
    {
        Order storage o = orders[orderid];
        if (Retailer != msg.sender)
        {
            revert('Not a Retailer');
        }
        if (o.State != StateType.OrderDelivered)
        {
            revert('Not a correct State');
        }
        o.State = StateType.OrderChecked;
        o.NextState = NextStateType.CloseOrder;
    }

    function CloseOrder(uint orderid) public
    {
        Order storage o = orders[orderid];
        if (Manufacturer != msg.sender)
        {
            revert('Not a Manufacturer');
        }
        if (o.State != StateType.OrderChecked)
        {
            revert('Not a correct State');
        }
        o.State = StateType.OrderClosed;
        o.NextState = NextStateType.Closed;
   }

   function getAllOrders () public
   {
        uint totalElem = numOrders;
        for(uint i = 1; i <= totalElem; i++)
        {
            emit OrderList(i, orders[i]);
        }
    }

    function getPeople() public view returns (Order[] memory)
    {
        uint totalOrders = numOrders;
        Order[]    memory ord = new Order[](totalOrders);
        for (uint i = 0; i < totalOrders; i++) {
            ord[i] = orders[i+1];
        }
        return ord;
    }

    function getOrd() public
    {
        uint totalOrders = numOrders;
        Order[]    memory ord = new Order[](totalOrders);
        for (uint i = 0; i < totalOrders; i++) {
            ord[i] = orders[i+1];
        }
        emit OrderListA(ord);
    }
}