import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import {useContext} from 'react';
import CartItem from './CartItem'

const Cart = (props) => {

    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    const hasItems = cartCtx.items.length > 0;

    const cartAddItem = (item) =>{
        cartCtx.addItem({...item, amount:1})
    };

    const cartRemoveItem = (id) =>{
        cartCtx.removeItem(id)
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map(item =>(
                <li><CartItem 
                name={item.name} 
                amount={item.amount} 
                key={item.id}
                price={item.price}
                onRemove={cartRemoveItem.bind(null,item.id)}
                onAdd={cartAddItem.bind(null,item)}/></li>
            ))}
        </ul>
    )

    return(
        <Modal onClick={props.notVisible}>
           {cartItems}
           <div className={classes.total}>
               <p>Total Amount</p>
               <p>{totalAmount}</p>
           </div>
           <div className={classes.actions}>
               <button className={classes['btn--alt']} onClick={props.notVisible}>Close</button>
               {hasItems && <button className={classes.btn}>Order</button>}
           </div>
        </Modal>
    )
}
export default Cart