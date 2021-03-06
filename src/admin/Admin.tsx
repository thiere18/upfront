import React, { FC } from 'react';
import { fetchUtils, Admin as ReactAdmin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import authProvider from './authProvider';
import {BACKEND_URL} from '../config'
import { UserList, UserEdit, UserCreate, UserShow} from './Users';
import { RoleList, RoleEdit, RoleCreate, RoleShow} from './Roles';

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

const dataProvider = simpleRestProvider(`${BACKEND_URL}/api/v1`, httpClient);
// console.log(dataProvider)

export const Admin: FC = () => {
  return (
    <ReactAdmin dataProvider={dataProvider} authProvider={authProvider}>
      {(permissions: 'admin' | 'normal'| 'restricted') => [
        permissions === 'admin' ? (
          <Resource
            name="users"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}

          />
        ) :     (   <Resource
        name="users"
        list={UserList}
        // edit={UserEdit}
        // create={UserCreate}

        />),
        <Resource
        name="roles"
        list={RoleList}
        edit={RoleEdit}
        create={RoleCreate}
        show={RoleShow}
      />
      ]}

    </ReactAdmin>
    
  );
};
