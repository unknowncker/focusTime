import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { spacing } from '../util/sizes';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = (props) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <RoundedButton title="+" size={50} onPress={() => props.addSubject(subject)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
