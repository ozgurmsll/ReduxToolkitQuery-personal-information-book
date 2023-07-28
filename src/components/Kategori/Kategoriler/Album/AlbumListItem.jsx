import React from 'react'
import { Button, CircularProgress } from '@mui/material';
import{useGetAlbumsQuery} from '../../../../store/apis/AlbumKategori'

export const AlbumListItem = ({kategori}) => {
    const { data, isFetching, isError } = useGetAlbumsQuery(kategori);

    let AlbumContent;
    if (isFetching) {
      AlbumContent = <CircularProgress />;
    } else if (isError) {
      AlbumContent = <div>Something went wrong</div>;
    } else if (data) {
      AlbumContent = data.map((album) => {
        return <div key={album.id}>{album.name}</div>;


      });
    }
  return (
    <div>
        
        {AlbumContent}
    </div>
  )
}
