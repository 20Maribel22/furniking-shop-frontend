import React, { useContext, useState } from 'react';
import Preloader from '../../Preloader/Preloader';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../context';
import { useEffect } from 'react';
import { cartApi } from '../../../utils/CartApi';
import { ToastContainer, toast } from 'react-toastify';
import './OrdersAdmin.css';

function OrdersAdmin() {
  const { isLoading } = useContext(AppContext);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    cartApi
      .getOrdersAll()
      .then((data) => {
        setOrders(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteOrder = (order) => {
    cartApi
      .deleteOrder(order._id)
      .then(() => {
        const newOrder = orders.filter((item) => item._id !== order._id);
        setOrders(newOrder);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <ul className='collections__links'>
        <li>
          <Link to='/admin' className='collections__link'>
            Home page
          </Link>
        </li>
        <li>
          <Link to='/admin/users' className='collections__link'>
            Orders
          </Link>
        </li>
      </ul>
      <div className='products-admin__container'>
        <h1 className='memo__list-title'>Orders</h1>

        {isLoading && <Preloader />}

        <table className='products-admin__table'>
          <tbody>
            <tr>
              <th className='products-admin__name'>№</th>
              <th className='products-admin__name'>Id</th>
              <th className='products-admin__name'>Product Name</th>
              <th className='products-admin__name'>Info</th>
              <th className='products-admin__name'>Price</th>
              <th className='products-admin__name'>Count</th>
              <th className='products-admin__name'>Subtotal</th>
              <th className='products-admin__name'>Delivery</th>
              <th className='products-admin__name'>Total Price</th>
              <th className='products-admin__name'>User Name</th>
              <th className='products-admin__name'>Email</th>
              <th className='products-admin__name'>Phone</th>
              <th className='products-admin__name'>Product order date</th>
              <th className='products-admin__name'>Delete</th>
            </tr>
            {orders.map((order, index) => (
              <React.Fragment key={order._id}>
                <tr>
                  <td className='products-admin__list products-admin__list_order'>
                    {index + 1}
                  </td>
                  <td className='products-admin__list products-admin__list_order'>
                    {order._id}
                  </td>
                  <td className='products-admin__list products-admin__list_order '>
                  {order.cartItems.map((item)=>(
                   <li className='order__list' key={item._id}>{item.name}</li>
                  ))}
                   </td>
                   <td className='products-admin__list products-admin__list_order '>
                  {order.cartItems.map((item)=>(
                   <li className='order__list' key={item._id}>{item.title}</li>
                  ))}
                   </td>
                   <td className='products-admin__list products-admin__list_order '>
                  {order.cartItems.map((item)=>(
                   <li className='order__list' key={item._id}>{item.price}</li>
                  ))}
                   </td>
                  <td className='products-admin__list products-admin__list_order'>
                    {order.count}
                  </td>
                  <td className='products-admin__list products-admin__list_order'>
                    {order.subTotal}
                  </td>
                  <td className='products-admin__list products-admin__list_order'>
                    {order.subTotal >= 1000 ? 0 : order.delivery}
                  </td>
                  <td className='products-admin__list products-admin__list_order'>
                    {order.totalPrice}
                  </td>
                  <td className='products-admin__list products-admin__list_order'>
                    {order.owner.name}
                  </td>
                  <td className='products-admin__list products-admin__list_order'>
                    {order.owner.email}
                  </td>
                  <td className='products-admin__list products-admin__list_order'>
                    {order.owner.phone}
                  </td>
                  <td className='products-admin__list products-admin__list_order'>
                    {new Date(order.createdAt).getDate()}.
                    {new Date(order.createdAt).getMonth() + 1}.
                    {new Date(order.createdAt).getFullYear()}
                  </td>

                  <td
                    className='products-admin__list products-admin__list_del'
                    onClick={() => {
                      deleteOrder(order);
                      toast.success('Order removed!', {
                        position: toast.POSITION.BOTTOM_CENTER,
                      });
                    }}
                    title='Remove product'
                  >
                    &#x2716;
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </div>
  );
}

export default OrdersAdmin;
