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
      <TextInput source="restricted_areas" />
      <TextInput source="permitted_areas" />
      <TextInput source="restricted_sources" />
      <TextInput source="permitted_sources" />
      <TextInput source="restricted_tags" />
      <TextInput source="permitted_tags" />
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
