import { useState , useEffect} from 'react'
import axios from 'axios';

export default function useAllPostDetails(){
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        // we will download the content from dummy api
        axios.get('https://dummyapi.io/data/v1/post',
            {
                headers:{
                    'app-id':import.meta.env.VITE_APP_ID
                }
            }
        ).then((response)=>{
            const responseObj = response.data.data;
            setPosts(responseObj);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return [posts,setPosts];
}