import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Add user to Firestore
const addUser = async (username, email) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      username,
      email,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error(error);
  }
};

// Add recipe to Firestore
const addRecipe = async (userId, title, description) => {
  try {
    const docRef = await addDoc(collection(db, "recipes"), {
      userId,
      title,
      description,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error(error);
  }
};

// Get all recipes from Firestore
const getRecipes = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "recipes"));
    const recipes = querySnapshot.docs.map((doc) => doc.data());
    return recipes;
  } catch (error) {
    console.error(error);
  }
};

export { addUser, addRecipe, getRecipes };
