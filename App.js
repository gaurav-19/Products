import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import HomeScreen from './src /screens/HomeScreen';
import { createServer } from "miragejs"
import { PRODUCTS } from './src /utils/Data';

if (window.server) {
  server.shutdown()
}

window.server = createServer({
  routes() {
    this.get("/api/getallproducts", () => {
      return {
        products: PRODUCTS,
      }
    }),
    this.del("/api/deleteproduct/:id", (schema, request) => {
      let id = request.params.id
      return schema.products.find(id).destroy()
    })
  },
})


function App() {

  return (
    <SafeAreaView style={styles.container}>
          <HomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1
  },
});

export default App;
