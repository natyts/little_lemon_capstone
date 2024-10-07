import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const Button = ({onPress, children, disabled}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.buttonContainer, disabled && styles.disabled]}
      disabled={disabled}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 9, 
    backgroundColor: '#495E57',
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  disabled: {
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    color: 'white',
  }
});

export default Button;