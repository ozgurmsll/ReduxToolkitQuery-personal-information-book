import React from 'react';
import { Button, CircularProgress } from '@mui/material';
import { useAddAdressMutation } from '../../../store/apis/adressApi';

export const Adress = ({ kategori }) => {
  const [addAdress, result] = useAddAdressMutation();

  const handleAddAdress = () => {
    addAdress(
     kategori);
  };

  return (
    <div>
      <Button className='addButton' variant="outlined" onClick={handleAddAdress}>
        {result.isLoading ? <CircularProgress /> : 'Adress Ekle'}
      </Button>
    </div>
  );
};
