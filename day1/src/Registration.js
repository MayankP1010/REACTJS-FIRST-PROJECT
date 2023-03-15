import React,{Component} from'react';
import axios from'axios';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Registration.css'


class Registration extends Component{
    constructor(){
        super()
        this.state={
            Username : '',
            Phone : '',
            Password : '',
            Confirmpassword:'',
            
            
            

        }
    }

     handleUsernameChange=(event)=>{
        this.setState({
            Username : event.target.value
        })
    }
     handlePasswordChange=(event)=>{
        this.setState({
            Password : event.target.value
        })
    }
     handleConfirmPasswordChange=(event)=>{
        this.setState({
            Confirmpassword : event.target.value
        })
    }

    
     handlePhone=(event)=>{
        this.setState({
            Phone : event.target.value
        })
    }
      handleSubmit=(event)=>{
         event.preventDefault();
                     const data = {
                          "Username": this.state.Username,
                       "Phone":this.state.Phone,
                       "Password":this.state.password,
                         "Confirmpassword": this.state.Confirmpassword
                   }
                    alert(`${this.state.Username}  registered successfully !`);
                    //e.history.push("/About")
        
                     console.log(data);
                    axios
                      .post("http://localhost:3000/Data", data)   
                }
           
            
        
        
        
        
        
     
    
    
    render(){
        return(
            
            <form onSubmit={this.handleSubmit}>
                <div className="div2">
                    <h1 className="heading">Prasthanam</h1>
                    </div>
                    <h3>Sign-In</h3>
                   
                
                <div className="division">
                    <label>Username</label>
                    <br/>
                    <input type ='text' value={this.state.Username} onChange={this.handleUsernameChange} />
                </div>

                <div className="division">
                <label>Phone</label>
                <br/>
                    <input type ='text' value={this.state.Phone} onChange={this.handlePhone} />
                </div >

                <div className="division" >
                    <label>Password</label>
                    <br/>
                    <input type='password'  maxLength = "7" value={this.state.Password} onChange={this.handlePasswordChange}/>
                    
                </div>
                <div className="division">
                    <label>Confirm Password</label>
                    <br/>
                    <input type='password'  maxLength = "7" value={this.state.ConfirmPassword} onChange={this.handleConfirmPasswordChange}/>
                    
                </div>
                
                <button className="button">Submit</button>
                <div className="float">
                    Existing User?<Link to="Login">Login Here</Link>
               </div>
            </form>
            
        )
    }
}

export default Registration;





// import React, { Component } from 'react';
// import './Registration.css';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import {Link} from 'react-router-dom';



// export class Registration extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//              firstname: '',
//              lastname: '',
//              contact: '',
//              password: '',
//              confirm_pass: ''
//         }
//     }
    

//     handleChange = (e) =>{
//         this.setState({
//              [e.target.name]: e.target.value
//         })
//     }   

   
//         formSubmit = (e) =>{
//             e.preventDefault();
//             const data = {
//                 "firstname": this.state.firstname,
//                 "lastname":this.state.lastname,
//                 "contact":this.state.contact,
//                 "password":this.state.password,
//                 "confirm_pass": this.state.confirm_pass
//             }
//             alert(`${this.state.firstname} ${this.state.lastname} registered successfully !`);
//             //e.history.push("/About")

//             console.log(data);
//             axios
//              .get("http://localhost:3000/guests", data)   
//         }
   
    

//     // onSubmitted = (props) =>{
//     //     props.history.push("/About")
//     // };

//     render() {
//         const {firstname, lastname, contact, password, confirm_pass} = this.state;
//         return (
//             <div className="division">
//                 <form onSubmit={this.formSubmit}>
//                 <div className="div2">
//                     <h1 className="heading">Balaji Pure Veg</h1>
                   
//                     <input type="text" 
//                             name= "firstname"
//                             value={firstname} 
//                             placeholder="Enter firstname" 
//                             onChange={this.handleChange}/>

//                     <br/><br/>

                    
//                     <input type="text"
//                             name= "lastname"
//                             value={lastname} 
//                             placeholder="Enter Lastname"
//                             onChange={this.handleChange}/>

//                     <br/><br/>

                    
//                     <input type="number"
//                             name= "contact"
//                             value={contact} 
//                             placeholder="Enter Contact Number"
//                             onChange={this.handleChange}/>

//                     <br/><br/>
                    
                   
//                     <input type="password" 
//                             name="password"
//                             value={password}
//                             maxLength = "7"
//                             placeholder=" Password"
//                             onChange={this.handleChange}/>
                    
//                     <br/><br/>

                   
//                     <input type="password" 
//                             name="confirm_pass"
//                             maxLength = "7"
//                             value={confirm_pass} 
//                             placeholder="Confirm Password"
//                             onChange={this.handleChange}/>
//                     <br/>
//                 <button className="button" onClick={this.onSubmitted} >Submit</button>
//                 <div className="float">
//                     Existing User?<Link to="Login">Login Here</Link>
//                 </div>
//                 </div>
//                 <br/>

                
//             </form>
//             </div>
//         )
//     }
// }

// export default Registration
