export default function ExternalLink({
  href,
  newTab = true,
  children,
}: {
  href: string;
  newTab?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="fill-white stroke-white hover:fill-sky-400 hover:stroke-sky-400 hover:text-sky-400 "
    >
      {children}
    </a>
  );
}
