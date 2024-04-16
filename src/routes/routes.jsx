import {Routes,Route} from 'react-router-dom';
import UserDetails from '../components/UserDetails/UserDetails';
import WeTweetApp from '../components/WeTweetApp';

export default function CustomRoutes(){
    return (
        <Routes>
            <Route path="/" element={<WeTweetApp/>}/>
            <Route path="/user/:id" element={<UserDetails/>} />
        </Routes>
    )
}