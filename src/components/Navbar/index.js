import React, {useState} from 'react'
import './style.css';
export const Navbar = (props) => {

    const [search, setSearch] = useState(false);
    const openSearch = () => {
        setSearch(true);
    }
    const searchClass = search ? 'searchinput active': 'searchinput';
    const submitSearch  = (e) => {
        e.preventDefault();
        alert('Searched')
    };
    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><a href="/">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="post">Posts</a></li>
                <li><a href="contact-us">Contact Us</a></li>
            </ul>
           <div className="search">
               <form onSubmit={submitSearch}>
                    <input type="text" className={searchClass} placeholder="Search" />
                    <img onClick={openSearch} className="searchicon" src={require('../../assets/icons/search.png')} alt="Search"/>
               </form>
           </div>
        </div>
    )
}
