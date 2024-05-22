import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import { Item, Input as InputNB, Icon } from 'native-base';

export default function Input(props) {
  const { sendMessage } = props;
  const [message, setMessage] = useState('');

  const onSubmit = () => {
    if (message.length > 0) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Item style={styles.itemInput}>
        <InputNB
          placeholder="Mensaje..."
          style={styles.input}
          placeholderTextColor="grey"
          value={message}
          onChange={(e) => setMessage(e.nativeEvent.text)}
        />
        <TouchableOpacity onPress={onSubmit}>
          <Icon name="send" style={styles.iconSend} />
        </TouchableOpacity>
      </Item>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202b',
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    paddingHorizontal: 20,
  },
  itemInput: {
    borderColor: '#16202b',
  },
  input: {
    color: '#fff',
  },
  iconSend: {
    color: '#fff',
  },
});
