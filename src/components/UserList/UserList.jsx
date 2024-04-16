import {useState,useEffect, memo} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { Link } from 'react-router-dom';


function UserList() {
    const [users,setUser]=useState([]);
    useEffect(()=>{
        axios.get('https://dummyapi.io/data/v1/user',
        {
            headers:{
                'app-id':import.meta.env.VITE_APP_ID
            }
        }
        ).then((response)=>{
            const responseObj = response.data.data;
            setUser(responseObj);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {users.map((user) => {
        const labelId = `checkbox-list-secondary-label-${user.id}`;
        return (
          <ListItem
            key={user.id}        
            disablePadding
          >
            <Link className='link' to={`/user/${user.id}`}>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${user.firstName}`}
                  src={user.picture}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={user.firstName+" "+user.lastName}/>
            </ListItemButton>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}

export default memo(UserList);