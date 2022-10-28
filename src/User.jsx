import React, { useEffect } from 'react'
import { useState } from 'react'
import Loading from './Loading';
import Paginate from './Paginate';
import UserInfo from './UserInfo';

const User = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(4);

  const lastIndex = currentPage * 4;
  const firstIndex = lastIndex - 4;
  const itemToDisplay = users.slice(firstIndex, lastIndex)


  useEffect(() => {
    // setLoading(true)
    fetch('https://randomuser.me/api/?results=20&nat=UK')
      .then((response) => response.json())
      .then((userData) => setUser(userData.results));
    setLoading(false)
  }, []);


  if (loading) {
    return (<Loading></Loading>)
  }




  return (

    <section className="section">
      <h2 className='user-h2'>User Data</h2>
      <UserInfo users={itemToDisplay}></UserInfo>
      <Paginate 
      totalPost={users.length}
      dataPerPage={dataPerPage}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      ></Paginate>
    </section>


  )
}

// pagination



export default User;

































