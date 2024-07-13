import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    name: "",
    age: "",
    email: "",
  });

  const changeValues = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      });

      const data = await response.json();
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Create Page</h1>
      <div>
        <form method="post" onSubmit={handleSubmit}>
          name: <br />
          <input type="text" name="name" onChange={changeValues} />
          <br />
          age: <br />
          <input type="text" name="age" onChange={changeValues} /> <br />
          email: <br />
          <input type="email" name="email" onChange={changeValues} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
