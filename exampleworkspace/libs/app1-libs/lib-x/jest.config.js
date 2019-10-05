module.exports = {
  name: 'app1-libs-lib-x',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/app1-libs/lib-x',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
