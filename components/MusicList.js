import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MusicItem from './MusicItem';

const MusicList = ({ songs, onSelect }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MusicItem
            title={item.title}
            artist={item.artist}
            image={item.image}
            onPress={() => onSelect(item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default MusicList;
