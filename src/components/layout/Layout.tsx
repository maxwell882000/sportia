import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="relative h-dvh w-screen overflow-hidden">
      {children}
    </div>
  );
}

export default Layout;
