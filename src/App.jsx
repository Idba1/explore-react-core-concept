import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>vite + react</h1>
      <Student></Student>
      <Student2></Student2>
      <Student3 grad="7" score = "2.83"></Student3>
      <Device name="Laptop" Price="70"></Device>
      <Device name="Mobille" Price="20"></Device>
    </>
  )
}

function Student (){
  const studentStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  const name = "Sakib";
  const age = 15;
  const cls = 9;
  const myFriend = {
    name : 'Jalil',
    cls: 9,
    age: 15,
  }
  return(
    <div style={studentStyle}>
    <h1>About my Self</h1>
    <p>hello everyone. i'm {name}, i'm {age} years old. i read in class {cls}. my friend name is {myFriend.name}. now he is {myFriend.age} years old. and he read in class {cls}.</p>
    </div>
  )
}


function Student2() {
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class:</p>
      <p>score:</p>
    </div>
  )
}



function Student3(props) {
  return (
    <div style={{
      margin: '20px',
      padding: '20px',
      border: '2px solid purple',
      borderRadius: '20px'
    }}>
      <h3>This is a student</h3>
      <p>Class: {props.grad}</p>
      <p>score: {props.score}</p>
    </div>
  )
}


function Device(props){
  // console.log(props);
  return(
    <h2>This device name: {props.name}; price: {props.Price}</h2>
  )
}
export default App
