import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Tecnologies from "./components/tecnologies/Tecnologies";
import StackSidebar from "./components/tecnologies/StackSidebar";
import type { ITecnology } from "./types/type";
import { toast } from "react-toastify";

function App() {
  const [addToCart, setAddToCart] = useState<ITecnology[]>([]);
  // console.log(addToCart, 'added successfully done');

  const tecnologiesFetch = async (): Promise<ITecnology[]> => {
    const res = await fetch("../public/tecnologies_data.json");
    const data = await res.json();
    return data;
  };
  const tecnologiesPromiseData = tecnologiesFetch();

  // Removehandler
  const handleRemoveStack = (id: string): void => {
    const remainingItems = addToCart.filter((item) => item.id !== id);
    // console.log("remove successfully...");
    
    toast.success("the stack is remove success!");
    setAddToCart(remainingItems);
  };

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<p>Loading tecnology data.....</p>}>
        <div className=" ">
          <section className="container mx-auto grid grid-cols-1  lg:grid-cols-[1fr_300px] gap-8">
            {/* Left site */}
            <div className="">
              <Tecnologies
                tecnologiesPromiseData={tecnologiesPromiseData}
                addToCart={addToCart}
                setAddToCart={setAddToCart}
              />
            </div>

            {/* RIght site */}
            <aside className="">
              <StackSidebar
                addToCart={addToCart}
                setAddToCart={setAddToCart}
                handleRemoveStack={handleRemoveStack}
              />
            </aside>
          </section>
        </div>
      </Suspense>
    </>
  );
}

export default App;
