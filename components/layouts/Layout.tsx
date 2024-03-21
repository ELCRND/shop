import Header from "../modules/Header/Header";
import Footer from "../modules/Footer/Footer";
import Sidebar from "../modules/Sidebar/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Sidebar/>
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
