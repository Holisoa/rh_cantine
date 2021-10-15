import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import CollaborateursList from './components/CollaborateursList'
import CollaborateurCreate from './components/CollaborateurCreate'
import CollaborateurEdit from './components/CollaborateurEdit'


function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
  
    <Resource name='collaborateurs' list={CollaborateursList} create={CollaborateurCreate} edit={CollaborateurEdit}/>

  </Admin>

}

export default App;
