
import SearchIcon from "@/app/components/icons/SearchIcon"

const SearchFilter = () => {
  return (
    <div className="h-[54px] flex flex-row items-center border-3 border-bg-hover rounded-full justify-between">
      <div className="hidden lg:block">
        <div className="flex flex-row iterms-center justify-center">
          <div className="w-[250px] cursor-pointer px-8 flex flex-col justify-center rounded-full hover:bg-bg-hover">
            <p className="text-xs font-semibold">Where?</p>
            <p className="text-xs font-bold">Wanted location</p>
          </div>
          <div className="cursor-pointer px-8 flex flex-col justify-center rounded-full hover:bg-bg-hover">
            <p className="text-xs font-semibold">Where?</p>
            <p className="text-xs font-bold">Wanted location</p>
          </div>
          <div className="cursor-pointer px-8 flex flex-col justify-center rounded-full hover:bg-bg-hover">
            <p className="text-xs font-semibold">Where?</p>
            <p className="text-xs font-bold">Wanted location</p>
          </div>
          <div className="cursor-pointer px-8 flex flex-col justify-center rounded-full hover:bg-bg-hover">
            <p className="text-xs font-semibold">Where?</p>
            <p className="text-xs font-bold">Wanted location</p>
          </div>
        </div>
      </div>
      <div 
          className="p-2 cursor-pointer 
                    hover:bg-hover-search 
                    rounded-full 
                    transition-colors duration-300 
                    ease-in-out"
        >
          <div className="p-2 lg:p-3 bg-search-bg h-full rounded-full text-secondary-color
                        hover:bg-blue-500 hover:text-white
                        transition-all duration-300 
                        ease-in-out
                        transform hover:scale-105">
            <SearchIcon/>
          </div>
        </div>
      </div>
  )
};

export default SearchFilter;
