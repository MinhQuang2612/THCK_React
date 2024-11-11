import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) { 
  return (
    <View style={styles.container}>
      <Text style={styles.description}>A premium online store for sporter and their stylish choice</Text>
      
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I6RgZqYaaj2yoEYcjn1xLuF6ejkVm5sj0Q2REjJLnMUO7MB-JMtKcmnFw8oA-21~I278VVSigiVjDi7As9CR8e3d0kVdVahjQ~iK24vFqNq26DEEOxvhKmjWhZAptz4w3HeHoO~IRWnv~zcorXAalQ98u9FQT01fBOz5h3Xu-xZ1ccmd6yJnkN~HrEe0q~G2NjvHeZNIHigUZDSaqNOTgHiekyzPG7ia0oc~O9v16nJz15q0JFFhE3vWf4030yzjsSL~8XGw0oRTUWVMMhxxyYnwfZmfvbqe-B5y~Gechq~e5NVwMqeG~LOWh8KvYiOrY-jz0uuelyFgi2DqzkJuPA__' }} 
          style={styles.image} 
        />
      </View>

      <Text style={styles.title}>POWER BIKE SHOP</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('BikeList')} 
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
    fontFamily: 'Bahnschrift Condensed',
  },
  imageContainer: {
    backgroundColor: '#FEE8E5',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  image: {
    width: 220,
    height: 210,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
