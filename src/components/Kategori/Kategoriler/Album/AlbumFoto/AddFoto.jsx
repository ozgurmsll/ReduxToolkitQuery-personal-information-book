import React from 'react'; 

export const AddFoto = ({ album }) => {
  const handleFotoSec = (event) => {
    const selectedFoto = event.target.files[0];
    console.log(selectedFoto);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFotoSec} />
      
    </div>
  );
};
