import React,{Fragment} from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';


const Header = (props) =>{
    return(
        <React.Fragment>
        <div class={classes.header}>
            <h4>ReactMeals</h4>
            <HeaderCartButton onClick={props.isVisible}/>
        </div>
        <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table of delicious food!'></img>
            </div>
        </React.Fragment>
    )
}
export default Header