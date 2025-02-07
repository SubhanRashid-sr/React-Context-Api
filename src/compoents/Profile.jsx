import { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) return <div style={{textAlign:'center'}}>please login</div>
    
    return <div style={{textAlign:'center'}}><h1>Welcome : {user.username}</h1>
    <p>{user.password}</p>
    </div>
}

export default Profile;
