import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {globalStyle} from '../theme/global.style';

import {FAB} from 'react-native-paper';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(10);

  const onChangeCounter = (value: number) => {
    setCount(count + value);
  };

  return (
    <View style={globalStyle.centerContainer}>
      <Text style={globalStyle.title}>{count}</Text>

      <FAB
        style={globalStyle.fab}
        label="1"
        onPress={() => onChangeCounter(+1)}
        onLongPress={() => setCount(0)}
        icon={'add-outline'}
        // icon={() => <Icon name="accessibility-outline" size={25} color="black" />}
      />
    </View>
  );
};
