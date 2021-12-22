import React, { FC } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  PasswordInput,
  BooleanInput,
  ReferenceInput,
  SelectInput, SelectField,
  O
} from 'react-admin';
import { CT_SELECT_I18N } from './UserEdit';


export const UserCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
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
  </Create>
);
