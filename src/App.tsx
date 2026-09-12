import { Suspense } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Tecnologies from "./components/tecnologies/Tecnologies";
import StackSidebar from "./components/tecnologies/StackSidebar";

function App() {
  const tecnologiesFetch = async () => {
    const res = await fetch("../public/tecnologies_data.json");
    const data = await res.json();
    return data;
  };
  const tecnologiesPromiseData = tecnologiesFetch();
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<p>Loading tecnology data.....</p>}>
        <div className="border ">
          <section className="container mx-auto grid grid-cols-1  lg:grid-cols-[1fr_300px] gap-8">
            {/* Left site */}
            <div className="border">
              <Tecnologies tecnologiesPromiseData={tecnologiesPromiseData} />
            </div>

            {/* RIght site */}
            <aside className="border">
              <StackSidebar />
            </aside>
          </section>
        </div>
      </Suspense>
    </>
  );
}

export default App;
