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
      fontSize: 25,
    }
  });
export default function DetailedCouny({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.county.name}</Text>
      <Text>Area: {route.params.county.area}</Text>
      <Text>Population: {route.params.county.population}</Text>
      <Text>Residence: {route.params.county.residence}</Text>
      <Text>Development region: {route.params.county.developmentRegion}</Text>
      <Text>ISO code: {route.params.county.isoCode}</Text>
      <Text>Postal code: {route.params.county.postalCode}</Text>
      <Button title='Back to the counties' onPress={() => navigation.navigate('Counties')}/>
    </View>
  );
}
