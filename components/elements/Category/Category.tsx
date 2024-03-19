import Link from "next/link"

const Category = ({imagePath,desc}:{imagePath:string,desc:string}) => {
  return (
    <li className="rounded-lg overflow-hidden relative _hover _active">
        <Link href={desc}>
        <img src={imagePath} alt={desc} className="" />
        <span className="absolute bottom-4 left-4 text-inherit">{desc}</span>
        </Link>
    </li>
  )
}

export default Category