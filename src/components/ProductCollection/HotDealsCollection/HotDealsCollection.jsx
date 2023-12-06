import { hotDealsProductCollection } from "@/utils/allProductsCollection";
import CollectionSlider from "../CollectionSlider/CollectionSlider";
import { FaFire } from "react-icons/fa";

const HotDealsCollection = async () => {
  const hotDealsProducts = await hotDealsProductCollection();
  return (
    <section className="max-w-screen-xl mx-auto my-20">
      <h1 className="text-2xl text-gray-700 font-bold flex items-center gap-2 mb-5">
        Hot Deals <FaFire className="text-red-500" />
      </h1>

      {/* slider category */}

      <>
        <CollectionSlider products={hotDealsProducts} />
      </>
    </section>
  );
};

export default HotDealsCollection;
