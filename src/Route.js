import React from "react"
import Home from "../src/app/page"
import Men from './app/men/page'
import Women from "./app/women/page"
import Shop from "./app/shop/page"
import { LoginPage } from "./app/login/page"
import Page from "./app/pages/Pages"
const { Routes, Route, Link } = require("react-router-dom")
const Details = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/men" element={<Men/>}/>
            <Route path="/women" element={<Women/>}/>
            <Route path="/cards" element={<Shop/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="*" element={<Page/>}/>
            
        </Routes>
    )
}
export default Details