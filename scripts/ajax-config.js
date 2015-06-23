/*
  If the url is to Parse, add the Parse headers
*/
$.ajaxPrefilter(function(options, originalOptions, jqXHR){
  if(options.url.match(/api.parse.com/)){
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = '1pYBUvEDUWXqjeA6z7kIcVnrPd1udxPpKLJIVUtM';
    options.headers['X-Parse-REST-API-Key'] = 'Jl5uTa3lIuxMCfYpC3JRkWVFtNmJZSUOROtfBaMU';
  }
});
