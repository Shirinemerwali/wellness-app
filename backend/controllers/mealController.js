import Meal from '../models/Meal.js';

// GET ALL MEALS

export const getMeals = async (
  req,
  res
) => {

  try {

    const meals =
      await Meal.find();

    res.json(meals);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }

};

// CREATE MEAL

export const createMeal = async (
  req,
  res
) => {

  try {

    const newMeal =
      new Meal({

        mealType:
          req.body.mealType,

        title:
          req.body.title,

        ingredients:
          req.body.ingredients,

        calories:
          Number(req.body.calories),

        protein:
          Number(req.body.protein),

        carbs:
          Number(req.body.carbs),

        fats:
          Number(req.body.fats),

        notes:
          req.body.notes

      });

    const savedMeal =
      await newMeal.save();

    res.status(201).json(
      savedMeal
    );

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }

};

// DELETE MEAL

export const deleteMeal = async (
  req,
  res
) => {

  try {

    await Meal.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        'Meal deleted'
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }

};