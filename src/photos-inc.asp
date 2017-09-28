<!--#include file="globals.asp"-->
<!--#include file="current_inc.asp"-->
<!--#include file="asp_utils.asp"-->
<!--#include file="xml_utils.asp"-->
<!--#include file="cPage.asp"-->
<html>
<div id="photo-chooser">
<a id="leftArrow" href="javascript:PageLeft()">&lt;</a>
<a id="link-0" >
<img id="pic-0" border=0 height="65" ALT="Click here for a larger view.">
</a>
<a id="link-1" >
<img id="pic-1"  border=0 height="65" ALT="Click here for a larger view.">
</a>
<a id="link-2" >
<img id="pic-2"  border=0 height="65" ALT="Click here for a larger view.">
</a>
<a id="link-3" >
<img id="pic-3"  border=0 height="65" ALT="Click here for a larger view.">
</a>
<a id="link-4" >
<img id="pic-4"  border=0 height="65" ALT="Click here for a larger view.">
</a>
<a id="link-5" >
<img id="pic-5"  border=0 height="65" ALT="Click here for a larger view.">
</a>
<a id="rightArrow" href="javascript:PageRight()">&gt;</a>
</div>
<div>
<img id="photo-single" name="photo-single" width="700"/>
</div>
<script>
var large = ['pics/snohomish2003/1a.jpg'
	, 'pics/snohomish2003/1b.jpg'
	, 'pics/snohomish2003/1c.jpg'
	, 'pics/snohomish2003/1d.jpg'
	, 'pics/snohomish2003/2a.jpg'
	, 'pics/snohomish2003/2b.jpg'
	, 'pics/snohomish2003/2c.jpg'
	, 'pics/snohomish2003/2d.jpg'
	, 'pics/snohomish2003/3a.jpg'
	, 'pics/snohomish2003/3b.jpg'
	, 'pics/snohomish2003/3c.jpg'
	];
var small = ['pics/snohomish2003/1a-s.gif'
	, 'pics/snohomish2003/1b-s.gif'
	, 'pics/snohomish2003/1c-s.gif'
	, 'pics/snohomish2003/1d-s.gif'
	, 'pics/snohomish2003/2a-s.gif'
	, 'pics/snohomish2003/2b-s.gif'
	, 'pics/snohomish2003/2c-s.gif'
	, 'pics/snohomish2003/2d-s.gif'
	, 'pics/snohomish2003/3a-s.gif'
	, 'pics/snohomish2003/3b-s.gif'
	, 'pics/snohomish2003/3c-s.gif'
	];
	
var photo_offset = 0;
var photo_pics = 6;

function PageLeft() {
	photo_offset = Math.max(0, photo_offset - 2);
	for (i=0; i < photo_pics; i++) {
		$('#link-' + i).attr('href', 'javascript:LoadPhoto("' + large[i + photo_offset] + '");');
		$('#pic-' + i).attr('src', small[i + photo_offset]);
	}
}

function PageRight() {
	photo_offset = Math.min(small.length - photo_pics, photo_offset + 2);
	for (i=0; i < photo_pics; i++) {
		$('#link-' + i).attr('href', 'javascript:LoadPhoto("' + large[i + photo_offset] + '");');
		$('#pic-' + i).attr('src', small[i + photo_offset]);
	}
}

$(document).ready(function () {
	for (i=0; i < photo_pics; i++){
		$('#link-' + i).attr('href', 'javascript:LoadPhoto("' + large[i + photo_offset] + '");');
		$('#pic-' + i).attr('src', small[i + photo_offset]);
	}
	$('#photo-single').attr('src', large[0]);
});

</script>
</html>
