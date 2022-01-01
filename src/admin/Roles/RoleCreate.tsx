import React, { FC } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,

} from 'react-admin';



export const RoleCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" variant="outlined" />

    </SimpleForm>
  </Create>
);
