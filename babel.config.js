const presets = [
    [
      "@babel/env",
    ],
    [
      "@babel/preset-react",
    ],
  ];
  
const plugins = ["@babel/plugin-proposal-class-properties"];

module.exports = {
  env: {
    test: {
      plugins: ["@babel/plugin-transform-runtime"]
    }
  },
  presets,
  plugins,
};
  
