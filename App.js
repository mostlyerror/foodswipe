import React, { useRef } from "react";
import { Text, View, Image } from "react-native";
import Swiper from 'react-native-deck-swiper'
import { photoCards } from './constants'

import { IconButton, Card } from "./components";

import styles from "./App.styles";

export default function App() {
  const useSwiper = useRef(null).current

  const handleOnSwipedLeft = () => useSwiper.swipeRight()

  return (
    <View style={styles.container}>
      <View style={styles.swiperContainer}>
        <Swiper
          ref={useSwiper}
          cards={photoCards}
          renderCard={card => <Card card={card} />}
          animateCardOpacity
        />
      </View>
      <View style={styles.buttonsContainer}>
        <IconButton
          name="close"
          onPress={handleOnSwipedLeft}
          color="white"
          backgroundColor="#e5566d"
        />
      </View>
    </View>
  );
}
