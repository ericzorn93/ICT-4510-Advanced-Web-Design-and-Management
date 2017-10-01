function jsonFlickrFeed(data) {

	  'use strict';

	  var output='';

	  for (var i = 0; i < data.items.length; i++) {
	    var title = data.items[i].title;
	    var link = data.items[i].media.m;  

	    output += '<a href="'+ link +'" target="_blank">';
	    output += '<img src="' + link + '" alt="' + title + '" />';
	    output += '</a>';
	  } 
	  
	  $('#photos').html(output);
} 