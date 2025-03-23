import React from 'react'
import Left from  "./home/left/left.jsx"
import Right from "./home/right/Right.jsx"

const App = () => {
  return (
    <>
      <div className="flex h-screen">
        <Left></Left>
        <Right></Right>
      </div>
    </>
  )
}

export default App
