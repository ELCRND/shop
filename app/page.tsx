import Banners from "@/components/modules/Banners/Banners";
import Categories from "@/components/modules/Carousels/Categories/Categories";
import Products from "@/components/modules/Products/Products";
import SubCategories from "@/components/modules/SubCategories/SubCategories";

export default function Home() {
  return (
    <main className="font-[Poppins]">
      <div className="container">
        <Categories/>
        <Products/>
        <Banners/>
        <SubCategories/>
      </div>
    </main>
  );
}
