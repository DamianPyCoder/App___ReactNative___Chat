import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header, Body, Title } from 'native-base';
import moment from 'moment';
import { map } from 'lodash';
import Input from '../components/Input';
import Message from '../components/Message';
import firebase from '../utils/firebase';
import 'firebase/database';

export default function Chat(props) {
  const { userName } = props;
  const [messages, setMessages] = useState([]);
  const chatScrollRef = useRef();

  useEffect(() => {
    const chat = firebase.database().ref('general');
    chat.on('value', (snapshot) => {
      setMessages(snapshot.val());
    });
  }, []);

  useEffect(() => {
    chatScrollRef.current.scrollTo({ y: 10000000000000 });
  }, [messages]);

  const sendMessage = (message) => {
    const time = moment().format('hh:mm a');
    firebase.database().ref('general').push({ userName, text: message, time });
  };

  return (
    <>
      <Header style={styles.header} iosBarStyle="light-content">
        <Body>
          <Title style={{ color: '#fff' }}>Chat App</Title>
        </Body>
      </Header>
      <View style={styles.content}>
        <ScrollView style={styles.chatView} ref={chatScrollRef}>
          {map(messages, (message, index) => (
            <Message key={index} message={message} name={userName} />
          ))}
        </ScrollView>
        <Input sendMessage={sendMessage} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#16202b',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  chatView: {
    backgroundColor: '#1b2734',
  },
});
