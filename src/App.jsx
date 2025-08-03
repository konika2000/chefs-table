import { useState } from "react"
import Banner from "./components/Banner"
import Header from "./components/Header"
import OurRecipes from "./components/OurRecipes"
import Recipes from "./components/Recipes"
import Sidebar from "./components/Sidebar"
function App() {
  const [recipeQueue, setRecipeQueue]= useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)

  const addRecipeQueue = (recipe)=>{
    const isExist = recipeQueue.find(previousRecipe=>previousRecipe.recipe_id === recipe.recipe_id)
    if(!isExist) {
      setRecipeQueue([...recipeQueue, recipe])
    }
    else{
      alert('Recipe already exists in the queue.')
    }
  }

  const handleRemove=id =>{
    // find which recipe to remove
    const deleteRecipe= recipeQueue.find(recipe => recipe.recipe_id === id)
    // remove from want to cook table
    const updateQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updateQueue)
    setPreparedRecipe([...preparedRecipe, deleteRecipe])
  }

  const calculateTimeAndCalories=(time, calories) =>{
      setTotalTime(totalTime + time)
      setTotalCalories(totalCalories + calories)

  }
  

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
          <Sidebar handleRemove={handleRemove}
                   recipeQueue={recipeQueue}
                   preparedRecipe={preparedRecipe} 
                   calculateTimeAndCalories={calculateTimeAndCalories} 
                   totalTime={totalTime} 
                   totalCalories={totalCalories}></Sidebar>

      </section>
    </div>

    </>
  )
}

export default App
