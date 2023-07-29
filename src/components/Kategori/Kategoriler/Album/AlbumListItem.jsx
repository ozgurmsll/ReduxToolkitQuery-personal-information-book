import React from 'react'
import { Button, CircularProgress } from '@mui/material';
import { useGetAlbumsQuery } from '../../../../store'
import { useRemoveAlbumMutation } from '../../../../store';
import { BsFillTrashFill } from 'react-icons/bs'

export const AlbumListItem = ({ kategori ,album}) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleDelete = () => {
    removeAlbum(album);
    console.log(album.name);
  }


  return (
    <div>
      <button type="button" onClick={handleDelete} style={{ background: "none", border: 'none', cursor: 'pointer' }}>
        {results.isLoading ? <CircularProgress variant="determinate" color='success' /> : <BsFillTrashFill />}
      </button>
      <div >
        {album.name}
      </div>
    </div>
  )
}
