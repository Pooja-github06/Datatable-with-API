import react,{useEffect,useState} from 'react';
import "./style.css";
import axios from 'axios';

const Simpledatatable=()=>{

    const [data,setData]=useState([]);
    useEffect(()=>{
  const fetchdata=async ()=>{
    try{
  const response=await axios.get('https://api.restful-api.dev/objects');
  setData(response.data);
    }catch(err){
  console.log(err)
    }
  }
  fetchdata();
     
  
    },[])
    return(

        
        <div>
      <h4>Datatable with API</h4>
 <table>
<thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
  </tr>
</thead>
<tbody>
  {data.map((item,index)=>
    <tr>
      <td>{item.id}</td>
      <td>{item.name }</td>

    </tr>
  )}
</tbody>

 </table>
    
   
    </div>
    
    )
}

export default Simpledatatable;