import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useContext, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

import PostContext from '../../Providers/PostProvider';
export default function InputForm(){
    const [postText,setPostText]=useState("");
    const [image,setImage]=useState("");
    const [loading,setLoading]=useState(false);
    const {posts,setPosts} = useContext(PostContext);
    async function createPost(){
        setLoading(true);
        axios.post('https://dummyapi.io/data/v1/post/create',
        {
            owner:'60d0fe4f5311236168a109ca',
            image,
            likes:0,
            publishDate:new Date(),
            text:postText,
        },
        {
            headers:{
                'app-id':import.meta.env.VITE_APP_ID
            }
        }
        ).then((response)=>{
            setLoading(false);
            setPostText("");
            setImage("");
            setPosts([response.data,...posts]);
        }).catch((err)=>{
            setLoading(false);
        })
    }
    return (
        <Box  sx={{marginTop:'1rem'}}>
        <TextField 
            label="Text" 
            fullWidth color="secondary" 
            value={postText}
            onChange={(e)=>setPostText(e.target.value)}
            focused 
        />
        <TextField 
            label="Image Url..." 
            fullWidth 
            variant="standard" 
            color="warning" 
            value={image}
            onChange={(e)=>setImage(e.target.value)}
            focused 
        />
        {(loading)?
        <LoadingButton loading variant="outlined">
            <span>Submit</span>
        </LoadingButton>
        :
        <Button 
            sx={{marginTop:'0.5rem'}} 
            variant="contained" 
            onClick={createPost}>
                Add Post
        </Button>
        }
        
        </Box>
    )
}