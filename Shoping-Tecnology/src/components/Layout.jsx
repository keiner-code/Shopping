import React from 'react';
import Footer from './Footer';
import Header from './Header';
import HeaderVertical from './Header-Vertical';
import '../style/components/Layout.css';


const Layout = ({children}) =>(
    <div className="Container">
    <Header/>
    <HeaderVertical/>
    {children}
    <Footer/>
    </div>

);

export default Layout;