import Link from "next/link";

type ButtonColors = "sky" | "white";

type ButtonProps = {
  href: string;
  color?: ButtonColors; // Optional color prop
  children?: React.ReactNode;
};

function buttonColorClasses(color: ButtonColors) {
  const baseClasses =
    "rounded font-semibold h-12 px-6 red-50 w-40 flex items-center justify-center";

  switch (color) {
    case "white":
      return `${baseClasses} bg-white hover:bg-gray-300 text-black`;
    case "sky":
    default:
      return `${baseClasses} bg-sky-500 hover:bg-sky-400 text-white`;
  }
}

export default function Button({ href, color, children }: ButtonProps) {
  const className = buttonColorClasses(color || "sky");

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
