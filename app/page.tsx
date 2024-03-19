import Banners from "@/components/modules/Banners/Banners";
import Categories from "@/components/modules/Carousels/Categories/Categories";
import Products from "@/components/modules/Carousels/Products/Products";
import SubCategories from "@/components/modules/Carousels/SubCategories/SubCategories";
import SwapLangAndTheme from "@/components/elements/SwapLangAndTheme/SwapLangAndTheme";



export default function Home() {
  return (
    <main className="font-[Poppins]">
      <div className="container">
        <Categories/>
        <Products/>
        <Banners/>
        <SubCategories/>
        <SwapLangAndTheme/>
      </div>
    </main>
  );
}
