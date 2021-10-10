import React, {useState,useRef, useContext} from 'react';
import Header from '../components/Header';
import '../style/components/Pc.css';
import AppContext from '../context/AppContext';

const Pc = () =>{
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);
    
    const {producto, AddToCart, state, UpdateProducts} = useContext(AppContext);
    const {Cart} = state;


    const handleAddToCart = (product) =>{
        AddToCart(product);
    }

    const handleSearch = () =>{ 
        setSearch(searchInput.current.value);
    }

    const handleUpdateProduct = (product,value) =>{
        if(value > 0){
           let megusta = product.megusta;
           megusta = parseInt(megusta,10)+value;
           product.megusta = megusta.toString();
           UpdateProducts(product);
        }else{
            let nomegusta = product.nomegusta;
            nomegusta = parseInt(nomegusta,10)+1;
            product.nomegusta = nomegusta.toString();
            UpdateProducts(product);
        }
    }

    const filteredProducts = producto.filter((producto)=>{
       return producto.titulo.toLowerCase().includes(search.toLowerCase());
    })
    return(
        <>
        <Header search={search} searchInput={searchInput} handleSearch={handleSearch}></Header>
        <div className="Section">
            {filteredProducts.map(item =>( 
              <div className="Article" key={item.id}>
                  <div className="Info-Article">
                    <a href="http://">{item.titulo}</a>
                </div>
                <img src={`http://localhost:1337${item.imagen[0].url}`} alt={item.imagen[0].name}/>
                
                <div className="Article-Price">
                    <p>$ 20.000</p>
                </div>
                <div className="Car-Article" >
                    <button type="button" onClick={() => handleAddToCart(item,)}>| <i className="fas fa-shopping-cart"></i></button>
                    <button type="button" onClick={() => handleUpdateProduct(item,1)}>| <i className="far fa-thumbs-up"> {item.megusta}</i></button>
                    <button type="button" onClick={() => handleUpdateProduct(item, -1)}>| <i className="far fa-thumbs-down"> {item.nomegusta}</i></button>
                </div>
            </div>
            ))}
        </div>

            <div className="Aside">
                <strong><p><i className="fas fa-shopping-cart">: {Cart.length > 0 && Cart.length}</i></p></strong>
                
                  {filteredProducts.map(item =>(
                      <div key={item.id}>
                      {item.megusta >= 6 &&
                        <div className="Best-Sellers" key={item.id}>
                           
                             <div className="Sellers-Title">
                                 <h1>Los Mas Populares</h1>
                             </div>
                          <div className="Sellers-Img">
                              <img src={`http://localhost:1337${item.imagen[0].url}`} alt="" />
                          </div>
                          <div className="Sellers-Title">
                              <a href="http://">{item.titulo}</a>
                          </div>
                            <strong >
                                <i className="far fa-thumbs-up"> {item.megusta} |</i>
                                <i className="far fa-heart">: 0 |</i> 
                                <i className="fas fa-shopping-cart"> 0 |</i>
                            </strong>
                          <div className="Sellers-Info">
                              <p>Ref: {item.id}</p>
                          </div>
                       </div>}</div>))}
                    
            </div>
    </>
    )
}
export default Pc;