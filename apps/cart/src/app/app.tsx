import { CartContainer } from '@e-commerce-platform/templates';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <CartContainer title="Sahred Cart Container">
      <NxWelcome title="cart" />
    </CartContainer>
  );
}

export default App;
