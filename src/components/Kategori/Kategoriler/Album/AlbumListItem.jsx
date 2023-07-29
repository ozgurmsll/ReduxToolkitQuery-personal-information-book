import React, { useState } from 'react';
import { BsChevronDown, BsChevronLeft } from 'react-icons/bs';
import { AddFoto } from './AlbumFoto/AddFoto';
import { Button, CircularProgress } from '@mui/material';
import { useGetAlbumsQuery } from '../../../../store'
import { useRemoveAlbumMutation } from '../../../../store';
import { BsFillTrashFill } from 'react-icons/bs'
import { AlbumFotoList } from './AlbumFoto/AlbumFotoList';
export const AlbumListItem = ({ kategori ,album}) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDelete = () => {
    removeAlbum(album);
    console.log(album.name);
  }
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div onClick={toggleExpansion}>
      <div>
      <button type="button" onClick={handleDelete} style={{ background: "none", border: 'none', cursor: 'pointer' }}>
        {results.isLoading ? <CircularProgress variant="determinate" color='success' /> : <BsFillTrashFill />}
      </button>
      {album.name}

      {isExpanded ? <BsChevronDown /> : <BsChevronLeft />}
        {isExpanded && (
          <div>

            <AddFoto album={album} key={album.id} />
            <AlbumFotoList  key={album.id} album={album} />
          </div>
        )}
      </div>
     
    </div>
  )
}
