import React, { useState } from 'react';
import { BsChevronDown, BsChevronLeft } from 'react-icons/bs';
import { CircularProgress } from '@mui/material';
import { BsFillTrashFill } from 'react-icons/bs'
import { useRemoveAdressMutation } from '../../../../store';
export const AdresList = ({ adres }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const [removeAdres, results] = useRemoveAdressMutation();
  const handleDelete = () => {
    removeAdres(adres);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={toggleExpansion}>

      <div>
        <button type="button" onClick={handleDelete} style={{ background: "none", border: 'none', cursor: 'pointer' }}>
          {results.isLoading ? <CircularProgress variant="determinate" color='success' /> : <BsFillTrashFill />}
        </button>
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

    </div>
  );
};
