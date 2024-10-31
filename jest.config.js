module.exports = {
    preset: '@vue/cli-plugin-unit-jest', // Ensure this line is correct
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // Map '@' to 'src'
    },
    transform: {
      '^.+\\.vue$': 'vue-jest', // Use vue-jest for .vue files
      '^.+\\.js$': 'babel-jest', // Use babel-jest for .js files
    },
  };
  