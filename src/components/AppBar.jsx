import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
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

const AppBarTab = ({ tabName, path }) => {
  return (
    <Link to={path}>
      <Text style={styles.text}>{tabName}</Text>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName={'Repositories'} path={'/'} />
        <AppBarTab tabName={'Create a review'} path={'/create'} />
        <AppBarTab tabName={'Sign in'} path={'/signin'} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
