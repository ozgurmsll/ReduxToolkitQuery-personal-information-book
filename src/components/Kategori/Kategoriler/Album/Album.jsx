import React, { useState } from 'react';
import { Checkbox } from '@mui/material';
import { Button, CircularProgress } from '@mui/material';
import { useAddAlbumMutation ,useGetAlbumsQuery} from '../../../../store/apis/AlbumKategori';
import { AlbumListItem } from './AlbumListItem';

export const Album = ({kategori,album}) => {
  const [album2, setAlbum] = useState('');
  const [addAlbum, results] = useAddAlbumMutation();
  const { data, isFetching, isError } = useGetAlbumsQuery(kategori);

  const handleAlbumEkle = () => {
    addAlbum({ kategori, name:album2 });
  };
 
  let AlbumList;
  if (isFetching) {
    AlbumList = <CircularProgress />;
  } else if (isError) {
    AlbumList = <div>Something went wrong</div>;
  } else if (data) {
    AlbumList = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }
  return (
    <div>
      <div>
    <label htmlFor="">Album Adı Giriniz</label>
      <input type="text"  value={album2} onChange={(e)=>setAlbum(e.target.value)} />
      </div>
      <Button variant="contained" onClick={handleAlbumEkle}>
          {results.isLoading ? <CircularProgress variant="indeterminate" color="success" /> : 'Album Ekle'}
        </Button>
        <div>
          Album Listesi
          <hr />
          <div>
            {AlbumList}
          </div>
        </div>
    </div>
  );
};
