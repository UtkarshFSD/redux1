import React from 'react'
import { useState } from 'react';
import { addSearch, searchPic } from '../Actions/Action';
import { useDispatch } from 'react-redux';

const Home = () => {
    const [searchedItem, setSearchedItem] = useState('');
    const dispatch= useDispatch();

     console.log('searchitem=>', searchedItem)
  return (
    <div className='App'>
         <h1> Snapshot</h1>
         <div className='search'>
            <input type='text'
            placeholder='search...'
           value={searchedItem}
           onChange={(e)=>{
            setSearchedItem(e.target.value)
           }}
            
           ></input>
           <button onClick={()=>dispatch(searchPic(searchedItem))}>Search</button>
           </div>
           <div className='lists'>
  <ul>
    <li><button >
    Mountains</button></li>
    <li><button>Beaches</button></li>
    <li><button>Birds</button></li>
    <li><button>Food</button></li>
  </ul>
</div>
         </div>

   
  )
}

export default Home