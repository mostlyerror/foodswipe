import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./Card.styles";

const Card = ({ card }) => (
  <View activeOpacity={1} style={styles.card}>
    <View style={styles.restaurantInfoContainer}>
      <Text style={styles.restaurantName}>{card.name}</Text>
    </View>
    <Image style={styles.image} source={card.photo} resizeMode="stretch" />
  </View>
);

export default Card;
