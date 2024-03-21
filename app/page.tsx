import Banners from "@/components/modules/Banners/Banners";
import Categories from "@/components/modules/Carousels/Categories/Categories";
import Products from "@/components/modules/Carousels/Products/Products";
import SubCategories from "@/components/modules/Carousels/SubCategories/SubCategories";

export default function Home() {
  return (
    <main className="font-[Poppins]">
      <div className="container">
        <Categories/>
        <Products/>
        <Banners/>
        <SubCategories/>
        <span className="h-12 _content-center text-[#040404] text-center bg-base--gray-background">Commerce, is powered by 100% renewable electricity.</span>
      </div>
    </main>
  );
}
