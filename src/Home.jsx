import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const Navigate = useNavigate();
  const handleclick = () =>{
    Navigate('/user')
  }
  return (
    <section className='header'>
        <h1>Fetch random users API</h1>
        <div className="btn">
        <button className='button'onClick={handleclick} >DO AS SAID</button>
        <button className='button' >RANDOM.ME</button>
        </div>
    </section>
  )
}

export default Home