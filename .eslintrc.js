module.exports = {
  root: true,
  extends: '@react-native-community',
  rules:{
    'indent':['error',2],
    'quotes':['error','single'],
    'comma-dangle':['error','always-multiline'],
    'semi' :['error','always'],
    'no-console' : process.env.NODE_ENV=== 'production' ? 'error':'warn',
  }
};
