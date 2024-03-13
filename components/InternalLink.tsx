import Link from "next/link";

export default function InternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="fill-white text-white font-semibold hover:fill-sky-400 hover:text-sky-400"
    >
      {children}
    </Link>
  );
}
