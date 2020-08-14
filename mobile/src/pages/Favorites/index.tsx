import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      // console.log(response);
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 4,
          paddingBottom: 4,
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem 
              key={teacher.id} 
              teacher={teacher}
              favorited
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;
