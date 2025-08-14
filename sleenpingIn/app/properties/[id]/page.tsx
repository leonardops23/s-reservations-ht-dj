import ReservationSideBar from "@/app/components/properties/ReservationSideBar";
import Image from "next/image";

const PropertyDetail = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden relative rounded-xl">
        <Image
          fill
          src='/playa.png'
          sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
          alt="beach house"
          unoptimized
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Property Name</h1>
          <span className="mb-6 block text-lg text-gray-600">4 guests - 2 bedrooms - 1 bathroom</span>
          <hr className="thick" />

          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/perfile.jpg"
              width={50}
              height={50}
              className="rounded-full"
              alt="perfile"
              unoptimized
            />
            <p><strong>Ivan Pacheco</strong> is your host</p>
          </div>
          <hr className="thick" />
          <p className="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta animi eos adipisci asperiores! Natus temporibus autem odit quod. Voluptatum nihil ea numquam earum fugiat illum labore ipsam qui voluptates?</p>

        </div>
        <ReservationSideBar />
      </div>
    </main>
  )
}

export default PropertyDetail;
