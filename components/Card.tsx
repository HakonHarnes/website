type CardProps = {
  children?: React.ReactNode;
  compact?: boolean;
};

export default function Card({ children, compact = false }: CardProps) {
  const paddingClass = compact ? "p-1.5" : "p-3 md:p-5";

  return (
    <div className={`bg-slate-800 rounded ${paddingClass}`}>{children}</div>
  );
}
