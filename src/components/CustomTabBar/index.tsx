import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import HomeIcon from '../../assets/home.svg';
import SearchIcon from '../../assets/search.svg';
import TodayIcon from '../../assets/today.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import AccountIcon from '../../assets/account.svg';

import { Container, TabItem } from './styles';

const CustomTabBar: React.FC = () => {
  const navigation = useNavigation();

  const goTo = useCallback(
    (screenName) => {
      navigation.navigate(screenName);
    },
    [navigation],
  );

  return (
    <Container>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon width="24" height="24" fill="#fff" />
      </TabItem>
      <TabItem onPress={() => goTo('Search')}>
        <SearchIcon width="24" height="24" fill="#fff" />
      </TabItem>
      <TabItem onPress={() => goTo('Appointment')}>
        <TodayIcon width="24" height="24" fill="#fff" />
      </TabItem>
      <TabItem onPress={() => goTo('Favorites')}>
        <FavoriteIcon width="24" height="24" fill="#fff" />
      </TabItem>
      <TabItem onPress={() => goTo('Profile')}>
        <AccountIcon width="24" height="24" fill="#fff" />
      </TabItem>
    </Container>
  );
};

export default CustomTabBar;
