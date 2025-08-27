"use client";

import Modal from "./Modal";
import useAddPropertyModal from "../hooks/useAddPropertyModal";
import CustomButton from "../forms/CustomButtom";
import Categories from "../addproperty/Categories";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";

import { ChangeEvent, HTMLInputAutoCompleteAttribute, useState } from "react";
import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation";

const AddPropertyModal = () => {
  const router = useRouter();

  const addPropertyModal = useAddPropertyModal();

  const [currentStep, setCurrentStep] = useState(1);
  const [dataCategory, setDataCategory] = useState<string>('');
  const [dataPrice, setDataPrice] = useState('');
  const [dataBedrooms, setDataBedrooms] = useState('');
  const [dataBathrooms, setDataBathrooms] = useState('');
  const [dataGuests, setDataGuests] = useState('');
  const [dataCountry, setDataCountry] = useState<SelectCountryValue>();  
  const [dataImage, setDataSetImage] = useState<File>();
  const [dataTitle, setDataTitle] = useState('');
  const [dataDescription, setDataDescription] = useState('');

  const setImage = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const file = event.target.files?.[0];
    if (file) {
      setDataSetImage(file);
    }
  }

  const setCategory = (category: string) => {
    setDataCategory(category);
  }

  const submitForm = async () => {
    if (
      dataTitle &&
      dataDescription &&
      dataPrice &&
      dataCountry &&
      dataImage
    ) {
      const formData = new FormData();
      formData.append('title', dataTitle);
      formData.append('description', dataDescription);
      formData.append('price', dataPrice.toString());
      formData.append('country', dataCountry.value);
      formData.append('category', dataCategory);
      formData.append('bedrooms', dataBedrooms.toString());
      formData.append('bathrooms', dataBathrooms.toString());
      formData.append('guests', dataGuests.toString());
      formData.append('image', dataImage as File);

      try {
        const response = await apiService.post('/api/properties', formData);
        if (response.status === 201 || response.status === 200) {
          console.log('Propiedad creada');
          addPropertyModal.onClose();
          router.push('/');
        }
      } catch (error: any) {
        console.log('Error al enviar el formulario: ', error.response.data);
        alert('Hubo un error al enviar formulario');
      }
    }
    else {
      console.log("complete all fields");
    }
  }

  const content = (
    <>
      {currentStep === 1 ? (
        <>
          <h2 className="text-2xl font-bold">Chose Category</h2>
          <Categories
            dataCategory={dataCategory}
            setCategory={(category: string) => setCategory(category)}
          />
          <div>
            <CustomButton
              label="Next"
              onClick={() => setCurrentStep(2)}
            />
          </div>
        </>
      ) : currentStep === 2 ? (
        <>
          <h2 className="text-2xl font-bold">Describe your place</h2>
          <div className="mt-4 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>Title</label>
              <input
                type="text"
                value={dataTitle}
                onChange={(e) => setDataTitle(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Description</label>
              <textarea
                value={dataDescription}
                onChange={(e) => setDataDescription(e.target.value)}
                className="w-full p-4 h-40 border border-gray-600 rounded-xl"
              />
            </div>
          </div>
          <div>
            <CustomButton
              label="Previous"
              className="bg-black text-white"
              onClick={() => setCurrentStep(1)}
            />
            <CustomButton
              label="Next"
              onClick={() => setCurrentStep(3)}
            />
          </div>
        </>
      ) : currentStep === 3 ? (
        <>  
          <h2 className="text-2xl font-bold">Details</h2>
          <div className="mt-4 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>Price per night</label>
              <input
                type="number"
                value={dataPrice}
                onChange={(e) => setDataPrice(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Bedrooms</label>
              <input
                type="number"
                value={dataBedrooms}
                onChange={(e) => setDataBedrooms(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Bathrooms</label>
              <input
                type="number"
                value={dataBathrooms}
                onChange={(e) => setDataBathrooms(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Guests</label>
              <input
                type="number"
                value={dataGuests}
                onChange={(e) => setDataGuests(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
          </div>

          <div>
            <CustomButton
              label="Previous"
              className="bg-black text-white"
              onClick={() => setCurrentStep(2)}
            />
            <CustomButton
              label="Next"
              onClick={() => setCurrentStep(4)}
            />
          </div>
        </>
      ) : currentStep === 4 ? (
        <>
          <h2 className="text-2xl font-bold">Location</h2>
          <div className="mt-4 space-y-4">
            <SelectCountry
              value={dataCountry}
              onChange={(value) => setDataCountry(value as SelectCountryValue)}
            />
          </div>
          <div>
            <CustomButton
              label="Previous"
              className="bg-black text-white"
              onClick={() => setCurrentStep(3)}
            />
            <CustomButton
              label="Next"
              onClick={() => setCurrentStep(5)}
            />
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold">Image</h2>
          <div className="mt-4 space-y-4">
            <input
              accept="image/*"
              type="file"
              className="w-full py-4 px-6 border border-gray-600 rounded-xl bg-blue-200"
              onChange={setImage}
            />
          </div>
          {dataImage && (
            <div className="w-[200px] h-[150px] mt-4 relative overflow-hidden">
              <img
                src={URL.createObjectURL(dataImage)}
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div>
            <CustomButton
              label="Previous"
              className="bg-black text-white"
              onClick={() => setCurrentStep(4)}
            />
            <CustomButton
              label="Submit"
              onClick={() => submitForm()}
            />
          </div>
        </>
      )}
    </>
  )
  return (
    <Modal
      isOpen={addPropertyModal.isOpen}
      close={addPropertyModal.onClose}
      label="Add Property"
      content={content}
    />
  )
}

export default AddPropertyModal;
