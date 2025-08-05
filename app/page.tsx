import Image from "next/image";
import Categories from "./components/Categories";
import PropertyList from "./components/properties/PropertyLIst";

export default function Home() {
  return (
    <div className="max-w-[1500px] mx-auto px-6">
      <Categories />

      <div className="mt-4">
        <PropertyList />
      </div>
    </div>
  );
}
