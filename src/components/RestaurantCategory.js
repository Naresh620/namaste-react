import ItemList from "./ItemList";

const RestaurantCategory = ({ data ,showItem,setshowIndex}) => {
    const handler=()=>{
      setshowIndex();
    }
  return (
    <div>
      <div className="w-6/12 mx-auto my-6 bg-gray-100 p-4 cursor-pointer ">
        <div className="flex justify-between "
        onClick={handler}>
          <span className="font-bold text-2xl ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
