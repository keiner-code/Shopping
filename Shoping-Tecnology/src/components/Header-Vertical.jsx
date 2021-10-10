import React from 'react';
import { Link } from 'react-router-dom';

const HeaderVertical = () =>{
    return(
        <div className="Header-Vertical">
            <div className="Category">
                <h1>Categoria</h1>
                <ul>
                    <li><Link to="/pc"><i className="fas fa-desktop"></i>  Pc</Link></li>
                    <li><Link to="/phone"><i className="fas fa-tablet-android-alt"></i> Celular</Link></li>
                    <li><Link to="/laptop"><i className="fas fa-laptop"></i> Portatiles</Link></li>
                    <li><a href="/accessories"><i className="fas fa-abacus"></i> Acesorios Tecnologicos</a></li>
                    <li><a href="http://"><i className="fas fa-desktop"></i> Antena</a></li>                
                </ul>
            </div>

            <div className="Price">
                <h1>Precios</h1>
                <form action="" method="get">
                    <label ><input type="checkbox" value="10"/> Menos de 10$</label>
                    <label ><input type="checkbox" value="10"/> Menos de 30$</label>
                    <label ><input type="checkbox" value="10"/> Menos de 50$</label>
                    <label ><input type="checkbox" value="10"/> Menos de 100$</label>
                    <label ><input type="checkbox" value="10"/> Menos de 200$</label>
                    <label ><input type="checkbox" value="10"/> Menos de 300$</label>
                </form>
            </div>
            <div className="Region">
                <h1>Ubicacion</h1>
                    <form action="" method="get">
                        <select name="Region-info" id="pais">
                            <option value="0">Selecione Su Pais</option>
                        </select>
                    </form>
                     
            <div className="city">
                <form action="" method="get">
                    <select name="city-info" id="city">
                      <option value="0">Selecione su Ciudad</option>
                    </select>
                </form>
            </div>
            </div>
        </div>
    )
}
export default HeaderVertical;