import Link from "next/link";
import React from "react";

interface MenuLinkProps {
  label: string;
  onClick?: () => void;
  href: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ label, onClick, href }) => {
  return (
    <Link href={href} onClick={onClick}>
      <div className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-bg-hover">
        {label}
      </div>
    </Link>
  )
}

export default MenuLink;
