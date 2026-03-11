import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main id="main-content" className="flex-1 pt-16" tabIndex={-1}>
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
