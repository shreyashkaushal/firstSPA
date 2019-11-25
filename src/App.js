import React,{Component} from 'react';
import './App.css';
import {Router,navigate} from '@reach/router'
import firebase from './Firebase';
import Home from './Home';
import Welcome from './Welcome'
import Navigation from './Navigation'
import Login from './Login'
import Register from './Register'
import Meetings from './Meetings'
import Checkin from './Checkin'

class App extends Component 
{
constructor(props)
{
  super(props)
  this.state={
    user : null,
    displayName:null,
    userID:null
  }
}
addMeeting=meetingName=>{
  const ref = firebase.database().ref(`meetings/${this.state.userID}`);
  ref.push({meetingName:meetingName})
}

componentDidMount()
{
  firebase.auth().onAuthStateChanged(FBUser=>{
    if(FBUser)
    {
      this.setState({
        user:FBUser.displayName,
        displayName:FBUser.displayName,
        userID:FBUser.uid

      })
      const meetingsRef = firebase.database().ref('meetings/' + FBUser.uid)
      meetingsRef.on('value',snapshot=>{
        let meetings = snapshot.val();
        let meetingsList = []
        for(let item in meetings)
        {
          meetingsList.push({
            meetingID :item,
            meetingName:meetings[item].meetingName
          })
        }
        this.setState({
          meetings:meetingsList,
          howManyMeetings:meetingsList.length
        })
      })
    }else{
      this.setState({user:null})
    }

  })
  
}

registerUser= userName=>{
  firebase.auth().onAuthStateChanged(FBUser=>{
    FBUser.updateProfile({
      displayName:userName
    }).then(()=>{
      this.setState({
        user:FBUser,
        displayName:FBUser.displayName,
        userID:FBUser.uid
      })
      navigate('/Meetings') 
    })
  })
}

logoutUser=e=>{
  e.preventDefault();
  this.setState({
    displayName:null,
    userID:null,
    user:null
  })
firebase.auth().signOut().then(()=>{
  navigate('/Login');
})
}
  render()
  {
  return (
    <div>
    <Navigation user={this.state.user}
      logoutUser={this.logoutUser}
    />
   { this.state.user && <Welcome userName={this.state.displayName}
     logoutUser={this.logoutUser}
   />}
    <Router>
    <Home path='/' user={this.state.user}/>
    <Login path='/Login'/>
    <Register registerUser={this.registerUser} path='/Register'/>
    <Meetings path='/Meetings' addMeeting={this.addMeeting}
      meetings={this.state.meetings}
      userID={this.state.userID}
    />
    <Checkin path='/checkin/:userID/:meetingID' 
      
    />
    </Router>
    

    </div>
    
  );
}
}

export default App;
