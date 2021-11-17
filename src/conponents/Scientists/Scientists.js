import React from 'react';
import { useEffect, useState } from 'react';
import DisplayScientist from './DisplayScientist/DisplayScientist';
import './Scientists.css';
import Sidebar from './Sidebar/Sidebar';

const Scientists = () => {
  // load scientists data
  const [scientists, setScientists] = useState([]);
  useEffect(()=>{
    fetch("./scientist.json")
    .then(res => res.json())
    .then(data => setScientists(data));
  }, []);

  // handel selected scientists
  const [selected, setSelected] = useState([]);
  const selectScientist = id => {
    // if this id already added it will be ignored
      const isAdded = selected.find(selectId => selectId === id);
      if(!isAdded){
        const newSelect = [...selected, id];
        // ei id ta jodi age add na thake tahole eita state e add hobe
        setSelected(newSelect);
      }else{
        // ei id ta agei add thakle console kore inform korve
        console.log("This scientist already selected");
      }
  }
  return (
    <article className="scientists-container">
      <div className="container scientists-layout">
        <aside className="sidebar">
              <Sidebar selected={selected} scientist={scientists} />
          </aside>
          <div className="scientists">
            {
              scientists.map(scientist => <DisplayScientist key={scientist.id} scientist={scientist} selectScientist={selectScientist} />)
            }
          </div>        
      </div>
    </article>
  );
};

export default Scientists;