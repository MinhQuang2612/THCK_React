import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNewBike } from './store/bikeSlice';
import { useNavigation } from '@react-navigation/native';

export default function AddBikeScreen() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [discount, setDiscount] = useState('');
  const [liked, setLiked] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddBike = async () => {
    const newBike = {
      image,
      name,
      price: parseFloat(price),
      type,
      description,
      discount: parseInt(discount),
      liked,
    };

    try {
      const response = await fetch('https://671465c2690bf212c7615315.mockapi.io/api/Bikes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBike),
      });
      const data = await response.json();
      
      dispatch(addNewBike(data)); // Cập nhật Redux với dữ liệu từ MockAPI
      navigation.goBack();  // Quay lại màn hình BikeListScreen
    } catch (error) {
      Alert.alert('Error', 'Failed to add bike to server');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Bike</Text>

      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Type (e.g., Mountain, Roadbike)"
        value={type}
        onChangeText={setType}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Discount (%)"
        value={discount}
        onChangeText={setDiscount}
        keyboardType="numeric"
      />
      <View style={styles.switchContainer}>
        <Text style={styles.likedLabel}>Liked:</Text>
        <Switch value={liked} onValueChange={setLiked} />
      </View>

      <Button title="Add Bike" onPress={handleAddBike} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  likedLabel: {
    marginRight: 10,  // Thêm khoảng cách giữa "Liked" và Switch
  },
});
