import a from './About.module.css'
import image from './IMG-zz.png'

export default function About(){
    return(
        <div className={a.container}>
            <img src={image} alt="me" className={a.img} />
            <div className={a.text}>
            <ul >
            <lh className={a.text2}>Aplicación creada por:</lh>
                <li>Nombre: Zulimar Tovar García</li>
                <li>Nacionalidad: venezolana</li>
                <li>Profesión: Ing. Telecomuniaciones</li>
                <li>Ambiciones: Programadora Full Stack</li>
                <li>Edad: 32 Años</li>
                </ul> 
                <ol><span  className={a.text2}>Descripción App:</span>
                <li>Agregar personaje con sus caracteristicas</li>
                <li>Eliminar personaje con sus caracteristicas</li>
                <li>Obtener detalle del personaje</li>
                <li>Agregar personaje a favoritos</li>
                <li>Ordenar favorito por genero.</li>
                <li>Ordenar favorito de manera ascendente o descentente</li>
                </ol>
            
            </div>
           
            
        </div>
    )
}