import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';
import './App.css';
import AppContext from './context';

const App = () => {
  const [value, setValue] = useState('game');
  const [videoId, setVideoId] = useState('');
  const [videoInfo, setVideoInfo] = useState('');

  const despatcherEvents = (action, payload) => {
    switch (action) {
      case 'Side-Bar-Click': {
        setValue(payload);
        break;
      }
      case 'search': {
        setValue(payload);
        break;
      }
      case 'video-id': {
        setVideoId(payload);
        break;
      }
      case 'videoInfo': {
        setVideoInfo(payload);
        break;
      }
      default: {
        console.log('Something went wrong app 20');
      }
    }
  };
  return (
    <AppContext.Provider value={{ videoInfo,value, videoId, despatcherEvents }}>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
