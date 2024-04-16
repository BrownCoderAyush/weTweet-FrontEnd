import * as  React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import { useParams } from 'react-router-dom';
import axios from 'axios';
import useUserDetails from '../../hooks/useUserDetails';


export default function UserDetails(){
    const [user,loading] = useUserDetails();

    if(loading){
        return <div>Loading...</div>
    }
    return (

        <Card sx={{ display: 'flex' , mt:"2rem"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {user.firstName+" "+user.lastName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {user.email}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={user.picture}
        alt={user.firstName}
      />
        </Card>
     
    )
}