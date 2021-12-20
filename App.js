import React, { useState } from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { data }  from './assets/data/dogs'

const App = () => {
  const [dogs, setDogs] = useState(data)

  return (
    <View style={styles.pageContainer}>
        <View style={styles.card}> 
            <Image 
              source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg'}}
              style={styles.image}
            />
          <Text style={styles.name}>Spark</Text>
          <Text style={styles.breed}>Husky</Text>
          <Icon
            name='heart'
            type='font-awesome'
            color='red'
            />
          <Icon
            name='times'
            type='font-awesome'
            color='black'
            />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pageContainer: { 
    justifyContent: 'center', 
    alignItems: 'center',
    flex: 1
  },
  card: {
    width: '95%',
    height: '85%',
    borderRadius: 10,
    shadowColor: '#000',
    backgroundColor: 'pink',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
  },
  image: {
    width: '90%', 
    height: '70%',
    padding: 10,
    borderRadius: 10
  },
  name: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center'
  }, 
  breed: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    lineHeight: 25
  }
})
export default App