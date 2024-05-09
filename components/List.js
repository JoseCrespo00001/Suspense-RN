
import React from 'react';
import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native';
import Card from './Card';
import useSWR from 'swr';

const List = () => {
  const { data, error } = useSWR('https://randomuser.me/api/?results=10');

  if (!data) {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.columnContainer}>
            <View style={styles.cardContainer}>
              {/* Mostrar un indicador de carga */}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.columnContainer}>
            <View style={styles.cardContainer}>
              <Text>Error al cargar los datos</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const users = data.results;
  const halfLength = Math.ceil(users.length / 2);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.columnContainer}>
          <View style={styles.cardContainer}>
            {users.slice(0, halfLength).map((user, index) => (
              <Card key={index} name={user.name.first} picture={user.picture.large} />
            ))}
          </View>
          <View style={styles.cardContainer1}>
            {users.slice(halfLength).map((user, index) => (
              <Card key={index} name={user.name.first} picture={user.picture.large} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  columnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '50%',
    borderRadius: 10,
    padding: 10,
    paddingRight:0,
    marginBottom: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContainer1: {
    width: '50%',
    borderRadius: 10,
    padding: 10,
    paddingLeft:0,
    marginBottom: 100,
    marginTop: 100,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default List;
