import React from "react";
import IngredientForm from "./IngredientForm";
import DisplayIngredients from "./DisplayIngredients";

export default function Main() {
    let [ingredients, setIngredients] = React.useState([]);
    return (
        <main>
            <IngredientForm
                ingredients={ingredients}
                setIngredients={setIngredients}
            />

            <DisplayIngredients
                ingredients={ingredients}
            />

        </main>
    );
}
