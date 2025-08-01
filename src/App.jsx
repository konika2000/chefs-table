import { useState } from "react"
import Banner from "./components/Banner"
import Header from "./components/Header"
import OurRecipes from "./components/OurRecipes"
import Recipes from "./components/Recipes"
import Sidebar from "./components/Sidebar"
function App() {
  const [recipeQueue, setRecipeQueue]= useState([]);
  
  const addRecipeQueue = (recipe)=>{
    const isExist = recipeQueue.find(previousRecipe=>previousRecipe.recipe_id === recipe.recipe_id)
    if(!isExist) {
      setRecipeQueue([...recipeQueue, recipe])
    }
    else{
      alert('Recipe already exists in the queue.')
    }
  }
  console.log(recipeQueue)

  return (
    <>
    <div className="bg-green-50 text-black max-w-7xl mx-auto m-4 p-4">
        
      {/* header */}
      <Header></Header>

      {/* banner */}
      <Banner></Banner>

      {/* our recipes section */}
      <OurRecipes></OurRecipes>

      {/* Recipes card section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* Cards section */}
           <Recipes addRecipeQueue={addRecipeQueue}></Recipes>    

        {/* Side bar */}
          <Sidebar></Sidebar>

      </section>
    </div>

    </>
  )
}

export default App
