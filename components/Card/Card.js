import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Card.styles'

const Card = ({ card }) => (
  <View activeOpacity={1} style={styles.card}>
      <View style={{}}>
          <Text style={{}}>{card.name}</Text>
      </View>
    <Image styles={styles.image} source={card.photo} resizeMode="cover" />
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>{`${card.name}`}</Text>
    </View>
  </View>
);

export default Card