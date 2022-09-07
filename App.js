import { Provider } from "react-redux";
import { TailwindProvider } from "tailwindcss-react-native";
import { store } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";



const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<TailwindProvider>
				<Provider store={store}>
					<Stack.Navigator>
						<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}} />
						<Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false}} />
					</Stack.Navigator>
				</Provider>
			</TailwindProvider>
		</NavigationContainer>
	);
}
