import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import { Link, useNavigate } from 'react-router-dom';
import List from '../../components/List/List';
import StyleList from '../../components/StyleList/StyleList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import './NewOrderPage.css';


export default function NewOrderPage({ user, setUser }) {
  const [listItems, setListItem] = useState([]);
  const [activeTaco, setActiveTaco] = useState('');
  const [cart, setCart] = useState(null);
  const stylesRef = useRef([]);
console.log(listItems);
  const navigate = useNavigate();

  async function handleAddToOrder(itemId) {
    const cart = await ordersAPI.addItemToCart(itemId);
    setCart(cart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }
  
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      stylesRef.current = items.reduce((acc, item) => {
        const taco = item.style.name;
        return acc.includes(taco) ? acc : [...acc, taco]
      }, []);
      setListItem(items);
      setActiveTaco(items[0].style.name);
    }
    getItems();

    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  return (
    <main className="NewOrderPage">
      <aside>
        <StyleList
          styles={stylesRef.current}
          activeTaco={activeTaco}
          setActiveTaco={setActiveTaco}
        />
        <button to="/orders" className="button btn-sm">PREVIOUS ORDERS</button>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <List
        listItems={listItems.filter(item => item.style.name === activeTaco)}

        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail 
        handleChangeQty={handleChangeQty} 
        order={cart} 
        handleCheckout={handleCheckout}  
      />
    </main>
  );
}