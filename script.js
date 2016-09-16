// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//   console.log( this.responseText );
// });
// xhr.open("GET", "http://reqres.in/api/users", true);
// xhr.send();


// // Create a post
// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//   console.log( this.responseText );
// });
// xhr.open("POST", "http://reqres.in/api/posts", true);
// xhr.send("title=Foo&body=Bar&userId=1");


var $ = {};

$.ajax = function(options) {
  var complete = options.complete || function() {};
  var data = options.data || {};
  var error = options.error || function() {};
  var headers = options.headers || {};
  var method = options.method || 'GET';
  var success = options.success || function() {};
  var url = options.url;
  var async = options.async || true;

  var xhr = new XMLHttpRequest();


  xhr.onload = function ( e ) {
    if ( xhr.readyState === 4 ) {
      if ( xhr.status === 200 ) {
        success(JSON.parse(xhr.response));
      } else {
        error(JSON.parse(xhr.response));
      }
    }
  };

  xhr.open(method, url, async);

  xhr.send(data);
};


$.get = function(url, data, success, dataType) {
  $.ajax({
    url: url,
    data: data,
    success: success,
    dataType: dataType
  });
};

$.post = function(url, data, success, dataType) {
  $.ajax({
    type: "POST",
    url: url,
    data: data,
    success: success,
    dataType: dataType
  });
};

$.get('http://reqres.in/api/users', function() {}, function(response) {console.log(response);});

$.post('http://reqres.in/api/posts','title=Foo&body=Bar&userId=1', function(response) {console.log(response);});
