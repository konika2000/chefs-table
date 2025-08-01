import { useEffect, useState } from "react";
import { IoMdTime} from "react-icons/io";
import { FaFire } from "react-icons/fa";

const Recipes = ({addRecipeQueue}) => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('./recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))

    }, [])
    console.log(recipes)
    return (
        <div className="md:w-2/3">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 {
                recipes.map(recipe => (
                    <div key={recipe.recipe_id} className="card bg-base-100 border-2">
                        <figure className="px-8 pt-6">
                            <img className="md:h-80 w-full rounded-xl"
                                src={recipe.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl text-gray-800 font-semibold">{recipe.recipe_name}</h2>
                            <p className="text-base text-gray-500">{recipe.short_description}</p>
                            <div className="divider my-0"></div>
                             <h2 className="card-title">Ingredients: {recipe.ingredients.length}</h2>
                             <ul>
                                {recipe.ingredients.map((item, index) =>(<li className="list-disc text-base text-gray-500 ml-4" key={index}>{item}</li>)) }
                             </ul>
                             <div className="divider my-0"></div>
                             <div className="flex gap-4">
                                <div className="flex items-center gap-2">
                                    <IoMdTime className="text-2xl " />
                                    <p className="text-gray-500">{recipe.preparing_time}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaFire className="text-2xl ml-2" />
                                    <p className="text-gray-500">{recipe.calories}</p>
                                    </div>

                             </div>
                            <div className="card-actions">
                                <button onClick={() => addRecipeQueue(recipe)} className="btn bg-green-400 rounded-full border-none hover:bg-slate-300">Want to Cook</button>
                            </div>
                        </div>
                    </div>

                ))}
           </div>
        </div>
    );
};

export default Recipes;