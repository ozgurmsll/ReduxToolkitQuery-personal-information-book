import React, { useState } from 'react'; 
import { useAddFotoMutation } from '../../../../../store/apis/AlbumApi/AlbumFoto';

export const AddFoto = ({ album }) => {
  const [selectedFoto, setSelectedFoto] = useState(null); 
  const [addFoto] = useAddFotoMutation(album);

  const handleFotoSec = (event) => {
    const selectedFoto = event.target.files[0];
    console.log('Selected foto:', selectedFoto);
    setSelectedFoto(selectedFoto);
  };

  const handleAddFoto = async () => {
    try {
      await addFoto({ foto: selectedFoto });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFotoSec} />
      <button onClick={handleAddFoto}>Ekle</button>
    </div>
  );
};
