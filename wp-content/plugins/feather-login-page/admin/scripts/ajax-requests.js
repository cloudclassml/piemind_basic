	( function( $ ) {

		jQuery(document).ready(function($) {


			$.ajax({
				url: polpb_ajaxData_array.ajaxurlMain,
				type: 'GET',
				dataType: 'json',
				data: {param1: 'value1'},
			})
			.done(function(result) {
				

				if (result != 'false' && result != false) {
					var plbp_LoginBuilderDuplicatedOps = JSON.stringify(result);
					feather_LoginBuilderApp.options.updatedOptions = _.clone( JSON.parse(plbp_LoginBuilderDuplicatedOps) );

					loadSavedOptions(feather_LoginBuilderApp.options.updatedOptions);
				}

				console.log("success");
					
			})
			.fail(function() {
				alert("error while loading");
			})
			.always(function() {
				console.log("complete");
			});
			

			setInterval(function(){

				$.ajax({
					url: polpb_ajaxData_array.ajaxurlMain,
					type: 'post',
					dataType: 'json',
					data: feather_LoginBuilderApp.options,
				})
				.done(function() {
					//console.log("success");
				})
				.fail(function() {
					//console.log("error");
				})
				.always(function() {
					//console.log("complete");
				});

	        }, 4000);

				
			
			
		
        
  		});
	})(jQuery);