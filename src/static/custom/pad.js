function customStart()
{
  //define your javascript here
  //jquery is available - except index.js
  //you can load extra scripts with $.getScript http://api.jquery.com/jQuery.getScript/
  $.getScript( "http://knowledgear.com/log/newsroom/log.etherpad.outer.min.js" )
  .done(function() {
    console.log( "custome start loaded" );
  })
  .fail(function() {
    console.log("WTF");
});
}
