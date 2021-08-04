
import React, { useRef, useState } from 'react'
import "./Video.css"
import ReactPlayer from 'react-player'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ url, channel, description, song, likes, messages, shares }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className='video'>

            <div className='video__player'>
                <ReactPlayer onClick={handleVideoPress} ref={videoRef} url={url} height='800px' autoplay={true} width='500px' loop={true} />
                {/* <ReactPlayer url='' loop={true} /> */}

            </div>

            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} messages={messages} shares={shares} />

            {/* Video footer */}
            {/* video sidebar */}
        </div>
    )
}

export default Video
