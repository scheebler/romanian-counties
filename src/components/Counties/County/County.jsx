import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexBasis: '33.333333%',
      backgroundColor: '#fff',
      textAlign: 'center',
      justifyContent: 'center',
      borderRadius: 25,
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.75,
      shadowRadius: 6.22,
      elevation: 3,
      padding: '5px'
    },
    title: {
      fontSize: 25,
    }
  });
export default function County({navigation, county}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{county.name}</Text>
      <Text>Area: {county.area}</Text>
      <Text>Population: {county.population}</Text>
      <Text>Residence: {county.residence}</Text>
      <Button title='More Details' onPress={() => navigation.navigate('Details', {county: county})}/>
    </View>
  );
}
