import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { colors } from '../util/colors';
import { fontSizes, spacing } from '../util/sizes';

export const FocusHistory = ({ history }) => {
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      {(!history || !history.length) && (
        <Text style={styles.title}>We haven't focused on anything yet!</Text>
      )}
      {history.length > 0 && (
        <>
          <Text style={styles.title}>Things we've focused on:</Text>
          <FlatList data={history} renderItem={renderItem} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});
