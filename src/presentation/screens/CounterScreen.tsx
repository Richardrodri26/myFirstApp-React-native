import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {PrimaryButton} from '../components';
import {Button} from 'react-native-paper';

export const CounterScreen = () => {
  const [count, setCount] = useState(10);

  const onChangeCounter = (value: number) => {
    setCount(count + value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>

      <Button
        mode="contained"
        onPress={() => onChangeCounter(+1)}
        onLongPress={() => setCount(0)}>
        Incrementar
      </Button>
      {/* <PrimaryButton
        onPress={() => onChangeCounter(+1)}
        onLongPress={() => setCount(0)}
        label="Incrementar"
      /> */}

      {/* <Pressable
        onPress={() => onChangeCounter(+1)}
        onLongPress={() => setCount(0)}
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
        <Text style={{color: Platform.OS === 'android' ? 'white' : '#4746AB'}}>
          Incrementar
        </Text>
      </Pressable>
      <Button onPress={() => onChangeCounter(-1)} title="-1" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: 300,
  },
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    color: 'white',
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
  },
});
