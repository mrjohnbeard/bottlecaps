import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import { Link, useNavigate } from 'react-router-dom';
import List from '../../components/List/List';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import './NewOrderPage.css';


export default function NewOrderPage({ user, setUser }) {
  const [listItems, setListItem] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
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
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setListItem(items);
      setActiveCat(categoriesRef.current[0]);
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
      <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <List
        listItems={listItems.filter(item => item.category.name === activeCat)}

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