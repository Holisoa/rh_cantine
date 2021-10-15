import React from 'react'
import { 
    List, 
    Datagrid,
    TextField,  
    EditButton, 
    DeleteButton 
} from 'react-admin'

const CollaborateursList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='Matricule' />
            <TextField source='Nom_prenoms' />
            <TextField source='Fonction' />
            <EditButton basePath='/collaborateurs' />
            <DeleteButton basePath='/collaborateurs' />
        </Datagrid>
    </List>
    
}
export default CollaborateursList