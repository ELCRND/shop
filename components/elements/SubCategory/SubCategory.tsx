import Image from "next/image"


const SubCategory = ({imagePath, desc}:{imagePath:string,desc:string}) => {
  return (
    <div className="text-center">
        <div className="w-36 h-36 flex justify-center items-center rounded-md bg-main-white">
            <Image src={imagePath} alt={desc} width={128} height={128}/>
        </div>
        <span className="text-sm font-medium text-text--text">{desc}</span>
    </div>
  )
}

export default SubCategory