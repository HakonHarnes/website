import Link from "next/link";

export default function InternalLink({
  href,
  underline = false,
  children,
  className = "",
}: {
  href: string;
  underline?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`fill-white stroke-white font-semibold text-white hover:fill-sky-400 hover:stroke-sky-400 hover:text-sky-400 ${
        underline ? "border-b-2 border-b-sky-400" : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
}
