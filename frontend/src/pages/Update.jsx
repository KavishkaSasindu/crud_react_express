import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/get/${id}`);
      const user = await response.json();
      console.log(user.data);
      setUserData(user.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const changeValues = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Update Page</h1>
      <div>
        <form method="post" onSubmit={handleSubmit}>
          name : <br />
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={changeValues}
          />
          <br />
          age : <br />
          <input
            type="text"
            name="age"
            value={userData.age}
            onChange={changeValues}
          />{" "}
          <br />
          email : <br />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={changeValues}
          />{" "}
          <br />
          <button type="submit">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
