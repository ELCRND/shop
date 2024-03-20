import Image from "next/image"
import Link from "next/link"

const Category = ({imagePath,desc}:{imagePath:string,desc:string}) => {
  return (
    <li className="rounded-lg overflow-hidden relative _hover _active">
        <Link href={desc}>
        <Image src={imagePath} alt={desc} width={424} height={180} />
        <span className="absolute bottom-4 left-4 text-inherit">{desc}</span>
        </Link>
    </li>
  )
}

export default Category