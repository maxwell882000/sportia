import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return <div className="relative h-screen w-screen">{children}</div>;
}

export default Layout;
