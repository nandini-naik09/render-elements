import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header'
import Content from './Components/Content';

class App extends React.Component
{
    constructor()
    {
      super();
      this.state={subject: "React with Redux Certification Training "}
    }



      changeText()
      {
        this.setState({
          subject: "Components and styling the application Layout"
        })
      }


    

  render()
  {
    return  (
    <div>
    <Header title="using props with functional component"/>
    <h1> Welcome to {this.state.subject}</h1>
    <button onClick={(()=>{this.changeText()})}>Change the title using states </button> 
    <Content name="using props with class component"/>
    </div>
    )
  }
}

export default App;
