module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                alias: {
                    '@src': './src',
                    '@assets': './src/assets',
                    '@components': './src/components',
                    '@containers': './src/containers',
                    '@modules': './src/modules',
                    '@screens': './src/screens',
                    '@store': './src/store',
                    '@utils': './src/utils',
                    '@themes': './src/themes',
                    '@hooks': './src/hooks',
                    '@models': './src/models',
                    '@routes': './src/routes',
                    '@contexts': './src/contexts',
                },
            },
        ],
        'babel-plugin-styled-components',
        'react-native-reanimated/plugin',
    ],
};
