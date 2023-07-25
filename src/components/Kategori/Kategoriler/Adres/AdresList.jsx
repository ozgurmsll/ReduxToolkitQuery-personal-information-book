import React, { useState } from 'react';
import { BsChevronDown, BsChevronLeft } from 'react-icons/bs';


export const AdresList = ({adres}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={toggleExpansion}>
    {adres.name}
    {isExpanded ? <BsChevronDown /> : <BsChevronLeft />}
    {isExpanded && (
      <div>
        <div>AdresName: {adres.name}</div>
        <div>sokak: {adres.sokak}</div>
        <div>sehir: {adres.sehir}</div>
        <div>ülke: {adres.ülke}</div>
        </div>
    )}
  </div>
  );
};
