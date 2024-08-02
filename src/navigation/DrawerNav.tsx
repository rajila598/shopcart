import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Todo } from '../screens';
const Drawer = createDrawerNavigator();

// const screens = {
//     Home: {
//         screen: Home,
//     },
//     Todo: {
//         screen: Todo,
//     }
// };

export function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Todo" component={Todo} />
    </Drawer.Navigator>
  );
}