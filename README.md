                     Egyptian Recipes

          
As it said ancient Egypt was a wonderful place to grow food because the civilization grew around the fertile Nile river. Today Egyptian still grow their own food in Egypt soil and have different recipes that are healthy and delicious.
In this project I’ll explain how to create and search for recipes.


Table of Contents:
1.	Prerequisites:
A.	Download npm.
B.	Install React.
2.	The parent component.
3.	Recall recipes information from Api.
4.	Run npm start.
5.	 Components.
6.	Style
Conclusion

1.	Prerequisites:
                   Create-React-App

Use node package to download and manage packages in your application from Nodejs.org. Download the Windows installer 

 Next, run these two commands and name your project: 
npm install -g create-react-app
create-react-app recipesProject
I named my project recipesProject, but you can name it whatever you like.

2.	The parent Component:
Open App.js and delete everything.

import React from "react";
import Recipe from ‘/Recipe';
import "./App.css";
const App = () => {
return (
     <div className="App">
        
      </div>
    );
  }
}
export default App;

3.	Recalling information for recipes from Api like Edaman.



Import and configure this API fetching library in App.js file.

4.	run npm start in command line. Then open http://localhost:3000/ to see your 
app.

5.	Components.
In the component we are going to build our app in a simple language and fetching the information from the Api.
In the first two line we are importing the react class, which helps make components, then we import some more child components. These are 
            Key, title, description, and images that import from recipe.js
            All the requested we made are set and stored in recipes.           
       Child components.       
Create components folder inside your app under src folder and name it Recipe.js will 
import react from react 
const Recipe = () => {
then add what you want in your recipe like title, description, image and
 export default recipes
6.	Styling
In my project I use the formatting model that uses the size of the margin, border and padding


.App{
  min-height: 50vh;
  background-image: linear-gradient(
    90deg, 
    #74EBD5 0%,
    #9FACE6 100%
    );
  } 
   .search-form {
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

    .search-bar {
     width: 20%;
     border-style: double;
     padding: 10px;
   }
    .search-button {
      background-color: #9FACE6;
      border: black;
      border-style: double;
      padding: 10px 20px;
      color: black;    
    }
    .recipes {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
Create Css module to our app to capsulate for the css to a component 
1.	First, create a normal CSS file. 
2.	Add CSS classes to this file. 
3.	Import the module you've just created from within your component. And import style from recipe module .css in recipe.js.
4.	Refer to it as a normal property from the styles object, like: image, recipe.

recipe {
    border-radius: 10px;
    box-shadow: 0px 5px 20px teal;
    margin: 10px;
    display: inline flexbox;
    flex-direction: row;
    justify-content: center;
    background: lavender;
    align-items: center;
    min-width: 40px;
}

 . image{
     border-radius: 40%;
     width: 50%;
     height: 50%;
 }
Conclusion:

After wrapping up, the page will look like this

![](image1.docx)
 
 












