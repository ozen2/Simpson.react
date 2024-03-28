import { useState } from 'react';
import './App.css'
import Avatar from './assets/components/Avatar';

const bart = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson"
};
const homer = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
  firstName: "Homer",
  lastName:"Simpson",
};


function App() {
  return (
    <>
    <Avatar
    image = {bart.image}
    firstName={bart.firstName}
    lastName={bart.lastName}
    />
    <Avatar
    image={homer.image}
    firstName={homer.firstName}
    lastName={homer.lastName}
    />
    </>
  )
}

export default App
