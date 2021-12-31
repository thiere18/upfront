import React, { FC } from 'react';
import { usePermissions } from 'react-admin';
import { ChipField } from 'react-admin';


import { Show, TextField } from 'react-admin';
import { TabbedShowLayout } from 'react-admin';
import { Tab } from 'react-admin';


export const UserShow: FC = (props) => {
  const { permissions } = usePermissions();
  console.log(props);

  return (
    <>
<Show {...props}>

        <TabbedShowLayout>
            <Tab label="summary">
                <TextField label="Id" source="id" />
                <TextField source="username" />
            <TextField source="email" />
            <TextField source="role" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="is_active" />

            </Tab>
            <Tab label="restrctions" >
            <ChipField source="restricted.sources" label="sources" />
            <ChipField source="restricted.areas" label="areas" />
            <ChipField source="restricted.tags" label="tags"/>

            </Tab>
            <Tab label="permissions" >
            <ChipField source="permitted.sources" label="sources" />
            <ChipField source="permitted.areas" label="areas" />
            <ChipField source="permitted.tags" label="tags"/>
            </Tab>
        </TabbedShowLayout>

    </Show>

    </>
  )
};