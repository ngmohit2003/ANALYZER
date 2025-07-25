async function fetchFoodData() {
    const foodItem = document.getElementById("foodInput").value;

    if (!foodItem) {
        alert("Please enter a food item!");
        return;
    }

    try {
        const response = await fetch(`http://localhost:5000/api/food?food=${foodItem}`);
        const data = await response.json();

        if (data.error) {
            document.getElementById("result").innerHTML = `<p style="color: red;">${data.error}</p>`;
        } else {
            document.getElementById("result").innerHTML = `
                <h3>Food: ${data.name}</h3>
                <p>Calories: ${data.calories} kcal</p>
                <p>Protein: ${data.protein} g</p>
                <p>Carbs: ${data.carbs} g</p>
                <p>Fats: ${data.fats} g</p>
                <h4>🏃 Running Distance: ${data.runningDistance} km</h4>
            `;
        }
    } catch (error) {
        console.error("Error fetching food data:", error);
        document.getElementById("result").innerHTML = `<p style="color: red;">Failed to fetch data</p>`;
    }
}
