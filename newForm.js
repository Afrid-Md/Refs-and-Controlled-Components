
import { useRef } from 'react';
function NewForm(props){
    // const[enteredName,setEnteredName]=useState('');
    // const nameHandler=(event)=>{
    //     setEnteredName(event.target.value);
    // }
        const refInputName=useRef();
    // const [enteredAge, setEnteredAge]=useState('');
    // const ageHandler=(e)=>{
    //     setEnteredAge(e.target.value);
    // }
    const refInputAge=useRef();
    const refInputClge=useRef();

    const saveUser=(user)=>{
        user.preventDefault();
        const enteredName = refInputName.current.value;
        const enteredAge=refInputAge.current.value;
        const enteredclgeName=refInputClge.current.value;
        if(enteredName.trim().length ===0 || enteredAge.trim().length===0){
            alert('enter valid data')
            return;
        }
        if(+enteredAge<1){
            return;
        }
        props.saveUser(enteredName, enteredAge, enteredclgeName);    
        refInputName.current.value='';
        refInputAge.current.value='';
        refInputClge.current.value='';
    }
   
    return(
        <form onSubmit={saveUser}>
            <div className='my-form'>
                <label>User name : </label>
                <input type='text' ref={refInputName}></input>
                <br></br>
                <label>Age(Years) : </label>
                <input type='number' ref={refInputAge}></input>
                <br></br>
                <label>College name : </label>
                <input type='text' ref={refInputClge}></input>
                <br></br>
                <button type='sumbit'>Add User</button>
            </div>
        </form>
    )
}

export default NewForm;