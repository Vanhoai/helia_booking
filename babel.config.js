module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ts', '.tsx', '.js', '.json'],
                alias: {
                    '@/assets': './src/assets',
                    '@/hooks': './src/hooks',
                    '@/shared': './src/shared',
                    '@/navigation': './src/navigation',
                    '@/redux': './src/redux',
                    '@/screens': './src/screens',
                    '@/theme': './src/theme',
                    '@/utils': './src/utils',
                },
            },
        ],
        'react-native-reanimated/plugin',
    ],
};
