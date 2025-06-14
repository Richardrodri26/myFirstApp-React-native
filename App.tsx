import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import IonIcons from '@react-native-vector-icons/ionicons';
import {BoxObjectModelScreen} from './src/presentation/screens';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcons {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="Richard Rodriguez" /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        <BoxObjectModelScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
