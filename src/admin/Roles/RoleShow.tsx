import React, { FC } from 'react';
import { ChipField } from 'react-admin';
import { Datagrid } from 'react-admin';
import { BooleanField } from 'react-admin';
import { ArrayField } from 'react-admin';


import { Show, TextField } from 'react-admin';
import { TabbedShowLayout } from 'react-admin';
import { Tab } from 'react-admin';


export const RoleShow: FC = (props) => {
  console.log(props);

  return (
    <>
<Show {...props}>

        <TabbedShowLayout>
            <Tab label="summary">
                <TextField label="Id" source="id" />
                <TextField source="name" />
            </Tab>
                  <Tab label="related users" >

                  <ArrayField source="users">
    <Datagrid>
                              <TextField source="username" label="username" />
                              <TextField source="email" label="email" />
                              <BooleanField source="is_active" label="Is active" />



    </Datagrid>
</ArrayField>
            </Tab>

        </TabbedShowLayout>

    </Show>

    </>
  )
};