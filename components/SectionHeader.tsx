interface Props {
  title: string;
  dir?: "l" | "r";
}

export const SectionHeader = ({ title, dir = "l" }: Props) => {
  return (
    <div
      className={`flex items-center gap-x-6 mb-6 ${
        dir === "r" ? "flex-row" : "flex-row-reverse"
      }`}
      id={title.toLowerCase()}
    >
      <div className="w-full h-[2px] bg-slate-700 opacity-30" />
      <h2 className="text-right text-3xl lg:text-4xl font-extrabold">
        <span>{title}</span>
      </h2>
    </div>
  );
};
