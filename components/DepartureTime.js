import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React from 'react'
import { useState } from 'react'
import svgDarkGreyClock from '../assets/svgs/svgDarkGreyClock';
import svgExpandArrow from '../assets/svgs/svgExpandArrow';

export default function DepartureTime() {

  const currentTime = new Date();
  const [isPickerVisible, setPickerVisibility] = useState(false);
  const [time, setTime] = useState(new Date());

  const showPicker = () => {
    setPickerVisibility(true);
  };

  const hidePicker = () => {
    setPickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A time has been picked: ", date);
    setTime(date);
    hidePicker();
  };

  const hours = currentTime.getHours().toString();
  const minutes = currentTime.getMinutes().toString();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showPicker}>
        <View style={styles.content}>
          <SvgXml
            xml={svgDarkGreyClock}
            width="32"
            height="32"
          />
          <DateTimePickerModal
            isVisible={isPickerVisible}
            mode="time"
            onConfirm={handleConfirm}
            onCancel={hidePicker}
            date={time}
            is24Hour={true}
          />
          <Text style={styles.time}>
            {time.getHours().toString().padStart(2, '0')}:{time.getMinutes().toString().padStart(2, '0')}
          </Text>
          <SvgXml
            xml={svgExpandArrow}
            width="15"
            height="15"
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: '1',
    alignItems: 'center'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%'
  },
  time: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  }
})
