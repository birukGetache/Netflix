import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const List = styled.div`
 
`;

const Lists = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataFromMongo();
  }, []);

  const fetchDataFromMongo = async () => {
    try {
      const response = await fetch('http://localhost:4000/Lists');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      console.log("first"+response.json())
      console.log("second"+jsonData)
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {data.map((item, index) => (
        <List key={index}>
          <p>{item.username}</p>
          <p>{item.password}</p>
        </List>
      ))}
    </div>
  );
};

export default Lists;
