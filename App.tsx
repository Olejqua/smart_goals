import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { defaultTheme } from './theme';
import Navigation from './navigation';
import { SignIn } from "./screens/sign_in";

const queryClient = new QueryClient()

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          {/* <Navigation colorScheme={colorScheme} />
          <StatusBar /> */}
          <SignIn />
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
