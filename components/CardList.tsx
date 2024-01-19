import Card from "./Card";

type CardListProps = {
  elements: string[];
};

export default function CardList({ elements }: CardListProps) {
  return (
    <div className="flex flex-wrap gap-2 font-medium">
      {elements.map((elem) => (
        <Card key={elem} compact={true}>
          {elem}
        </Card>
      ))}
    </div>
  );
}
