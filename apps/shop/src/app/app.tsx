import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Products = React.lazy(() => import('products/Module'));

const Cart = React.lazy(() => import('cart/Module'));

const Auth = React.lazy(() => import('auth/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shop" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
