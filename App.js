import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  DeviceEventEmitter,
  PermissionsAndroid
} from 'react-native';
import Beacons from 'react-native-beacons-manager'
const App: () => React$Node = () => {

  useEffect(() => {
    get_beacon();
  }, []);

  const get_beacon = async () => {

    // // Start detecting all iBeacons in the nearby
    // try {

    // } catch (err) {
    //   console.log(`Beacons ranging not started, error: ${error}`)
    // }

    // // Print a log of the detected iBeacons (1 per second)



    try {
      // const granted = await PermissionsAndroid.request(
      //   PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      //   {
      //     'title': 'Location Permission',
      //     'message': 'Activeev needs to access your location.'
      //   }
      // )
      // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // 20CAE8A0-A9CF-11E3-A5E2-0800200C9A66
      Beacons.detectIBeacons();
      await Beacons.startRangingBeaconsInRegion('REGION1');
      console.log(`Beacons ranging started succesfully!`);

        DeviceEventEmitter.addListener('beaconsDidRange', (data) => {
          console.log('Found beacons!', data.beacons)
        })
      // } else {
      //   console.log("Location permission denied")
      // }
    } catch (err) {
      console.warn('ERR ' + err)
    }
  }


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello</Text>
      </SafeAreaView>
    </>
  );
};

export default App;