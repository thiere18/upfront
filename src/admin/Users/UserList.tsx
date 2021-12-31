// in src/users.js
import React, { FC } from 'react';
import { ChipField } from 'react-admin';
// import { usePermissions } from 'react-admin';
import { usePermissions } from 'react-admin';

import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  EmailField,
  EditButton,
  DeleteButton,
  ShowButton,
} from 'react-admin';
import { JsonField, JsonInput } from "react-admin-json-view";

// const { loading, permissions } = usePermissions();

export const UserList: FC = (props) => {
  const { permissions } = usePermissions();

  return (
    <>
      <List {...props}>
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="username" />
          <EmailField source="email" />
          <TextField source="first_name" />
          <TextField source="last_name" />
          <BooleanField source="is_active" />
          <TextField source="role" />
          <ChipField source="restricted.sources" label="r.sources" />
          <ChipField source="restricted.areas" label="r.areas" />
          <ChipField source="restricted.tags" label="r.tags" />
          <ChipField source="permitted.sources" label="p.sources" />
          <ChipField source="permitted.areas" label="p.areas" />
          <ChipField source="permitted.tags" label="p.tags" />
           {/* <ShowButton/> */}
          {/* {permissions==='admin'&& <EditButton />} */}
          {/* {permissions === 'admin' && <DeleteButton basePath="/users" /> } */}
        </Datagrid>
      </List>
    </>
  )
};
