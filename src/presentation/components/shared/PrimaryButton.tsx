import React from 'react';
import {
  Platform,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
  StyleProp,
} from 'react-native';

interface Props extends PressableProps {
  label: string;
  textStyle?: StyleProp<TextStyle>; // Opcional: estilo para el texto
  style?: StyleProp<ViewStyle>; // Asegura que `style` tenga el tipo correcto
}

export const PrimaryButton = ({
  label: title,
  style,
  textStyle,
  ...rest
}: Props) => {
  return (
    <Pressable
      {...rest}
      style={({pressed}) => [
        styles.button,
        pressed && styles.buttonPressed,
        style, // Permite sobreescritura externa
      ]}>
      <Text
        style={[
          {
            color: Platform.OS === 'android' ? 'white' : '#4746AB',
          },
          textStyle, // Permite personalizar el texto si se desea
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
  },
});
