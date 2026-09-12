import { IoIosStarHalf } from "react-icons/io";
import type { ITecnology } from "../../types/type";

interface ICardTecnology {
  tecnology: ITecnology;
}
const TecnologyCard = ({ tecnology }: ICardTecnology) => {
  // console.log(tecnology, 'asdkfsd');
  return (
    <div>
      <div
        className="
        group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300
  "
      >
        {/* Top Section */}
        <div className="flex justify-between items-center px-5 pt-5">
          {/* Technology Icon */}
          <div
            className="
        w-14 h-14
        flex items-center justify-center
        rounded-xl
        bg-gray-50
        border border-gray-100
        group-hover:bg-gray-100
        transition
      "
          >
            <img
              className="w-9 h-9 object-contain"
              src={tecnology.icon}
              alt={tecnology.name}
            />
          </div>

          {/* Badge */}
          <span
            className="
        rounded-full
        border border-gray-200
        bg-gray-50
        px-4 py-1.5
        text-xs
        font-semibold
        text-gray-600
        group-hover:border-purple-200
        group-hover:text-purple-600
        transition
      "
          >
            {tecnology.badge}
          </span>
        </div>

        {/* Card Body */}
        <div className="p-5">
          <h2
            className="
        text-xl
        font-bold
        text-gray-900
        group-hover:text-purple-600
        transition
      "
          >
            {tecnology.name}
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            {tecnology.description}
          </p>

          <div className="my-5 border-t border-gray-100"></div>

          <div className="flex justify-between items-center gap-3">
            <div>
              <p className="mt-1 text-sm font-semibold text-gray-700">
                {tecnology.category}
              </p>
            </div>

            <div>
              <p className="mt-1 text-sm font-semibold text-gray-700">
                {tecnology.difficulty}
              </p>
            </div>

            <div className="flex items-center gap-x-1">
              <span className="text-xl text-amber-300">
                <IoIosStarHalf />
              </span>
              <p className="mt-1 text-sm font-semibold text-gray-700">
                {tecnology.rating}
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            className="
        mt-6
        w-full
        rounded-xl
        bg-gradient-to-r
        from-red-500
        via-pink-600
        to-purple-600
        py-3
        text-sm
        font-semibold
        text-white
        shadow-md
        hover:shadow-lg
        hover:opacity-90
        active:scale-[0.98]
        transition
      "
          >
            Explore Technology
          </button>
        </div>
      </div>
    </div>
  );
};

export default TecnologyCard;
