import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const AuthWrapper = ({ children }) => (
  <>
    <SignedOut>
      <div className="text-center mt-10">
        <h3>Please Sign-in to use the Todo App</h3>
        <SignInButton mode="modal" forceRedirectUrl="/">
          <button className="btn btn-primary">Sign In</button>
        </SignInButton>
      </div>
    </SignedOut>

    <SignedIn>
      <div className="position-relative">
        <div className="position-absolute top-0 end-0 p-3">
          <UserButton />
        </div>

        <div className="pt-5">{children}</div>
      </div>
    </SignedIn>
  </>
);

export default AuthWrapper;
