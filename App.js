import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MusicList from './components/MusicList';
import Player from './components/Player';

export default function App() {
  const [songs] = useState([
    {
      id: 1,
      title: 'The Real Slim Shaday',
      artist: 'Eminem',
      image: 'https://365songsblog.wordpress.com/wp-content/uploads/2013/09/eminem-the-marshall-mathers-lp-1417x1417-front-cover.jpg'
    },
    {
      id: 2,
      title: 'So Far Away',
      artist: 'Avenged Sevenfold',
      image: 'https://th.bing.com/th/id/OIP.Set3JyvRpvYq_kyoWUzRRQAAAA?rs=1&pid=ImgDetMain',
    },
    {
      id: 3,
      title: 'Iris',
      artist: 'The Goo Goo Dolls',
      image: 'https://i.scdn.co/image/ab67616d0000b273eda9478c39a21e1cdc6609ca',
    },
    {
      id: 4,
      title: 'Creep',
      artist: 'Radiohead',
      image: 'https://resources.tidal.com/images/94179406/dc9b/46b1/85e8/7c03f955434f/640x640.jpg',
    },
    {
      id: 5,
      title: 'Oasis',
      artist: 'Dont Look Back in Anger',
      image: 'https://th.bing.com/th/id/OIP.Jl8E-mbJFlTaOaqvHLsAbQHaGa?w=800&h=693&rs=1&pid=ImgDetMain',
    },
    {
      id: 6,
      title: 'The Black Parade ',
      artist: 'My Chemical Romance',
      image: 'https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1',
    },
    {
      id: 7,
      title: 'Open Arms(feat.Travis Scoott)',
      artist: 'SZA',
      image: 'https://m.media-amazon.com/images/I/91BazzuLE+L._UF1000,1000_QL80_.jpg',
    },
    {
      id: 8,
      title: 'Die With a Smile',
      artist: 'Bruno Mars, Lady Gaga',
      image: 'https://ziipu.ao/storage/musicas/cover/pRklyhGo0DhTp3K6C9DjjFo6wXikUEJMIkzVjaIy.jpg',
    },
    {
      id: 9,
      title: 'Love Me',
      artist: 'Lil Wayne, Drake, Future',
      image: 'https://images.genius.com/025852747d34bfec09080ad4c10b07b6.1000x1000x1.jpg',
    },
    {
      id: 10,
      title: 'Roman Picisan',
      artist: 'Dewa 19',
      image: 'https://th.bing.com/th/id/OIP.EdN9UErZydeA2QYRwrU1zQAAAA?rs=1&pid=ImgDetMain',
    },
    {
      id: 11,
      title: 'Come As You Are',
      artist: 'Nirvana',
      image: 'https://i.ytimg.com/vi/MicSRaTGk4k/maxresdefault.jpg',
    },
    {
      id: 12,
      title: 'Master Of Puppet',
      artist: 'Metallica',
      image: 'https://th.bing.com/th/id/OIP.s3cfFN-o_WGRWmxQOn-VcgHaHa?rs=1&pid=ImgDetMain',
    },
    {
      id: 13,
      title: 'Stressed Out',
      artist: 'Twenty One Pilots',
      image: 'https://www.onlinedrummer.com/cdn/shop/products/NC0xNTM0LmpwZWc.jpg?v=1663468816&width=390',
    },
    {
      id: 14,
      title: 'Reflection',
      artist: 'The Neighbourhood',
      image: 'https://i.pinimg.com/originals/37/4c/d4/374cd437a420f13755c63c2cc767c8ca.jpg',
    },
    {
      id: 15,
      title: 'Why You Only Call Me When You High?',
      artist: 'Arctic Monkeys',
      image: 'https://th.bing.com/th/id/R.793845cf71759a2a20e361eea64aa0b2?rik=fV3KyBlrlt1IDQ&riu=http%3a%2f%2fi1.cdnds.net%2f13%2f29%2f618x618%2farctic-monkeys-am-album-artwork.jpg&ehk=vNj1aTCoP9R10uNOJkMnV0QV3VauXApuUSeOipuFMAc%3d&risl=&pid=ImgRaw&r=0',
    },
  ]);
  const [currentSong, setCurrentSong] = useState(null);

  const handleSelectSong = (song) => {
    setCurrentSong(song);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>R.A.B Music</Text>
      <MusicList songs={songs} onSelect={handleSelectSong} />
      <Player
        currentSong={currentSong}
        onPlay={() => console.log('Play')}
        onPause={() => console.log('Pause')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeef7',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    color: '#6c63ff',
  },
});
