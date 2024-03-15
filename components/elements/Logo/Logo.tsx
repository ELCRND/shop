import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <span className="inline-block text-xl text-main-primary">E-commerce</span>
    </Link>
  );
};

export default Logo;
