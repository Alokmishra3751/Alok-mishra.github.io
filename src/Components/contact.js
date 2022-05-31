import React ,{ useState } from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import contactImg from './img/contact.jpg';
import emailjs from 'emailjs-com';
   

const Contact = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm(
            'service_cjhoug3',
            'template_bhuezg1',
            e.target,
            "bXKPCcDRcguwwewU6")
            .then(res=>{
                console.log(res);
            }).catch(err=>
                console.log(err));
    }

   const[userData, setUserData] = useState({
    Name:"",
    Email:"",
    Message:""
   });
   let name,value;
   const postUserData = (event) =>{
    name = event.target.name;
    value =  event.target.value;

    setUserData({...userData,[name]: value })
   };
   // connect with firebase
   const submitData = async(e) =>{
    e.preventDefault();
    const{Name,Email,Message} = userData
    const res = fetch('https://am-2022-default-rtdb.firebaseio.com/userDataRecords.json',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({Name,Email,Message}),
    },
    
    );
    if(res){
        setUserData({
        Name:"",
        Email:"",
        Message:""
        });
        alert('Form Submitted');
    }
    else{
        alert('Please Fill all fields');
    }
   };
   
    return (
    <div className="row">
    <div className="col-md-6">
        <img src={contactImg} alt="contact"/>
    </div>
    <div className="col-md-6">
     <div className="form-wrap">
       <h3 class="simple-title mb-5">Let's Make Your Product A Hero.</h3>  
      <Form method="Post" className="contactForm">
        <Form.Group className="mb-4">
            <Form.Label>Your name</Form.Label>
            <Form.Control name="Name" value={userData.Name} onChange={postUserData} type="text" placeholder="Enter Your name" />
        </Form.Group>   
        <Form.Group className="mb-4">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="Email" value={userData.Email} onChange={postUserData} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-4">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} name="Message" value={userData.Message} onChange={postUserData} type="text" placeholder="Your Message" />
        </Form.Group> 

        {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>*/}
        <Button className="btn btn-primary" type="submit" onClick={submitData}>
            Submit
        </Button>
        </Form>
       </div> 
    </div>
    </div>
    );
  }

  export default Contact;