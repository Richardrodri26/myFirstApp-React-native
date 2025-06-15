import {Platform, SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import IonIcons from '@react-native-vector-icons/ionicons';
import {
  BoxObjectModelScreen,
  DimensionScreen,
  PositionScreen,
} from './src/presentation/screens';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcons {...props} />,
      }}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'android' ? 24 : 0,
          // backgroundColor: '#29C4D9',
        }}>
        {/* <HelloWorldScreen name="Richard Rodriguez" /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        <PositionScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
