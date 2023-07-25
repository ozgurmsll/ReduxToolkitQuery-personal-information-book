import React, { useState } from 'react';
import { BsChevronDown, BsChevronLeft } from 'react-icons/bs';
import { Album } from './Kategoriler/Album';
import { Adress } from './Kategoriler/Adres/addAdres';
export const KategoriListItem = ({ kategori }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{width:'100%'}}>
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={toggleExpansion}>
        {kategori.title}
        {isExpanded ? <BsChevronDown /> : <BsChevronLeft />}
      </div>
      {isExpanded && (
        <div style={{width:'100%'}}>
          {kategori.title === 'Album Kategorisi' && <Album kategori={kategori}/>}
          {kategori.title === 'Adress Kategorisi' && <Adress  kategori={kategori} />}
        </div>
      )}
    </div>
  );
};
