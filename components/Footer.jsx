import Link from "next/link";
const Footer = () => {
  return (
    <footer className="text-center py-2">
      <h3 className="text-xl text-sky-600 font-medium">DJ Events</h3>
      <p className="text-sm "> &copy; all rights reserved 2022</p>
      <Link href="/about">
        <a className="text-xs link">About</a>
      </Link>
    </footer>
  );
};

export default Footer;
