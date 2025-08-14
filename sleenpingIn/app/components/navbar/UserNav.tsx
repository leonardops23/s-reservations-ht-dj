'use client'

import { useState } from "react"

import MenuIcon from "@/app/components/icons/MenuIcon"
import UserIcon from "@/app/components/icons/UserIcon"

import MenuLink from "@/app/components/navbar/MenuLInk"
import useLoginModalStore from "@/app/components/hooks/useLoginModal"
import useSignUpModalStore from "@/app/components/hooks/useSignUpModel"

const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const loginModalStore = useLoginModalStore();
  const signUpModalStore = useSignUpModalStore();

  return (
    <div className="relative">
      <div className="p-1 rounded-full border-2 border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="User menu"
        >
          <MenuIcon />
          <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
          <UserIcon />
        </button>
        {isOpen && (
          <div className="w-[220px] absolute top-[60px] right-0 bg-white border border-gray-200 shadow-sm rounded-lg
              flex flex-col items-center">
            <MenuLink
              label="Log in" 
              onClick={() => loginModalStore.onOpen()}
            />
            <MenuLink
              label="Sign up"
              onClick={() => signUpModalStore.onOpen()}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default UserNavbar;
