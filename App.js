import React from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const App = () => {
  return (
    <View style={styles.pageContainer}>
        <View style={styles.card}>
          <Image 
            source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg'
          }}
            style={styles.image}
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
    height: '70%',
    borderRadius: 10
  },
  image: {
    width: '100%', 
    height: '100%',
    borderRadius: 10
  }
})
export default App