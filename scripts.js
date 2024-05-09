// scripts.js

// Sample recipes data
const recipes = [
    \{ title: "Spaghetti Carbonara", ingredients: ["spaghetti", "eggs", "bacon", "Parmesan cheese", "black pepper"] \},
    \{ title: "Chicken Stir-Fry", ingredients: ["chicken breast", "bell peppers", "onion", "soy sauce", "garlic", "ginger"] \},
    \{ title: "Chocolate Cake", ingredients: ["flour", "sugar", "cocoa powder", "eggs", "butter", "vanilla extract"] \}
];

// Function to display recipes
function displayRecipes(recipes) \{
    const recipesDiv = document.getElementById('recipes');
    recipesDiv.innerHTML = '';
    recipes.forEach(recipe => \{
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <h3>$\{recipe.title\}</h3>
            <p><strong>Ingredients:</strong> $\{recipe.ingredients.join(', ')\}</p>
        `;
        recipesDiv.appendChild(recipeCard);
    \});
\}

// Initial display of recipes
displayRecipes(recipes);
}
