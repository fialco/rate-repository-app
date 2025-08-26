import { View, StyleSheet, Pressable, Alert, Text } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundBar,
    flexDirection: 'row'
  },
  text: {
    color: theme.colors.textTertiary,
    padding: 14,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
  }
});

const AppBarTab = ({ tabName, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.text}>{tabName}</Text>
    </Pressable>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab
        tabName={'Repositories'}
        onPress={() => Alert.alert('Testing repo')}
      />
      <AppBarTab
        tabName={'Create a review'}
        onPress={() => Alert.alert('Testing create')}
      />
      <AppBarTab
        tabName={'Sign out'}
        onPress={() => Alert.alert('Testing sign out')}
      />
    </View>
  );
};

export default AppBar;
