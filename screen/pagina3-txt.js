import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Alert, Button } from "react-native";
// import { BarCodeScanner } from "expo-barcode-scanner";

const Pagina3 = ({navigation, route}) => {

  return (
    <View style={styles.container}>
      <Text>Pagina 3!</Text>
    </View>
  );

};

export default Pagina3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center',
      marginLeft: 40,
      marginRight: 40,
    }
  });
