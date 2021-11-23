
function Button (props)
{

  const handleClick=()=>setCounter(counter+1)
 
    return (<button onClick={props.onClickFunction}>+1
    </button>
      )
}

function Display(props)
{
  return (
  <div>{props.message}</div>)
}

function App()

{
   const [counter,setCounter]= useState(42);
  const incrementCounter = () =>setCounter(counter+1);
  return (
  <div>
  <Button onClickFunction ={incrementCounter}/> 
      <Display message={counter}/>
    
  </div>)
}

ReactDOM.render(
 <div>
    
   <App/>
  </div>,
  document.getElementById('mountNode'),
);


------------------------------------------------------------------------------------------------------


function Button (props)
{
const handleClick=()=>props.onClickFunction(props.increment);
 return (
      <button onClick={handleClick}>
        +{props.increment}
    </button>
      );
}

function Display(props)
{
  return (
  <div>{props.message}</div>);
}

function App()

{
   const [counter,setCounter]= useState(0);
  const incrementCounter = (incrementValue) =>setCounter(counter+incrementValue);
  return (
  <div>
  <Button onClickFunction ={incrementCounter} increment ={5}/> 
       <Button onClickFunction ={incrementCounter} increment ={10}/> 
       <Button onClickFunction ={incrementCounter} increment ={15}/> 
       <Button onClickFunction ={incrementCounter} increment ={20}/> 
      <Display message={counter}/>
    
  </div>)
}

ReactDOM.render(
 <div>
    
   <App/>
  </div>,
  document.getElementById('mountNode'),
);


-----------------------------------------------------------------------------------
const render =()=>{
  document.getElementById('mountNode').innerHTML=`
<div>
Hello Html
<input/>
<pre>${(new Date).toLocaleTimeString()}</pre>
  </div>`;
  
ReactDOM.render(
React.createElement(
'div'
  null,
  "Hello React",
  React.createElement('input',null),
  React.createElement("pre",null,
  (new
   Date).toLocaleTimeString()),
),
  document.getElementById('MountNode2'),
);



  
}
setInterval(render);



