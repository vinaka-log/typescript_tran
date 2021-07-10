import React from 'react';
import logo from './logo.svg';
import './App.css';

const name  = "hello";

リテラル型
// name = "hello";

let nameChange  = "hello";
nameChange = "hello2";

let username:string = "Hello";
let dummyNomber:number = 2;
let bool:boolean = true;

let array1 = [true, false,true];
let array2 = [0, 1,"Hello"];

interface NAME {
  first: string;
  last: string | null;
}

let nameObj: NAME = {first: "Yamada", last: null };

const func1 = (x:number, y: number) :number => {
  return x + y;
}

// Intersection Types
type PROFILE ={
  age:number;
  city:string;
};

type LOGIN ={
  username: string;
  password: string;
}

type USER = PROFILE & LOGIN

const userA: USER = {
  age:30,
  city: "TOKYO",
  username: "xxx",
  password: "yyy",
};

// Union Types
let value: boolean | number
value = true;
// value ="hell";
value = 10;

let arrayUni: (number | string)[];
arrayUni = [0,1,2,"Hello"];

let company :"Facebook" | "Geoole" | "Amazon"
company = "Amazon";

let memory :256 | 512;
memory  = 512;

function App() {
  return (
    <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
    </div>
  );
}

export default App;
