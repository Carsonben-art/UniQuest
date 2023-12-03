import React, { useEffect, useState } from 'react';
import { View,StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons'; // or appropriate icon library


const NextButton = ({ percentage, scrollTo }) => {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const [strokeDashoffset, setStrokeDashoffset] = useState(new Animated.Value(circumference));

  useEffect(() => {
    const animation = Animated.timing(strokeDashoffset, {
      toValue: circumference - (circumference * percentage) / 100,
      duration: 250,
      useNativeDriver: true,
    });

    animation.start();

    return () => {
      animation.stop();
    };
  }, [percentage, strokeDashoffset, circumference]);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={`${center},${center}`}>
          <Circle
            stroke="#E6E7E8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            stroke="#F4338F"
            fill="none"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </G>
      </Svg>
      <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
        <AntDesign name="arrowright" size={32} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    position: 'absolute',
    backgroundColor: '#f4338f',
    borderRadius: 100,
    padding: 20,
  }
});
