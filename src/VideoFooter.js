import { MusicNote } from '@material-ui/icons'
import React from 'react'
import "./VideoFooter.css"
import Ticker from "react-ticker";

function VideoFooter({ channel, description, song }) {
    return (
        <div className='videoFooter'>
            <div className='videoFooter__text'>
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className='videoFooter__ticker'>
                    <MusicNote className='videoFooter__icon' />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>

            </div>
            <img className='videoFooter__record' src='https://us.123rf.com/450wm/fabrycs/fabrycs2004/fabrycs200400071/144358077-black-vinyl-record-isolated-on-white-background.jpg?ver=6' />
        </div>
    )
}

export default VideoFooter
