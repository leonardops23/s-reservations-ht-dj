'use client';

import CustomButtom from "../forms/CustomButtom";

const ConversationDetail = () => {
  return (
    <>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
          <p className="font-bold text-gray-500">
            jhon Doe
          </p>
          <p>ljasdklfjlksdajflksjadlkf</p>
        </div>
        <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-gray-200">
          <p className="font-bold text-gray-500">
            Ivan Pacheco
          </p>
          <p>Hola, Estas seguro </p>
        </div>
        <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
          <input 
            type="text"
            placeholder="Type your message..."
            className="w-full p-2 bg-gray-200 rounded-xl"
            />
            <CustomButtom
              className="max-w-[100px]"
              label="Send"
              onClick={() => console.log("clicked")}            
            />
        </div>
      </div>
    </>
  )
}

export default ConversationDetail;
