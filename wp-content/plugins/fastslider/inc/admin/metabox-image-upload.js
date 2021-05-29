/*
Description: metabox-image-upload.js
Author: AD-THEME
*/

function add_slide(obj) {
     var parent=jQuery(obj).parent('.form_field');
     var inputField = jQuery(parent).find("input.meta-image");

     tb_show('', 'media-upload.php?TB_iframe=true');

     window.send_to_editor = function(html) {
                var url = jQuery(html).attr('src');
                inputField.val(url);
                jQuery(parent)
                .find("div.wrap-image")
                .html('<div class="adt-slide-image" style="background-image:url(\''+url+'\')"></div>');
                tb_remove();
     };

     return false;  
}