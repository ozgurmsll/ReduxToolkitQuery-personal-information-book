import React from 'react'
import { Skeleton } from '@mui/material';
import { useGetUsersQuery, useAddUsersMutation } from '../../store/apis/usersApi';
import { Button, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { UsersListItem } from './UsersListItem';
import { GoFileDirectory } from 'react-icons/go';
import styles from './UserCss/module.userList.css'
export const UserList = () => {
  const { data, isError, isFetching } = useGetUsersQuery();
  const [addUser, results] = useAddUsersMutation();
  const [name, setName] = useState('');
  const handleUserAdd = () => {
    addUser({ name: name });
    setName('');
  };

  let content;
  if (isFetching) {
    content = <Skeleton variant="rounded" sx={{ width: '100%', height: '600px' }} />;
  } else if (isError) {
    content = <div>Something went wrong</div>;
  } else if (data) {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="NavUser">
        <div>
          <GoFileDirectory style={{ fontSize: '40px', marginLeft: '20px' }} />
        </div>
        <div>
          <input className='addinput' type="text" value={name} placeholder='Kişi Ekle' onChange={(e) => setName(e.target.value)} />

          <Button className='addButton' variant="outlined" onClick={handleUserAdd}>
            {results.isLoading ? <CircularProgress variant="indeterminate" /> : "Kişi Ekle+"}
          </Button>
        </div>



      </div>


      <h1 style={{ fontSize: '20px', color: 'black' }}>Kişiler</h1>
      <hr />
      {content}

    </div>
  )
}
