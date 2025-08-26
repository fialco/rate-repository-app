import { View, StyleSheet, Image } from 'react-native';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15
  },
  containerInfo: {
    flexDirection: 'column',
    flex: 1,
    paddingBottom: 15,
    flexShrink: 1
  },
  containerBlocks: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  language: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 5
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15
  }
});

const formatStat = (num) => {
  if (num >= 1000) {
    const rounded = Math.round(num / 100);
    const displayNum = rounded / 10;
    if (displayNum % 1 === 0) {
      return `${displayNum.toFixed(0)}k`;
    } else {
      return `${displayNum.toFixed(1)}k`;
    }
  } else {
    return num.toString();
  }
};

const Stat = ({ name, value }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text fontWeight={'bold'}>{formatStat(value)}</Text>
      <Text color={'textSecondary'}>{name}</Text>
    </View>
  );
};

const Info = ({ item }) => {
  return (
    <View style={styles.containerInfo}>
      <Text fontWeight={'bold'} style={{ paddingBottom: 5 }}>
        {item.fullName}
      </Text>
      <Text color={'textSecondary'} style={{ paddingBottom: 8 }}>
        {item.description}
      </Text>

      <Text color={'textTertiary'} style={styles.language}>
        {item.language}
      </Text>
    </View>
  );
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBlocks}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <Info item={item} />
      </View>
      <View style={styles.containerBlocks}>
        <Stat name={'Stars'} value={item.stargazersCount} />
        <Stat name={'Forks'} value={item.forksCount} />
        <Stat name={'Reviews'} value={item.reviewCount} />
        <Stat name={'Rating'} value={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
