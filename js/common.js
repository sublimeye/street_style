$measurer=function(){function j(){for(var b=0;b<a.length;b++){a[b]()}}function i(){g();$(window).resize(j);if($.browser.msie){d.resize(j);return}c=d.height();setInterval(function(){var a=d.height();if(a!=c){c=a;j()}},b)}function h(){return c}function g(){if(d==null){d=$("<div></div>").css("height","1em").css("left","0").css("lineHeight","1em").css("margin","0").css("position","absolute").css("padding","0").css("top","-1em").css("visibility","hidden").css("width","1em").appendTo("body");c=d.height()}}var a=[],b=500,c,d=null,e=false,f=false;$(function(){f=true;e&&i()});return{resize:j,bind:function(b){if(!d){e=true;f&&i()}a.push(b)},unbind:function(b){for(var c=0;c<a.length;c++){a[c]==b&&a.splice(c,1)}},getHeight:h,createBlock:g}}();(function(a){function d(a){var b="0123456789abcdef";return"#"+b.charAt(parseInt(a[0]/16))+b.charAt(a[0]%16)+b.charAt(parseInt(a[1]/16))+b.charAt(a[1]%16)+b.charAt(parseInt(a[2]/16))+b.charAt(a[2]%16)}function c(a){if("#"==a.substr(0,1)){a=a.substr(1)}if(3==a.length){a=a.substr(0,1)+a.substr(0,1)+a.substr(1,1)+a.substr(1,1)+a.substr(2,1)+a.substr(2,1)}return[parseInt(a.substr(0,2),16),parseInt(a.substr(2,2),16),parseInt(a.substr(4,2),16)]}function b(b,e){function p(){b.find(".gr-text").each(function(){if(a(this).parent().css("text-decoration")=="underline"){a(this).parent().find(".gr-letter").css("text-decoration","underline")}});if(b.parent().css("text-decoration")=="underline"){b.find(".gr-letter").css("text-decoration","underline")}}function o(a,b,c){var e=[];for(var f=0;f<3;f++){e[f]=a[f]+Math.round((b[f]-a[f])*c)}return d(e)}function n(a,b){var c=a>0?a/b:0;for(var d=0;d<e.colors.length;d++){fStopPosition=d/(e.colors.length-1);fLastPosition=d>0?(d-1)/(e.colors.length-1):0;if(c==fStopPosition){return e.colors[d]}else if(c<fStopPosition){fCurrentStop=(c-fLastPosition)/(fStopPosition-fLastPosition);return o(e.RGBcolors[d-1],e.RGBcolors[d],fCurrentStop)}}return e.colors[e.colors.length-1]}function m(a){var b=0;h.each(function(c){var d=Math.round(this.offsetWidth+this.offsetLeft)-a;if(d>b)b=d});return b}function l(){var a=Math.round(b[0].offsetLeft),c=m(a),d=i.size();if(c<200)c=200;for(var e=d;e--;){i[e].style.color=n(Math.round(i[e].offsetLeft-a),c)}}if(b.find("span.gr-text").size()==0){var f=b.contents().filter(function(){return this.nodeType==3&&/\S/.test(this.nodeValue)}).wrap('<span class="gr-text" />');if(typeof e.toProcess!="undefined"){var g=e.toProcess.toString();if(g){f=b.find(g).contents().filter(function(){return this.nodeType==3&&/\S/.test(this.nodeValue)}).wrap('<span class="gr-text" />')}}b.html('<span class="gr-wrap">'+b.html()+"</span>");b=b.find(".gr-wrap");b.find("span.gr-text").each(function(){var b=a(this).text().split("");var c="";var d=b.length;for(var e=0;e<d;e++){if(b[e]!=" "){c+='<span class="gr-letter">'+b[e]+"</span>"}else{c+='<span class="gr-letter"><span style="display:none;">&#8203;</span> </span>'}}a(this).html(c)})}var h=b.find("span.gr-text");var i=b.find("span.gr-letter");var j=0;e.RGBcolors=[];for(var k=0;k<e.colors.length;k++)e.RGBcolors[k]=c(e.colors[k]);if(typeof $c!="undefined")$c.measurer.bind(l);else if(typeof $measurer!="undefined")$measurer.bind(l);else a(window).resize(l);p();return{update:l}}a.gradientText=a.gradientText||{version:"1.0"};a.gradientText.conf={colors:["#5f3db6","#c10000"],toProcess:[]};a.gradientTextSetup=function(b){a.extend(a.gradientText.conf,b)};a.fn.gradientText=function(c){var d=this.data("gradientText");if(d){return d}if(!c){c=a.gradientText.conf}else{if(typeof c.colors=="undefined"){c.colors=a.gradientText.conf.colors}}var e=[];this.each(function(d){e[d]=new b(a(this),c);a(this).data("gradientText",e[d])});a(window).load(function(){var a=e.length;for(var b=0;b<a;b++){e[b].update()}});return c.api?d:this}})(jQuery);

