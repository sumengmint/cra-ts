import React, { useState, useEffect } from 'react';
import axios from 'axios';

export interface HitsItem {
  objectID?: string;
  url?: string;
  title?: string;
}

export const Effect: React.FC = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux'
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.hits.map((item: HitsItem) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};
