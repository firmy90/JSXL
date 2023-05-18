import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import SecondHome from './SecondHome'
import Greeting from './Greeting';
import Greeting2 from './Greeting2';
import { Routes, Route } from "react-router-dom"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/second" element={<SecondHome />}></Route>
//           <Route path="/greeting" element={<Greeting name="Janek" />}></Route>
//           <Route path="/greeting2" element={<Greeting2 name="Janek" />}></Route>
//         </Routes>
//       </header>
//     </div>
//   );
// }

// export default App;

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      enteredName: "",
    }
    this.onChangeName = this.onChangeName.bind(this);
  }
  state: { enteredName: string };
  onChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      enteredName: event.target.value

    });
  }

  render() {
    console.log("App.render");
    return (
      <div className='App'>
        <header className='App-header'>
          
            <input value ={this.state.enteredName} onChange={this.onChangeName}/>
            <Greeting2 name = {this.state.enteredName} />

        </header>
      </div>
    )

  }

}

export default App;
