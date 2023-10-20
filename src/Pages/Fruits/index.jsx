import axios from 'axios';
import React from 'react'
import { useState, useEffect } from "react"

const Fruits = () => {
    const [ fruits, setFruits ] = useState([]);

    useEffect(()=>{
        axios({
            method: "GET",
            url: "/server/fruits",
        }).then((res)=>{
            console.log(res.data);
            setFruits(res.data)
        })

    },[])

console.log(fruits);
  return (
    <div>Show all fruits here:
        <ul>
        {fruits.map((fruit)=>{
           return <li key={fruit._id}>
                <p>{fruit.name}</p>
                <p>{fruit.color}</p>
                <p>{fruit.readyToEat}</p>
                <p>{fruit.age}</p>

            </li>
        })}
        </ul>
    </div>
  )
}

export default Fruits