import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OneUser = () => {
  const { id } = useParams();
  console.log(id);

  const [oneData, setOneData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/get/${id}`);
      const user = await response.json();
      console.log(user.data);
      setOneData(user.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>One User Data</h1>
      <div>
        <hr />
        <h3>{oneData._id}</h3>
        <p>{oneData.name}</p>
        <p>{oneData.age}</p>
        <p>{oneData.email}</p>
        <hr />
      </div>
    </div>
  );
};

export default OneUser;
