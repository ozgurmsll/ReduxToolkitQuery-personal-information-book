import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { useAddAdressMutation } from '../../../../store/apis/adressApi';
import { AdressForm } from './adresForm';

export const Adress = ({ kategori }) => {
  const [addAdress, result] = useAddAdressMutation();
  const [address, setAddress] = useState({
    street: '',
    city: '',
    country: '',
  });

  const handleAddAdress = () => {
    addAdress({ kategori, street: address.street, city: address.city, country: address.country });
    setAddress({
      street: '',
      city: '',
      country: '',
    });
  };

  return (
    <div>
      <Button className='addButton' variant="outlined" onClick={handleAddAdress}>
        {result.isLoading ? <CircularProgress /> : 'Adress Ekle'}
      </Button>
      <AdressForm
        street={address.street}
        city={address.city}
        country={address.country}
        setAddress={setAddress}
      />
    </div>
  );
};
