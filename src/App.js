import axios from './axios';
import { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';
function App() {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const response = await axios.get('/v2/posts')
      setVideo(response.data)
      return response;
    }
    fetchPost();
  }, [])

  console.log(videos)
  return (
    <div className="app">


      <div className='app__videos'>
        {videos.map(({ url, channel, description, song, likes, messages, shares }) => (
          <Video
            url={url}
            channel={channel}
            song={song}
            likes={likes}
            messages={messages}
            description={description}
            shares={shares}
          />
        ))}
        {/* <Video url={'"https://www.youtube.com/watch?v=cWtSJfljk8E"'}
          channel="johny"
          description="This is a beautiful song"
          song="Lo sento Dinero set money"
          likes={250}
          messages={841}
          shares={25}
        />
        <Video url={'"https://www.youtube.com/watch?v=-XW7jowl0Ps"'}
          channel="ronnie"
          description="Woo hoo my favourite"
          song="Even ifthe sky is falling down"
          likes={900}
          messages={451}
          shares={844}
        />

        <Video url={'"https://www.youtube.com/watch?v=nC4guP0znqQ"'}
          channel="unknown"
          description="We are never getting older"
          song="Gimme more"
          likes={250}
          messages={700}
          shares={122}
        /> */}


      </div>

    </div>
  );
}

export default App;
