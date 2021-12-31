// in src/users.js
import React, { FC } from 'react';
import { ChipField } from 'react-admin';
// import { usePermissions } from 'react-admin';

import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  EmailField,

} from 'react-admin';

// const { loading, permissions } = usePermissions();

export const RoleList: FC = (props) => {

  return (
    <>
      <List {...props}>
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
           {/* <ShowButton/> */}
          {/* {permissions==='admin'&& <EditButton />} */}
          {/* {permissions === 'admin' && <DeleteButton basePath="/users" /> } */}
        </Datagrid>
      </List>
    </>
  )
};
