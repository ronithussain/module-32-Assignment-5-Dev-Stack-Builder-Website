import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Tecnologies from "./components/tecnologies/Tecnologies";
import StackSidebar from "./components/tecnologies/StackSidebar";
import type { ITecnology } from "./types/type";
import { toast } from "react-toastify";
import Footer from "./components/Footer";

const tecnologiesFetch = async (): Promise<ITecnology[]> => {
  const res = await fetch("/tecnologies_data.json");
  const data = await res.json();
  return data;
};
const tecnologiesPromiseData = tecnologiesFetch();

function App() {
  const [addToCart, setAddToCart] = useState<ITecnology[]>([]);
  // console.log(addToCart, 'added successfully done');

  // Removehandler
  const handleRemoveStack = (id: string): void => {
    const remainingItems = addToCart.filter((item) => item.id !== id);
    // console.log("remove successfully...");

    toast.success("the stack is remove success!");
    setAddToCart(remainingItems);
  };
  const handleRemoveAll = ():void => {
    setAddToCart([]);
    toast.success("All technologies removed!");
  };

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }
      >
        <section className="container mx-auto grid grid-cols-1  lg:grid-cols-[1fr_300px] gap-8">
          {/* Left site */}
          <div>
            <Tecnologies
              tecnologiesPromiseData={tecnologiesPromiseData}
              addToCart={addToCart}
              setAddToCart={setAddToCart}
            />
          </div>

          {/* RIght site */}
          <aside>
            <StackSidebar
              addToCart={addToCart}
              setAddToCart={setAddToCart}
              handleRemoveStack={handleRemoveStack}
              handleRemoveAll={handleRemoveAll}
            />
          </aside>
        </section>
      </Suspense>

      {/* Footer section */}
      <Footer />
    </>
  );
}

export default App;
