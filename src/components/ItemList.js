import { useDispatch } from "react-redux";
import { RES_URL } from "../utils/contents";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card?.info?.id}
          className="flex justify-between items-start gap-4 border-b border-gray-300 py-6"
        >
          <div className="w-8/12">
            <div className="flex justify-between mb-2">
              <span className="text-lg font-semibold text-gray-800">
                {item.card?.info?.name}
              </span>
              <span className="text-green-700 font-medium">
                ₹
                {(item.card?.info?.price || item.card?.info?.defaultPrice) /
                  100}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {item.card?.info?.description ?? "No description available."}
            </p>
          </div>

          <div className="w-4/12 relative">
            <div className="absolute inset-1 flex justify-center p-1 items-end">
              <button
                className="px-3 py-1 text-sm font-semibold text-white bg-black rounded-md shadow-md hover:bg-gray-800"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
            <img
              className="w-full h-24 rounded-md object-cover shadow-md border"
              src={RES_URL + item.card?.info?.imageId}
              alt={item.card?.info?.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
