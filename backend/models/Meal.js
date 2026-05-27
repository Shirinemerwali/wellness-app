import mongoose from 'mongoose';

const mealSchema =
  new mongoose.Schema({

    mealType: {
      type: String
    },

    title: {
      type: String
    },

    ingredients: {
      type: String
    },

    calories: {
      type: Number
    },

    protein: {
      type: Number
    },

    carbs: {
      type: Number
    },

    fats: {
      type: Number
    },

    notes: {
      type: String
    }

  });

const Meal =
  mongoose.model(
    'Meal',
    mealSchema
  );

export default Meal;