import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css';



const NevBar = () => {
  return (
    <div>
      <nav>
        <Link to = '/'><button>Home</button> </Link>
        <Link to = '/Signup'><button>register</button> </Link>
        <Link to = '/Login'><button>Login</button> </Link>
        
    </nav>
    </div>
  )
}

export default NevBar
