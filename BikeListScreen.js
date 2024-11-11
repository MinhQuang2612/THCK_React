import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { setBikes } from './store/bikeSlice'; // Import action setBikes

export default function BikeListScreen() {
  const bikes = useSelector((state) => state.bikes.bikeList);  // Lấy danh sách xe đạp từ Redux store
  const [filteredBikes, setFilteredBikes] = React.useState(bikes);
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // Fetch bikes from MockAPI when component mounts
  useEffect(() => {
    fetch('https://671465c2690bf212c7615315.mockapi.io/api/Bikes')
      .then(response => response.json())
      .then(data => {
        const validBikes = data.filter(item => item && item.id);
        dispatch(setBikes(validBikes)); // Cập nhật Redux với dữ liệu từ MockAPI
        setFilteredBikes(validBikes);  // Lưu vào state filteredBikes
      })
      .catch(error => console.error(error));
  }, [dispatch]);

  // Filter bikes based on selected category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredBikes(bikes);
    } else {
      const filtered = bikes.filter(bike => bike.type === selectedCategory);
      setFilteredBikes(filtered);
    }
  }, [selectedCategory, bikes]);

  const handleBikePress = (bike) => {
    navigation.navigate('BikeDetail', { bike });
  };

  const handleAddBikePress = () => {
    navigation.navigate('AddBike');
  };

  const Item = ({ bike }) => (
    <TouchableOpacity onPress={() => handleBikePress(bike)} style={styles.card}>
      <TouchableOpacity style={styles.heartButton}>
        <Text style={bike.liked ? styles.heartLiked : styles.heartUnliked}>
          {bike.liked ? '❤️' : '🤍'}
        </Text>
      </TouchableOpacity>
      <Image source={{ uri: bike.image }} style={styles.image} />
      <Text style={styles.name}>{bike.name}</Text>
      <Text style={styles.price}>${bike.price}</Text>
    </TouchableOpacity>
  );

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>The World's Best Bikes</Text>
      
      <Button title="Add New Bike" onPress={handleAddBikePress} />

      <View style={styles.categoryContainer}>
        {['All', 'Roadbike', 'Mountain'].map(category => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, selectedCategory === category && styles.selectedCategoryButton]}
            onPress={() => handleCategoryPress(category)}
          >
            <Text style={styles.categoryButtonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <FlatList
        data={filteredBikes}
        numColumns={2}
        renderItem={({ item }) => <Item bike={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#E74C3C',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
    marginTop: 15,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#F5F5F5',
  },
  selectedCategoryButton: {
    backgroundColor: '#E74C3C',
  },
  categoryButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FEE8E5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    width: '47%',
    margin: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  heartButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  heartLiked: {
    fontSize: 20,
  },
  heartUnliked: {
    fontSize: 20,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#E74C3C',
    textAlign: 'center',
  },
});
