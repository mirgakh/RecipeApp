{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // scripts.js\
\
// Sample recipes data\
const recipes = [\
    \{ title: "Spaghetti Carbonara", ingredients: ["spaghetti", "eggs", "bacon", "Parmesan cheese", "black pepper"] \},\
    \{ title: "Chicken Stir-Fry", ingredients: ["chicken breast", "bell peppers", "onion", "soy sauce", "garlic", "ginger"] \},\
    \{ title: "Chocolate Cake", ingredients: ["flour", "sugar", "cocoa powder", "eggs", "butter", "vanilla extract"] \}\
];\
\
// Function to display recipes\
function displayRecipes(recipes) \{\
    const recipesDiv = document.getElementById('recipes');\
    recipesDiv.innerHTML = '';\
    recipes.forEach(recipe => \{\
        const recipeCard = document.createElement('div');\
        recipeCard.classList.add('recipe-card');\
        recipeCard.innerHTML = `\
            <h3>$\{recipe.title\}</h3>\
            <p><strong>Ingredients:</strong> $\{recipe.ingredients.join(', ')\}</p>\
        `;\
        recipesDiv.appendChild(recipeCard);\
    \});\
\}\
\
// Initial display of recipes\
displayRecipes(recipes);\
}