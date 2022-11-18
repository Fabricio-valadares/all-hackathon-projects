import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FormComponent } from '../screens/form'
import { Home } from '../screens/home'
import { Login } from '../screens/login'
import { Register } from '../screens/register'

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name='login' component={Login} />
			<Screen name='register' component={Register} />
			<Screen name='home' component={Home} />
			<Screen name='form-component' component={FormComponent} />
		</Navigator>
	)
}

export default AppRoutes;
