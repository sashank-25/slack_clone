import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const App = () => {
  return (
    <header>
      <SignedOut mode="modal">
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
 );
};

export default App;
