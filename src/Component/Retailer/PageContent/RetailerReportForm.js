import React from 'react'

class ReportForm extends React.Component{

    constructor(){
        super();
        this.state = {
            first_name:null,
            last_name:null,
            email:null,
            city:null,
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
                        <h3>Report Form</h3><br />
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label>Date:</label>
                                    <input type="date" class="form-control" name="curr_date" onChange={this.handleInputChange} />
                                </div>
                                <div class="form-group col-md-12">
                                    <label>Name:</label>
                                    <input type="text" class="form-control" name="name" onChange={this.handleInputChange} />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label>Earning:</label>
                                    <input class="form-control" name="earning" onChange={this.handleInputChange} />
                                </div>
                                <div class="form-group col-md-12">
                                    <label>Import Amount:</label>
                                    <input  class="form-control" name="import" onChange={this.handleInputChange} />
                                </div>
                                
                            </div>

              

                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label>Note:</label>
                                    <textarea name="note" class="form-control" onChange={this.handleInputChange} />
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

export default ReportForm;