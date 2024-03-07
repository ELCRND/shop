import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <img src="/img/header/logo.svg" alt="header logo" />
    </Link>
  );
};

export default Logo;
