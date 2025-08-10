'use client'

import Modal from "../modals/Modal";
import useLoginModalStore from "../hooks/useLoginModal";
import CustomButton from "../forms/CustomButtom";

const LoginModal = () => {
  const loginModalStore = useLoginModalStore();

  const content = (
    <div>
      <h1 className="text-2xl font-bold">
        Log in
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

        {/* show error for email or password */}
        <div className="p-2 text-red-500 text-sm mt-2">
          Invalid email or password, please try again.
        </div>
        <CustomButton
          label="Log in"
          onClick={() => console.log("clicked")}
        />
      </form>
    </div>
  )

  return (
    <Modal
      isOpen={loginModalStore.isOpen}
      label="Login"
      close={loginModalStore.onClose}
      content={content}
      />
  )
}

export default LoginModal;
