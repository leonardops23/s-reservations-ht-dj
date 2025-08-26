import CabinsIcon from "./icons/CategoryList/CabinsIcon";
import VillaIcon from "./icons/CategoryList/VillaIcon";
import BeachIcon from "./icons/CategoryList/BeachIcon";
import TinyHomeIcon from "./icons/CategoryList/TinyHomeIcon";

const Categories = () => {
  return (
    <div>
      <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
          <BeachIcon />
          <span className='text-xs'>Beach</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
          <VillaIcon />
          <span className='text-xs'>Villa</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
          <CabinsIcon />
          <span className='text-xs'>Cabins</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
          <TinyHomeIcon />
          <span className='text-xs'>Tiny Home</span>
        </div>
      </div>
    </div>
  )
}

export default Categories;
