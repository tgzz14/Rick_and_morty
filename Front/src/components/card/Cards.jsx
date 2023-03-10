//import { findByLabelText } from '@testing-library/react';
import Card from './Card';
import c from './styleCard.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;
  
   return (
   <div className={c.container}>
      {     
      characters.map( c => <Card name={c.name} specie={c.specie} gender={c.gender}
      image={c.image} onClose={() => onClose(c.id)} key={c.id} id={c.id}/>)
      }
   </div>
   );
}
