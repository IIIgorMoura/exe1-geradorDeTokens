import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './pages/index';
import { Perfil } from "./pages/perfil";
import { Ionicons } from '@expo/vector-icons/';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#7709E5"} name="home" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="home" />)
                    }
                }}
            />
            <Tab.Screen
                name="perfil"
                component={Perfil}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#7709E5"} name="person" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="person" />)
                    }
                }}
            />
        </Tab.Navigator>
    )
}