(function(a){a.fn.smartSelectbox=function(b){if(!this.length)return false;var c=a.extend({},a.fn.smartSelectbox.defaults,b);c.elem=this;var d=[];var e=null;switch(c.mode){case"colour":c.title=c.titleColour;break;case"size":c.title=c.titleSize;break}var f=function(){e=c.elem.find("input[type=checkbox]");e.each(function(b,c){var e=a(c).closest(".sel-item").find(".item-data").html(),f=a(c).is(":checked");a(c).attr("rel",b);d[b]={data:e,checked:f}})};var g=function(){var a=0,b=c.elem.closest(".pseudo-select").find(".pseudo-select-title"),e="",f="";for(var g=0,h=d.length;g<h;g++){if(d[g].checked){if(a){e+=", "}e+=d[g].data;a++}}switch(a){case 0:f=c.title.empty;break;case 1:f=c.title.one;break;default:f=c.title.many}b.html(f+e);if(a>5){c.elem.closest(".pseudo-select").addClass("items-overflow")}else{c.elem.closest(".pseudo-select").removeClass("items-overflow")}};var h=function(){var b=c.elem.find(".reset-selectbox");e.bind("change",function(){var b=a(this),c=b.attr("rel");d[c].checked=b.is(":checked");g()});b.bind("click",function(){e.each(function(b,c){a(c).removeAttr("checked")});for(var b=0,c=d.length;b<c;b++){d[b].checked=false}g();return false})};if(c.elem.length){f();g();h()}};a.fn.smartSelectbox.defaults={elem:null,mode:null,title:{},titleColour:{empty:'<i class="c1">В</i><i class="c2">ы</i><i class="c3">б</i><i class="c4">е</i><i class="c5">р</i><i class="c6">и</i><i class="c7">т</i><i class="c7">е</i> <i class="c8">ц</i><i class="c9">в</i><i class="c10">е</i><i class="c11">т</i>',one:'<i class="c1">В</i><i class="c2">ы</i><i class="c3">б</i><i class="c4">р</i><i class="c5">а</i><i class="c6">н</i> <i class="c8">ц</i><i class="c9">в</i><i class="c10">е</i><i class="c11">т</i><i class="c12">:</i> ',many:'<i class="c1">В</i><i class="c2">ы</i><i class="c3">б</i><i class="c4">р</i><i class="c5">а</i><i class="c6">н</i><i class="c7">ы</i> <i class="c8">ц</i><i class="c9">в</i><i class="c10">е</i><i class="c11">т</i><i class="c12">а</i><i class="c12">:</i> '},titleSize:{empty:"Выберите размер",one:"Выбран размер: ",many:"Выбраны размеры: "}}})(jQuery)

var options = {
	slideDuration: 500,
	zoomed: false
};

var thumbnails = {
	max: 5,
	pos: [],
	index: 0,
	container: '.ppreview-list',

	init: function() {
		this.container = $(this.container);
	},

	goPrev: function() {
		if (this.index) {
			this.index -= this.max;

			if (this.index < 0) {
				this.index = 0;
			}

			this.container.css('top', -this.pos[this.index]);
		}
	},

	goNext: function() {
		var maxAvailable = this.pos.length - this.max - 1,
				last = this.pos.length - 1;

		if (this.index != last) {
			this.index += this.max;

			if (this.index > maxAvailable) {
				this.index = last;
			}

			this.container.css('top', -this.pos[this.index]);
		}
	}
};

function slidingContent( container ) {
	var dataContainer = $(container + '-container');

	if (dataContainer.length) {
		dataContainer.hide();

		if ($(container).length) {
			$(container).bind('click', function(event) {
				dataContainer.stop(true, true).slideToggle(options.slideDuration);
				return false
			});
		}
	}
}

function activateVideoPopup( container ) {
	var popupDefaults = {
				popupSel: '.video-popup',
				closeBtn: '.video-popup .btn-close',
				visible: false
			};

	container = $(container);

	var popup = $(popupDefaults.popupSel);

	if (container.length) {
		container.click(function() {
			popup.stop(true, true).slideToggle(options.slideDuration);

			return false
		});
	}

	$(popupDefaults.closeBtn).bind('click.close_popup', function() {
		popup.stop(true, true).slideUp(options.slideDuration);
		return false
	});

}

