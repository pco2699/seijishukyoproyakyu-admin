// in src/posts.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  DateTimeInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  DateField,
} from "react-admin";

const MovieFilter = (props: any) => {
  return (<Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>);
};

export const MovieList = (props: any) => (
  <List {...props} sort={{ field: 'timestamp', order: 'DESC' }} filters={<MovieFilter />}>
    <Datagrid >
      <TextField source="title" />
      <DateField source="timestamp" showTime />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" />
    </Datagrid>
  </List>
);

export const MovieShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="src" />
      <TextField source="author" />
      <DateField source="timestamp" showTime/>
    </SimpleShowLayout>
  </Show>
);

export const MovieCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="src" />
      <TextInput source="author" />
      <DateTimeInput source="timestamp" />
    </SimpleForm>
  </Create>
);

export const MovieEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="src" />
      <TextInput source="author" />
    </SimpleForm>
  </Edit>
);
