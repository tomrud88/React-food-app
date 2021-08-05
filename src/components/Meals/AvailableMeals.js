import classes from "./AvailableMeals.module.css"
import MealItem from './MealItem';
import Card from '../UI/Card';
import { useState, useEffect } from 'react';

const DUMMY_MEALS = [
    {
      id:'m1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
  },
  {
    id:'m2',
    name:'Schnitzel',
    description: 'A german specialty!',
    price: 16.50,
  },
  {
    id:'m3',
    name:'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id:'m4',
    name:'Green Bowl',
    description: 'Healthy...and green..',
    price: 18.99
  },
  ];



  const AvailableMeals = () => {


    const[mealsList,setMealsList] = useState([]);
    const[isLoading,setIsLoading] = useState(true);

    useEffect(() => {
      fetchList()
    }, [])

    const fetchList = async()=>{
      const response = await fetch('https://food-order-app-cf489-default-rtdb.firebaseio.com/meals.json');
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
            {loading}
            <ul>{mealList}</ul>
          </Card>
        </section>
       
    )
  }
  export default AvailableMeals;