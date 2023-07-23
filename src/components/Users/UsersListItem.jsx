import React from 'react'
import { ExpandablePanel } from '../Panel/ExpandablePanel'
import { KategoriList } from '../Kategori/KategoriList'
import {BsFillTrashFill} from 'react-icons/bs'
import { useRemoveUsersMutation } from '../../store/apis/usersApi'
import {  CircularProgress } from '@mui/material';
import style from './UserCss/module.userList.css'
export const UsersListItem = ({user}) => {
  const [removeUsers,results]=useRemoveUsersMutation();
  const handleDelete=()=>{
    removeUsers(user);
  }

  const header=(
    <>
      <button type="button" onClick={handleDelete} style={{background:"none",border:'none',cursor:'pointer'}}>
      
      {results.isLoading ? <CircularProgress variant="determinate" color='success'  /> : <BsFillTrashFill  />  }
      </button>
        {user.name} Bilgileri

    </>
  )
  return (
    <div>
      
      <ExpandablePanel  header={header} >
        <KategoriList user={user}/>
      </ExpandablePanel>
    </div>
  )
}
