import Category from "@/components/elements/Category/Category"

const Categories = () => {
  return (
    <ul className="flex justify-between">
      <Category imagePath="/img/categoryCarousel/clothing&shoes.jpeg" desc="clothing&shoes"/>
      <Category imagePath="/img/categoryCarousel/home&living.jpeg" desc="home&living"/>
      <Category imagePath="/img/categoryCarousel/art&collectibles.jpeg" desc="art&collectibles"/>
    </ul>
  )
}

export default Categories