import React, {useState} from "react"
import Navbar from "react-bootstrap/Navbar"

//import AdminNavbarLinks from "./AdminNavbarLinks.jsx"

const style = {
    navbar: {
        borderBottom: '1px solid #9A9A9A',
        color: 'white'
    }
}

const Header = (props) => {
    const [sidebarExists, setSidebarExists] = useState(false)

    const mobileSidebarToggle = (e) => {
        if (sidebarExists === false) {
            setSidebarExists(true)
        }
        e.preventDefault()
        document.documentElement.classList.toggle("nav-open")
        const node = document.createElement("div")
        node.id = "bodyClick"
        node.onclick = function () {
            this.parentElement.removeChild(this)
            document.documentElement.classList.toggle("nav-open")
        }
        document.body.appendChild(node)
    }

    return (
        <Navbar style={style.navbar} className={'bg-nav'}>
            <Navbar.Brand>
                <b>{props.brandText}</b>
            </Navbar.Brand>
            <div className={'topnav-right'}>
                <Navbar.Toggle onClick={mobileSidebarToggle} className={'toggle'}><i
                    className={'pe-7s-menu'}/></Navbar.Toggle>
            </div>
            <Navbar.Collapse>
                
            </Navbar.Collapse>
        </Navbar>
    )

}

export default Header
