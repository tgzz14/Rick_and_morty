const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass = /[0-9]/;


export const validate = (data) => {
    let errors = {};
    if(!data.username || !regexEmail.test(data.username)|| data.username.length >= 35) errors.username = 'por favor completar este campo';
    if(data.password.length < 6 || data.password.length > 10 ) errors.password = 'el password debe tener de 6 al 10 caracteres';
    if(!regexPass.test(data.password)) errors.password = 'el password debe tener al menos 1 num';
    
    return errors; 
}