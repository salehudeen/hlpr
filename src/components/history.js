import React,{useState,useEffect} from 'react'
import {BottomNavEx} from './bottomNav'
import { Loading } from './loader'


const History = () => {
  
    const [loading, setLoading] = useState(true);
  useEffect(() => {
      
      const loadData = async () => {
          
        // Wait for two second
        await new Promise((r) => setTimeout(r, 2000));
       
        // Toggle loading state
        setLoading((loading) === !loading);
        
      };
        
      loadData();
    }, [])

      
    if (loading) {
       return  <Loading/>
    }
      
    // If page is not in loading state, display page.
    else {


  return (
    <div>
     
     <table>
  <caption>Statement Summary</caption>
  <thead>
    <tr>
      <th scope="col">Sent to</th>
      <th scope="col">Date</th>
      <th scope="col">Donation type</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td data-label="To">Healers Orphanage</td>
      <td data-label="Date">04/01/2022</td>
      <td data-label="Type">Food</td>
      <td data-label="Status">Accepted</td>
   </tr>
   <tr>
      <td data-label="To">AFD Orphanage</td>
      <td data-label="Date">03/02/2022</td>
      <td data-label="Type">Food</td>
      <td data-label="Status">Accepted</td>
   </tr>
   <tr>
      <td data-label="To">Food Bank</td>
      <td data-label="Date">16/15/2022</td>
      <td data-label="Type">Food</td>
      <td data-label="Status">Accepted</td>
   </tr>
   <tr>
      <td data-label="To">Freedom Orphanage</td>
      <td data-label="Date">05/12/2022</td>
      <td data-label="Type">Clothes</td>
      <td data-label="Status">Accepted</td>
   </tr>

    
  </tbody>
</table>

  
<BottomNavEx/>
    </div>
  )
    }
}

export default History