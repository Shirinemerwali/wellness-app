import '../styles/Nutrition.css';

import { useEffect, useState } from 'react';

import padthai from '../assets/padthai.png';
import katsu from '../assets/katsu.png';
import fish from '../assets/fish.png';

function Nutrition({ setCurrentPage }) {

  const [meals, setMeals] = useState([]);

  const [mealType, setMealType] = useState('');
  const [mealName, setMealName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fats, setFats] = useState('');
  const [notes, setNotes] = useState('');

  // FETCH MEALS

  useEffect(() => {

    const fetchMeals = async () => {

      try {

        const response = await fetch(
          'http://localhost:3001/api/meals'
        );

        const data = await response.json();

        if (Array.isArray(data)) {

          setMeals(data);

        } else {

          setMeals([]);

        }

      } catch (error) {

        console.log(error);

      }

    };

    fetchMeals();

  }, []);

  // TOTALS

  const totalCalories = meals.reduce(
    (total, meal) =>
      total + Number(meal.calories || 0),
    0
  );

  const totalProtein = meals.reduce(
    (total, meal) =>
      total + Number(meal.protein || 0),
    0
  );

  const totalCarbs = meals.reduce(
    (total, meal) =>
      total + Number(meal.carbs || 0),
    0
  );

  const totalFats = meals.reduce(
    (total, meal) =>
      total + Number(meal.fats || 0),
    0
  );

  // ADD MEAL

  const addMeal = async () => {

    try {

      const response = await fetch(
        'http://localhost:3001/api/meals',
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json'
          },

          body: JSON.stringify({

            mealType,

            title: mealName,

            ingredients,

            calories,

            protein,

            carbs,

            fats,

            notes

          })

        }
      );

      const data = await response.json();

      if (response.ok) {

        setMeals([
          ...meals,
          data
        ]);

        setMealType('');
        setMealName('');
        setIngredients('');
        setCalories('');
        setProtein('');
        setCarbs('');
        setFats('');
        setNotes('');

      }

    } catch (error) {

      console.log(error);

    }

  };

  // DELETE

  const deleteMeal = async (id) => {

    try {

      await fetch(
        `http://localhost:3001/api/meals/${id}`,
        {
          method: 'DELETE'
        }
      );

      setMeals(
        meals.filter(
          (meal) =>
            meal._id !== id
        )
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="nutrition">

   <button
  className="dashboard-btn"
  onClick={() => setCurrentPage("dashboard")}
>
  ← Dashboard
</button>

      {/* HEADER */}

      <div className="nutrition-header">

        <h1>
          Meal Tracker
        </h1>

        <p>
          Track your meals &
          build healthier habits.
        </p>

      </div>

      {/* LAYOUT */}

      <div className="nutrition-layout">

        {/* LEFT */}

        <div className="left-column">

          {/* ADD MEAL */}

          <div className="add-meal-card">

            <h2>
              Log Your Meal
            </h2>

            <div className="add-meal">

              <select
                value={mealType}
                onChange={(e) =>
                  setMealType(
                    e.target.value
                  )
                }
              >

                <option value="">
                  Select Meal Type
                </option>

                <option value="Breakfast">
                  Breakfast
                </option>

                <option value="Lunch">
                  Lunch
                </option>

                <option value="Dinner">
                  Dinner
                </option>

                <option value="Snack">
                  Snack
                </option>

              </select>

              <input
                type="text"
                placeholder="Meal Name"
                value={mealName}
                onChange={(e) =>
                  setMealName(
                    e.target.value
                  )
                }
              />

              <input
                type="text"
                placeholder="Ingredients"
                value={ingredients}
                onChange={(e) =>
                  setIngredients(
                    e.target.value
                  )
                }
              />

              <div className="macro-grid">

                <input
                  type="number"
                  placeholder="Calories"
                  value={calories}
                  onChange={(e) =>
                    setCalories(
                      e.target.value
                    )
                  }
                />

                <input
                  type="number"
                  placeholder="Protein"
                  value={protein}
                  onChange={(e) =>
                    setProtein(
                      e.target.value
                    )
                  }
                />

                <input
                  type="number"
                  placeholder="Carbs"
                  value={carbs}
                  onChange={(e) =>
                    setCarbs(
                      e.target.value
                    )
                  }
                />

                <input
                  type="number"
                  placeholder="Fats"
                  value={fats}
                  onChange={(e) =>
                    setFats(
                      e.target.value
                    )
                  }
                />

              </div>

              <input
                type="text"
                placeholder="Notes"
                value={notes}
                onChange={(e) =>
                  setNotes(
                    e.target.value
                  )
                }
              />

              <button onClick={addMeal}>

                Add Meal

              </button>

            </div>

          </div>

          {/* CALENDAR */}

          <div className="mini-calendar">

            <div className="calendar-header">

              <h2>
                May 2026
              </h2>

            </div>

            <div className="week-days">

              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
              <span>S</span>

            </div>

            <div className="calendar-days">

              <div></div>
              <div></div>

              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>

              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>

              <div className="today">
                {new Date().getDate()}
              </div>

              <div>13</div>
              <div>14</div>
              <div>15</div>
              <div>16</div>
              <div>17</div>
              <div>18</div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="right-column">

          {/* SUMMARY */}

          <div className="summary-card">

            <h2>
              Today's Summary
            </h2>

            <div className="summary-grid">

              <div>

                <span>🔥</span>

                <h3>
                  {totalCalories}
                </h3>

                <p>
                  Calories
                </p>

              </div>

              <div>

                <span>💪</span>

                <h3>
                  {totalProtein}g
                </h3>

                <p>
                  Protein
                </p>

              </div>

              <div>

                <span>🍞</span>

                <h3>
                  {totalCarbs}g
                </h3>

                <p>
                  Carbs
                </p>

              </div>

              <div>

                <span>🥑</span>

                <h3>
                  {totalFats}g
                </h3>

                <p>
                  Fats
                </p>

              </div>

            </div>

          </div>

          {/* MEALS */}

          <div className="meals-today">

            <h2>
              Your Meals Today
            </h2>

            {meals.map((meal) => (

              <div
                className="modern-meal-card"
                key={meal._id}
              >

                <div>

                  <h3>
                    {meal.title}
                  </h3>

                  <p>
                    {meal.mealType}
                  </p>

                </div>

                <div className="meal-right">

                  <span>
                    {meal.calories} kcal
                  </span>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteMeal(
                        meal._id
                      )
                    }
                  >
                    🗑
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* RECIPES */}

          <div className="recipe-section">

            <h2>
              Recipe Inspiration
            </h2>

            <div className="recipe-grid">

              <div className="recipe-card">

                <img
                  src={padthai}
                  alt=""
                />

                <h3>
                  Pad Thai
                </h3>

                <p>
                  520 kcal
                </p>

                <button>
                  Add To Meals
                </button>

              </div>

              <div className="recipe-card">

                <img
                  src={katsu}
                  alt=""
                />

                <h3>
                  Chicken Katsu
                </h3>

                <p>
                  610 kcal
                </p>

                <button>
                  Add To Meals
                </button>

              </div>

              <div className="recipe-card">

                <img
                  src={fish}
                  alt=""
                />

                <h3>
                  Salmon Bowl
                </h3>

                <p>
                  480 kcal
                </p>

                <button>
                  Add To Meals
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Nutrition;