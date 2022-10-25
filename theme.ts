import { Appearance } from 'react-native';
import Colors from './constants/Colors';

export interface Theme {
	colors: typeof Colors.light
	space: number[]
}

export const defaultTheme: Theme = {
	colors: Appearance.getColorScheme() === "light" ? Colors.light : Colors.dark,
	space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52]
}