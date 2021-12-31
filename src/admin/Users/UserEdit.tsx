import React, { FC } from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  PasswordInput,
  BooleanInput,
  SelectInput
} from 'react-admin';
import { JsonInput } from "react-admin-json-view";

export const CT_SELECT_I18N = [
  {id: 'admin', text: 'Admin'},
  { id: 'normal', text: 'Normal' },
  {id: 'restricted', text: 'Restricted'},

];
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
      <SelectInput
        source="role"
        choices={CT_SELECT_I18N}
        translateChoice={false}
        optionValue="id"
        optionText="text"
      />
      <BooleanInput source="is_active" />
    </SimpleForm>
  </Edit>
);
