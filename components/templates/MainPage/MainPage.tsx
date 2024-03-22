"use client";
import Banners from "@/components/modules/Banners/Banners";
import Bestsellers from "@/components/modules/Bestsellers/Bestsellers";
import Categories from "@/components/modules/Carousels/Categories/Categories";
import Products from "@/components/modules/Carousels/Products/Products";
import SubCategories from "@/components/modules/Carousels/SubCategories/SubCategories";
import { MainPageGate } from "@/context/goods";
import { useGate } from "effector-react";

const MainPage = () => {
  useGate(MainPageGate);
  return (
    <main className="font-[Poppins]">
      <div className="container">
        <Categories />
        <Bestsellers />
        <Products />
        <Banners />
        <SubCategories />
        <span className="h-12 _content-center text-[#040404] text-center bg-base--gray-background">
          Commerce, is powered by 100% renewable electricity.
        </span>
      </div>
    </main>
  );
};

export default MainPage;
