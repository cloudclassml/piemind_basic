function convertToCamelCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}

( function( $ ) {

	jQuery(document).ready(function($) {
		
		jQuery( ".plpb_accordion_wrapper" ).accordion({
	        collapsible: true,
	        heightStyle: "content",
	        active:false,
	     });

		$('.linkfieldBtn').on('click',function(ev){
		  var clickedEl = $(this);
		  if (clickedEl.is('span')) {
		    if (clickedEl.hasClass('linkedBtn') ) {
		      clickedEl.removeClass('linkedBtn');
		    }else{
		      clickedEl.addClass('linkedBtn');
		    }
		  }else{
		    clickedEl = $(this).parent('span');
		    if (clickedEl.hasClass('linkedBtn') ) {
		      clickedEl.removeClass('linkedBtn');
		    }else{
		      clickedEl.addClass('linkedBtn');
		    }
		  }
		});

		$('.linkedField').on('change', function(ev){
		  changedField = $(ev.target);
		  var changeUpdatedAttr = $(changedField).attr('data-changeupdated');
		  if (typeof(changeUpdatedAttr) == 'undefined') {
		    changeUpdatedAttr = 'false';
		  }
		  if (changeUpdatedAttr == 'true') {
		  }else{
		    linkedBtn = changedField.siblings('.linkfieldBtn');
		    if ( linkedBtn.hasClass('linkedBtn') ) {
		      changedFieldVal = $(changedField).val();
		      changedField.siblings('.linkedField').val(changedFieldVal);

		      var siblings = changedField.siblings('.linkedField');
		      $.each(siblings,function(i,v){
		        $(v).val(changedFieldVal);
		        $(v).attr('data-changeupdated','true');
		        $(v).trigger('change');
		      });
		    }
		  }
		   
		  $(changedField).attr('data-changeupdated','false'); 
		});


		$('.image_preview_close_btn').on('click',function(event){

			$(this).prev('img').attr('src',' ');

			$(this).parent('.image_preview_wrapper').css('display','none');
			$(this).parent('.image_preview_wrapper').siblings('.imageUploadFeild').val('').trigger('change');

		});


		var file_frame;
   		var buttonID;
		$('.image_upload_button').on('click', function( event ){

			try {
		    
				event.preventDefault();

			    var id = $(this).data('id');

			    // Create the media frame.
			    file_frame = wp.media.frames.file_frame = wp.media({
			      title: $( this ).data( 'uploader_title' ),
			      button: {
			        text: $( this ).data( 'uploader_button_text' ),
			      },
			      multiple: false  // Set to true to allow multiple files to be selected
			    });

			    // When an image is selected, run a callback.
			    file_frame.on( 'select', function() {
			      
			      // We set multiple to false so only get one image from the uploader
			      attachment = file_frame.state().get('selection').first().toJSON();
			      
			      $( '.upload_image_button'+id).val( attachment.url );

			      $( '.image_upload_preview'+id).attr( 'src', attachment.url );

			      $( '.image_upload_preview'+id).parent('.image_preview_wrapper').css('display','block');

			      $( '.upload_image_button'+id).trigger('change');
			     
			    });

			    // Finally, open the modal
			    file_frame.open();

			} catch(e) {
		    	// statements
		    	console.log(e);
			}
		    
		});


		$('.fontSelector').fontselect({
	        style: 'font-select',
	        placeholder: 'Select a font',
	        placeholderSearch: 'Search...',
	        lookahead: 1,
	        searchable: true,
	        localFontsUrl: '/fonts/' // End with a slash!
	      });


	  	$(document).on('change','.fontSearchField',function(){

		    var fontvalue = $(this).val();
		    fontvalue = convertToCamelCase(fontvalue);
		    var thisFsResults = $(this).parents('.font-select').find('.fs-results');
		    $(thisFsResults).scrollTop( 0 );

		    var scrollToEl = $(thisFsResults).find('li:contains("'+fontvalue+'")');


		    if ($(scrollToEl).length > 0 ) {
		    	var childPos = scrollToEl.offset();
		    	var parentPos = thisFsResults.parent().offset();
		    	var childOffset = {
		            top: childPos.top - parentPos.top,
		            left: childPos.left - parentPos.left
		        }
		        $(thisFsResults).scrollTop( childOffset.top-40 );
		    }

	  	});


	    try {
	      	if ( ! isUndoAvailable() ) {
	          	jQuery('#polpb_undo').css('background','#9e9e9e');
	      	}else{
	          	jQuery('#polpb_undo').css('background','#e3e3e3');
	      	}

	      	if ( ! isRedoAvailable() ) {
	          jQuery('#polpb_redo').css('background','#9e9e9e');
	      	}else{
	          jQuery('#polpb_redo').css('background','#e3e3e3');
	      	}
	    } catch(e) {
	      	// statements
	      	console.log(e);
	    }



	    jQuery("#pbbtnUndo").on('click', function(){

	    	if (isUndoAvailable() == true) {
	    		popb_undo();
	    	}

	    });


	    jQuery("#pbbtnRedo").on('click', function(){

	    	if (isRedoAvailable() == true) {
	    		popb_redo();
	    	}

	    });



	    setTimeout(function(){
	    	jQuery('#user_login').val(' ');
	    	jQuery('#user_pass').val('');
	    }, 700);

	    setTimeout(function(){
	    	jQuery('#user_login').val(' ');
	    	jQuery('#user_pass').val('');
	    }, 1700);


	});

})(jQuery);