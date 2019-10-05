module.exports = {
  name: 'shared-libs-lib-w',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared-libs/lib-w',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
