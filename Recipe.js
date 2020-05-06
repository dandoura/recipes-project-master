import React from 'react';
import style from './recipe.css';

const Recipe =({title, description, image, ingredients}) => {
return(
 <div>
   <h1 className={style.recipe}>{title}</h1>
   <ol>
       {ingredients.map(ingredeinet => (
           <li>{ingredeinet.text}</li>
       ))}
   </ol>
      <p>{description}</p>
      <img className= {style.image}src={image} alt="" />
  </div>
 );
};

export default Recipe;
