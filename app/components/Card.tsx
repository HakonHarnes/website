type CardProps = {
  children?: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return <div className="rounded p-1.5 bg-slate-800">{children}</div>;
}
