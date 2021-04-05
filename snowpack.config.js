/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist' },
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-typescript',
        '@snowpack/plugin-sass',
        [
            '@snowpack/plugin-webpack',
            {
                extendConfig: config => {
                    delete config.optimization.splitChunks;
                    delete config.optimization.runtimeChunk;

                    config.module.rules[0] = {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: 'babel-loader',
                                options: {
                                    presets: [
                                        [
                                            '@babel/preset-env',
                                            {
                                                bugfixes: true,
                                                modules: false,
                                                useBuiltIns: 'usage',
                                                corejs: 3,
                                            },
                                        ],
                                    ],
                                    compact: true,
                                },
                            },
                            { loader: '@snowpack/plugin-webpack/plugins/import-meta-fix.js' },
                            { loader: '@snowpack/plugin-webpack/plugins/proxy-import-resolve.js' },
                        ],
                    };

                    return config;
                },
            },
        ],
    ],
    routes: [],
    optimize: {
        // bundle: true,
        // minify: true,
    },
    packageOptions: {},
    devOptions: {},
    buildOptions: {},
};
