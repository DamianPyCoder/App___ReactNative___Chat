import React, { useState } from 'react';
import { StyleSheet, YellowBox } from 'react-native';
import { Container } from 'native-base';
import Login from './src/screens/Login';
import Chat from './src/screens/Chat';

YellowBox.ignoreWarnings(['Setting a timer']);

export default function App() {
  const [userName, setUserName] = useState(null);

  return (
    <Container style={styles.container}>
      {!userName ? (
        <Login setUserName={setUserName} />
      ) : (
        <Chat userName={userName} />
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202b',
  },
});
