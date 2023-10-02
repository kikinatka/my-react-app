jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [topic, setTopic] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        https//content.guardianapis.com/search?q=${topic}&api-key=YOUR_API_KEY
      );
      setArticles(response.data.response.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchArticles();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {
          articles.map((article) => {
            return (
              <div key={article.id}>
                <h2>{article.webTitle}</h2>
                <p>{article.sectionName}</p>
                <a href={article.webUrl}>Read More</a>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default App;
