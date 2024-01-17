import './App.css';




function App(props) {
  // code here


  return (
      <>
        <div>
             <h1>Kalvium gallery</h1>
             <div className="image-container">
               {props.data.map((el)=>{
                return (
                  <div key={el.id}>
                    <img src={el.img}
                    alt=""/>
                  </div>
                );
               })}
             </div>
             <div>Using Functional Components</div>
        </div>
      </>
  );
  
}

export default App;
