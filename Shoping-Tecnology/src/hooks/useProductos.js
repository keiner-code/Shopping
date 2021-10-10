import { useEffect, useState } from "react";
import axios from 'axios';
import initialState from '../initialState.js';

const API = 'http://localhost:1337/Productos';

const useProducts = () =>{
    const [state, setState] = useState(initialState);
    const [producto, setProductos] = useState([]);

    const [statehome, setStateHome] = useState(initialState.ProductHome);
    const [producthome, setProducthome] = useState([])

    useEffect(() => {
        axios.get(API)
       .then(datos => setProductos(datos.data));
        
    }, []);
   
    const AddToCart = payload =>{
        setState({
            ...state,
            Cart: [...state.Cart, payload],
        });
    }

    const EmlargeProduct = product =>{
         setProducthome(product);
    }

    /*const ValidateUsers =  (state) =>{
         const datesusers = initialState.DateUsers;

         datesusers.map(value =>{
             if (value.email == state.email && value.password == state.password){
                   setEstado(value)
             }
         } )
    }*/
       //console.log(estado);
    const UpdateProducts = (product) =>{
            axios.put(`http://localhost:1337/Productos/${product.id}`,product)
            .then(response => {
                //console.log(response);
            });
            setState({
                ...state,product
            })
    }
    return {
        AddToCart,
        UpdateProducts,
        EmlargeProduct,
        state,
        statehome,
        producthome,
        producto,
    };
}

export default useProducts;