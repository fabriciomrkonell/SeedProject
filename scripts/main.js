require.config({
  baseUrl: "scripts",
  paths: {
    'angular': 'lib/angular',
    'angular-route': 'lib/angular-route',
    'angularAMD': 'lib/angular-amd'
  },
  shim: {
    'angularAMD': ['angular'],
    'angular-route': ['angular']
  },
  deps: ['js/app']
});
