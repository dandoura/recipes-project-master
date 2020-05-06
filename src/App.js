import React,{useEffect, useState} from "react";
import Recipe from './Recipe';
import "./App.css";

const App = () => {
 const App_ID = "01139f43";
  const App_KEY = "bec91bd83e81dc0e7a6d9be9a04a71cd	";

  const [recipes, setRecipes] = useState([]);
  const[search, setSearch] =useState("");
  const[query,setQuery] =useState('egyptian')

  useEffect(() => {
    getRecipes();
   }, [query] );

   const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    
  };

   const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
   }
   
   const getSearch = e => {
     e.preventDefault();
     setQuery(search);
     setSearch('');
   }

   return (
    <div className="App">
     <form onSubmit={getSearch} className= "search-form">
       <input 
       className="search-bar" 
       type="text" 
       value={search}
       onChange={updateSearch}
        />
         <button className="search-button" type="submit">
         Search
        </button>
        </form>
        <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          description={recipe.recipe.description} 
           image={recipe.recipe.image}
           ingredients={recipe.recipe.ingredients}
          />
         ))}
       </div>
     </div>
     );
   };

   export default App;