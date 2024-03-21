import { SyntheticEvent, useState } from "react"

const useImagePreloader = () => {
  const [imgSpinner,setImgSpinner] = useState(true)

  const handleLoadingImageComplete =  (img:SyntheticEvent<HTMLImageElement, Event>)=>{
    img.currentTarget.classList.remove('_opacity-0')
    setImgSpinner(false)
  }
  return {handleLoadingImageComplete, imgSpinner}
}

export default useImagePreloader