import React,{Component} from 'react';
import {Link} from '@reach/router'

class Home extends Component
{
    
    render()
    {
        const {user} = this.props;
        return(
            <div className="container text-center">
            hello {user}
  <div className="row justify-content-center">
    <div className="col-10 col-md-10 col-lg-8 col-xl-7">
      <div className="display-4 text-primary mt-3 mb-2">
        Meeting Log
      </div>
      <p className="lead">
        My first SPA which create meeting and allow user to check-in and do some other cool stuff.
      </p>
      {user==null && (
          <span>
          <Link  to="/Register" className="btn btn-outline-primary mr-2">
        Register
      </Link>
      <Link  to="/Login" className="btn btn-outline-primary mr-2">
        Log In
      </Link>
     

          </span>
      )}
      {
          user && (
            <Link to="/Meetings" className="btn btn-primary">
        Meetings
      </Link>

          )
      }


      
    </div>   
    </div>
</div>

        )
    }
}
export default Home;