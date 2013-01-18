/*
 * doing Things Right - Web Stats
 *
 * author Mike Mackintosh <mike@bakeryframework.com>
 */
;(function( $ ) {

  $.fn.dtrws = function( params ) {
    
    // params
	  var profile = params;
	  
    // Create image
	  var f=new Image(1,1);
	  
    // Web script
	  var url = "/dtrws.php?";
	  
	  // Profile ID
	  url += "profile="+profile
	  
	  // Screen Resolution
	  url += "&resolutionx="+screen.width
	  url += "&resolutiony="+screen.height

    // Make request
	  f.src=url;
				
  };

})( jQuery );
