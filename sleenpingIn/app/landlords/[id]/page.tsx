import ContactBtn from "@/app/components/ContactBtn";
import Image from "next/image";
import PropertyList from "@/app/components/properties/PropertyLIst";

const LandLordDetailPafg = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="col-span-1 mb-4">
          <div className="flex flex-col items-center p-6 rounded-xl border border-bg-hover shadow-xl">
            <Image
              src='/perfile.jpg'
              width={200}
              height={200}
              alt="Landlord name"
              unoptimized
              className="rounded-full"
            />
            <h1 className="mt-6 text-2xl">LandRood Name</h1>
            <ContactBtn />
          </div>
        </aside>
        <div className="col-span-3 pl-0 md:pl-6">
          <div className="grid grid-cols-1 mg:grid-cols-3 gap-6">
            <PropertyList />
          </div>
        </div>
        <div>
          Properties
        </div>
      </div>
    </main>
  )
}

export default LandLordDetailPafg;
