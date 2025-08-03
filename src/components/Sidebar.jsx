import React from 'react';

const Sidebar = ({ recipeQueue, handleRemove, preparedRecipe, calculateTimeAndCalories, totalTime, totalCalories }) => {
  return (
    <div className='md:w-1/3 border-2 rounded-xl bg-base-100 p-2'>
      {/* Want to cook table */}
      <h1 className='text-xl font-semibold mx-auto text-center'>Want to cook: {recipeQueue.length}</h1>
      <div className="divider my-0"></div>

      <div className="md:overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, index) => (
              <tr className="hover:bg-gray-100 text-gray-500" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td><button onClick={() => {handleRemove(recipe.recipe_id); calculateTimeAndCalories(recipe.preparing_time, recipe.calories)}} className="btn bg-green-400 rounded-full border-none hover:bg-slate-300">Preparing</button></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>


      {/* currently cooking table */}
          <h1 className='text-xl font-semibold mx-auto text-center mt-8'>Want to cook: {preparedRecipe.length}</h1>
         <div className="divider my-0"></div>
      <div className="md:overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              
            </tr>
          </thead>
          <tbody>
            {preparedRecipe.map((recipe, index) => (
              <tr className="hover:bg-gray-100 text-gray-500" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                
              </tr>
            ))}
            <tr className='border-none'>
                  <th></th>
                <td></td>
                <td>Total Time = {totalTime}</td>
                <td>Total Calories = {totalCalories}</td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>


  );
};

export default Sidebar;