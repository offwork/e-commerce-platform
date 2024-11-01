import { ProductsContainer } from '@e-commerce-platform/templates';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <ProductsContainer title="Sahred Products Container">
      <NxWelcome title="products" />
    </ProductsContainer>
  );
}

export default App;
