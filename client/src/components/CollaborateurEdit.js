import React from 'react'
import { Edit, SimpleForm, TextInput} from 'react-admin'

const CollaborateurEdit = (props) => {
    return (
        <Edit title='Edit a Collaborator information' {...props}> 
            <SimpleForm>
                <TextInput source='Matricule' />
                <TextInput source='Nom_prenoms' />
                <TextInput source='Fonction' />          
            </SimpleForm>
        </Edit>
    )
}

export default CollaborateurEdit
