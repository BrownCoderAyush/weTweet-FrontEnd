import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UserList/UserList';

export default function MainContainer() {

  return (
    <Box
        container
        sx={{ width: '100%' , mt:'4rem' }}
    >
      <Grid container alignItems="start" justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
            container             
            direction={"column"} >
            {/**Users */}
            <UserList/>
        </Grid>
        <Grid 
            container 
            justifyContent={"center"} 
            direction={"column"} 
            alignItems={"center"} 
            xs={12} md={6}
        >
              {/**Posts */}
            <PostCardList/>
        </Grid>
      </Grid>
    </Box>
  );
}