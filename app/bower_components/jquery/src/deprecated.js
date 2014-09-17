<<<<<<< HEAD
define([
	"./core",
	"./traversing"
], function( jQuery ) {
=======
// Limit scope pollution from any deprecated API
// (function() {
>>>>>>> 15ba42d088e9a77be8036efbc2189d0ea4c8dfc3

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;

<<<<<<< HEAD
});
=======
// })();
>>>>>>> 15ba42d088e9a77be8036efbc2189d0ea4c8dfc3
