const path = require("path");
const autoprefixer = require("autoprefixer");

module.exports = {
    devServer: {
        port: 8080,
        contentBase: ["./dist"], // both src and output dirs
        inline: true,
        hot: true,
    },
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: [
                                autoprefixer({
                                    browsers: ["ie >= 8", "last 4 version"],
                                }),
                            ],
                        },
                    },
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "assets",
                },
            },
        ],
    },
};
