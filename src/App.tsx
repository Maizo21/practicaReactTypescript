import React from 'react'
import TiposBasicos from './typescript/TiposBasicos'
import ObjectLiteral from './typescript/ObjectLiteral'
import BasicFunctions from './typescript/BasicFunctions'
import Counter from './components/Counter'
import LoginPage from './components/LoginPage'
import UsersPage from './components/UsersPage'
import FormsPage from './components/FormsPage'

const App = () => {
  return (
    <>
    <div className="mt-2">
      <h1>Introduccion React - TS</h1>
      <hr />
      <TiposBasicos />
      <ObjectLiteral />
      <BasicFunctions />
      <Counter />
      <LoginPage />
      <UsersPage />
      <FormsPage />
    </div>
    </>
  )
}

export default App