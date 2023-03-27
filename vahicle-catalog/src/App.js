import React, { useState } from "react"
import './App.css';
import axios from "axios"
import vehicles from "./VahicleData.json"

function App() {
  const [search, setsearch] = useState("")
  const [filter, setFilter] = useState("")

  return (
    <div className="App">
      <h1 className="header">VEHICLE MANUFACTURERS</h1>
      <div><span className="search">Search: </span>
      <input className="vahicle" value={search} onChange={(e)=>setsearch(e.target.value)} type="text" />
      </div>
      
      <label className="selecttype"> <span>Filter by vehicles Type:  </span>
        < select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Passenger Car">Passenger Car</option>
          <option value="Truck">Truck</option>
          <option value="Multipurpose Passenger vehicle (MPV)">Multipurpose Passenger Vehicle (MPV)</option>
          <option value="Low speed vehicle (LSV)">Low Speed Vehicle (LSV)</option>
          <option value="luxrious Car">luxrious Car</option>
          <option value="Bus">Bus</option>
          <option value="Incomplete Vehicle">Incomplete Vehicle</option>



        </select>

      </label>


      <section>
      </section>
      <br />
      <br />
      <table id="data">
        <tr>
          <th className="vahiclename">Name</th>
          <th className="country" >country</th>
          <th className="vahicletype">type</th>
        </tr>
        {
          vehicles.filter((vahicleinfo) => vahicleinfo.name.toLowerCase().includes(search.toLowerCase()) && (filter === "" || vahicleinfo.type === filter)).map(
            (vahicleinfo) => {
              return <tr>
                <th className="name">{vahicleinfo.name}</th>
                <th className="country">{vahicleinfo.country}</th>
                <th className="type">{vahicleinfo.type}</th>


              </tr>
            }
          )

        }
      </table>
    </div>
  );
}

export default App;