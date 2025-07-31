// Import react library //
import React from "react"
// Import component files //
import Header from "./header"
import NavBar from "./navBar"
import Footer from "./footer"

const Layout = ({children}) => {
    return (
        <>
        <div>
            {children}
        </div>
        </>
    )
}

const styles = {
    wrapAbout: {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        padding:"10px",
    },
    headShot: {
        width:"100px",
        height:"100px",
        border:"solid",
        borderRadius:"5px",
    }
}
    
export default Layout;