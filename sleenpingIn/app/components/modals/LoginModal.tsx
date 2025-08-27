'use client'

import Modal from "../modals/Modal";
import useLoginModalStore from "../hooks/useLoginModal";
import CustomButton from "../forms/CustomButtom";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { handleLogin } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";

const LoginModal = () => {
  const router = useRouter()
  const loginModalStore = useLoginModalStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<String[]>([]);

  const submitLogin = async () => {
    const formData = {
      email: email,
      password: password,
    }

    const response = await apiService.postWithoutToken('/api/auth/login', JSON.stringify(formData));

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh)
      loginModalStore.onClose()
      router.push('/')
    } else {
      setErrors(response.non_field_errors);
    }

  }

  const content = (
    <div>
      <h1 className="text-2xl font-bold">
        Log in
      </h1>
      <form
        action={submitLogin} 
        className="mt-4 space-y-4">
        {errors.length > 0 && (
          <div className="p-2 text-red-500 text-sm mt-2">
            {errors[0]}
          </div>
        )}
        <input
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <CustomButton
        label="Log in"
        onClick={submitLogin}
      />
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
