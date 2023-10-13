const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  passWithNoTests: true,
  coverageProvider: 'v8',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: ['src/**/*.{js,ts}', '!<rootDir>/node_modules/'],
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  unhandledRejection: 'strict',
  detectOpenHandles: true,
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular'
  },
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment'
  ]
};
