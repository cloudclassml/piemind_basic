

options = JSON.parse(saved_polpb_data.data);


jQuery(document).ready(function($) {


	logoRender(options.logo);
	pageBgRender(options.bgOps);
	formAlignmentRender(options.alignment);
	formBgRender(options.formContBgOps);
	formStylesRender(options.formContOps);
	labelStylesRender(options.formLabels);
	inputStylesRender(options.formInput);
	buttonBgRender(options.formButtonBg);
	buttonStylesRender(options.formButton);
	footerLinksStylesRender(options.footerLinks);
	formTextMessagesRender(options.formTexts);
	formScriptsRender(options.scripts);


	setTimeout(function() {
    
		logoRender(options.logo);
		pageBgRender(options.bgOps);
		formAlignmentRender(options.alignment);
		formBgRender(options.formContBgOps);
		formStylesRender(options.formContOps);
		labelStylesRender(options.formLabels);
		inputStylesRender(options.formInput);
		buttonBgRender(options.formButtonBg);
		buttonStylesRender(options.formButton);
		footerLinksStylesRender(options.footerLinks);
		formTextMessagesRender(options.formTexts);
		formScriptsRender(options.scripts);

    }, 1000 );



    function polpb_triggerResponsiveStyles(x) {

			if (x.matches) { // If media query matches
			    
			    jQuery('#login').css('padding','10px');

			    jQuery('#login').css('margin','10% 2%');

			    jQuery('#login').css('max-width','320px');

			} else {
				
				logoRender(options.logo);
				pageBgRender(options.bgOps);
				formAlignmentRender(options.alignment);
				formBgRender(options.formContBgOps);
				formStylesRender(options.formContOps);
				labelStylesRender(options.formLabels);
				inputStylesRender(options.formInput);
				buttonBgRender(options.formButtonBg);
				buttonStylesRender(options.formButton);
				footerLinksStylesRender(options.footerLinks);
				formTextMessagesRender(options.formTexts);
				formScriptsRender(options.scripts);
			   
			}
		}
	var x = window.matchMedia("(max-width: 400px)")
	polpb_triggerResponsiveStyles(x) // Call listener function at run time
	x.addListener(polpb_triggerResponsiveStyles) // Attach listener function on state changes

	setTimeout(function() {
		polpb_triggerResponsiveStyles(x);
	}, 1002 );

	
});

