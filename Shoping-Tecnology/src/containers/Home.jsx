import React, {useContext, useState} from "react";
import '../style/components/home.css';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AppContext from "../context/AppContext";
import Ampliar from '../assets/static/ampliar.png';
import initialState from "../initialState";

const Home = () =>{
        const {statehome, EmlargeProduct, producthome} = useContext(AppContext);
        const [StateForm, setEstateForm] = useState({email: '',});
 
        const handleProductHome = (products) =>{
            EmlargeProduct(products);
        }
        const handleInput = event =>{
             setEstateForm({
                 ...StateForm,
                 [event.target.name]: event.target.value,
             })
        }

        const handleSubmnit = event =>{
            event.preventDefault();
            const initial = initialState.DateUsers
            for(let i =0; i < initial.length; i++) {
              if(initial[i].email == StateForm.email && initial[i].password == StateForm.password){ 
                  break
                }
            }
        }

    return(
        <>
        <div className="login">
           <div className="form">
               <h1>Iniciar Session</h1>

                <form onSubmit={handleSubmnit}>
                    <div className="form-item">
                        <label htmlFor="email">Correo</label>
                        <input 
                            name="email"
                            type="text" 
                            placeholder="name@dominio.com.co"
                            onChange={handleInput}
                            />
                    </div>

                    <div className="form-item">
                        <label htmlFor="password">Password</label>
                        <input 
                            name="password"
                            type="password"
                            placeholder="*********"  
                            onChange={handleInput}
                            />
                    </div>

                    <div className="form-item">
                        <input type="submit" value="Ingresar"/>
                    </div>
                </form>

            </div> 

                    <div className="register">
                        <button type="button" >Registrarse</button>
                    </div>

        </div>

        <div className="shoping-info">

            {producthome.id > 0 ? (              
            <div className="info">
                <div className="info-img">
                    <Carousel showArrows={false} showStatus={false} verticalSwipe={true} autoPlay={true} showArrows={true} infiniteLoop={true} showThumbs={false}>
                        <div><img src={producthome.image} height="300px" alt=""/><p className="legend">Parte Delantera</p></div>
                        <div><img src={producthome.image} height="300px" alt=""/><p className="legend">Parte Trasera</p></div>
                        <div><img src={producthome.image} height="300px" alt=""/><p className="legend">De Frente</p></div>
                        <div><img src={producthome.image} height="300px" alt=""/> <p className="legend">Lado Atras</p></div>
                   </Carousel>
                </div>
                   <div className="info-list">
                       <ul>
                           <li>Procesador: <a href="http://">{producthome.processor}</a></li>
                           <li>Memoria Ram: <a href="http://">{producthome.ram}</a></li>
                           <li>Disco Duro: <a href="http://">{producthome.hdd}</a></li>
                           <li>Bios: <a href="http://">{producthome.bios}</a></li>
                           <li>Zocalo: <a href="http://">{producthome.baseboards}</a></li>
                           <li>Fuente De Poder: <a href="http://">{producthome.powersuply}</a></li>
                           <li>Wiffi: <a href="http://">{producthome.wiffi}</a></li>
                           <li>Monitor: <a href="http://">{producthome.monitor}</a></li>
                           <li>Mause: <a href="http://">{producthome.mouse}</a></li>
                           <li>Teclado: <a href="http://">{producthome.keyboard}</a></li>
                       </ul>
                   </div>
            </div> ):
    /*-----------------------------------------------*/  
                    <div className="info">
                    <div className="info-img">
                        <Carousel showArrows={false} showStatus={false} verticalSwipe={true} autoPlay={true} showArrows={true} infiniteLoop={true} showThumbs={false}>
                            <div><img src={Ampliar} height="300px" alt=""/><p className="legend">Precione ampliar</p></div>
                            <div><img src={Ampliar} height="300px" alt=""/><p className="legend">Precione ampliar</p></div>
                            <div><img src={Ampliar} height="300px" alt=""/><p className="legend">Precione ampliar</p></div>
                            <div><img src={Ampliar} height="300px" alt=""/> <p className="legend">Precione ampliar</p></div>
                    </Carousel>
                    </div>
                    <div className="info-list">
                        <ul>
                            <li>Procesador: <a href="http://">Por Favor</a></li>
                            <li>Memoria Ram: <a href="http://">Ampliar</a></li>
                            <li>Disco Duro: <a href="http://">Algunos</a></li>
                            <li>Bios: <a href="http://">De</a></li>
                            <li>Zocalo: <a href="http://">Nuestros</a></li>
                            <li>Fuente De Poder: <a href="http://">Productos</a></li>
                            <li>Wiffi: <a href="http://">Para</a></li>
                            <li>Monitor: <a href="http://">Conocer</a></li>
                            <li>Mause: <a href="http://">Los</a></li>
                            <li>Teclado: <a href="http://">Detalles</a></li>
                        </ul>
                    </div>
                </div>
            }

        </div>

        <div className="aside-home">
            {statehome.map(item =>(
            <div className="article-shoping" key={item.id}>
                <div className="title-shoping"><h1>{item.title}</h1></div>
                <div className="img-shoping"><img src={item.image} alt={item.image}/></div>
                <div className="shoping-details">
                    <ul>
                        <li>Precio: <strong>{item.price}</strong></li>
                        <li>Dimension: <strong>{item.dimen}</strong></li>
                        <li>Modelo: <strong>{item.models}</strong></li>
                        <li>Peso: <strong>{item.weight}</strong></li>
                        <button type="button" onClick={() => handleProductHome(item)}>Ampliar</button>
                    </ul>
                </div>
            </div> ))}
        </div>
        </>
    )
}
export default Home;