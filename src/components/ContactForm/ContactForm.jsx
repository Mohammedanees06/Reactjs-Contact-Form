import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { useState } from "react";


const ContactForm = () => {

const [nam, setName]= useState("anees");
const [email, setEmail]= useState("mohammedanees0606@gmail.com")
const [text, setText] = useState("hey how are u")
  const onSubmit =(event)=> {
  event.preventDefault();
  setName(event.target[0].value);
  setEmail(event.target[1].value)
  setText( event.target[2].value);
  
  console.log("Before state update:", nam, email, text);


};

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button text= "Via suport chat"/>
        <Button text= "Via call"/>
        </div>
        <Button
        isOutline ={true}
        text= "Via Email Form"/>
      
    <form onSubmit={onSubmit} >
        <div className= {styles.form_control}>
            <label htmlFor="name"> Name</label> 
            <input type ="text" name= "name" />
        </div>
        <div className= {styles.form_control}>
            <label htmlFor="email"> Email</label> 
            <input type ="email" name= "email" />
        </div>
        <div className= {styles.form_control}>
            <label htmlFor="text"> Text</label> 
            <textarea  name= "text" rows="12" />
        </div>
        <div style={{
          display : 'flex', 
          justifyContent:'end',
          height: '30px',
          marginBottom:'12px'}}>
        <Button text= "Submit Form"/>
        </div>
        
    </form>
        </div>
        <div className={styles.contact_image}>
          <img src="./images/Service.svg" />
        </div>

    </section>
  )
}

export default ContactForm