import React from "react"
import { getRecipeFromMistral } from "./ai"
import ShowGeneratedRecipe from "./ShowGeneratedRecipe"
import ShowLoading from "./ShowLoading"

export default function DisplayIngredients({ ingredients }) {
    const [generatedRecipe, setGeneratedRecipe] = React.useState(null)
    const [buttonClicked, setButtonClicked] = React.useState(false)
    const recipeSection = React.useRef(null)

    async function getRecipe() {
        setButtonClicked(true)
        const recipe = await getRecipeFromMistral(ingredients)
        setGeneratedRecipe(recipe)
    }

    React.useEffect(()=>{
        if(generatedRecipe!=null && recipeSection!=null){
            recipeSection.current.scrollIntoView({behavior : "smooth"})
        }
    }, [generatedRecipe])

    return (
        <>
            {
                ingredients.length > 0 &&
                <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">
                        {
                            ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))
                        }
                    </ul>

                    {
                        ingredients.length > 3 &&
                        <div className="get-recipe-container" ref = {recipeSection}>
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button onClick={getRecipe}>Get a recipe</button>
                        </div>
                    }

                    {generatedRecipe && <ShowGeneratedRecipe generatedRecipe={generatedRecipe} recipeSection={recipeSection} />}

                    {generatedRecipe==null && buttonClicked==true && <ShowLoading />}
                </section>
            }
        </>
    )
}
