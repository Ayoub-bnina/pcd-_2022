module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    //unstable_disableES6Transforms: true
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      }
    }

  };
};
