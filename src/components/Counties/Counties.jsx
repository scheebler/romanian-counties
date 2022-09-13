import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import getCounties from '../../../api/getCounties';
import County from './County/County';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      textAlign: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 25,
    },
    counties: {
        flexDirection: 'row',
        display: 'flex',
      flexWrap: 'wrap',
      paddingBottom: 30
    },
    footer: {
        position: 'fixed',
        bottom: 0,
        width: '100%'
    }
  });
export default function Counties({navigation}) {
  const counties = getCounties;
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Counties of Romania</Text>
        <View style={styles.counties}>
            {counties.map(county => <County navigation={navigation} county={county} key={county.name} />)}
        </View>
      </View>
      <View style={styles.footer}>
        <Button title='Back to homepage' onPress={() => navigation.navigate('Home')}/>
      </View>
    </View>
    
  );
}
