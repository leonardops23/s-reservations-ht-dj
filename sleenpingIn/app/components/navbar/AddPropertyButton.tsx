'use client'

import PlusIcon from "../icons/PlusIcon";
import useAddPropertyModalStore from "../hooks/useAddPropertyModal";
import useLoginModalStore from "../hooks/useLoginModal";

interface AddPropertyButtonProps {
    userId: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
    userId
}) => {
    const addPropertyModalStore = useAddPropertyModalStore();
    const loginModalStore = useLoginModalStore();
    const sleepInYourHome = () => {
        if (!userId) {
            loginModalStore.onOpen();
        } else {
            addPropertyModalStore.onOpen();
        }
    }

    return (
        <div
        className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-bg-hover flex items-center gap-2"
        onClick={sleepInYourHome}
        >
            <PlusIcon/>
            Sleeping your home
        </div>
    )
}

export default AddPropertyButton;
