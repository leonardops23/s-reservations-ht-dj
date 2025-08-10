'use client'

import Modal from "./Modal";
import useSignUpModalStore from "../hooks/useSignUpModel";
import CustomButton from "../forms/CustomButtom";

const UserSingUpModal = () => {
  const signUpModalStore = useSignUpModalStore();

  const content = (
    <div>
      <h1 className="text-2xl font-bold">
        Sign up
      </h1>
      <form action="" className="mt-4 space-y-4">
        <input
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="password"
          placeholder="Password"
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="password"
          placeholder="Confirm password"
          required
        />

        {/* show error for email or password */}
        <div className="p-2 text-red-500 text-sm mt-2">
          Invalid email or password, please try again.
        </div>
        <CustomButton
          label="Sign up"
          onClick={() => console.log("clicked")}
        />
      </form>
    </div>
  )

  return (
    <Modal
      isOpen={signUpModalStore.isOpen}
      label="Sign up"
      close={signUpModalStore.onClose}
      content={content}
    />
  )
}

export default UserSingUpModal;