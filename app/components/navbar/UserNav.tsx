import MenuIcon from "@/app/components/icons/MenuIcon"
import UserIcon from "@/app/components/icons/UserIcon"

const UserNavbar = () => {
  return (
    <div className="relative">
      <div className="p-1 rounded-full border-2 border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300">
        <button 
          className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="User menu"
        >
          <MenuIcon />
          <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
          <UserIcon />
        </button>
      </div>
    </div>
  )
}

export default UserNavbar;
