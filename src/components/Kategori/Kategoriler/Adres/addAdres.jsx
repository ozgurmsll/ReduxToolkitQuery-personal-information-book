import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { useAddAdressMutation ,useGetAdressQuery} from '../../../../store/apis/adressApi';
import { AdressForm } from './adresForm';
import style from './adresCss/module.addAdres.css'
import { AdresList } from './AdresList';
export const Adress = ({ kategori }) => {
  const [addAdress, result] = useAddAdressMutation();
  const { data, isFetching, isError } = useGetAdressQuery(kategori);

  const [address, setAddress] = useState({
    street: '',
    city: '',
    country: '',
    adresName:''
  });

  const handleAddAdress = () => {
    addAdress({ kategori, street: address.street, city: address.city, country: address.country,adresName:address.adresName });
    setAddress({
      street: '',
      city: '',
      country: '',
      adresName:'',
    });
  };
 let adresContent;
  if (isFetching) {
    adresContent = <CircularProgress />;
  } else if (isError) {
    adresContent = <div>Something went wrong</div>;
  } else if (data) {
    adresContent = data.map((adres) => {
      return <AdresList key={adres.id} adres={adres} />;
    });
  }
  return (
    <div className='AdresPanel'>
       <div>
        AdresList
        <hr />
        {adresContent}
     </div>
      <div>
        <Button className='addButton' variant="outlined" onClick={handleAddAdress}>
          {result.isLoading ? <CircularProgress /> : 'Adress Ekle'}
        </Button>
        <AdressForm
          street={address.street}
          city={address.city}
          country={address.country}
          adresName={address.adresName}
          setAddress={setAddress}
        />

      </div>
    
    </div>
  );
};
