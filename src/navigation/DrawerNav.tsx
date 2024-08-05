import { createDrawerNavigator } from '@react-navigation/drawer';
import { Todo } from '../screens';
import BottomNav from './BottomNav';
import ProfileWithDrawer from '../components/profile/ProfileWithDrawer';
import TodoStack from './TodoStackNav/TodoStack';
const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <ProfileWithDrawer {...props} />}>
      <Drawer.Screen name="ShopCart" component={BottomNav} />
      <Drawer.Screen name="Todo" component={TodoStack} />
    </Drawer.Navigator>
  );
}