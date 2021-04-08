import React, { Component } from "react"
import logo from './hali.jpg';
import logo1 from './sunny.png';
import logo2 from './cold.png';
import logo3 from './mild.png';

class Town extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isCalsius: true
            ,temperature:''
        }
        this.getWeather = this.getWeather.bind(this);
    }
    getWeather() {

    fetch("http://api.openweathermap.org/data/2.5/weather?q=Halifax,ca&APPID=622b89406f6ec567b8aebe8103cd9cc7")
    .then(response => {
        return response.json()
    })
    .then(response => {
        this.setState({            
            temperature: response.main.temp-273.15
        });
    });
       
}
componentDidMount() {
    this.getWeather()
} 
    
    render() {
        return (
            <div className="container" key={this.props.name}>  
                <p> <b> Halifax, Canada </b></p> 
                <img src={logo} alt="Logo" />
                <div>
                <h3 className="column-right">I'm living in Halifax to complete my Masters.</h3>
              
                {
                
                this.state.temperature < 10 ?
                <img className="Photo" src={logo2} alt="Cold"  width="230" height="130"/>
                :
                ((this.state.temprature > 10)  || (this.state.temperature < 20)) ?
                <img className="Photo" src={logo3} alt="Mild"  width="230" height="130"/>       
                :
                <img className="Photo" src={logo1} alt="Sunny"  width="103" height="130"/>
                }
                <div className="next">
                <b>Temperature:</b>
                {this.state.isCalsius 
                    ?
                    Math.round(this.state.temperature*100)/100+"°C "
                    :
                    Math.round((9/5*this.state.temperature+32)*100)/100+"°F "
                    }
                <button onClick={() => this.setState({ isCalsius: !this.state.isCalsius })}
                className={this.state.isCalsius ? "btn-capital-hide" : "btn-capital-show"}>
                {this.state.isCalsius ? "Show Fahrenheit" : "Show Celsius"}
                </button>
                
                </div>
                    
                </div>
            </div>
        )
    }
}
export default Town;