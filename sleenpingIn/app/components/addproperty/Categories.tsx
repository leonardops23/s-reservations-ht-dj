import React from 'react';
import BeachIcon from '../icons/CategoryList/BeachIcon';
import CabinsIcon from '../icons/CategoryList/CabinsIcon';
import TinyHomeIcon from '../icons/CategoryList/TinyHomeIcon';
import VillaIcon from '../icons/CategoryList/VillaIcon';

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void; // Función para establecer la categoría seleccionada
}

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory
}) => {
  return (
    <>
      <div className='pt-3 cursor-pointer pb-2 flex items-center space-x-12'>
        <div>
          <div className="pt-2 cursor-pointer pb-2 flex items-center space-x-12">
            <div
              onClick={() => setCategory('Beach')}
              className={`pb-2 flex flex-col items-center space-y-2 opacity-60  hover:border-gray-200 hover:opacity-100 ${dataCategory === 'Beach' ? 'border-gray-200 opacity-100 text-blue-900' : ''}`}>
              <BeachIcon />
              <span className='text-xs'>Beach</span>
            </div>

            <div
              onClick={() => setCategory('Villa')}
              className={`pb-2 flex flex-col items-center space-y-2 opacity-60 hover:border-gray-200 hover:opacity-100 ${dataCategory === 'Villa' ? 'border-gray-200 opacity-100 text-blue-900' : ''}`}>
              <VillaIcon />
              <span className='text-xs'>Villa</span>
            </div>

            <div
              onClick={() => setCategory('Cabins')}
              className={`pb-2 flex flex-col items-center space-y-2 opacity-60 hover:border-gray-200 hover:opacity-100 ${dataCategory === 'Cabins' ? 'border-gray-200 opacity-100 text-blue-900' : ''}`}>
              <CabinsIcon />
              <span className='text-xs'>Cabins</span>
            </div>

            <div
              onClick={() => setCategory('TinyHome')}
              className={`pb-2 flex flex-col items-center space-y-2 opacity-60 hover:border-gray-200 hover:opacity-100 ${dataCategory === 'TinyHome' ? 'border-gray-200 opacity-100 text-blue-900' : ''}`}>
              <TinyHomeIcon />
              <span className='text-xs'>Tiny Home</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories;
