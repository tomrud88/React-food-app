import classes from "./AvailableMeals.module.css"
import MealItem from './MealItem';
import Card from '../UI/Card';
import { useState, useEffect } from 'react';


  const AvailableMeals = () => {

    const[mealsList,setMealsList] = useState([]);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState()

    useEffect(() => {
     const fetchList = async() =>{
      const response = await fetch('https://food-order-app-cf489-default-rtdb.firebaseio.com/meals.json');
      

      if(!response.ok){
        throw new Error('something went wrong')
      }

      const data = await response.json();

      let loadedMeals = [];

      for(const key in data){
        loadedMeals.push(
        {
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        })
      }
        setMealsList(loadedMeals)
        setLoading(false)
      }
        fetchList().catch(error =>{
           setError(error.message);
           setLoading(false)
        })
    },[])
  
     const load = loading && <h1 className={classes.mealLoading}>Loading...</h1>;
     const errorMessage = error && <p className={classes.error}>{error}</p>

     const mealList = mealsList.map(meal => <MealItem 
      id={meal.id}
      key={meal.id}
     name={meal.name}
     description={meal.description}
     price={meal.price}/>)

    
    return(
      
        <section className={classes.meals}>
          <Card>
            {errorMessage}
            {load}
            <ul>{mealList}</ul>
          </Card>
        </section>
       
    )
  }
  export default AvailableMeals;