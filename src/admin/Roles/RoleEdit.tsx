import React, { FC } from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,

} from 'react-admin';


export const RoleEdit: FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" variant="outlined" />
      <TextInput source="name" variant="outlined" />
    </SimpleForm>
  </Edit>
);
