

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React,{ useState ,memo} from 'react';


const PostCard = function PostCard({authorFirstName, image, content}){

   const [isliked,setIsLiked]=useState(false);
  return (
    <Card sx={{ maxWidth: 345, marginBottom: "3rem" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {authorFirstName.substring(0,1)}
          </Avatar>
        }
        title={authorFirstName}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={()=>{setIsLiked(!isliked)}}>
          {
            (isliked)?<FavoriteIcon sx={{color:red[500]}}/>: <FavoriteBorderIcon/>
          }
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default memo(PostCard);