
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState , useEffect} from 'react';

export default function useUserDetails(){
    const {id}=useParams();
    const [user,setUser]=useState();
    const [loading,setLoading]=useState(true);
    useEffect(()=>{

        axios.get(`https://dummyapi.io/data/v1/user/${id}`,
        {
            headers:{
                'app-id':import.meta.env.VITE_APP_ID
            }
        }
    ).then((response)=>{
        setUser({...response.data});
        setLoading(false);
    }).catch((err)=>{
        console.log(err);
    })
    },[])
    return [user,loading];
}