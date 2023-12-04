import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import Colors from "../constants/Colors";
//   import Font from "../constants/Font";
  
  
  
  const AppTextInput = ({ ...otherProps }) => {
    const [focused, setFocused] = useState(false);

    return (
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={Colors.darkText}
        style={[
          {
            // fontFamily: Font["poppins-regular"],
            fontSize: 15,
            padding:20,
            backgroundColor: Colors.lightPrimary,
            borderRadius: 10,
            marginVertical: 10,
          },
          focused && {
            borderWidth: 3,
            borderColor: Colors.primary,
            shadowOffset: { width: 4, height: 10 },
            shadowColor: Colors.primary,
            shadowOpacity: 0.2,
            shadowRadius: 10,
          },
        ]}
        {...otherProps}
      />
    );
  };
  
  export default AppTextInput;
  
  const styles = StyleSheet.create({});