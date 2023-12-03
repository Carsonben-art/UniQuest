import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';


const Carousel = () => {
  const images = [
      require('../assets/images/class.jpg'),
      require('../assets/images/class1.jpg'),
      require('../assets/images/class2.jpg'),
      require('../assets/images/class.jpg'),
      
    ];
  return (
    <View style={styles.container}>
      <SliderBox
      
        images={images}
        autoPlay
        circleLoop
        dotColor="#493d8a"
        inactiveDotColor = "#d7d7d7"
        ImageComponentStyle = {{
          borderRadius: 10,
          width: '94%',
          height: 200,
        }}
        
      />
    </View>
  )
}

export default Carousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
})