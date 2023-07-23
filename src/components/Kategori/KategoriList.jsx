import React from 'react'
import { useGetKategoriQuery,useAddKategoriMutation } from '../../store/apis/kategoriApi'
import { Skeleton } from '@mui/material'
import { KategoriListItem } from './KategoriListItem'
import { Button, CircularProgress } from '@mui/material';
import { useState } from 'react';
import styles from './Kategoricss/module.KategoriList.css'
export const KategoriList = ({ user }) => {
  const { data, isError, isFetching } = useGetKategoriQuery(user)
  const [addKategori, results] = useAddKategoriMutation();
  const [title, setTitle] = useState('');
  const handleKategori = () => {
    addKategori({title: title,user});

    setTitle('');
  }

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
      <div className='Kategori'>

<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
<Button variant="contained" onClick={handleKategori}>
  {results.isLoading ? <CircularProgress variant="indeterminate" color='success' /> : "Kategori Ekle"}
</Button>
</div>
<div>
{content}

</div>
    </>
  
  )
}
