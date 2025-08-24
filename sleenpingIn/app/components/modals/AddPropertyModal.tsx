'use client'

import Image from "next/image";
import Modal from "./Modal";
import usePropertyModalStore from "../hooks/useAddPropertyModal";

const AddPropertyModal = () => {
  const propertyModalStore = usePropertyModalStore();

  const content = (
    <h1>
      Aqui puedes agregar tu propiedad
    </h1>
  )

  return (
    <Modal
      isOpen={propertyModalStore.isOpen}
      close={propertyModalStore.onClose}
      label="Add Property"
      content={content}
    />
  )
}

export default AddPropertyModal;
