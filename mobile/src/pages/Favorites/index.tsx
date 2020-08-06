import React, { useCallback } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeader from '../../components/PageHeader';

const Favorites: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
    </View>
  );
};

export default Favorites;
