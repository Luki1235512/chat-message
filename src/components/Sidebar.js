import React from 'react';
import './css/Sidebar.css';
import SidebarChannel from './SidebarChannel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';
import {Avatar} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, { auth } from './firebase';
import { useState } from 'react';
import { useEffect } from 'react';

function Sidebar() {

    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([])

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data(),
            })))
        ))
    }, [])

    const handleaddChannel = () => {
        const channelName = prompt('Enter a new channel name');

        if (channelName) {
            db.collection('channels').add({
                channelName: channelName,
            })
        }
    }

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <h3>Nazwa kanału</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Kanały tekstowe</h4>
                    </div>
                <AddIcon onClick={handleaddChannel} className="sidebar__addChannel" />
                </div>
                <div className="sidebar__channelsList">
                    {channels.map(({id, channel}) => (
                        <SidebarChannel key={id} id={id} channelName={channel.channelName}/>
                    ))}
            </div>
        </div>

        <div className="sidebar__profile">
            <Avatar onClick={() => auth.signOut()} src={user.photo} />
            <div className="sidebar__profileInfo">
                <h3>{user.displayName}</h3>
                <p>#{user.uid.substring(0, 5)}</p>
            </div>

            <div className="sidebar__profileIcons">
                <SettingsIcon />
            </div>
        </div>
    </div>
    )
}

export default Sidebar
