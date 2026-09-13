import { use, type Dispatch, type SetStateAction } from "react";
import type { ITecnology } from "../../types/type";
import TecnologyCard from "./TecnologyCard";

interface ITech {
  tecnologiesPromiseData: Promise<ITecnology[]>;
  addToCart:ITecnology[];
  setAddToCart:Dispatch<SetStateAction<ITecnology[]>>
}

const Tecnologies = ({ tecnologiesPromiseData, addToCart, setAddToCart }: ITech) => {
  const tecnologies = use(tecnologiesPromiseData);
//   console.log(tecnologies, "data is ready");


  return (
    <>
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold">
          Explore the
          <span className="bg-gradient-to-r from-red-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Tecnologies
          </span>
        </h1>
        <p className="text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 sm:mt-10">
        {tecnologies.map((tecnology) => (
          <TecnologyCard 
          key={tecnology.id}
          tecnology={tecnology}
          addToCart={addToCart} 
          setAddToCart={setAddToCart}  
          />
        ))}
      </div>
    </>
  );
};

export default Tecnologies;
