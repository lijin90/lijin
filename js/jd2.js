window.onload=function(){
	// LOUCENG。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
		$(document).on('scroll', showCheck);
		// console.log($('.floor').length)
		function showCheck() {
				var scrollTop = $(window).scrollTop();
				var windowH = $(window).height();
				var zfloorH = $('#zongfloor').offset().top
				var lfloorH = $('#duokuai').offset().top;
				$('.floor').each(function(){
					var i = $('.floor').index(this);
					var thisT = $('.floor').eq(i).offset().top;
//					var thisH = $('.floor').eq(i).outerHeight();
					if(i+1<11){
						var nextT = $('.floor').eq(i+1).offset().top;
//						var nextH = $('.floor').eq(i+1).outerHeight();
						if(scrollTop + windowH > thisT + windowH/2 && scrollTop + windowH < nextT+windowH/2){
					$('#elevator li').eq(i).addClass('current').siblings().removeClass('current');
				$('.floor').eq(i).addClass('floor_current').siblings().removeClass('floor_current');
						}
					}
				})
				if(zfloorH > scrollTop + windowH || scrollTop + windowH > lfloorH ){
					$('#elevator').hide();
				}else{
					$('#elevator').show();
				}
			}
		showCheck();
		$('#elevator li').click(function(){
			var i = $(this).index();
//			$(window).animate({scrollTop:$('.floor').eq(i).offset().top-3});
			$('body,html').animate({scrollTop:$('.floor').eq(i).offset().top-3});
			$('#elevator li').eq(i).addClass('current').siblings().removeClass('current');
		})



// 手机部分。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
		$(function(){
			var shougaitag=true;
			$('.jd_kuai4 ul li:lt(4)').mouseover(function(){
				if(!shougaitag) return;
				shougaitag = false;
				$('.jd_kuai4 .mc-inner1').animate({'bottom':'34px'}, 'slow',function(){
					$('#shougai').css({display:'block',zIndex:10,backgroundColor:'#fff'})
				})
				$('.jd_kuai4 .mc-inner').animate({'top':'38px'},'slow',function(){
					shougaitag = true;
				})
				// setTimeout(function(){
				// }, 2000)
			})
			$('#shougai li').hover(function(){
				var i=$(this).index();
				$('#shougai li').eq(i).addClass('shangbian').siblings().removeClass('shangbian')
				$('#shougai li a').css({color:'#666'});
				$('#shougai li a').eq(i).css({color:'red'});
			})
			$('.jd_kuai4 .close1').click(function(){
				if(!shougaitag) return;
				shougaitag = false;
				$('#shougai').hide();
				setTimeout(function(){
					$('.jd_kuai4  .mc-inner1').animate({'bottom':'-3px'},'slow',function(){
						shougaitag = true;
					})
				},500)
				$('.jd_kuai4 .mc-inner').animate({top:'212px'})
			})
			$('.yihao1 p').hover(function(){
				var i=$(this).index();
				$('.yihao1 p').eq(i).addClass('red1').siblings().removeClass('red1')
				$('.jiaohuan ul').eq(i).show().siblings().hide();
			})
		})
		
// ..............................................................................
		 $(function() {
				var timer20 = null;
				var x = 0;
				var fir = $('.toubiao401 li:first').clone();
				var lat = $('.toubiao401 li:last').clone();
				$('.toubiao401').append(fir);
				$('.toubiao401').prepend(lat);
				var topw = $('.toubiao401 li').height();
				// console.log(topw);
				$('.toubiao4').scrollTop(topw)

				function auto() {
					timer20 = setInterval(function() {
						x--;
						if (x < 0) {
							x = $('.toubiao401 li').length - 3;
							$('.toubiao4').scrollTop(topw * (x + 1));
						}
						$('.toubiao4').animate({
							scrollTop: topw * x
						})
					}, 2000)
				}
				auto();
				$('.toubiao4').hover(
					function() {
						clearInterval(timer20)
					},
					function() {
						auto();
					}
				)
			})
			// 今日抄底。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
		 $(function() {
				$('#zuoyou li').hover(
					function() {
						var dong = true;
						if (dong) {
							dong = false
							var i = $(this).index();
							$('#zuoyou li img').eq(i).stop().animate({
								marginRight: '20px'
							}, function() {
								dong = true;
							})
						}
					},
					function() {
						var dong = true;
						if (dong) {
							dong = false
							var i = $(this).index();
							$('#zuoyou li img').eq(i).stop().animate({
								marginRight: '0px'
							}, function() {
								dong = true;
							})
						}
					}
				)
			})
			// 六楼到八楼。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
		 $.fn.extend({
			liudaoba: function() {
				var $_this = $(this)
				var x = 1;
				var n = 0;
				var timer8 = null;
				var anm = true;
				var pw8 = $_this.find('.zhonger802 p').width();
				$_this.scrollLeft(pw8);
				var fir = $_this.find('.zhonger802 p:first').clone();
				var lat = $_this.find('.zhonger802 p:last').clone();
				$_this.find('.zhonger802').append(fir);
				$_this.find('.zhonger802').prepend(lat)
				$_this.hover(
					function() {
						$_this.find('.liuleft8').css('display', 'block')
						$_this.find('.liuright8').css('display', 'block')
					},
					function() {
						$_this.find('.liuleft8').css('display', 'none')
						$_this.find('.liuright8').css('display', 'none')
					}
				)
				$_this.find('.liuleft8').click(function() {
					clearInterval(timer8)
					if (anm) {
						anm = false;
						x--;
						if (x < 0) {
							x = $_this.find('.zhonger802 p ').length - 3
							$_this.scrollLeft(pw8(x + 1));
						}
						n--;
						if (n < 0) {
							n = $_this.find('.sige8 p').length - 1
						}
						hebing8();
					}
					auto8();
				})
				$_this.find('.liuright8').click(function() {
					clearInterval(timer8)
					if (anm) {
						anm = false;
						x++;
						if (x >= $_this.find('.zhonger802 p ').length) {
							x = 2;
							$_this.scrollLeft(pw8);
						}
						n++;
						if (n >= $_this.find(' .sige8 p').length) {
							n = 0;
						}
						hebing8();
					}
					auto8();
				})
				$_this.find('.sige8 p').mouseover(function() {
					clearInterval(timer8)
					n = $_this.find(' .sige8 p').index(this);
					x = n + 1;
					hebing8();
					auto8();
				})

				function hebing8() {
					$_this.find(' .sige8 p').eq(n).css('background', '#666').siblings().css('background', '#c81623')
					$_this.stop().animate({
						scrollLeft: pw8 * x
					}, function() {
						anm = true;
					})
				}

				function auto8() {
					timer8 = setInterval(function() {
						x++;
						if (x >= $_this.find('.zhonger802 p ').length) {
							x = 2;
							$_this.scrollLeft(pw8);
						}
						n++;
						if (n >= $_this.find(' .sige8 p').length) {
							n = 0;
						}
						hebing8();
					}, 2000)
				}
				auto8();
			}
		})
		 $(function() {
				$('.zhonger801').liudaoba();
				$('.zhonger6').liudaoba();
				$('.zhonger7').liudaoba();
			})
			// 十一楼。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
		 $.fn.extend({
			hebing: function() {
				var $_this = $(this);
				var x = 1;
				var aw = $_this.find('.lunbo1102 a').width();
				// console.log(aw)
				var anm11 = true;
				var timer11 = null;
				var n = 0;
				var fir = $_this.find('.lunbo1102 a:first').clone();
				var lat = $_this.find('.lunbo1102 a:last').clone();
				$_this.find('.lunbo1102').append(fir);
				$_this.find('.lunbo1102').prepend(lat);
				$_this.scrollLeft(aw);
				$_this.hover(
					function() {
						$_this.find('.left11').css('display', 'block')
						$_this.find('.right11').css('display', 'block')
					},
					function() {
						$_this.find(' .left11').css('display', 'none')
						$_this.find(' .right11').css('display', 'none')
					}
				)
				$_this.find('.left11').click(function() {
					clearInterval(timer11)
					if (anm11) {
						anm11 = false;
						x--;
						if (x < 0) {
							x = $_this.find('.lunbo1102 a ').length - 3;
							$_this.scrollLeft(aw * (x + 1))
						}
						n--;
						if (n < 0) {
							n = $_this.find('.sige11 p').length - 1;
						}
						tongbu11();
					}
					auto11();
				})
				$_this.find('.right11').click(function() {
					clearInterval(timer11)
					if (anm11) {
						anm11 = false;
						x++;
						if (x >= $_this.find('.lunbo1102 a ').length) {
							x = 2;
							$_this.scrollLeft(aw)
						}
						n++;
						if (n >= $_this.find('.sige11 p').length) {
							n = 0;
						}
						tongbu11();
					}
					auto11();
				})
				$_this.find('.sige11 p').mouseover(function() {
					clearInterval(timer11)
					n = $_this.find(' .sige11 p').index(this);
					x = n + 1
					tongbu11();
					auto11();
				})

				function tongbu11() {
					$_this.find(' .sige11 p').eq(n).css('background', '#666').siblings().css('background', "#c81623")
					$_this.stop().animate({
						scrollLeft: aw * x
					}, function() {
						anm11 = true;
					})
				}

				function auto11() {
					timer11 = setInterval(function() {
						x++;
						if (x >= $_this.find('.lunbo1102 a ').length) {
							x = 2;
							$_this.scrollLeft(aw)
						}
						n++;
						if (n >= $_this.find('.sige11 p').length) {
							n = 0;
						}
						tongbu11();
					}, 2000)
				}
				auto11();
			}
		})
		 $(function() {
				$('.lunbo1101').hebing();
				$('.lunbo1201').hebing();
			})
			// 第九楼。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
		 $(function() {
				var x = 1;
				var n = 0;
				var anm = true
				var pw9 = $('.zhonger902 p').width()
				var fir = $('.zhonger902 p:first').clone();
				var las = $('.zhonger902 p:last').clone();
				$('.zhonger902').append(fir);
				$('.zhonger902').prepend(las);
				var timer9 = null;
				$('.zhonger901').scrollLeft(pw9);
				$('.zhonger9').hover(
					function() {
						$('.zhonger9 .liuright1').css('display', 'block')
						$('.zhonger9 .liuleft1').css('display', 'block')
					},
					function() {
						$('.zhonger9 .liuright1').css('display', 'none')
						$('.zhonger9 .liuleft1').css('display', 'none')
					}
				)
				$('.zhonger9 .liuleft1').click(function() {
					clearInterval(timer9)
					if (anm) {
						anm = false
						x--;
						if (x < 0) {
							x = $('.zhonger901 p').length - 3;
							$('.zhonger901').scrollLeft(pw9 * (x + 1));
						}
						n--;
						if (n < 0) {
							n = $('.zhonger9 .sige6 p').length - 1
						}
						tongbu9()
					}
					auto();
				})
				$('.zhonger9 .liuright1').click(function() {
					clearInterval(timer9)
					if (anm) {
						anm = false
						x++;
						if (x >= $('.zhonger901 p').length) {
							x = 2;
							$('.zhonger901').scrollLeft(pw9);
						}
						n++;
						if (n >= $('.zhonger9 .sige6 p').length) {
							n = 0;
						}
						tongbu9()
					}
					auto();
				})
				$('.zhonger9 .sige6 p').mouseover(function() {
					clearInterval(timer9)
					x = $(this).index();
					tongbu9()
					auto();
				})

				function tongbu9() {
					$('.zhonger9 .sige6 p').eq(n).addClass('bian10').siblings().removeClass('bian10')
					$('.zhonger901').stop().animate({
						scrollLeft: pw9 * x
					}, function() {
						anm = true;
					})
				}

				function auto() {
					timer9 = setInterval(function() {
						x++;
						if (x >= $('.zhonger901 p').length) {
							x = 2;
							$('.zhonger901').scrollLeft(pw9)
						}
						n++;
						if (n >= $('.zhonger9 .sige6 p').length) {
							n = 0;
						}
						tongbu9();
					}, 2000)
				}
				auto();
			})
			// 第十楼。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
		 $(function() {
				var x = 1;
				var n = 0;
				var anm = true;
				var timer10 = null;
				var pw = $('.zhonger10 p').width();
				$('.zhonger101').scrollLeft(pw);
				var fir = $('.zhonger102 p:first').clone();
				var las = $('.zhonger102 p:last').clone();
				$('.zhonger102').append(fir);
				$('.zhonger102').prepend(las);
				$('.zhonger10').hover(
					function() {
						$('.liuright1').css('display', 'block')
						$('.liuleft1').css('display', 'block')
					},
					function() {
						$('.liuright1').css('display', 'none')
						$('.liuleft1').css('display', 'none')
					}
				)
				$('.zhonger10 .liuleft1').click(function() {
					clearInterval(timer10)
					if (anm) {
						anm = false
						x--;
						if (x < 0) {
							x = $('.zhonger10 .zhonger101 p').length - 3;
							$('.zhonger101').scrollLeft(pw * (x + 1))
						}
						n--;
						if (n < 0) {
							n = $('.zhonger10 .sige6 p').length - 1
						}
						tongbu10()
					}
					auto()
				})
				$('.zhonger10 .liuright1 ').click(function() {
					clearInterval(timer10)
					if (anm) {
						anm = false;
						x++;
						if (x >= $('.zhonger101 p').length) {
							x = 2;
							$('.zhonger101').scrollLeft(pw)
						}
						n++;
						if (n >= $('.zhonger10 .sige6 p').length) {
							n = 0
						}
						tongbu10()
					}
					auto();
				})
				$('.zhonger10  .sige6 p').mouseover(function() {
					clearInterval(timer10)
					x = $(this).index();
					tongbu10()
					auto();
				})

				function tongbu10() {
					$('.zhonger10 .sige6 p').eq(n).addClass('bian10').siblings().removeClass('bian10')
					$('.zhonger101').stop().animate({
						scrollLeft: pw * x
					}, function() {
						anm = true
					})
				}

				function auto() {
					timer10 = setInterval(function() {
						x++;
						if (x >= $('.zhonger101 p').length) {
							x = 2;
							$('.zhonger101').scrollLeft(pw)
						};
						n++;
						if (n >= $('.zhonger10 .sige6 p').length) {
							n = 0;
						}
						tongbu10();
					}, 2000)
				}
				auto();
			})
			// 五楼。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
		 $(function() {
				$('.rsan5 .xiugai').hover(function() {
						$('.xiugai .xiuleft').css('display', 'block')
						$('.xiugai .xiuright').css('display', 'block')
					},
					function() {
						$('.xiugai .xiuleft').css('display', 'none')
						$('.xiugai .xiuright').css('display', 'none')
					}
				)
				var x = 0;
				var timer5 = null;
				$('.xiugai .xiuleft').click(function() {
					clearInterval(timer5)
					x--;
					if (x < 0) {
						x = $('.xiugai li').length - 1;
					}
					auto();
					tongbu();
				})
				$('.xiugai .xiuright').click(function() {
					clearInterval(timer5)
					x++;
					if (x >= $('.xiugai li').length) {
						x = 0;
					}
					tongbu();
					auto();
				})
				$('.sige2 p').mouseover(function() {
					clearInterval(timer5)
					x = $(this).index();
					auto();
					tongbu();
				})

				function tongbu() {
					$('.sige2  p').eq(x).css('background', '#666').siblings().css('background', 'red')
					$('.xiugai li').eq(x).fadeIn().siblings().hide();
				}

				function auto() {
					timer5 = setInterval(function() {
						x++;
						if (x >= $('.xiugai li').length) {
							x = 0;
						}
						tongbu();
					}, 2000)
				}
				auto();
			})
			// 四楼。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
		 $(function() {
				var x = 0;
				var timer4 = null;
				// 切换。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
				$('#kaishi4 p').mouseover(function() {
						var i = $(this).index();
						$('#kaishi4 p').eq(i).addClass('yangshi').siblings().removeClass('yangshi');
						$('#kaishi4 span').removeClass('chuxian');
						$('#kaishi4 span').eq(i).addClass('chuxian')
						$('.rsan ul').eq(i).show().siblings().hide();
					})
					// 。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
				$('.sanyundong4').hover(
					function() {
						$('.sanyundong4 .sanleft').css('display', 'block')
						$('.sanyundong4 .sanright').css('display', 'block')
					},
					function() {
						$('.sanyundong4 .sanleft').css('display', 'none')
						$('.sanyundong4 .sanright').css('display', 'none')
					}
				)
				$('.rsan .sanleft').click(function() {
					clearInterval(timer4)
					x--;
					if (x < 0) {
						x = $('.sanyundong401 li').length - 1
					}
					tongbu4();
					auto();
				})
				$('.rsan .sanright').click(function() {
					clearInterval(timer4)
					x++;
					if (x >= $('.sanyundong401 li').length) {
						x = 0;
					}
					tongbu4();
					auto();
				})
				$('.sanyundong4 .sige1 p').mouseover(function() {
					clearInterval(timer4)
					x = $(this).index();
					tongbu4();
					auto();
				})

				function tongbu4() {
					$('.sanyundong4 .sige1 p').eq(x).addClass('bianse').siblings().removeClass('bianse');
					$('.sanyundong401 li').eq(x).fadeIn().siblings().hide();
				}

				function auto() {
					timer4 = setInterval(function() {
						x++;
						if (x >= $('.sanyundong401 li').length) {
							x = 0;
						}
						tongbu4();
					}, 2000)
				}
				auto();
			})
			// 运动红线	.................................................................................................................
		 $(function() {
				$('.caini3').mouseover(function(e) {
					var to = e.relatedTarget;
					while (to) {
						if (to == this) {
							return false;
						}
						to = to.parentNode;
					}
					$('.hongxian i').css({
						left: '-300px'
					})
					$('.hongxian i').animate({
						left: '845px'
					}, 500)
				})
			})
			// 封装切换。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。		
		 $.fn.extend({
			liu_shiyi: function() {
				var $_this = $(this);
				$_this.find('#erlou2 p').mouseover(function() {
					var i = $_this.find('#erlou2 p').index(this);
					$_this.find('#erlou2 p').eq(i).addClass('yangshi2').siblings().removeClass('yangshi2');
					$_this.find('#erlou2 span').removeClass('chuxian')
					$_this.find('#erlou2 span').eq(i).addClass('chuxian')
					$_this.find('#liatu ul').eq(i).show().siblings().hide();
				})
			}
		})
		 $(function() {
				$('#erlou6').liu_shiyi()
				$('#erlou7').liu_shiyi()
				$('#erlou8').liu_shiyi()
				$('#erlou9').liu_shiyi()
				$('#erlou10').liu_shiyi()
			})
			// wu楼头部	................................................................................	
		 $(function() {
				$('#kaishi5 p').mouseover(function() {
						var i = $(this).index();
						$('#kaishi5 p').eq(i).addClass('yangshi').siblings().removeClass('yangshi');
						$('#kaishi5 span').removeClass('chuxian')
						$('#kaishi5 span').eq(i).addClass('chuxian')
						$('.rsan5 ul').eq(i).show().siblings().hide();
					})
					// 一楼。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
				$('#kaishi1 p').mouseover(function() {
						var i = $(this).index();
						$('#kaishi1 p').eq(i).addClass('yangshi').siblings().removeClass('yangshi');
						$('#kaishi1 span').removeClass('chuxian');
						$('#kaishi1 span').eq(i).addClass('chuxian');
						$('#Dcenter ul').eq(i).show().siblings().hide();
					})
					// 三楼头部。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
				$('#kaishi3 p').mouseover(function() {
					var i = $(this).index();
					$('#kaishi3 p').eq(i).addClass('yangshi').siblings().removeClass('yangshi');
					$('#kaishi3 span').removeClass('chuxian');
					$('#kaishi3 span').eq(i).addClass('chuxian');
					$('#rsan ul').eq(i).show().siblings().hide();
				})
				$('#rsan .sanyundong').hover(function() {
						$('#rsan .sanleft').css('display', 'block')
						$('#rsan .sanright').css('display', 'block')
					},
					function() {
						$('#rsan .sanleft').css('display', 'none')
						$('#rsan .sanright').css('display', 'none')
					}
				)
				var x = 0;
				var timer = null;
				$('.sanyundong .sanleft').click(function() {
					clearInterval(timer);
					x--;
					if (x < 0) {
						x = $('.sanyundong1 li').length - 1;
					}
					move();
					auto();
				})
				$('.sanyundong .sanright').click(function() {
					clearInterval(timer);
					x++;
					if (x >= $('.sanyundong1 li').length) {
						x = 0;
					}
					move();
					auto();
				})
				$('.sanyundong .sige1 p').mouseover(function() {
					clearInterval(timer);
					x = $(this).index();
					move();
					auto();
				})

				function move() {
					$('#rsan .sige1 p').eq(x).css('background', '#666').siblings().css('background', 'red');
					$('.sanyundong1 li').eq(x).fadeIn().siblings().hide();
				}

				function auto() {
					timer = setInterval(function() {
						x++;
						if (x >= $('.sanyundong1 li').length) {
							x = 0;
						}
						move();
					}, 2000)
				}
				auto();
			})
			// 二楼//.....................................................................................................			
		 $(function() {
				$('#kaishi2 p').mouseover(function() {
					var i = $(this).index();
					$('#kaishi2 p').eq(i).addClass('yangshi2').siblings().removeClass('yangshi2');
					$('#kaishi2 span').removeClass('chuxian');
					$('#kaishi2 span').eq(i).addClass('chuxian');
					$('#liatu ul').eq(i).show().siblings().hide();
				})
			})
			// 二楼滚动控制........................................................................................................				
		 $(function() {
				$('#liatu .liatu1').hover(function() {
						$('#liatu .liatu1 .left1').show()
						$('#liatu .liatu1 .right1').show()
					},
					function() {
						$('#liatu .left1').hide()
						$('#liatu .right1').hide()
					}
				)
				var x = 1;
				var pw = $('#liatu .liatu5 p').width();
				var anm = true;
				var timer2 = null;
				var n = 0;
				$('.liatu4').scrollLeft(pw);
				var fir = $('#liatu .liatu5 p:first').clone();
				var las = $('#liatu .liatu5 p:last').clone();
				$('.liatu5').append(fir);
				$('.liatu5').prepend(las);
				$('#liatu .right1').click(function() {
					clearInterval(timer2)
					if (anm) {
						anm = false;
						x++;
						if (x >= $('#liatu .liatu5 p').length) {
							x = 2;
							$('.liatu4').scrollLeft(pw);
						}
						n++;
						if (n >= $('#liatu .sige1 p').length) {
							n = 0;
						}
						bian1();
					}
					auto();
				})
				$('#liatu .left1').click(function() {
					clearInterval(timer2)
					if (anm) {
						anm = false;
						x--;
						if (x < 0) {
							x = $('#liatu .liatu5 p').length - 3;
							$('.liatu4').scrollLeft(pw * (x + 1));
						}
						n--;
						if (n < 0) {
							n = $('#liatu .sige1 p').length - 1;
						}
						bian1();
						auto();
					}
				})
				$('#liatu .sige1 p').click(function() {
						clearInterval(timer2)
						n = $('#liatu .sige1 p').index(this);
						x = n + 1
						bian1();
						auto();
					})
					// 下标	...................................................................................................		

				function bian1() {
					$('#liatu .sige1 p').eq(n).css('background', '#666').siblings().css('background', 'red')
					$('.liatu4').stop().animate({
						scrollLeft: pw * x
					}, function() {
						anm = true;
					})
				}

				function auto() {
					timer2 = setInterval(function() {
						x++;
						if (x >= $('#liatu .liatu5 p').length) {
							x = 2;
							$('.liatu4').scrollLeft(pw);
						}
						n++;
						if (n >= $('#liatu .sige1 p').length) {
							n = 0;
						}
						bian1();
					}, 2000)
				}
				auto();
			})
			// jq透明度变化一楼...........................................................................		
		 $(function() {
				var x = 0;
				var timer = null;
				$('.jiansi2').hover(
					function() {
						$('.jiansi2 .pleft1').css('display', 'block')
						$('.jiansi2 .pright1').css('display', 'block')
					},
					function() {
						$('.jiansi2 .pleft1').css('display', 'none')
						$('.jiansi2 .pright1').css('display', 'none')
					}
				)
				$('.jiansi2 .pleft1').click(function() {
					clearInterval(timer);
					x--;
					if (x < 0) {
						x = $('.jiansi2 img').length - 1;
					}
					tongbu1();
					auto();
				})
				$('.jiansi2 .pright1').click(function() {
					clearInterval(timer);
					x++;
					if (x >= $('.jiansi2 img').length) {
						x = 0;
					}
					tongbu1();
					auto();
				})
				$('.sige p').mouseover(function() {
					clearInterval(timer);
					x = $('.sige p').index(this);
					$('.sige p').eq(x).css('background', '#666').siblings().css('background', 'red')
					$('.jiansi2 img').eq(x).fadeIn().siblings().hide()
				})

				function auto() {
					timer = setInterval(function() {
						x++;
						if (x >= $('.jiansi2 img').length) {
							x = 0;
						}
						tongbu1();
					}, 2000)
				}
				auto();

				function tongbu1() {
					$('.sige p').eq(x).css('background', '#666').siblings().css('background', 'red')
					$('.jiansi2 img').eq(x).fadeIn().siblings().hide()
				}
			})
			// 切换箭头
		var zipai = document.getElementById('zipai');
		var Dzipai = document.getElementById('dazipai');
		var lis = zipai.getElementsByTagName('li');
		var huanyipi = document.getElementsByClassName('huanyipi')[0];
		huanyipi.onclick = function() {
			Dzipai.style.top = parseInt(Dzipai.style.top) - 212 + 'px';
			if (parseInt(Dzipai.style.top) < -636) {
				Dzipai.style.top = -212 + 'px';
			}
		}
		var xs = document.getElementById('xiangshang');
		var xs1 = document.getElementById('xiangshang1');
		var timer = null;
		var otstop = true;
		var clientHeight = document.documentElement.clientHeight;
		window.onscroll = function() {
			var stop = document.documentElement.scrollTop || document.body.scrollTop;
			// alert('滚动');
			if (stop >= 50) {
				xs.style.display = 'block';
			} else {
				xs.style.display = 'none';
			}
			if (!otstop) {
				clearInterval(timer);
			}
			otstop = false;
		}
		xs1.onclick = function() {
			// alert(clientHeight);
			timer = setInterval(function() {
				var stop = document.documentElement.scrollTop || document.body.scrollTop;
				var speed = Math.floor(-stop / 3);
				document.documentElement.scrollTop = document.body.scrollTop = stop + speed;
				otstop = true;
				if (stop == 0) {
					clearInterval(timer);
				}
			}, 30)
		}
		var biejing = document.getElementById('beijing');
		var ycang = document.getElementById('ycang');
		 // var ycang=document.getElementsByClassName('ycang');
		var as = ycang.getElementsByTagName('a');
		var kong = document.getElementById('kong');
		var span = kong.getElementsByTagName('span')[0];
		kong.onmouseover = function() {
			ycang.style.display = 'block';
			span.style.width = kong.clientWidth + 'px';
		}
		kong.onmouseout = function() {
			ycang.style.display = 'none';
			span.style.width = kong.clientWidth + 'px';
		}
		for (var i = 0; i < as.length; i++) {
			as[i].onclick = function() {
				for (var i = 0; i < as.length; i++) {
					if (as[i] == this) {
						beijing.innerHTML = as[i].innerHTML;
						as[i].style.background = "red";
						ycang.style.display = 'none';
					} else {
						as[i].style.background = "";
					}
				}
			};
		}
		var gou = document.getElementById('gou');
		var gou1 = document.getElementById('gou1')
		var yijian = document.getElementById('yijian')
		var timer20 = null;
		var timer21 = null;
		gou.onmouseover = function() {
			startMove(5, 0);
			startMove1(4, 100);
			// yijian.style.display='block'
		}
		gou.onmouseout = function() {
			startMove(-5, 15);
			startMove1(-4, 0);
			// yijian.style.display='none'
		}

		function startMove(speed, iTraget) {
			clearInterval(timer20);
			timer20 = setInterval(function() {
				if (gou1.offsetLeft == iTraget) {
					clearInterval(timer20);
				} else {
					gou1.style.left = gou1.offsetLeft - speed + "px";
				}
			}, 10)
		}

		function startMove1(jian, iTraget) {
			clearInterval(timer21);
			timer21 = setInterval(function() {
				var currentO = parseInt(yijian.style.opacity * 100);
				if (currentO == iTraget) {
					clearInterval(timer21);
				} else {
					currentO += jian;
					yijian.style.opacity = currentO / 100;
				}
			}, 10)
		}

		function byclass(el, oclass) {
			var ael = el.getElementsByTagName("*");
			var arr = [];
			for (var i = 0; i < ael.length; i++) {
				if (ael[i].className == oclass) {
					arr.push(ael[i]);
				}
			};
			return arr;
		}
		// 大图滚动。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
			var touming = document.getElementById('touming');
			var ocon = byclass(touming, 'con');
			var conli = ocon[0].children;
			var oyi_liu = byclass(touming, 'yi_liu')[0];
			var yi_liuli = oyi_liu.children;
			var left = touming.getElementsByTagName('p')[0];
			var left1 = touming.getElementsByTagName('p')[1];
			var right = touming.getElementsByTagName('p')[2];
			var right1 = touming.getElementsByTagName('p')[3];
			var timer1 = null;
			var timer2 = null;
			var num = 0;
			function move(num) {
				clearInterval(timer1);
				for (var i = 0; i < conli.length; i++) {
					yi_liuli[i].style.backgroundColor = '#666';
					conli[i].style.opacity = 0;
				};
				yi_liuli[num].style.backgroundColor = 'red';
				var ind = 0;
				timer1 = setInterval(function() {
					ind += 0.02;
					if (ind >= 1) {
						ind = 1;
						clearInterval(timer1);
					}
					conli[num].style.opacity = ind;
				}, 10)
			}

			function automove() {
				num++;
				if (num >= conli.length) {
					num = 0;
					move(num);
				}
				move(num);
			}
			timer2 = setInterval(automove, 2000);
			for (var i = 0; i < yi_liuli.length; i++) {
				yi_liuli[i].index = i;
				yi_liuli[i].onmouseover = function() {
					clearInterval(timer2);
					if (num == this.index) {
						return false;
					}
					num = this.index;
					move(num);
				}
				yi_liuli[i].onmouseout = function() {
					timer2 = setInterval(automove, 2000);
				}
			}
			right.onclick = function() {
				clearInterval(timer2);
				num--;
				if (num < 0) {
					num = conli.length - 1;
				}
				move(num);
				timer2 = setInterval(automove, 2000);
			}
			right1.onclick = function() {
				clearInterval(timer2);
				num--;
				if (num < 0) {
					num = conli.length - 1;
				}
				move(num);
				timer2 = setInterval(automove, 2000);
			}
			left.onclick = function() {
				clearInterval(timer2);
				num++;
				if (num >= conli.length) {
					num = 0;
				}
				move(num);
				timer2 = setInterval(automove, 2000);
			}
			touming.onmouseover = function() {
				left.style.display = 'block';
				left1.style.display = 'block';
				right.style.display = 'block';
				right1.style.display = 'block';
			}
			touming.onmouseout = function() {
				left.style.display = 'none';
				left1.style.display = 'none';
				right.style.display = 'none';
				right1.style.display = 'none';
			}
		// 。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
		var gundong2 = document.getElementById('gundong2');
		var gundong = document.getElementById('gundong');
		var lis = gundong.getElementsByTagName('li');
		var lefth = gundong.getElementsByTagName('p')[0];
		var righth = gundong.getElementsByTagName('p')[1];
		var tu = gundong.getElementsByClassName('tu')[0];
		var timer3 = null;
		var num2 = 1;
		var timer4 = null;
		gundong.scrollLeft = lis[0].offsetWidth;
		bindClick();
		function move1(num2) {
				removeClick();
				clearInterval(timer3);
				var start = gundong.scrollLeft;
				var end = lis[0].offsetWidth * num;
				var step = 0;
				var stepmax = 20;
				var verystep = (end - start) / stepmax;
				timer3 = setInterval(function() {
					step++;
					if (step == stepmax) {
						step = 0;
						clearInterval(timer3);
						bindClick();
					};
					start = start + verystep
					gundong.scrollLeft = start;
					if (gundong.scrollLeft <= 0) {
						gundong.scrollLeft = lis[0].offsetWidth * (lis.length - 2);
						return false;
					}
					if (gundong.scrollLeft >= lis[0].offsetWidth * 4) {
						gundong.scrollLeft = 0;
						// num=1;
					}
				}, 30)
			}

		function bindClick() {
			righth.onclick = function() {
				num2++;
				if (num2 >= lis.length - 1) {
					num2 = 1;
				}
				move1(num2);
			}
			lefth.onclick = function() {
				num2--;
				if (num2 < 0) {
					num2 = lis.length - 3;
				}
				move1(num2);
			}
		}

		function removeClick() {
			righth.onclick = function() {
				return false;
			}
			lefth.onclick = function() {
				return false;
			}
		}
		gundong.onmouseover = function() {
			lefth.style.display = 'block';
			righth.style.display = 'block';
		}
		gundong.onmouseout = function() {
			lefth.style.display = 'none';
			righth.style.display = 'none';
		}

		// 楼层判断。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。

		// $(function() {
		// 		$(window).on('scroll', aa);
		// 		function aa() {
		// 			var x = 0;
		// 			var Top = document.body.scrollTop || document.documentElement.scrollTop;
		// 			if (Top >= 600) {
		// 				$('#zuodingwei').css('display', 'block')
		// 			} else {
		// 				$('#zuodingwei').css('display', 'none')
		// 			}
		// 		}
		// 		$('#zuodingwei li ').click(function() {
		// 			var i = $('#zuodingwei li ').index(this);
		// 			$('#zuodingwei .tihuan1').innerHTML = $('#zuodingwei .tihuan').innerHTML;
		// 			$('#zuodingwei li a').eq(i).css('color', 'red').siblings().css('color', '#666');	
		// 		})
		// 		// 滚动条滚动获取。。。。。。。。。。。。。。。
		// 		$(window).scroll(function(){
		// 			var top1=$(document).scrollTop();
		// 			var zuodao=$('#zuodingwei')
		// 			var floors=$('#zongfloor').find('.floor');
		// 			// 当前所在的楼层。。。。。。。。。。。。。。。。。。
		// 			var currentId="";
		// 			// 便利每层楼。。。。。。。。。。。。。。。。。。。。。。。。
		// 			floors.each(function(){
		// 				var z=$(this);
		// 				var FloorsTop=z.offset().top;
		// 				if(top1>FloorsTop-200){
		// 					currentId='#'+z.atrr('id');
		// 				}else{
		// 					return false;
		// 				}
		// 				// console.log(FloorsTop);
		// 			})
		// 			var link=zuodao.find('.current')
		// 			if(currentId && link.attr('herf')!=currentId){
		// 				link.removeClick('current');
		// 				zuodao.find("[href="+currentId+"]").addClass('current');
		// 			}
					
		// 		})
		// 	})
	
}