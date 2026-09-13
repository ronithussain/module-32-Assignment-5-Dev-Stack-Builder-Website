import type { Dispatch, SetStateAction } from "react";
import type { ITecnology } from "../../types/type";
import { RxCross1 } from "react-icons/rx";

interface ITechProps {
  addToCart: ITecnology[];
  setAddToCart: Dispatch<SetStateAction<ITecnology[]>>;
  handleRemoveStack: (id: string) => void;
}

const StackSidebar = ({
  addToCart,
  setAddToCart,
  handleRemoveStack,
}: ITechProps) => {
  console.log(addToCart, "stack done");
  return (
    <div className="sm:mt-24 border border-gray-300 rounded-xl px-4 py-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-2">Your Stack</h1>
      <p className="text-gray-500 mb-4">
        {addToCart
          ? `${addToCart.length} Technology Selected`
          : "No technologies selected yet."}
      </p>
      <div className="border border-gray-300 p-4 rounded-xl">
        {addToCart.length === 0 ? (
          <p className="text-gray-500">Yout Stack is Empty.</p>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {addToCart.map((tech) => (
              <div className="flex justify-between" key={tech.id}>
                <div className="flex items-center gap-x-4">
                  <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                  <div>
                    <h3 className="text-lg font-semibold">{tech.name}</h3>
                    <p className="text-gray-400">{tech.category}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemoveStack(tech.id)}
                  className="text-xl hover:text-gray-500"
                >
                  <RxCross1 />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={()=> setAddToCart([])}
        className="
        btn w-full mt-4 rounded-2xl
              text-sm
              font-semibold
              text-red-500
              hover:text-red-700
              transition
            "
      >
        Remove All
      </button>
    </div>
  );
};

export default StackSidebar;
