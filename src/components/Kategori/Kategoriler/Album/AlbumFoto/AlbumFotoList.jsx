import React from 'react'
import {useGetFotoQuery} from '../../../../../store'
import { Button, CircularProgress } from '@mui/material';

export const AlbumFotoList = ({album}) => {
    const { data, isFetching, isError } = useGetFotoQuery(album);
    let albumFoto;
    if (isFetching) {
        albumFoto = <CircularProgress />;
    } else if (isError) {
        albumFoto = <div>Something went wrong</div>;
    } else if (data) {
        albumFoto = data.map((adres) => {
        return <div key={adres.id} adres={adres} > {adres.name}</div>;
      });
    }

  return (
    <div>
        {albumFoto}
    </div>
  )
}
