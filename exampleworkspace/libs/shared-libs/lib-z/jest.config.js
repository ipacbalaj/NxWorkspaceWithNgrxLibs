module.exports = {
  name: 'shared-libs-lib-z',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared-libs/lib-z',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
