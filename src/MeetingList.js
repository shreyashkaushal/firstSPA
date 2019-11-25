import React,{Component} from 'react';
import {GoTrashcan} from 'react-icons/go'
import firebase from './Firebase';
import {navigate} from '@reach/router'
import { FaLink } from 'react-icons/fa';


class MeetingList extends Component
{
    constructor(props)
    {
        super(props)
        this.deleteMeeting = this.deleteMeeting.bind(this)
    }
    deleteMeeting=(e,whichMeeting)=>{
        e.preventDefault();
        const ref = firebase.database().ref(`meetings/${this.props.userID}/${whichMeeting}`);
        ref.remove();
    }

    render()
    {
        const {meetings} = this.props
        const myMeetings = meetings.map(item=>{
            return(
                <div className='list-group-item d-flex' key={item.meetingID}>
               <section className='btn-grp align-self-center' role='group' aria-label='Meetings option'>
               <button className='btn btn-sm btn-outline-secondary' title='Delete Meeting'
                onClick={e=>this.deleteMeeting(e,item.meetingID)}>
                     <GoTrashcan/>
               </button>
               <button className='btn btn-sm btn-outline-secondary' title='Check in'
                onClick={()=>navigate(`/checkin/${this.props.userID}/${item.meetingID}`)}>
                     <FaLink/>
               </button>

               </section>


                <section className='pl-3 text-left align-self-center'>
                   {item.meetingName}
                </section>

                </div>
            )
        })
       
        return(
           <div>
               {myMeetings}
           </div>

        );
    }
}
export default MeetingList;