import image from './404.png'
import e from './error.module.css'
import {  useNavigate } from "react-router-dom";

export default function Error(props) {
  const {setAccess} = props;
  const navigate = useNavigate();
  setAccess(true)
  
  return (
    <div className={e.text}>
     <img src={image} alt="error 404" />
     <div className={e.container}>
      <button className={e.button} onClick={() => navigate("/")}>
        Click here to login Again!!
      </button>

     </div>
    </div>
  );
}