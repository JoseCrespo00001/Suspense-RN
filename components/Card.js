import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Card = ({ name, picture }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={{ uri: picture }}
      />
      <Text style={styles.title}>{name}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '90%',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    padding: 12,
    shadowRadius: 6,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#70C1B3',
    width: '100%',
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Card;
