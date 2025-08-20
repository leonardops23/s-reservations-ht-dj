'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

import Modal from "./Modal";
import useSignUpModalStore from "../hooks/useSignUpModel";
import CustomButton from "../forms/CustomButtom";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const UserSingUpModal = () => {
  const router = useRouter();
  const signUpModalStore = useSignUpModalStore();

  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<String[]>([]);
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const submitSignup = async () => {
    const formData = {
      email: email,
      password1: password1,
      password2: password2,
    }

    const response = await apiService.post('/api/auth/register/', JSON.stringify(formData));

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);
      signUpModalStore.onClose();
      router.push('/');
    }
    else {
      const tempErrors: string[] = Object.values(response.errors).map((error: any) => error[0]);
      setErrors(tempErrors);
    }
  }

  const content = (
    <>
      <h1 className="text-2xl font-bold">
        Sign up
      </h1>
      <form className="mt-4 space-y-4" action={submitSignup}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="email"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setPassword1(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="password"
          placeholder="Password"
          required
        />
        <input
          onChange={(e) => setPassword2(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="password"
          placeholder="Confirm password"
          required
        />
        {errors.map((error, index) => (
          <div
            key={`error-${index}`}
            className="p-2 text-red-500 text-sm mt-2">
            {error}
          </div>
        ))}
      </form>
      <CustomButton
        label="Sign up"
        onClick={submitSignup}
      />
    </>
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
