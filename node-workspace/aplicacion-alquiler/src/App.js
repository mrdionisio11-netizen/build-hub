import './App.css';
import { useState } from 'react';
import ComponenteMultiple from "./components/ComponenteMultiple";

function App() {
  
const[dias, setDias]=useState(0);
const[opcion, setOpcion]=useState("Hotel");

const selector=(e)=>{
  setOpcion(e.target.value);

};


return <div>
<select onChange={selector}>

<option value="Hotel">Hotel</option>
<option value="Coche">Coche</option>

</select>

<input type="text" onChange={e=>setDias(e.target.value)} placeholder='introduce el numero de días'></input>

{opcion==="Hotel" && <ComponenteMultiple opcion={1} dias={dias}/>}

{opcion==="Coche" && <ComponenteMultiple opcion={2} dias={dias}/>}


</div>


}

export default App;
