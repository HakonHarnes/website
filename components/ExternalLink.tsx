export default function ExternalLink({
  href,
  newTab = true,
  underline = true,
  children,
  className = "",
}: {
  href: string;
  newTab?: boolean;
  underline?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={`fill-white stroke-white font-semibold text-white hover:fill-sky-400 hover:stroke-sky-400 hover:text-sky-400 ${
        underline ? "border-b-2 border-b-sky-400" : ""
      } ${className}`}
    >
      {children}
    </a>
  );
}
