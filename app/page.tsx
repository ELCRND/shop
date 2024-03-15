import Categories from "@/components/modules/Carousels/Categories/Categories";
import Products from "@/components/modules/Products/Products";

export default function Home() {
  return (
    <main className="font-[Poppins]">
      <div className="container">
        <Categories/>
        <Products/>
      </div>
    </main>
  );
}
