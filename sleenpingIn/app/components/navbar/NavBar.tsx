import Link from "next/link";
import Image from "next/image";

import SearchFilter from "./SearchFilter";
import UserNavbar from "./UserNav";
import AddPropertyButton from "./AddPropertyButton";
import { getUserId } from "@/app/lib/actions";

const Navbar = async () => {
  const userId = await getUserId();

  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b border-gray-200 bg-white shadow-sm z-10">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex items-center justify-between h-8"> {/* Altura fija para contenido */}
          <div className="flex items-center">
            <Link href="/" className="block w-36 h-8 relative">
              <Image
                src="/logo.png"
                alt="SleepingIn logo"
                width={140}
                height={32} // 👈 Ajusta a la altura real del logo (ej. 32px)
                unoptimized
                priority // ⚠️ Importante: carga la imagen de inmediato
                className="w-full h-auto" // Mantiene proporción
              />
            </Link>
          </div>
          <div className="flex space-x-6">
            <SearchFilter />
          </div>
          <div className="flex space-x-6">
            <AddPropertyButton />
            <UserNavbar
              userId={userId}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
