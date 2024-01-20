import Link from "next/link";

type ButtonColors = "sky" | "white" | "red";

type ButtonProps = {
  href: string;
  color?: ButtonColors;
  children?: React.ReactNode;
};

function buttonColorClasses(color: ButtonColors) {
  switch (color) {
    case "white":
      return "bg-white hover:bg-gray-300 text-black";
    case "red":
      return "bg-red-500 hover:bg-red-400 text-white";
    case "sky":
    default:
      return "bg-sky-500 hover:bg-sky-400 text-white";
  }
}

export default function Button({ href, color, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`rounded font-semibold h-12 flex items-center justify-center w-full xs:max-w-40 ${buttonColorClasses(
        color || "sky",
      )}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </Link>
  );
}
