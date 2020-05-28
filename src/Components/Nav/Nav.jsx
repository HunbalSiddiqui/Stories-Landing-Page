import React, { Component } from 'react'
import './Nav.css'
export class Nav extends Component {
    
    componentDidMount() {
        document.querySelector('.closeIcon').style.display = 'none'
    }
    openNav (){
        document.querySelector('.hamburger').style.display = 'none'
        document.querySelector('.closeIcon').style.display = 'flex'
        var FullNav = document.querySelector('.FullNav');
        FullNav.style.transition = '0.5s ease-in-out'
        FullNav.style.width = '100%';
        FullNav.style.height = '100%';
        FullNav.style.display = 'flex-col'
        FullNav.insertAdjacentHTML('beforeend',`
        <h1 class="pointer nav_item">Stories</h1>
        <h1 class="pointer nav_item">Films</h1>            
        <h1 class="pointer nav_item">Blogs</h1>      `)
        console.log(FullNav)
    }
    closeNav (){
        
        document.querySelector('.closeIcon').style.display = 'none'
        document.querySelector('.hamburger').style.display = 'flex'
        var FullNav = document.querySelector('.FullNav');
        FullNav.innerHTML = '';
        FullNav.style.transition = '0.5s ease-in-out'
        FullNav.style.width = '0%';
        FullNav.style.height = '0%';
    }
    render() {
        return (
        <div className="Nav flex">

            <div className="ham_icon flex pointer heading5"><i className="fas fa-bars hamburger"
            onClick={()=>{this.openNav()}}></i>
            <i className="far fa-times-circle closeIcon" onClick={()=>{this.closeNav()}}></i></div>
            <div className="logo flex pointer heading4">Woven</div>
            <div className="search_icon flex pointer heading5"><i className="fas fa-search"></i></div>
        </div>
        )
    }
}

export default Nav
