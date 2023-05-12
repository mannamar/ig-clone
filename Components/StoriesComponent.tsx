import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import {FC} from 'react';
import llama from '../assets/pic1.jpg';

const StoriesComponent: FC = () => {
  return (
    <ScrollView horizontal style={styles.ScrollStyle}>
      <Image source={llama} style={styles.ImageStyle}/>
      <Image source={llama} style={styles.ImageStyle}/>
      <Image source={llama} style={styles.ImageStyle}/>
      <Image source={llama} style={styles.ImageStyle}/>
      <Image source={llama} style={styles.ImageStyle}/>
      <Image source={llama} style={styles.ImageStyle}/>
      <Image source={llama} style={styles.ImageStyle}/>
      <Image source={llama} style={styles.ImageStyle}/>
      <Image source={llama} style={styles.ImageStyle}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ImageStyle: {
    height: 70,
    width: 70,
    borderRadius: 50,
    marginRight: 20
  },
  ScrollStyle: {
    paddingTop: 10,
    paddingBottom: 5
  }
})

export default StoriesComponent