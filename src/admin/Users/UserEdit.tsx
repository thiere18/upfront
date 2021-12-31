import React, { FC } from 'react';
import { required } from 'react-admin';
import { ReferenceInput } from 'react-admin';
import {
  Edit,
  SimpleForm,
  TextInput,
  PasswordInput,
  BooleanInput,
  SelectInput
} from 'react-admin';
import { JsonInput } from "react-admin-json-view";

export const UserEdit: FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <PasswordInput source="password" />
 
      <JsonInput
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
            <ReferenceInput source="role_id" reference="roles">
               <SelectInput optionText="name" optionValue="id" validate={[required()]} />
           </ReferenceInput>
      <BooleanInput source="is_active" />
    </SimpleForm>
  </Edit>
);
