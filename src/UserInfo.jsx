import React from 'react'

const UserInfo = ({users}) => {

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
          // login.username
        };
        
  return (
    <div id='user-grid'>{mapUsers()}</div>
  )
}

export default UserInfo