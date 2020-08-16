import * as React from "react";
import { MovieList, MovieShow, MovieCreate, MovieEdit } from "./movies";
import { Admin, Resource } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
  RAFirebaseOptions
} from "react-admin-firebase";

const config = require("./FIREBASE_CONFIG.js").firebaseConfig;

const options: RAFirebaseOptions = {
  logging: true,
};
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

class App extends React.Component {
  render() {
    return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource
          name="movies"
          list={MovieList}
          show={MovieShow}
          create={MovieCreate}
          edit={MovieEdit}
        />
      </Admin>
    );
  }
}

export default App;
