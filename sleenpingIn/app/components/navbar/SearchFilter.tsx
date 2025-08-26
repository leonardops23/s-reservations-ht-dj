import SearchIcon from "@/app/components/icons/SearchIcon"

const SearchFilter = () => {
  return (
    <div className="h-[60px] flex items-center border border-gray-200 shadow-sm rounded-full justify-between px-2 bg-white">
      {/* Opciones */}
      <div className="hidden lg:flex flex-row items-center">
        {/* Bloque 1 */}
        <div className="w-[220px] cursor-pointer px-6 flex flex-col justify-center rounded-full hover:bg-gray-100 transition">
          <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Where?</p>
          <p className="text-sm font-bold text-gray-800">Wanted location</p>
        </div>
        <div className="hidden sm:block w-px h-8 bg-gray-200"></div>

        {/* Bloque 2 */}
        <div className="cursor-pointer px-6 flex flex-col justify-center rounded-full hover:bg-gray-100 transition">
          <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Check in</p>
          <p className="text-sm font-bold text-gray-800">Add dates</p>
        </div>
        <div className="hidden sm:block w-px h-8 bg-gray-200"></div>

        {/* Bloque 3 */}
        <div className="cursor-pointer px-6 flex flex-col justify-center rounded-full hover:bg-gray-100 transition">
          <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Check out</p>
          <p className="text-sm font-bold text-gray-800">Add dates</p>
        </div>
        <div className="hidden sm:block w-px h-8 bg-gray-200"></div>

        {/* Bloque 4 */}
        <div className="cursor-pointer px-6 flex flex-col justify-center rounded-full hover:bg-gray-100 transition">
          <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Guests</p>
          <p className="text-sm font-bold text-gray-800">Add people</p>
        </div>
      </div>

      {/* Botón buscar */}
      <div
        className="flex items-center justify-center p-2 lg:p-3 cursor-pointer lg:text-xs font-semibold
                   bg-gradient-to-r from-blue-500 to-indigo-500
                   text-white rounded-full shadow-md
                   hover:shadow-lg hover:scale-105
                   transition-all duration-300 ease-in-out"
      >
        <SearchIcon />
      </div>
    </div>
  )
};

export default SearchFilter;
