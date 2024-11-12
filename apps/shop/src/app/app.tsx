import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';
import { LogIn, PackageSearch, ShoppingCart } from 'lucide-react';

const Auth = React.lazy(() => import('auth/Module'));

const Cart = React.lazy(() => import('cart/Module'));

const Products = React.lazy(() => import('products/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <nav className="fixed container w-full min-w-full z-50 flex items-center justify-between">
        <Link className="relative flex items-center w-20 h-20" to="/">
          <img className="absolute" src="/assets/e-comp.png" alt="E-Comp Logo" />
        </Link>
        <ul className="flex items-center space-x-16 py-6">
          <li className="text-outer-space font-semibold text-lg hover:text-outer-space-800">
            <Link className="flex items-center space-x-2" to="/products">
              <PackageSearch /> <span className="">Products</span>
            </Link>
          </li>
          <li className="text-outer-space font-semibold text-lg hover:text-outer-space-800">
            <Link className="flex items-center space-x-2" to="/cart">
              <ShoppingCart /> <span className="">Cart</span>
            </Link>
          </li>
          <li className="text-outer-space font-semibold text-lg hover:text-outer-space-800">
            <Link className="flex items-center space-x-2" to="/auth">
              <LogIn /> <span className="">Login</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<NxWelcome />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
