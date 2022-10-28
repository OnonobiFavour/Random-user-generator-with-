import React, { useEffect } from 'react'
import { useState } from 'react'
import Loading from './Loading';

const User = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // setLoading(true)
    fetch('https://randomuser.me/api/?results=20&nat=UK')
    .then((response) => response.json())
    .then((userData) => setUser(userData.results));
    setLoading(false)
  }, []);

    const mapUsers = () => {
      console.log(users);
      return users.map((user, i) =>
       <div className = 'profile' key={i}>
        <img src={user.picture.large} alt={user.login.username} />
        <div className="user">
        <h4>Name: {user.name.first} {user.name.last}</h4>
        <h4>Email: {user.email}</h4>
        <h4>Gender: {user.gender}</h4>
        </div>
       </div> 
        )
        if(loading){
          return(<Loading></Loading>)
        }
        let pages = []
        for (let i = 1; i< 10; i++){
          pages.push[i];
          // console.log(pages)
        }
      // login.username
      // picture.medium  
    };

    
    return (
      
      <section className="section">
        <h2 className='user-h2'>User Data</h2>
        <div id='user-grid'>{mapUsers()}</div>

       </section>


)
}

// pagination



export default User;

































