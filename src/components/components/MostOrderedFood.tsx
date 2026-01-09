const MostOrderedFood = ({
  data,
}: {
  data: { title: string; price: string; image: string; imageAlt: string };
}) => {
  return (
    <div className="flex items-center justify-between">
      <img
        src={data.image}
        alt={data.imageAlt}
        className="w-12 h-12 rounded-full object-cover"
      />
      <h2 className="font-medium">{data.title}</h2>
      <p className="font-light">{data.price}</p>
    </div>
  );
};

export default MostOrderedFood;
