import React, { FC } from 'react';
import { ReferenceInput } from 'react-admin';
import { required } from 'react-admin';
import {
  Create,
  SimpleForm,
  TextInput,
  PasswordInput,
  BooleanInput,
  SelectInput,
  
} from 'react-admin';
import {  JsonInput } from "react-admin-json-view";

export const UserCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="username" variant="outlined" validate={[required()]} />
      <TextInput source="email" variant="outlined" validate={[required()]} />
      <TextInput source="first_name" variant="outlined" />
      <TextInput source="last_name" variant="outlined" />
      <PasswordInput source="password" variant="outlined" validate={[required()]} />
      <JsonInput
        validate={[required()]}
        source="restricted"
        jsonString={false} // Set to true if the value is a string, default: false
        reactJsonOptions={{
          // Props passed to react-json-view
          name: null,
          collapsed: true,
          enableClipboard: false,
          displayDataTypes: false,
        }}
      />
      <JsonInput
        validate={[required()]}
        source="permitted"
        jsonString={false} // Set to true if the value is a string, default: false
        reactJsonOptions={{
          // Props passed to react-json-view
          name: null,
          collapsed: true,
          enableClipboard: false,
          displayDataTypes: false,
        }}
      />
            <ReferenceInput source="role_id" reference="roles" variant="outlined" >
               <SelectInput optionText="name" optionValue="id" validate={[required()]}  />
           </ReferenceInput>
      <BooleanInput source="is_active" />


    </SimpleForm>
  </Create>
);
