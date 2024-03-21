import useImagePreloader from "@/hooks/useImagePreloader";
import Image from "next/image";
import Link from "next/link";

const Category = ({ imagePath, desc }: { imagePath: string; desc: string }) => {
  const { handleLoadingImageComplete, imgSpinner, } = useImagePreloader();
  return (
    <li className="rounded-lg overflow-hidden relative _hover _active">
      <Link href={desc}>     
          <Image
            className="_opacity-0 transition-all duration-1000"
            onLoad={handleLoadingImageComplete}
            src={imagePath}
            alt={desc}
            width={424}
            height={180}
          />  
        <span className="absolute bottom-4 left-4 text-inherit">{desc}</span>
      </Link>
    </li>
  );
};

export default Category;
