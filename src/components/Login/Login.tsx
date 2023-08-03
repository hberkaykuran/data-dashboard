import { Button } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button variant="contained" color="primary" onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <Button variant="contained" color="primary" onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
};

export default Login;
