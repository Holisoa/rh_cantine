import React from 'react'
import { Create, SimpleForm, TextInput} from 'react-admin'

const CollaborteurCreate = (props) => {
    return (
        <Create title='Create a new collaborator' {...props}> 
            <SimpleForm>
                <TextInput source='Matricule' />
                <TextInput source='Nom_prenoms' />
                <TextInput source='Fonction' />
            </SimpleForm>
        </Create>
    )
}

export default CollaborteurCreate
