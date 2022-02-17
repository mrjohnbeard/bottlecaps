import LineItem from '../LineItem/LineItem';

export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return null;

    const lineItems = order.lineItems.map(item =>
        <LineItem
            lineItem={item}
            isPaid={order.isPaid}
            handleChangeQty={handleChangeQty}
            key={item._id}
        />
    );

    return (
        <div className="OrderDetail">
            <div className="section-heading">
                {order.isPaid ?
                    <span> Order <span className="smaller">  {order.orderId}  </span></span>
                    :
                    <span> New Order  </span>


                }
                <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
            </div>
            <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
                {lineItems.length ?
                    <>
                        {lineItems}
                        <section className="total">
                            {order.isPaid ?
                                <span className="right">Total&nbsp;&nbsp;</span>
                                :
                                <button
                                    className="btn-sm"
                                    onClick={handleCheckout}
                                    disabled={!lineItems.length}
                                >Checkout</button>
                            }
                            <span>{order.totalQty}</span>
                            <span className="right">${order.orderTotal.toFixed(2)}</span>
                        </section>
                    </>
                    :
                    <div></div>
                }
            </div>
        </div>
    );
}