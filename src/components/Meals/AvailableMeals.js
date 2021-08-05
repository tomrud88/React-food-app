import classes from "./AvailableMeals.module.css"
import MealItem from './MealItem';
import Card from '../UI/Card';
import { useState, useEffect } from 'react';


  const AvailableMeals = () => {
    const[mealsList,setMealsList] = useState([]);
    const[isLoading,setIsLoading] = useState(true);
    const[httpError,setHttpError] = useState()

    useEffect(() => {
      const fetchList = async()=>{
        const response = await fetch('https://food-order-app-cf489-default-rtdb.firebaseio.com/meals.json');
       
        if(!response.ok){
          throw new Error('something went wrong')
        }
  
        const data = await response.json();
  
        console.log(data)
        let loadingArray = []
  
        for(const key in data){
           loadingArray.push(
             {
               id:key,
               description: data[key].description,
               name:data[key].name,
               price:data[key].price
             }
           )
        }
        console.log(loadingArray)
        setMealsList(loadingArray)
        setIsLoading(false)
      }
  
      fetchList().catch((error)=>{
         setHttpError(error.message);
         setIsLoading(false)
      })
    }, [])

    
     let errorMessage = httpError && <section><p className={classes.error}>{httpError}</p></section>
     let loading = isLoading && <section><p className={classes.mealLoading}>Loading...</p></section>
     
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
            {loading}
            <ul>{mealList}</ul>
          </Card>
        </section>
       
    )
  }
  export default AvailableMeals;