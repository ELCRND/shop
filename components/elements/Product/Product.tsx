interface IProduct {
    imagePath:string,
    desc:string,
    name:string,
    price:number,
    colorsNames:string[]
    bgColor:string
}

const Product = ({imagePath, desc, name, price, colorsNames, bgColor}:IProduct) => {
  return (
    <div className={`p-6 flex flex-col justify-between rounded-md relative text-text--text bg-${bgColor}`}>
        <img className='self-center' src={imagePath} alt={desc} />
        <span className="text-xs font-medium">Colors</span>

        <ul className="mt-3 mb-6 flex gap-2">
            {colorsNames.map((cName)=> 
            <li key={cName}>
                <label className={`w-4 h-4 block rounded-full bg-${cName} cursor-pointer has-[:checked]:outline outline-1`}>
                    <input className="hidden" type="radio" id={cName} name={name} />
                </label>      
            </li>)}
        </ul>

        <h3 className="mb-10 text-[14px] leading-6">{name}</h3>
        <b>{price} $</b>

        <label className="w-8 h-8 rounded-full flex justify-center items-center bg-white absolute top-4 right-4 cursor-pointer has-[:checked]:bg-system-error has-[:checked]:contrast-150 transition-colors">
            <img className="" src="/img/products/Favorite.svg" alt="like" />
            <input className="hidden" type="checkbox" />
        </label>

    </div>
  )
}

export default Product