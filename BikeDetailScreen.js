import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BikeDetailScreen = ({ route }) => {
  const { bike } = route.params; 

  return (
    <View style={styles.container}>
      {/* Khung chứa ảnh */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: bike.image }} style={styles.image} resizeMode="contain" />
      </View>

      <Text style={styles.name}>{bike.name}</Text>
      
      {/* Gộp discount và old price thành một hàng */}
      <Text style={styles.priceInfo}>
        {bike.discount}% OFF | ${bike.price}  
        <Text style={styles.oldPrice}> ${(bike.price / (1 - bike.discount / 100)).toFixed(0)}</Text>
      </Text>

      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.description}>
        {bike.description}  {/* Use description from API data */}
      </Text>

      <View style={styles.cartContainer}>
        <TouchableOpacity style={styles.heartButton}>
          <Text style={bike.liked ? styles.heartLiked : styles.heartUnliked}>
            {bike.liked ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: 200, // Chiều cao của khung chứa ảnh
    borderRadius: 10,
    overflow: 'hidden', // Đảm bảo ảnh không bị tràn ra ngoài khung
    backgroundColor: '#FEE8E5',
  },
  image: {
    width: '100%',
    height: '100%', // Đảm bảo ảnh lấp đầy khung
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  priceInfo: {
    fontSize: 16,
    color: '#FF4D4D',
    marginVertical: 10,
  },
  oldPrice: {
    fontSize: 14,
    color: '#888',
    textDecorationLine: 'line-through',
    marginLeft: 10, // Optional: Add some space between the prices
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10, // Optional: Space between description and buttons
  },
  heartButton: {
    marginRight: 10, // Space between heart and button
  },
  heartLiked: {
    fontSize: 30,
  },
  heartUnliked: {
    fontSize: 30,
  },
  addToCartButton: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 40,
    flex: 1, // Allow it to grow
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BikeDetailScreen;
