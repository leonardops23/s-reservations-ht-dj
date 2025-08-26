'use client'

import PlusIcon from "../icons/PlusIcon";
import useAddPropertyModalStore from "../hooks/useAddPropertyModal";
import useLoginModalStore from "../hooks/useLoginModal";

interface AddPropertyButtonProps {
  userId: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({ userId }) => {
  const addPropertyModalStore = useAddPropertyModalStore();
  const loginModalStore = useLoginModalStore();

  const sleepInYourHome = () => {
    // if (!userId) {
    //   loginModalStore.onOpen();
    // } else {
    //   addPropertyModalStore.onOpen();
    // }
    addPropertyModalStore.onOpen();
  };

  return (
    <button
      onClick={sleepInYourHome}
      className="flex items-center gap-2 px-5 py-2.5 
                 rounded-full border border-gray-300 
                 bg-white shadow-sm hover:shadow-md 
                 hover:bg-gray-50 active:scale-95
                 transition-all duration-300 ease-in-out 
                 text-sm font-semibold text-gray-700 cursor-pointer"
    >
      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white">
        <PlusIcon />
      </span>
      <span className="whitespace-nowrap">Sleep in your home</span>
    </button>
  );
};

export default AddPropertyButton;
