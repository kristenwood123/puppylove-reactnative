import React from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'
import { Icon, Button } from 'react-native-elements'

const Card = (props) => {
  const { name, breed, image } = props.dog;

  return (
      <View style={styles.card}> 
        <Image 
          source={image}
          style={styles.image}
            />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.breed}>{breed}</Text>
          {/* <Button
            containerStyle={{
              width: 200,
              height: 200
            }}>
            <Icon
              name='heart'
              type='font-awesome'
              color='red'
              />
            </Button>
            <Icon
              name='times'
              type='font-awesome'
              color='black'
              /> */}
      </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
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
    marginTop: 20,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
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

export default Card