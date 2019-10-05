module.exports = {
  name: 'app1-libs-lib-a',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/app1-libs/lib-a',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
