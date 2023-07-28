import React, { useState } from 'react';
import { Checkbox } from '@mui/material';
import { Button, CircularProgress } from '@mui/material';
import { useAddAlbumMutation } from '../../../../store/apis/AlbumKategori';
import { AlbumListItem } from './AlbumListItem';

export const Album = ({kategori}) => {
  const [album, setAlbum] = useState('');
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAlbumEkle = () => {
    addAlbum({ kategori, name:album });
  };
 

  return (
    <div>
      <div>
    <label htmlFor="">Album Adı Giriniz</label>
      <input type="text"  value={album} onChange={(e)=>setAlbum(e.target.value)} />
      </div>
      <Button variant="contained" onClick={handleAlbumEkle}>
          {results.isLoading ? <CircularProgress variant="indeterminate" color="success" /> : 'Album Ekle'}
        </Button>
        <div>
          Album Listesi
          <hr />
          <div>
            <AlbumListItem kategori={kategori}/>
          </div>
        </div>
    </div>
  );
};
