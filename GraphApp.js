import React, { PureComponent, Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';
//import DatePicker from 'react-native-date-picker';
import Pie from 'react-native-pie';



export default class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = { date: "2016-05-15" }
  // }
  render() {

     return (

    //   <DatePicker
    //     style={{ width: 200 }}
    //     date={this.state.date}
    //     mode="date"
    //     placeholder="select date"
    //     format="YYYY-MM-DD"
    //     minDate="2016-05-01"
    //     maxDate="2016-06-01"
    //     confirmBtnText="Confirm"
    //     cancelBtnText="Cancel"
    //     customStyles={{
    //       dateIcon: {
    //         position: 'absolute',
    //         left: 0,
    //         top: 4,
    //         marginLeft: 0
    //       },
    //       dateInput: {
    //         marginLeft: 36
    //       }
    //       // ... You can check the source to find the other keys.
    //     }}
    //     onDateChange={(date) => { this.setState({ date: date }) }}
    //   />



      <View style={styles.container}>
        <View>
          <Pie
            radius={100}
            innerRadius={98}
            series={[25, 18, 15, 43]}
            colors={['green', 'yellow', 'orange', 'blue']} />
          <View style={styles.gauge}>
            <Text style={styles.gaugeText}>2,006,837</Text>
            <Text style={styles.gaugeTextUsd}>USD</Text>
          </View>
        </View>
      </View>

    )
  }

};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black',
  },
  gauge: {
    position: 'absolute',
    width: '60%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 50,
  },
  gaugeTextUsd: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

