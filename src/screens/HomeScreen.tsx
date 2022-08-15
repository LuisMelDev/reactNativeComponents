import { styles } from '@src/theme';
import React, { FC } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

interface MenuItem {
  icon: string;
  name: string;
  component: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

const RenderItem: FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Icon name={item.icon} size={30} />
    </View>
  );
};

const RenderListHeader = () => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.title}>Opciones de Menu</Text>
    </View>
  );
};

const ItemsSeparator = () => (
  <View
    style={{
      height: 1,
      backgroundColor: '#0e0e0e',
      marginVertical: 5,
      opacity: 0.3,
    }}
  />
);

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, marginTop: top + 10, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={RenderListHeader}
        ItemSeparatorComponent={ItemsSeparator}
      />
    </View>
  );
};
