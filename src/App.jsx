import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home.jsx';
import Menu from './features/menu/Menu.jsx';
import menuLoader from './features/menu/menuLoader.js';
import Cart from './features/cart/Cart.jsx';
import Createorder from './features/order/CreateOrder.jsx';
import Order from './features/order/Order.jsx';
import AppLayout from './ui/AppLayout.jsx';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/menu', element: <Menu />, loader: menuLoader },
      { path: '/cart', element: <Cart /> },
      { path: '/order/new', element: <Createorder /> },
      { path: '/order/:orderId', element: <Order /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
