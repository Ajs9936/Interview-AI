import React from 'react'
import { AuthContext } from '../auth.context'
import { useContext } from 'react'
// import { useAuth } from '../hooks/useAuth'
import {useAuth} from '../hooks/useAuth'

const Navbar = () => {

    // const {user} = useAuth()
    const { user } = useContext(AuthContext)
    const logoutBtn = useAuth().handleLogout

    // console.log(user)
  return (
    <>
    
<div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingInline: '2rem',
    paddingBlock: '1rem',
    alignItems: 'center',
    boxSizing: 'border-box',
    zIndex: 1000,
  }}>

    <div>
        <p style={{ fontSize: '1.8rem', fontWeight:'bold',  paddingInline: '1rem', paddingBlock:'.35rem' , borderRadius: '.5rem', color:'#cfffe2'}}>Resume-AI</p>
    </div>

    <div style={{display: 'flex', justifyContent: 'space-around', gap:"2rem", alignItems: 'center'}}>

       {user != null && (
            <p style={{backgroundColor: 'lightBlue',  paddingInline: '1rem', paddingBlock:'.35rem' , borderRadius: '.5rem', color: 'black'}}>Hi, {user?.username}</p>
        )}

        {user != null && (
        <p style={{backgroundColor: 'red',  paddingInline: '1rem', paddingBlock:'.35rem' , borderRadius: '.5rem'}}
        onClick={logoutBtn}
        >Logout</p>
        )}
    </div>
      
      </div>
    </>
  )
}

export default Navbar
