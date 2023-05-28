import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from '../Components/NavBar';
import Home from '../Components/Home';
import Contact from '../Components/Contact';
import ProductList from '../Components/ProductList';



const CommerceContainer = () => {
    return (
        <div className="CommerceContainer">          
            <Router>
                < NavBar />
                <hr></hr>
                <Routes>
                    <Route path="/" element={< Home />} />
                    <Route path="/contact" element={< Contact />} />
                    <Route path="/productList" element={< ProductList />} />
                </Routes>
            </Router>            
        </div>
    )
}

export default CommerceContainer
