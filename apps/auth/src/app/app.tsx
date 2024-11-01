import { LoginContainer } from '@e-commerce-platform/templates';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <LoginContainer title="Sahred Login Container">
      <NxWelcome title="Auth" />
    </LoginContainer>
  );
}

export default App;
