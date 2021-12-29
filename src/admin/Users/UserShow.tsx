// in src/users.js
import React, { FC, Props } from 'react';
// import { usePermissions } from 'react-admin';
import { usePermissions } from 'react-admin';
import { fetchUtils, Admin as ReactAdmin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import {
  BooleanField,
} from 'react-admin';

// const { loading, permissions } = usePermissions();
import { Show, SimpleShowLayout, TextField, DateField, RichTextField } from 'react-admin';
import { TabbedShowLayout } from 'react-admin';
import { Tab } from 'react-admin';


const httpClient = (url: any, options: any) => {
  if (!options) {
    options = {};
  }
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider('/api/v1', httpClient);

// getData()
// console.log(getData())
const x=dataProvider.getOne('users', { id: 1 }).
then((res=> res.data.permitted.sources))
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
            <TextField source="restricted.sources" label="sources" />
            <TextField source="restricted.areas" label="areas" />
            <TextField source="restricted.tags" label="tags"/>

            </Tab>
            <Tab label="permissions" >
            <TextField source="permitted.sources" label="sources" />
            <TextField source="permitted.areas" label="areas" />
            <TextField source="permitted.tags" label="tags"/>
            </Tab>
        </TabbedShowLayout>

    </Show>

    </>
  )
};