type CardProps = {
  children?: React.ReactNode;
  compact?: boolean;
};

export default function Card({ children, compact = false }: CardProps) {
  const paddingClass = compact ? "p-1.5" : "p-3";
  const borderRadiusClass = compact ? "rounded" : "rounded-lg";

  return (
    <div className={`bg-slate-800 ${paddingClass} ${borderRadiusClass}`}>
      {children}
    </div>
  );
}
