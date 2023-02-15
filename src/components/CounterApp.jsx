import React, { useState } from 'react';
import { Button, Grid, GridColumn, Segment} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function CounterApp() {
  const [count, setCount] = useState(0);

  const incrementCount = () =>{
    if(count===10) return;
     setCount(count + 1);
  }
  const decrementCount = () => {
    if (count === 0) return;
    setCount(count - 1);
  };
  let color = "green";
  if (count >= 5 && count <= 9) {
    color = "blue";
  } else if (count === 10) {
    color = "red";
  }


  return (
    <>
    
    <Segment raised style={{margin: '100px auto', width: '500px'}}>
      <Grid.Row>
        <h2 style={{textAlign: 'center', margin:'50px auto',color:color}}>Count</h2>
      </Grid.Row>
      <Grid.Row>
          <h2 style={{textAlign: 'center',margin:'50px auto'}}>{count}</h2>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
        <Button color='green'
            onClick={incrementCount} 
            content='Increment'
            style={{textAlign: 'left'}}
          />

          
          <Button color='red'
            floated='right' 
            onClick={decrementCount} 
            content='Decrement' 
            disabled={count === 0}
            
          />
          


        </Grid.Column>
      </Grid.Row>
      
    </Segment>
    <h3 style={{textAlign:'center'}}>Done by: Ritu  -  Registration No. 12020172</h3>
    </>
   
  );
}

export default CounterApp;
