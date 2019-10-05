module.exports = {
  name: 'app2-libs-lib-y',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/app2-libs/lib-y',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
