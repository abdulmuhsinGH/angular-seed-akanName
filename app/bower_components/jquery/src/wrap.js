<<<<<<< HEAD
define([
	"./core",
	"./core/init",
	"./traversing" // parent, contents
], function( jQuery ) {

jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
=======
jQuery.fn.extend({
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
>>>>>>> 15ba42d088e9a77be8036efbc2189d0ea4c8dfc3
			}

			wrap.map(function() {
				var elem = this;

<<<<<<< HEAD
				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
=======
				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
>>>>>>> 15ba42d088e9a77be8036efbc2189d0ea4c8dfc3
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
<<<<<<< HEAD
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
=======
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
>>>>>>> 15ba42d088e9a77be8036efbc2189d0ea4c8dfc3
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

<<<<<<< HEAD
		return this.each(function( i ) {
=======
		return this.each(function(i) {
>>>>>>> 15ba42d088e9a77be8036efbc2189d0ea4c8dfc3
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});
<<<<<<< HEAD

return jQuery;
});
=======
>>>>>>> 15ba42d088e9a77be8036efbc2189d0ea4c8dfc3
