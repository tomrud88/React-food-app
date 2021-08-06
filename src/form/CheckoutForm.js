import {useState,useEffect} from 'react';

const CheckoutForm = (props)=>{

    const[name,setName] = useState('');
    const[surname,setSurname] = useState('');
    const[email,setEmail] = useState('');
    const[street,setStreet] = useState('')
    const[formIsValid,setFormIsValid] = useState(false);
    const[nameTouched,setNameTouched] = useState(false);
    const[surnameTouched,setSurnameTouched] = useState(false);
    const[emailTouched,setEmailTouched] = useState(false);
    const[streetTouched,setStreetTouched] = useState(false);


    

    const validName = name.trim() !== '';
    const invalidName = !validName && nameTouched;

    const validSurname = surname.trim() !== '';
    const invalidSurname = !validSurname && surnameTouched;

    const validEmail = email.includes('@');
    const invalidEmail = !validEmail && emailTouched;

    const validStreet = street.trim() !== '';
    const invalidStreet = !validStreet && streetTouched;

    useEffect(()=>{
        if(validName && validSurname & validEmail & validStreet){
         setFormIsValid(true)
        }else{
            setFormIsValid(false)
        }
    },[validName,validSurname,validEmail,validStreet])

    console.log(formIsValid)

    const nameHandler = (event) =>{
        setName(event.target.value)
    }

    const surnameHandler = (event) =>{
        setSurname(event.target.value)
    }

    const emailHandler = (event) =>{
        setEmail(event.target.value);
    }

    const streetHandler = (event) =>{
        setStreet(event.target.value)
    }

    const nameBlurHandler = (event)=>{
        setNameTouched(true);

        if(!validName){
        return
        }
    }

    const surnameBlurHandler = (event)=>{
        setSurnameTouched(true);

        if(!validSurname){
            return
        }
    }

    const emailBlurHandler = (event) =>{
        setEmailTouched(true)

        if(!validEmail){
            return
        }
    }
 
    const streetBlurHandler = (event) =>{
        setStreetTouched(true)

        if(!validStreet){
            return
        }
    }
    const submitHandler = (event) =>{
        event.preventDefault()

        setNameTouched(true);
        setSurnameTouched(true);
        setEmailTouched(true);
        setStreetTouched(true);
       
        if(!validName){
          return 
        }
        
        if(!validSurname){
            return
        }
        if(!validEmail){
            return
        }
        if(!validStreet){
            return
        }

        console.log(name)

        if(validName && validSurname && validEmail && validStreet){
            setFormIsValid(true)
        }
        console.log(formIsValid)

        props.onSubmit(
            {
              name:name,
              surname:surname,
              email:email,
              street:street  
            }
        )

        setName('');
        setSurname('');
        setEmail('');
        setStreet('')
        setNameTouched(false);
        setSurnameTouched(false);
        setEmailTouched(false);
        setStreetTouched(false);   
    }

       console.log(formIsValid)
       const nameMessage = invalidName && <p>Please write a valid name</p>;
       const nameClass = invalidName ? 'formOption invalid' : 'formOption';

       
       const surnameMessage = invalidSurname && <p>Please write a valid surname</p>;
       const surnameClass = invalidSurname ? 'formOption invalid' : 'formOption';

       
       const emailMessage = invalidEmail && <p>Please write a valid email</p>;
       const emailClass = invalidEmail ? 'formOption invalid' : 'formOption'

       const streetMessage = invalidStreet && <p>Please write a valid street</p>;
       const streetClass = invalidStreet ? 'formOption invalid' : 'formOption';
       


       
    return(
        <form onSubmit={submitHandler}>
            <div className='container'>
            <div className={nameClass}>
                <label htmlFor='name'>name</label>
                <input 
                 type='text' 
                 id='name' 
                 value={name} 
                 onChange={nameHandler}
                 onBlur={nameBlurHandler} ></input>
            </div>
           {nameMessage}
           </div>
           <div className='container'>
            <div className={surnameClass}>
                <label htmlFor='surname'>surname</label>
                <input 
                 type='text' 
                 id='surname' 
                 value={surname} 
                 onChange={surnameHandler}
                 onBlur={surnameBlurHandler}></input>
            </div>
            {surnameMessage}
            </div>
            <div className='container'>
            <div className={emailClass}>
                <label htmlFor='email'>email</label>
                <input 
                 type='text' 
                 id='email' 
                 value={email} 
                 onChange={emailHandler} 
                 onBlur={emailBlurHandler}></input>
            </div>
            {emailMessage}
            </div>
            <div className='container'>
            <div className={streetClass}>
                <label htmlFor='street'>street</label>
                <input 
                 type='text' 
                 id='street' 
                 value={street} 
                 onChange={streetHandler} 
                 onBlur={streetBlurHandler}></input>
            </div>
            {streetMessage}
            </div>
            <div className='buttons'>
            <div><button className='formButton'>Submit</button></div>
            <div><button className='formButton' onClick={props.close}>Cancel</button></div>
            </div>
        </form>
    )
}
export default CheckoutForm;