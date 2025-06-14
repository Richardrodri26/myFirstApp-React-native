import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';
import IonIcons from '@react-native-vector-icons/ionicons';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcons {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="Richard Rodriguez" /> */}
        {/* <CounterScreen /> */}
        <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  );
};
