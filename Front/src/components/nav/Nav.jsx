import SearchBar from "../searchbar/SearchBar";
import logo from './logo.png'
import { NavLink, useNavigate } from 'react-router-dom';
import n from './nav.module.css'



export default function Nav(props){
    const {onSearch, setCharacters} = props
    const navigate = useNavigate();
    return(
        
    <div className={n.container}>
        <img  src={logo} alt='img' className={n.img} onClick={()=>navigate('/home')} />
        <NavLink to='/about'><span className={n.child}>About</span></NavLink>
        <NavLink to='/home'><span className={n.child}>Home</span></NavLink>
        <NavLink to='/favorites'><span className={n.child}>Favorites</span></NavLink>
        <SearchBar className={n.child} onSearch={onSearch} setCharacters={setCharacters}/> 
    </div>         
       
    );
}