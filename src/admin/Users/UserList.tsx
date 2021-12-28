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
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="username" />
          <EmailField source="email" />
          <TextField source="first_name" />
          <TextField source="last_name" />
          <BooleanField source="is_active" />
          <TextField source="role" />
          <JsonField
        source="restricted"
        addLabel={true}
        jsonString={false} // Set to true if the value is a string, default: false
        reactJsonOptions={{
          // Props passed to react-json-view
          name: null,
          collapsed: true,
          enableClipboard: false,
          displayDataTypes: false,
        }}
        
          />
          <JsonField
        source="permitted"
        addLabel={true}
        jsonString={false} // Set to true if the value is a string, default: false
        reactJsonOptions={{
          // Props passed to react-json-view
          name: null,
          collapsed: true,
          enableClipboard: false,
          displayDataTypes: false,
        }}
        
          />
           <ShowButton/>
          {permissions==='admin'&& <EditButton />}
          {/* {permissions === 'admin' && <DeleteButton basePath="/users" /> } */}
        </Datagrid>
      </List>
    </>
  )
};
