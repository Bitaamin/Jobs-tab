import React, { useState, useEffect } from "react"
import './App.css';
import { AiFillCaretRight } from "react-icons/ai"
import axios from "axios"

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:30/")
      .then((res) => {
        // console.log(res.data.result);
        setData(res.data.result)

      })
  }, []);


  function User1(id) {
    data.map((e) => {
      if (e.id === id) {
        setUser(e)
        console.log(e);
      }
    })
  }


  return (
    <section className="container">
      <h1 className="title">Experience</h1>
      <div className="job">
        <div className="company-tab">
          {data.map((e) => {
            return (
              <h4 onClick={() => User1(e.id)} >{e.company}</h4>

            )
          })};
        </div>
        <div className="company-content">
          <h2 className="job-title">Full Stack Web Developer</h2>
          <p className="company-name">John</p>
          <p className="date">December 2015 - Present</p>
          <div className="text">
            <AiFillCaretRight />
            <p>{user?.duties[0]}</p>
            <p>{user?.duties[1]}</p>
            <p>{user?.duties[2]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
