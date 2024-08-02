import { createDrawerNavigator } from '@react-navigation/drawer';
import { Account, Home, Todo } from '../screens';
import BottomNav from './BottomNav';
const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <Account/>}>
      <Drawer.Screen name="Drawer" component={BottomNav} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Todo" component={Account} />
    </Drawer.Navigator>
  );
}