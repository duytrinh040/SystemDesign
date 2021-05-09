import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from 'react-date-picker'

class RetailerRegisterForm extends React.Component{

    constructor(){
        super();
        this.state = {
            first_name:null,
            last_name:null,
            email:null,
            phone_number:null,
            address:null,
            gender:null,
            hobbies:[]
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        const name = target.name;
        
        if(target.type === 'checkbox'){
            if(target.checked){
                this.state.hobbies[value] = value;   
            }else{
                this.state.hobbies.splice(value, 1);
            }
        }else{
            this.setState({
                [name]: value
            });
        }   
        
    }

    submit(){
        console.warn(this.state)
    }

    render(){
        return(
            <div>
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <br /><br />
                        <h3>Register Form</h3><br />
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label>First Name :</label>
                                    <input type="text" class="form-control" name="first_name" onChange={this.handleInputChange} required/>
                                </div>
                                <div class="form-group col-md-12">
                                    <label>Last Name :</label>
                                    <input type="text" class="form-control" name="last_name" onChange={this.handleInputChange} required/>
                                </div>
                                <div class="form-group col-md-12">
                                    <label>Shop Name :</label>
                                    <input type="text" class="form-control" name="last_name" onChange={this.handleInputChange} required/>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label>Email :</label>
                                    <input type="email" class="form-control" name="email" onChange={this.handleInputChange} />
                                </div>
                                <div class="form-group col-md-12">
                                    <label>Phone:</label>
                                    <PhoneInput class="form-control" placeholder="Enter phone number" name="phone_number" country={'us'} value={this.state.phone} onChange={phone => this.setState({ phone })} required/>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label>Gender :</label><br />
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" id="inlineRadiom" value="male" checked={this.state.gender === "male"} onChange={this.handleInputChange} />
                                        <label class="form-check-label" for="inlineRadiom">Male</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" id="inlineRadiof" value="female" checked={this.state.gender === "female"} onChange={this.handleInputChange} />
                                        <label class="form-check-label" for="inlineRadiof">Female</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-row">
                                <label>Date of Birth</label><br/>
                                <input type="date" class="form-control" name="dob" onChange={this.handleInputChange} required/>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label>Address :</label>
                                    <textarea name="address" class="form-control" onChange={this.handleInputChange} required/>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="col-md-12 text-center">
                                    <button type="submit" class="btn btn-primary" onClick={()=>this.submit()}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )  
    }
}

export default RetailerRegisterForm;