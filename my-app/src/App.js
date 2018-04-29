import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionNum: 0,
      questionNum: 0,
      question1: 'Can You Move?',
      question2: 'Are You Hurt?',
      question3: 'Please follow this route to the safe zones.',
      question4: 'Broadcasting HELP to people around you. Initiating call.'
    }
  }
  render() {

    function handleClick() {
      console.log('BLAH');
      //get rid of maps and everything. get rid of map
    }
    return (

        <div className="App">
          { this.state.sectionNum == 0 &&
            <div id="side-buttons">
              <div id="button-container5">
                <div id="button-item-container">HOUSING</div>
              </div>
              <div id="button-container4">
                <div id="button-item-container">SHELTER</div>
              </div>
              <div id="button-container3">
                <div id="button-item-container">FOOD</div>
              </div>
              <div id="button-container2">
                <div id="button-item-container">SAFETY</div>
              </div>
              <div id="button-container1">
                <div id="button-item-container">DANGER</div>
              </div>
            </div>
          }
          { this.state.sectionNum == 0 &&
            <header className="App-header">
              <h1 className="App-title">Status Report</h1>
              <h2 className="Red-text">FIRE. Risk Assessment: High</h2>
              <h3 className="Red-text">PD: Please evacuate away from park eastbound of Route 84</h3>
              <br></br>
              <button type="button" className="Safe-button" onClick={() => this.setState({ sectionNum: 1 })}>SAFE</button>
              <button type="button" className="Danger-button" onClick={() => this.setState({ sectionNum: 2 })}>DANGER</button>
            </header>
          }
          { this.state.sectionNum == 1 &&
            <div className="App-header">
              <button type="button" className="Safe-button left-corner" onClick={() => this.setState({ sectionNum: 0 })}>BACK</button>
              <div className="spacer">
                <br></br>
              </div>
              <div className="resource-section">
                Recommended Food Resources
              </div>
              <div className="resource-section">
                Recommended Shelter Resources
              </div>
              <div className="resource-section">
                Recommended Medical Resources
              </div>
              <div className="resource-section">
                Recommended Tips
              </div>
            </div>
          }
          { this.state.sectionNum == 2 &&
            <div className="App-header">
              <button type="button" className="Safe-button left-corner" onClick={() => this.setState({ sectionNum: 0 })}>BACK</button>
              <div className="danger-title">
                { this.state.questionNum == 0 &&
                  <h2>{this.state.question1}</h2>
                }
                { this.state.questionNum == 1 &&
                  <h2>{this.state.question2}</h2>
                }
                { this.state.questionNum == 2 &&
                  <h2>{this.state.question3}</h2>
                }
                { this.state.questionNum == 3 &&
                  <h2>{this.state.question4}</h2>
                }
              </div>

              { this.state.questionNum == 0 &&
                <div>
                  <button type="button" className="Safe-button larger" onClick={() => this.setState({ questionNum: 2 })}>YES</button>
                  <button type="button" className="Danger-button larger" onClick={() => this.setState({ questionNum: 1 })}>NO</button>
                </div>
              }
              { this.state.questionNum == 1 &&
                <div>
                  <button type="button" className="Safe-button larger" onClick={() => this.setState({ questionNum: 3 })}>YES</button>
                  <button type="button" className="Danger-button larger" onClick={() => this.setState({ questionNum: 2 })}>NO</button>
                </div>
              }


            </div>
          }

        </div>


    );
  }
}

export default App;
