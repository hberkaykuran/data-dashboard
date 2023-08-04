import Dashboard from "./dashboard";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";
import scss from "./Home.module.scss";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <main className={`${scss.main} ${scss.customScrollbar}`}>
        {session ? <Dashboard /> : <Login />}
      </main>
    </>
  );
}
