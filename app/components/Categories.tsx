import AmazingPoolsIcon from "./icons/CategoryList/AmazingPoolsIcon";
import CampingIcon from "./icons/CategoryList/CabinsIcon";
import CabinsIcon from "./icons/CategoryList/CampingIcon";
import CountrysideIcon from "./icons/CategoryList/CountrysideIcon";
import FarmsIcon from "./icons/CategoryList/FarmsIcon";
import RoomsIcon from "./icons/CategoryList/RoomsIcon";
import TopOfTheWorldIcon from "./icons/CategoryList/TopOfTheWorldIcon";
import WindmillsIcon from "./icons/CategoryList/WindmillsIcon";


const Categories = () => {
  return (
    <div>
      <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
          <RoomsIcon />
          <span className='text-xs'>Romms</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
          <FarmsIcon />
          <span className='text-xs'>Romms</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
          <AmazingPoolsIcon />
          <span className='text-xs'>Romms</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
          <TopOfTheWorldIcon />
          <span className='text-xs'>Romms</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">        
          <CampingIcon />
          <span className='text-xs'>Romms</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">        
          <WindmillsIcon />
          <span className='text-xs'>Romms</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
          <CabinsIcon />
          <span className='text-xs'>Romms</span>

        </div>
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
          <CountrysideIcon />
          <span className='text-xs'>Romms</span>
        </div>
      </div>
    </div>
  )
}

export default Categories;
