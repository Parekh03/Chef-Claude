import React from "react";

export default function IngredientForm({ ingredients, setIngredients }) {
    function handleSubmit(event) {
        event.preventDefault(); // Prevents full page reload
        const formData = new FormData(event.target);
        const newIngredient = formData.get("ingredient").trim();

        if (!newIngredient) return; // Prevent empty entries

        setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);

        event.target.reset(); // Clears input field after submission
    }

    return (
        <form onSubmit={handleSubmit} className="add-ingredient-form">
            <input
                type="text"
                placeholder="e.g. Oregano"
                aria-label="Add ingredient"
                name="ingredient"
            />
            <button type="submit">Add ingredient</button>
        </form>
    );
}
