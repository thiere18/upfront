// in src/users.js
import React, { FC } from 'react';
// import { usePermissions } from 'react-admin';
import { usePermissions } from 'react-admin';

import {
  BooleanField,
} from 'react-admin';

// const { loading, permissions } = usePermissions();
import { Show, SimpleShowLayout, TextField, DateField, RichTextField } from 'react-admin';

export const UserShow: FC = (props) => {
  const { permissions } = usePermissions();

  return (
    <>
<Show {...props}>
        <SimpleShowLayout>
            <TextField source="username" />
            <TextField source="email" />
            <TextField source="role"/>
            <TextField source="first_name" />
            <TextField source="last_name" />
            <BooleanField source="is_active"/>
            <TextField source="restricted"/>
            <TextField source="permitted"/>
        </SimpleShowLayout>
    </Show>

    </>
  )
};