import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      textAlign: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 30,
    }
  });

export default function Homepage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Romania and general info</Text>
      <Text>Population: 19038098</Text>
      <Text>Area: 238,397 km2</Text>
      <Text>Capital: Bucharest</Text>
      <Text>Official language: Romanian</Text>
      <Text>Official coin: RON</Text>
      <Text>GDP:  $707747</Text>
      <Button title='Check the counties' onPress={() => navigation.navigate('Counties')}/>
    </View>
  );
}
