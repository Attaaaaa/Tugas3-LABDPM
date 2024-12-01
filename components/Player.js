import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Player = ({ currentSong, onPlay, onPause }) => {
  if (!currentSong) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{currentSong.title}</Text>
      <Text style={styles.artist}>{currentSong.artist}</Text>
      <View style={styles.controls}>
        <TouchableOpacity onPress={onPlay}>
          <Icon name="play-circle-fill" size={48} color="#6c63ff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPause}>
          <Icon name="pause-circle-filled" size={48} color="#6c63ff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f4f9',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  artist: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginVertical: 5,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default Player;
