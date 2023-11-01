module.exports = {
  root: true,
  extends: "@react-native",
  rules: {
    "prettier/prettier": [
      "error",
      {
        endofLine: "auto",
      },
      {
        quotes: ["error", "double"],
      },
    ],
  },
};
