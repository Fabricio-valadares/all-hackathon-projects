import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components'
import { Routes } from './src/routes'
import theme from './src/theme'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"
import Loading from './src/components/loading'
import { Providers } from './src/Provider'

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? (
        <Providers>
          <Routes />
        </Providers>
      ): <Loading /> }
      <StatusBar
        barStyle="light-content"
        backgroundColor='transparent'
        translucent
      />
    </ThemeProvider>
  );
}
