

const SubCategory = ({imagePath, desc}:{imagePath:string,desc:string}) => {
  return (
    <div className="text-center">
        <div className="w-36 h-36 flex justify-center items-center rounded-md bg-main-white">
            <img src={imagePath} alt={desc} />
        </div>
        <span className="">{desc}</span>
    </div>
  )
}

export default SubCategory