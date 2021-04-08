import React, { Component } from "react"

class Home extends Component {
    
    render() {
        return (
            <div className="container" key={this.props.name}>
                                    
                    <div className="column-right">
                    <h1>Hi, I'm Nikitha Medisetty</h1>
                    <p>I'm Student of Master of Science Computing and Data Analysis at <a href='https://www.smu.ca'>Saint Mary's University</a>.
                        I have around five years of Experience as a Software Developer.
                    </p>

                    <p>
                        <ul>
                            <li>
                             Joined MCDA as Future is all about Data and Analyzing it, I see there is a lot of potential in it.
                            </li>
                        </ul>
                    </p>
                    </div>

            </div>
        )
    }
}

export default Home;
