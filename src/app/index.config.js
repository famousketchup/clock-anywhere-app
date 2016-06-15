export function config ($logProvider, $httpProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  //toastrConfig.allowHtml = true;

  $httpProvider.interceptors.push('xmlHttpInterceptor')
}
