import {useState} from 'react';

const CheckoutForm = (props)=>{

    const[name,setName] = useState('');
    const[surname,setSurname] = useState('');
    const[email,setEmail] = useState('');
    const[formIsValid,setFormIsValid] = useState(false);
    const[nameTouched,setNameTouched] = useState(false);
    const[surnameTouched,setSurnameTouched] = useState(false);
    const[emailTouched,setEmailTouched] = useState(false);

    const validName = name.trim() !== '';
    const invalidName = !validName && nameTouched;

    const validSurname = surname.trim() !== '';
    const invalidSurname = !validSurname && surnameTouched;

    const validEmail = email.includes('@');
    const invalidEmail = !validEmail && emailTouched;

    const nameHandler = (event) =>{
        setName(event.target.value)
    }

    const surnameHandler = (event) =>{
        setSurname(event.target.value)
    }

    const emailHandler = (event) =>{
        setEmail(event.target.value);
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

    const submitHandler = (event) =>{
        event.preventDefault()

        setNameTouched(true);
        setSurnameTouched(true);
        setEmailTouched(true)
       
        if(!validName){
          return 
        }
        
        if(!validSurname){
            return
        }
        if(!validEmail){
            return
        }

        console.log(name)

        if(validName && validSurname && validEmail){
            setFormIsValid(true)
            console.log(formIsValid)
        }

        setName('');
        setSurname('');
        setEmail('');
        setNameTouched(false);
        setSurnameTouched(false);
        setEmailTouched(false)
    }

       
       const nameMessage = invalidName && <p>Please write a valid name</p>;
       const nameClass = invalidName ? 'formOption invalid' : 'formOption';

       
       const surnameMessage = invalidSurname && <p>Please write a valid surname</p>;
       const surnameClass = invalidSurname ? 'formOption invalid' : 'formOption';

       
       const emailMessage = invalidEmail && <p>Please write a valid email</p>;
       const emailClass = invalidEmail ? 'formOption invalid' : 'formOption'


    return(
        <form onSubmit={submitHandler}>
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
            <div className='buttons'>
            <div><button>Submit</button></div>
            <div><button onClick={props.close}>Cancel</button></div>
            </div>
        </form>
    )
}
export default CheckoutForm;