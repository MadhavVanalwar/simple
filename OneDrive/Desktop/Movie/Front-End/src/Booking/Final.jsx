import React from "react";
import Card from './Cards';
import Sdata from './Sdata';
import { useState} from "react";

function Final(){
  const [query, setQuery] = useState('');


    const handleSearch = event => {
        setQuery(event.target.value);
      };
    
      const filteredData = Sdata.filter(item =>
        item.sname.toLowerCase().includes(query.toLowerCase()) ||
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    

    return(
        <>
            <input placeholder="Search Your City" onChange={handleSearch} className='input' type='text' />


        {filteredData.map((val) => {
    return(
    
        <Card
        key={val.id}
        imgsrc={val.imgsrc}
        sname={val.sname}
        title={val.title}
        link={val.link}
        />
    )
})}
        </>
    )
}
export default Final;