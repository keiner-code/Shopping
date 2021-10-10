import React from 'react';
import Avatar from '../assets/static/avatar.png';
import Logo from '../assets/static/ss-logo-Gradeup.png';
import {Link} from 'react-router-dom';

const Header = ({search, searchInput, handleSearch}) =>{

    return(
        <>
        <div className="Header-Icon">
            <img src={Logo} alt=""/>
        </div>

        <div className="Nav-Header">
            <div className="Nav">
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><a link="//">Pedidos Agregados</a></li>
                    <li><a link="//">Agregar Forma De Pago</a></li>
                    <li><a link="//">Comprar</a></li>
                    <li><a link="//">Detalles De La Compra</a></li>
                </ul>
            </nav>
        </div>
        </div>

        <div className="Serach-Header">
            <div className="Search">
                    <i className="fas fa-search"></i>
                    <input type="text" value={search} ref={searchInput} onChange={handleSearch} />
                    <button type="submit">Search</button>
            </div>
        </div>
        <div className="User-Info">
            <div className="Date-Users">

                <select name="Date-Users" id="">
                        <option value="1">Nombre</option>
                        <option value="2">Apellido</option>
                        <option value="3">Cerrar Session</option>
                </select>
            <img src={Avatar} alt=""/>
        </div>
        </div>
        </>
    )
}
export default Header;