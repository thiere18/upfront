// in src/users.js
import React, { FC } from 'react';
// import { usePermissions } from 'react-admin';
import { usePermissions } from 'react-admin';

import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  EmailField,
  EditButton,
  DeleteButton
} from 'react-admin';
// const { loading, permissions } = usePermissions();

export const UserList: FC = (props) => {
  const { permissions } = usePermissions();

  return (
    <>
      <List {...props}>
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="username" />
          <EmailField source="email" />
          <TextField source="first_name" />
          <TextField source="last_name" />
          <BooleanField source="is_active" />
          <TextField source="role" />
          {permissions==='admin'&& <EditButton />}
          {permissions === 'admin' && <DeleteButton basePath="/users" /> }

        </Datagrid>
      </List>
    </>
  )
};
