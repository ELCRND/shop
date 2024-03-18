import Header from "../modules/Header/Header";
import Footer from "../modules/Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
