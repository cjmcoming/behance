require.config({
	paths: {
		"jquery": "jquery-1.10.2.min"
	}
});

require(['jquery'], function ($) {

	var $bHeader_mRail = $(".bHeader_mRail"),
		$bHeader_mBar = $(".bHeader_mBar"),
		$bHeader_mBar_close = $(".bHeader_mBar_close"),
		$bHeader_con = $(".bHeader_con");
	$bHeader_mRail.click(function() {
		$bHeader_mRail.attr("state","clicked");
		$bHeader_mBar.addClass("mLarge");
		$bHeader_mBar_close.addClass("mLarge");
		$bHeader_con.addClass("mSmall");
	});
	$bHeader_mBar_close.click(function() {
		$bHeader_mRail.attr("state","");
		$bHeader_mBar.removeClass("mLarge");
		$bHeader_mBar_close.removeClass("mLarge");
		$bHeader_con.removeClass("mSmall");
	});

	var $bHeader_mSearch_lens = $(".bHeader_mSearch_lens"),
		$bHeader_mSearch = $(".bHeader_mSearch"),
		$bHeader_mSearch_cle = $(".bHeader_mSearch_cle");
	$bHeader_mSearch_lens.click(function() {
		$bHeader_mSearch.addClass("mShow");
	});
	$bHeader_mSearch_cle.click(function() {
		$bHeader_mSearch.removeClass("mShow");
	});

});