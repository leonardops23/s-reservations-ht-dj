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
  const [dataCategory, setDataCategory] = useState('');
  const [dataPrice, setDataPrice] = useState<number>();
  const [dataBedrooms, setDataBedrooms] = useState<number>();
  const [dataBathrooms, setDataBathrooms] = useState<number>();
  const [dataGuests, setDataGuests] = useState<number>();

  const [dataCountry, setDataCountry] = useState<SelectCountryValue>();  

  const [dataImage, setDataSetImage] = useState<File>();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


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
    console.log("clicked");
    if (
      dataCategory &&
      title &&
      description &&
      dataPrice &&
      dataCountry &&
      dataImage
    ) {
      const formData = new FormData();
      formData.append('category', dataCategory);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price_per_night', dataPrice?.toString() || '');
      formData.append('bedrooms', dataBedrooms?.toString() || '');
      formData.append('bathrooms', dataBathrooms?.toString() || '');
      formData.append('guests', dataGuests?.toString() || '');
      formData.append('country', dataCountry.value);
      formData.append('country_code', dataCountry.label);
      formData.append('image', dataImage as File);

      const response = await apiService.post('/api/properties/', formData);
      if (response.status === 200) {
        console.log(response.data);
        router.push('/');
        addPropertyModal.onClose();
      }
      else {
        console.log(`Error: ${response.status}`);
      }
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                onChange={(e) => setDataPrice(Number(e.target.value))}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Bedrooms</label>
              <input
                type="number"
                value={dataBedrooms}
                onChange={(e) => setDataBedrooms(Number(e.target.value))}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Bathrooms</label>
              <input
                type="number"
                value={dataBathrooms}
                onChange={(e) => setDataBathrooms(Number(e.target.value))}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Guests</label>
              <input
                type="number"
                value={dataGuests}
                onChange={(e) => setDataGuests(Number(e.target.value))}
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
              onClick={() => console.log("clicked")}
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
