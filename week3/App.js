import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from './components/Title';
import SmallTitle from './components/SmallTitle';
import Description from './components/Description';
import Counter from './components/Counter';

export default function App() {
  const [goalReached, setGoalReached] = useState(false);
  return (
    <View style={styles.container}>
      <div style={{ color: 'purple' }}>
        <Title text="CS 450 - Week 3" />
        <SmallTitle text="Online" />
        <Description>
          {goalReached && <b>This is goal description.</b>}
        </Description>
        <Counter notify={() => setGoalReached(true)} />
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
