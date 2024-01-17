import { Component } from "react";
import "./App.css"
// import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{

  // code here
  render(props){
  

    return (
      <>
         <div>
            <h1>Kalvium gallery</h1>
         </div>
         <div className="image-container">
          {this.props.data.map((item)=>{
              return (
                <div key={item.id}>
                  <img src={item.img}
                  alt="elephant"/>
                  </div>
              );
            })}
         </div>
         <div>Using Class Components</div>
      
      </>
    )
  }
}
