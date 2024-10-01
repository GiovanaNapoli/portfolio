type ItemProps = {
  foundation: string;
  name: string;
  date: string;
};

const Item = ({ date, foundation, name }: ItemProps) => {
  return (
    <div className="flex flex-row flex-wrap justify-between items-center">
      <div className="flex flex-row flex-wrap gap-2 items-end">
        <h1 className="text-lg font-aptos-bold">{foundation}</h1>
        <span>{name}</span>
      </div>
      <span>{date}</span>
    </div>
  );
};

export default Item;
