'use client'
import Product from "@/components/elements/Product/Product"
import { useLang } from "@/hooks/useLang"

const Products = () => {
    const {lang,translations}=useLang()
  return (
    <div className="grid grid-cols-4 gap-6">
        <Product 
            imagePath="/img/products/chair.png" 
            desc="chair" 
            name={translations[lang].products.chair.name}
            price={195.13}
            colorsNames={[
                'Sushi',
                'Pelorous',
                'Shamrock',
                'Blue',
                'Potion',
                'Veronica',
                'Rajah',
            ]}
            bgColor="snowy-mint"
        />
        <Product 
            imagePath="/img/products/lamp.png" 
            desc="lamp" 
            name={translations[lang].products.lamp.name}
            price={458.43}
            colorsNames={[
                'Sushi',
                'Blue',
                'Potion',
                'Veronica',
                'Rajah',
            ]}
            bgColor="bisque"
        />
        <Product 
            imagePath="/img/products/sofa.png" 
            desc="sofa" 
            name={translations[lang].products.sofa.name}
            price={789.67}
            colorsNames={[
                'Blue',
                'Potion',
                'Veronica',
            ]}
            bgColor="mauve"
        />
        <Product 
            imagePath="/img/products/covers.png" 
            desc="covers" 
            name={translations[lang].products.covers.name}
            price={43.23}
            colorsNames={[
                'Sushi',
                'Shamrock',
                'Potion',
                'Veronica',
                'Rajah',
            ]}
            bgColor="drover"
        />
    </div>
  )
}

export default Products


/*   
'Sushi':'#7CB93E',
'Pelorous':'#33ABC6',
'Shamrock':'#1CCD8D',
'Blue':'#3F65EA',
'Potion':'#F74A69',
'Veronica':'#A635EC',
'Rajah':'#F9A85D',

"snowy-mint": "#d3fbd9",
"bisque": "#FFE4BD",
"mauve": "#D9ABFD",
"drover": "#FDF0AB",
 */