import { ReactNode } from "react";
import Login from "../auth/Login.tsx";
import Register from "../auth/Register.tsx";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="relative h-screen w-screen">
      {children}
    </div>
  );
}

export default Layout;
