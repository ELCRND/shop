import Header from "../modules/Header/Header";
import Footer from "../modules/Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <span className="h-12 _content-center text-[#040404] bg-base--gray-background">Commerce, is powered by 100% renewable electricity.</span>
      <Footer/>
    </>
  );
};

export default Layout;
