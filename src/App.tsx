import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from "./data.json"

type USERS = typeof Data;

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

// typeof

let msg1: string = "Hi";
let msg2: typeof msg1;
msg2= "hell";

let animal = {cat: "small cat"};
let animal2: typeof animal = {cat: "big cat"};

// keyof

type KEYS = {
  primary: string;
  secondary: string;
};

let key: keyof KEYS
key = "primary";

// typeof + keyof

const SPORTS = {
  soccer : "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;

// enum
enum OS {
  Winidows,
  Mac, 
  Linux,
}

interface PC {
  id: number,
  OStype: OS;
}

const PC1: PC = {
  id:1,
  OStype: OS.Mac,
}

const PC2: PC = {
  id:2,
  OStype: OS.Linux,
}

// 型の互換性
const comp1 = "test1";
let comp2: string = comp1;

let comp3: string = "test";
let comp4: "test" = comp3;

let funcomp1 = (x:number) => {}
let funcomp2 = (x:string) => {}

funcomp1 = funcomp2
funcomp2 = funcomp1

// Generics
interface GEN<T>{
  item: T
}

const gen0: GEN<string> = {item: "hello"};
const gen1: GEN = {item: "hell"};
const gen2: GEN<number> = {item: 12};

interface GEN1<T = string>{
  item: T
}

const gen3: GEN1 = {item: "hell"};

interface GEN2<T extends string| number> {
  item: T ;
}
const gen5: GEN2<number> = {item: 12};

function funcGEN<T>(props: T) {
  return {item: props};
}

const gen6 =funcGEN<string>("test");
const gen7 =funcGEN<string | null>(null);

function funcGen1<T extends string | null>(props: T){
  return{value: props};
}

const gen8 = funcGen1("hello");
const gen9 = funcGen1(123);

interface Props {
  price: number;
}

function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}

const gen10 = funcGen3({ price: 10 });

const funcGEN4 = <T extends Props>(props: T) =>  {
  return { value: props.price };
}


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
