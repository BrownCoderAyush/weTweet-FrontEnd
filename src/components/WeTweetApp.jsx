
import MainContainer from './MainContainer/MainContainer'
import Input from './Input/InputForm'
import useAllPostDetails from '../hooks/useAllPostDetails'
import PostContext from '../Providers/PostProvider'


export default function WeTweetApp(){
    const[posts,setPosts]=useAllPostDetails();
    return (
    <PostContext.Provider value={{posts,setPosts}} >
    <Input/>
    <MainContainer/> 
    </PostContext.Provider>
    )
}