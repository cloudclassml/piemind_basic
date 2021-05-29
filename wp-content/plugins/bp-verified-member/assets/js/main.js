jQuery( function( $ ) {
    if ( window.bpVerifiedMember ) {
        bpVerifiedMember.badgeHtmlEscaped = bpVerifiedMember.badgeHtmlEscaped.replace( /&quot;/g, '"' );
        $( "*:contains('" + bpVerifiedMember.badgeHtml + "')" ).each( function() {
            if ( $( this ).get( 0 ).text ) {
                $( this ).html( $( this ).html().replace( new RegExp( bpVerifiedMember.badgeHtmlEscaped, 'g' ), bpVerifiedMember.badgeHtml ) );
            }
        } );

        $( "[title*='" + bpVerifiedMember.badgeHtml + "']" ).each( function() {
            $( this ).attr( 'title', $( this ).attr( 'title' ).replace( bpVerifiedMember.badgeHtml, '' ) );
        } );

        // Add the badge html instead to replace the after-element where necessary
        $(
            '.bp-verified-member .member-name-item > a,' +
            '.bp-verified-member .item-title > a,' +
            '.bp-verified-member > .author > a,' +
            '.bp-verified-member .member-name > a'
        ).append( bpVerifiedMember.badgeHtml ).closest( '.bp-verified-member' ).addClass( 'bp-verified-member-badge-loaded' );

        // Handle tooltips
        var $badges = $( '.bp-verified-badge' );
        $badges.each( function() {
            // Add tooltip to dom
            var $tooltip = $( '<span class="bp-verified-badge-tooltip" role="tooltip" style="visibility: hidden;">' + bpVerifiedMember.tooltip + '<span class="bp-verified-badge-tooltip-arrow" data-popper-arrow></span></span>' );
            $( this ).after( $tooltip );

            // Initialize Popper to handle tooltip
            var badgeTooltip = new Popper( this, $tooltip.get( 0 ), {
                placement: 'top',
                modifiers: {
                    offset: {
                        offset: '0, 5px',
                    },
                },
            } );

            // Show tooltip on hover
            $( this ).hover( function() {
                $tooltip.css( 'visibility', 'visible' );
            }, function() {
                $tooltip.css( 'visibility', 'hidden' );
            } );
        } );
    }
} );