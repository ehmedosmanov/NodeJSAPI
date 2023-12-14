import { useState } from "react";
import axios from 'axios'
import "./App.css";
import { useEffect } from "react";
import Movie from "./Movie";

function App() {
  const [name,setName] = useState('')
  const [movie, setMovie] = useState(null);
  const [category, setCategory] = useState(null);
  const catUrl = 'http://localhost:5000/categories'
  const movUrl = 'http://localhost:5000/movies'
  
  const fetchDataCat = async () => {
    const res = await axios(catUrl)
    const data = res.data
    setMovie(data)
  }

  const fetchDataMovie = async () => {
    const res = await axios(movUrl)
    const data = res.data
    setCategory(data)
  }

  useEffect(() => {
    fetchDataCat()
    fetchDataMovie()
  }, [])
  

  return (
    <div className="forms">
      <Movie/>
      {/* <div className="category">
        <form>
          <div className="box">
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div className="box">
            <label htmlFor="">Desc</label>
            <input type="text" />
          </div>
        </form>
      </div> */}
    </div>
  );
}

export default App;
