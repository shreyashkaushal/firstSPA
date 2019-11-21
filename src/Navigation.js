import React,{Component} from 'react';
import { FaUsers } from 'react-icons/fa'
import {Link} from '@reach/router'


class Navigation extends Component
{
    
    render()
    {
        const {user,logoutUser} = this.props;
        return(
            <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
              <FaUsers className='mr-1' /> Meeting Log
              </Link>
              <div className="navbar-nav ml-auto">
              {user && <Link className="nav-item nav-link" to="/Meetings">
                    meetings
                  </Link>
               }
               { !user && 
                      
                       <Link className="nav-item nav-link" to="/Login">
                    log in
                  </Link>
                 
               }
               { !user &&
               <Link className="nav-item nav-link" to="/Register">
                    register
                  </Link>
               }

                       
                   
               
                 {user && <Link className="nav-item nav-link" to="/Login" onClick={e=>logoutUser(e)}>
                    log out
                  </Link> }
                  
              </div>
            </div>
          </nav>
        )
    }
}
export default Navigation;