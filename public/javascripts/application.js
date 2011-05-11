$(function() {
  var faye = new Faye.Client('http://air:9292/faye');
  faye.subscribe("/messages/new", function(data) {
    eval(data);
  });
});
