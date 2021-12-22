import React, { FC } from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  PasswordInput,
  BooleanInput,
  SelectInput
} from 'react-admin';
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
