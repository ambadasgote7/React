import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
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
                ₹{info.price / 100}
              </p>

              {info.description && (
                <p className="text-sm text-gray-500 mt-1">
                  {info.description}
                </p>
              )}
            </div>

            {/* Right: image */}
            <div className="w-3/12 flex justify-end">
              {info.imageId && (
                <img
                  src={CDN_URL + info.imageId}
                  className="w-20 h-20 rounded-lg object-cover"
                  alt={info.name}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
