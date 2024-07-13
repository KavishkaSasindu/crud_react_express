import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userData, setUserData] = useState([]);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/");
      const data = await response.json();
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deletData = async (userId) => {
    try {
      const deleteUser = await fetch(`http://localhost:3000/delete/${userId}`, {
        method: "DELETE",
      });
      const data = await deleteUser.json();
      console.log(data);
      location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {userData.data?.map((user, index) => (
          <div key={index}>
            <hr />
            <h3>id: {user._id}</h3>
            <p>name: {user.name}</p>
            <p>age: {user.age}</p>
            <p>email: {user.email}</p>
            <div>
              <button
                onClick={() => {
                  navigate(`/one/${user._id}`);
                }}
              >
                Read
              </button>
              <button
                onClick={() => {
                  navigate(`/update/${user._id}`);
                }}
              >
                Update
              </button>
              <button
                onClick={() => {
                  deletData(user._id);
                }}
              >
                Delete
              </button>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
