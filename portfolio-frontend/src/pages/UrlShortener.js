// src/pages/UrlShortener.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Updated URL Validation Regex (validates both http/https URLs and handles some edge cases)
const isValidUrl = (url) => {
  const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return regex.test(url);
};

// Add http:// if the user hasn't included http/https in the URL
const normalizeUrl = (url) => {
  // Add http:// if no scheme is present
  if (!url.match(/^https?:\/\//)) {
    return `http://${url}`;
  }
  return url;
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  background-color: #282828;
`;

const TabContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #444;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const Tab = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;
  color: ${(props) => (props.active ? '#50FA7B' : '#D1D1D1')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  transition: color 0.3s;

  &:hover {
    color: #50FA7B;
  }

  border-radius: 10px 10px 0 0;
  margin: 0 1rem;
`;

const TabContent = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
  background-color: #1A1A1A;
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 1rem 0;
  border-radius: 5px;
  border: none;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  box-sizing: border-box;  /* Fix padding issues */
  
  &:focus {
    outline: none;
    border: 2px solid #50FA7B;
  }
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  background-color: #50FA7B;
  color: #1A1A1A;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    background-color: #45a65d;
  }
`;

const Result = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  word-wrap: break-word;
`;

const UrlShortener = () => {
  const [activeTab, setActiveTab] = useState('generate');
  const [urlInput, setUrlInput] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [fetchInput, setFetchInput] = useState('');
  const [originalUrl, setOriginalUrl] = useState('');

  // Handle tab switch
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Handle URL shortener generation
  const handleGenerateUrl = () => {
    const normalizedUrl = normalizeUrl(urlInput);
    if (isValidUrl(normalizedUrl)) {
      // Logic for generating short URL
      setShortUrl('https://short.ly/abc123'); // Dummy short URL for now
      setError('');
    } else {
      setError('Please enter a valid URL.');
    }
  };

  // Handle fetch original URL
  const handleFetchUrl = () => {
    const normalizedUrl = normalizeUrl(fetchInput);
    if (isValidUrl(normalizedUrl)) {
      // Logic to fetch original URL from short URL (dummy fetch logic)
      setOriginalUrl('https://www.example.com'); // Dummy original URL for now
      setError('');
    } else {
      setError('Please enter a valid short URL.');
    }
  };

  return (
    <Container>
      <h1>URL Shortener</h1>
      <TabContainer>
        <Tab active={activeTab === 'generate'} onClick={() => handleTabChange('generate')}>
          Generate Short URL
        </Tab>
        <Tab active={activeTab === 'fetch'} onClick={() => handleTabChange('fetch')}>
          Fetch Original URL
        </Tab>
      </TabContainer>

      <TabContent active={activeTab === 'generate'}>
        <InputField
          type="url"
          placeholder="Enter your URL here"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />
        <Button onClick={handleGenerateUrl}>Generate Short URL</Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {shortUrl && <Result>Short URL: {shortUrl}</Result>}
      </TabContent>

      <TabContent active={activeTab === 'fetch'}>
        <InputField
          type="url"
          placeholder="Enter your short URL here"
          value={fetchInput}
          onChange={(e) => setFetchInput(e.target.value)}
        />
        <Button onClick={handleFetchUrl}>Fetch Original URL</Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {originalUrl && <Result>Original URL: {originalUrl}</Result>}
      </TabContent>
    </Container>
  );
};

export default UrlShortener;
