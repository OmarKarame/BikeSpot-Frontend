import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { SvgXml } from 'react-native-svg';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React from 'react'
import { useState, useEffect } from 'react'
import clockIcon from '../assets/images/clock-icon.png'
import svgExpandArrow from '../assets/svgs/svgExpandArrow';

export default function DepartureTime() {
  const currentTime = new Date();
  const [isPickerVisible, setPickerVisibility] = useState(false);
  const [time, setTime] = useState(new Date());
  const [isPressed, setIsPressed] = useState(false);
  const [isNow, setIsNow] = useState(true);

  const showPicker = () => {
    setPickerVisibility(true);
  };

  const hidePicker = () => {
    setPickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setTime(date);
    setIsNow(isTimeNow(date));
    hidePicker();
  };

  const hours = currentTime.getHours().toString();
  const minutes = currentTime.getMinutes().toString();

  const handlePressIn = () => {
    setIsPressed(true);
  }
  const handlePressOut = () => setIsPressed(false);

  const now = new Date();
  const twoDaysLater = new Date(now.getTime() + 48 * 60 * 60 * 1000);

  const isTimeNow = (givenTime) => {
    const now = new Date();
    const given = new Date(givenTime);

    const differenceInMilliseconds = Math.abs(now - given);
    const secondsDifference = differenceInMilliseconds / 1000;

    return secondsDifference <= 60;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setIsNow(isTimeNow(time));
    }, 60000);

    return () => clearInterval(interval);
  }, [time])

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.container, isPressed ? styles.pressed : {}]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={showPicker}
    >
      <View style={styles.content}>
        <View style={styles.mainImage}>
          <Image source={clockIcon} style={styles.image}/>
        </View>
        <View style={[styles.contentInfo, isNow ? { transform: [{ translateY: -2 }] } : {}]}>
          <DateTimePickerModal
            isVisible={isPickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hidePicker}
            date={time}
            is24Hour={true}
            minimumDate={now}
            maximumDate={twoDaysLater}
          />
          <Text style={styles.time}>
            {isNow ? 'Now' : `${time.toLocaleDateString('en-US',{ weekday: 'short' }).split(' ')[0]} ${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`}
          </Text>
          <SvgXml
            xml={svgExpandArrow}
            width="15"
            height="15"
            style={isNow ? [{ transform: [{ translateX: -10 }] }] : [{ translateX: -10 }]}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: '1',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(195, 222, 231, 0.4)',
    height: '100%',
    borderRadius: 10,
    maxWidth: '24%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%',
    height: '100%'
  },
  pressed: {
    backgroundColor: 'rgba(195, 222, 231, 1)',
  },
  image: {
    height: 50,
    width: 50,
    marginTop: 4
  },
  contentInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -10,
    width: '70%',
    marginLeft: 16
  },
  time: {
    fontSize: 12,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
  }
})
