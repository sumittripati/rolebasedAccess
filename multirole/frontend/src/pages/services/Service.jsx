import React from 'react'
import { useEffect, useState } from 'react';


const Service = () => {
  let [serviceData, setServiceData] = useState(null);
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  let BASEURL = import.meta.env.VITE_SERVER_URL;

  console.log("service token",token);
  
  useEffect(() => {
    const fetchData = async () => {
      let response;
      try {
        response = await fetch(`${BASEURL}/api/auth/service`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        console.log("from promice",response,data);
        setServiceData(data);
      } catch (error) {
        console.error('Error fetching service data:', error);
        return error;
      }
    }
    fetchData();
  }, [token]);
  console.log("service all data",serviceData);
  let message = serviceData ? serviceData.message : 'Loading...';

  {loding && <p>Loading...</p>}
  {error && <p>Error: {error.message}</p>}
  return (
    <div>
        <h1>Service Page</h1>
        <p>{message}</p>
    </div>
  )
}

export default Service
