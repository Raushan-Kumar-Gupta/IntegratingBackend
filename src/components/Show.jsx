import axios from "axios";
import { useEffect, useState } from "react";

const Show=()=>{
    const [data, setData]=useState([]);

    const api='https://fakestoreapi.com/products';

    const getProduct=()=>{
        axios.get(api).then((response=>{
        setData(response.data);
        })).catch(err=>console.log(err));
    }

    const addProduct=()=>{
        axios.post(api,{
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }).then((response=>{
        console.log(response)
        })).catch(err=>console.log(err));
    }
    return (
        <div>
        <h1>hello</h1>
        <button onClick={getProduct} className="px-5 py-2 bg-blue-400 rounded">get Product</button> <br /> <br />
        <button onClick={addProduct} className="px-5 py-2 bg-blue-400 rounded">add Product</button>
  
        <hr />
        {data.map((item, index)=>{
          return <h2 key={index}>{item.title}</h2>
        })}
      </div>
    )
}

export default Show;