var mainSlider = {
	listContainer: '.slider-list',
	listClip: '.slider-clip',
	sliderContainer: '.promo-slider',

	init: function() {
		if ($(this.sliderContainer).length && jQuery().jScrollPane) {
			this.listContainer = $(this.listContainer);
			this.listClip = $(this.listClip);
			this.setClipWidth();

			var slider = $(this.listClip).jScrollPane({
				horizontalDragMinWidth: 62,
				horizontalDragMaxWidth: 62,
				showArrows: true,
				horizontalArrowPositions: 'os',
				animateScroll: true,
				arrowButtonSpeed: 477
			});

			if (!slider.attr('tabindex')) {
				$(this.sliderContainer).addClass('no-controls');
			}
		}
	},

	setClipWidth: function() {
		var items = this.listContainer.find('.slider-item'),
				totalWidth = 0;

		items.each(function(i, item) {
			totalWidth += $(item).outerWidth()
		});
		this.listContainer.css('width', totalWidth)
	}
};

function productImagesSlider(thumbs) {
	var o = {
		thumbElem: '.thumb-item',
		imageContainer: '.product-image-container'
	};

	thumbs = thumbs || thumbnails.max;

	if ($(o.thumbElem).length) {
		thumbnailsNavigation(thumbs);

		var images = [];
		var thumbLinks = $(o.thumbElem).find('a');

		thumbLinks.each(function(key, elem) {
			var img, imgBigSrc;

		/* precache items */
			img = new Image();
			img.src = $(elem).attr('href');

			imgBigSrc = $(elem).attr('data-img');

			images.push( {
				'path': img.src,
				'pathBig': imgBigSrc
			} );

			$(elem).attr('rel', key);
		});

		thumbLinks.bind('click', function() {
			var id = $(this).attr('rel'),
					imgsrc = '';

			imgsrc = options.zoomed ? images[id].pathBig : images[id].path;

			$(o.imageContainer)
					.find('a')
					.attr('rel', images[id].path)
					.attr('href', images[id].pathBig)
						.find('img')
						.attr('src', imgsrc);
			return false;
		});

		productImageZoom();
	}
}

function thumbnailsNavigation(max) {
	var items = $('.ppreview-list').find('li'),
			itemsAmount = items.length,
			visibleHeight = 0,
			lastElem = 0,
			previewWrapper = $('.ppreview-list-wrap');

	if (itemsAmount <= max) {
		$('.product-preview-thumbs').addClass('no-controls');
	} else {
		for (var i=0; i < max; i++) {
			visibleHeight += items.eq(i).height();
		}

		previewWrapper.height(visibleHeight);

//		defining top offset of all items
		items.each(function(i, item) {
			thumbnails.pos.push( item.offsetTop );
			if (i == itemsAmount - 1) {
				thumbnails.pos.push( item.offsetTop + item.clientHeight - previewWrapper.height() );
			}
		});
	}

	thumbnails.init();
	$('.ppreview-prev').bind('click.prev_thumb', function() {
		thumbnails.goPrev();
	});

	$('.ppreview-next').bind('click.next_thumb', function() {
		thumbnails.goNext();
	});

}

function productImageZoom() {
	var imgContainer = $('.product-image-container a'),
			productContainer = $('.product'),
			detailsContainer = '.product-details',
			zoomIco = '.ico-zoom',
			img = $('img', imgContainer),
			imgSize = {
				'widthSmall': 293,
				'widthBig': 657,
				'heightSmall': 442,
				'heightBig': 862
			};

	var toggleZoom = function(target) {
		if (!options.zoomed) {
			options.zoomed = true;

			img.attr('src', target.href);
			productContainer.addClass('zoomed');
			img.stop(true, true).animate({
				'width': imgSize.widthBig,
				'height': imgSize.heightBig
			}, function() {
				$(detailsContainer).stop(true, true).slideUp(100);
			});


		} else {
			options.zoomed = false;

			productContainer.removeClass('zoomed');
			img.stop(true, true).animate({
				'width': imgSize.widthSmall,
				'height': imgSize.heightSmall
			}, function() {
				img.attr('src', target.rel);
			});
			$(detailsContainer).stop(true, true).slideDown(100);

		}
	};

	$(imgContainer).bind('click', function() {
		toggleZoom(this);
		return false
	});

	$(zoomIco).bind('click', function() {
		toggleZoom(this);
		return false
	});
}

$(document).ready(function(){
	$('.logo').length && $('.logo').gradientText({colors:["#a894e7","#6fd2d5"]})

	mainSlider.init();
	slidingContent('.product-size-grid');
	slidingContent('.delivery-terms');
	activateVideoPopup('.video');
	productImagesSlider();

	$('.select-colours').smartSelectbox({mode: 'colour'});
	$('.select-size').smartSelectbox({mode: 'size'});

});
