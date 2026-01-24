import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  console.log(items);

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div className="divide-y">
      {items.map((item, index) => {
        const info = item.card.info;

        return (
          <div
            key={info.id ?? info.name}
            className="flex justify-between gap-4 py-4 px-2"
          >
            {/* Left: text */}
            <div className="text-left w-9/12">
              <h3 className="font-semibold text-gray-800">
                {info.name}
              </h3>

              <p className="text-sm font-medium text-gray-700">
                ₹{info.price ? info.price / 100 : info.defaultPrice / 100}
              </p>

              {info.description && (
                <p className="text-sm text-gray-500 mt-1">
                  {info.description}
                </p>
              )}
            </div>
            

            <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItems(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
        );
      })}
    </div>
  );
};

export default ItemList;
