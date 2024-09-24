import React, { useState, useEffect} from 'react';
import axios from 'axios';
import logo from './assets/v2.gif'

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [copySuccess, setCopySuccess] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const host = 'https://link.ktzr.lol/';

    // State to hold the message from the query parameter
    const [message, setMessage] = useState('');

    // Function to read query parameters
    const getQueryParameter = (name) => {
      const params = new URLSearchParams(window.location.search);
      return params.get(name);
    };

    useEffect(() => {
      // Load Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-MNKB2PDWF0'); 
  
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3HPPKYCHD1'; 
      script.async = true;
      document.head.appendChild(script);
    }, []);

    // Effect to read the message from the query parameters when the component mounts
    useEffect(() => {
      const msg = getQueryParameter('message');
      if (msg) {
        setMessage(decodeURIComponent(msg)); //display error for 5 seconds
        setTimeout(() => {
          setMessage();
        }, 5000);
      }
    }, []);


  const shortenUrl = async () => {
    if (!originalUrl){
      setErrorMsg('URL is required.');
      return;
    }
    setErrorMsg('');
    try {
      const response = await axios.post(`${host}api/shorten`, { originalUrl });
      if (response.data.shortUrl) {
        setErrorMsg();
        setShortUrl(`${host}api/${response.data.shortUrl}`);
      } else {
        setShortUrl();
        setErrorMsg('Invalid URL');
        throw new Error('Short URL not found in response');
      }
    } catch (error) {
      console.error('Error shortening URL', error);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false); //remove copy message after 2.5 seconds
      }, 2500);
    } catch (err) {
      console.error('Failed to copy: ', err);
      setCopySuccess('Failed to copy!');
    }
  };

  return (
    <div className="App">
      <div className="blob">
      <div>
        <div className='title-div'>
          <img className="logoGif" src={logo} alt="icon" />
          <h1 className='barlow-condensed-regular'>URL Shortener</h1>
        </div>
          {message && <p className="ErrorUrlMessage">{message}</p>}
      </div>
          <input
            type="text"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            placeholder="Enter URL"
          />
          <button onClick={shortenUrl} className='shorten-button'><span>Shorten  </span></button>
          {shortUrl && <div className={`result-div copy-text ${copySuccess? 'active' : ''}`}>
          <p className='result barlow-condensed-regular'>Short URL: <a href={shortUrl}>{shortUrl}</a></p>
          <button onClick={handleCopy} id="copyButton"><i className="fa fa-copy"></i></button>
          </div>}
          {<p className='result barlow-condensed-regular'>{errorMsg}</p>}
      </div>
    </div>
  );
}

export default App;
