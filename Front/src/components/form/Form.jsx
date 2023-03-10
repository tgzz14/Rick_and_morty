import f from "./form.module.css";
import { useState } from "react";
import { validate } from "./validate";
import {AiTwotoneEyeInvisible, AiTwotoneEye, AiOutlineMail} from 'react-icons/ai'

function Form({login}) {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [password, setPassword] = useState('password')

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(validate({...userData, [e.target.name]: e.target.value }))
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    login(userData)
  }

  const onClick = () => {
    if(password === 'password'){
      setPassword('text')
    } else{
      setPassword('password')
    }
  }

  return (
    <div className={f.container}>
      <img src='https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png' className={f.image} alt='user'/>
      <form onSubmit={handleSubmit}>
      <div className={f.passFhater}>
      <label htmlFor="username" className={f.item}>
        Username:
      </label>
      <input
        id="username"
        name="username"
        type="text"
        value={userData.username}
        className={f.input}
        onChange={handleInputChange}
      />
      <span className={f.passChild}>{<AiOutlineMail/>}</span>
      </div>
      <p className={f.p}>{errors.username}</p>
      <div className={f.passFhater}>
      <label htmlFor="password" >
        Password:
      </label>
      <input   
        id="password"
        name="password"
        type={password}
        value={userData.password}
        className={f.input}
        onChange={handleInputChange}
      />
      <span className={f.passChild} onClick={onClick} >{password === 'password' ? <AiTwotoneEyeInvisible/> : <AiTwotoneEye/>}</span>
      </div>
      
      <p className={f.p}>{errors.password}</p>
      <button className={f.button}>login</button>
      </form>
    </div>
  );
}

export default Form;
