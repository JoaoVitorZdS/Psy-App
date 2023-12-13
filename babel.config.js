module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo", // Se você também estiver usando o Expo preset
    ],
    plugins: [
      "@babel/plugin-transform-export-namespace-from",
      "react-native-reanimated/plugin",
      ["@babel/plugin-transform-private-methods", { loose: true }],
    ],
  };
};
