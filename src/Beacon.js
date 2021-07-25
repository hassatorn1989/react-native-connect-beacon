import React, { useEffect } from 'react'
import { View, Text, DeviceEventEmitter, PermissionsAndroid } from 'react-native'
import Beacons from 'react-native-beacons-manager'

const Beacon = () => {
    useEffect(() => {
        get_beacon();
    }, [])

    const get_beacon = async() => {
        try {
            // const granted = await PermissionsAndroid.request(
            //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            //     {
            //         'title': 'Location Permission',
            //         'message': 'Activeev needs to access your location.'
            //     }
            // )
            // console.log('here 666', granted);

            // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //     // console.log("Location Permitted")
            //     // // Start detecting all iBeacons in the nearby
                
            //     // console.log(`Beacons ranging started succesfully!`)

            //     // // Print a log of the detected iBeacons (1 per second)
            //     // DeviceEventEmitter.addListener('beaconsDidRange', (data) => {
            //     //     console.log('Found beacons!', data.beacons)
            //     // })
            // } else {
            //     console.log("Location permission denied")
            // }

            // // console.log(PermissionsAndroid.RESULTS.GRANTED);

            Beacons.detectIBeacons()

            await Beacons.startRangingBeaconsInRegion('REGION1')

        } catch (err) {
            console.warn(err)
        }
    }
    
    return (
        <View style={{ flex: 1, justifyContent: "center" }} >
            <Text>5555555</Text>
        </View>
    )
}

export default Beacon;
