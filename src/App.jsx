import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'

function App() {
  const [count, setCount] = useState(0)

  const actors = ['sakib', 'razz', 'bobi', 'salman', 'siam'];
    // return (
    //     <li>Name : {name}</li>
    // )

  return (
    <>
      <h1>vite + react</h1>
      {/* <Actor actor={"Razz"}></Actor> */}
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Actor name={"Bappa Raz"}></Actor> */}

      {/* <Todo task='html : ' isDone={true}></Todo>
      <Todo task='jsx : ' isDone={false}></Todo>
      <Todo task='css : '></Todo> */}

      {/* <Student></Student>
      <Student2></Student2>
      <Student3 grad="7" score = "2.83"></Student3>
      <Device name="Laptop" Price="70"></Device>
      <Device name="Mobille" Price="20"></Device>
      <Developer name='Sajal' salary="100000"></Developer>
      <Developer name='Marfi' salary={200000}></Developer>
      <Developer></Developer> */}
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


function Developer({name="undefiend",salary=0}){
  return (
    <>
      <h3>Developer name: {name}. her salary {salary}</h3>
    </>
  )
}
export default App
