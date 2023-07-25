import React, { useState } from 'react';
import { useGetKategoriQuery, useAddKategoriMutation } from '../../store/apis/kategoriApi';
import { Skeleton } from '@mui/material';
import { KategoriListItem } from './KategoriListItem';
import { Button, CircularProgress } from '@mui/material';
import styles from './Kategoricss/module.KategoriList.css';
import { CheckBox } from '@mui/icons-material';

export const KategoriList = ({ user }) => {
  const { data, isError, isFetching } = useGetKategoriQuery(user);
  const [addKategori, results] = useAddKategoriMutation();
  const [selectedKategori, setSelectedKategori] = useState(''); 

  const handleKategori = () => {
    let selectedKategoriTitle = '';
    if (selectedKategori === 'album') {
      selectedKategoriTitle = 'Album Kategorisi';
    } else if (selectedKategori === 'adress') {
      selectedKategoriTitle = 'Adress Kategorisi';
    }
  
   
      addKategori({ title: selectedKategoriTitle, user })
     
  
  };
  

  const handleKategoriSelection = (kategoriId) => {
    setSelectedKategori(kategoriId);
  };

  let content;
  if (isFetching) {
    content = <Skeleton variant="rounded" sx={{ width: '100%', height: '200px' }} />;
  } else if (isError) {
    content = <div>Something went wrong</div>;
  } else if (data) {
    content = data.map((kategori) => {
      return <KategoriListItem key={kategori.id} kategori={kategori} />;
    });
  }

  return (
    <>
      <div className="Kategori">
        <div>
          <input
            type="checkbox"
            checked={selectedKategori === 'album'}
            onChange={() => handleKategoriSelection('album')}
          />
          <label>Album Kategorisi</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={selectedKategori === 'adress'}
            onChange={() => handleKategoriSelection('adress')}
          />
          <label>Address Kategorisi</label>
        </div>
        <Button variant="contained" onClick={handleKategori}>
          {results.isLoading ? <CircularProgress variant="indeterminate" color="success" /> : 'Kategori Ekle'}
        </Button>
      </div>
      <div style={{width:'100%'}}>{content}</div>
    </>
  );
};
