// 变量
var portrait = {
	img:$('.portrait').find('img')
};
// 统计图
var myChart = echarts.init(document.getElementById('pie'));
var option = {
  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  series : [
      {
          name:'用户投资习惯',
          type:'pie',
          radius : '100%',
          center: ['50%', '50%'],
          hoverAnimation:false,
          data:[
              {value:33.13, name:'180天以上',itemStyle:{normal: {color:'#ffe7e4'} }},
              {value:42.24, name:'90天-179天',itemStyle:{normal: {color:'#ffa296'} }},
              {value:24.63, name:'30天-89天',itemStyle:{normal: {color:'#ff5a45'} }}
                                 
          ].sort(function (a, b) { return a.value - b.value}),
          roseType: false,
          label: {
              normal: {
                show:false,
                  textStyle: {
                      color: 'rgba(255, 255, 255, 0.3)'
                  }
              }
          },
          labelLine: {
              normal: {
                show:false,
                  lineStyle: {
                      color: 'rgba(255, 255, 255, 0.3)'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
              }
          },
          itemStyle: {
              normal: {                       
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
              }
          }
      }
  ],
};
// 
var timer = setTimeout(function(){
		page_1();
		clearTimeout(timer);
	},3000);
// 预加载图片
function b(o, n) {
	return Object.prototype.toString.call(o) == "[object " + n + "]"
};
function d(o, r) {
	if (!b(o, "Array")) {
		throw ("imgarr 必须是一个图片数组!")
	}
	var q = 0;
	for (var p = 0; p < o.length; p++) {
		var n = new Image();
		n.src = o[p];
		n.onload = function() {
			q++;
			if (o.length === q) {
				r && r()
			}
		}
	}
};
var f = [
	    	'./images/user_report/user_report_bg.png','./images/user_report/user_report_1_01.png','./images/user_report/user_report_1_02.png', './images/user_report/user_report_1_03.png', './images/user_report/user_report_1_04.png' , './images/user_report/user_report_1_05.png' , './images/user_report/user_report_1_06.png' ,
	    	'./images/user_report/user_report_2_01.png','./images/user_report/user_report_2_02.png', './images/user_report/user_report_2_03.png', './images/user_report/user_report_2_04.png' , './images/user_report/user_report_2_05.png' , './images/user_report/user_report_2_06.png' ,
	    	'./images/user_report/user_report_3_01.png','./images/user_report/user_report_3_02.png', './images/user_report/user_report_3_03.png',
	    	'./images/user_report/user_report_4_01.png','./images/user_report/user_report_4_02.png', './images/user_report/user_report_4_03.png', './images/user_report/user_report_4_04.png' , './images/user_report/user_report_4_05.png' , './images/user_report/user_report_4_06.png' ,
	    	'./images/user_report/user_report_4_07.png' , './images/user_report/user_report_4_08.png' , './images/user_report/user_report_4_09.png' , './images/user_report/user_report_4_10.png' , './images/user_report/user_report_4_11.png' , './images/user_report/user_report_4_12.png' ,
	    	'./images/user_report/user_report_4_13.png' , './images/user_report/user_report_4_14.png' , './images/user_report/user_report_4_15.png' , './images/user_report/user_report_4_16.png' , './images/user_report/user_report_4_17.png' , './images/user_report/user_report_4_18.png' ,
	    	'./images/user_report/user_report_4_19.png' , './images/user_report/user_report_4_20.png' , './images/user_report/user_report_4_21.png' , './images/user_report/user_report_4_22.png' ,
	    	'./images/user_report/user_report_5_01.png','./images/user_report/user_report_5_02.png', './images/user_report/user_report_5_03.png', './images/user_report/user_report_5_04.png' , './images/user_report/user_report_5_05.png' , './images/user_report/user_report_5_06.png' ,
	    ];
d(f, function() {
	$('#loading').animate({'opacity':0},1000,'linear',function(){
		$('#loading').remove();
		$('.swiper-container').css('display','block');

		// 滚屏
		var swiper = new Swiper('.swiper-container', {
		    pagination: '.swiper-pagination',
		    paginationClickable: true,
		    direction: 'vertical',
		    onSlideChangeStart: function(swiper){
		    	var previousIndex = swiper.previousIndex;
		    	var activeIndex = swiper.activeIndex;
		        var previousDiv = $('.swiper-slide').eq(previousIndex);
		        var activeDiv = $('.swiper-slide').eq(activeIndex);
		        if( activeIndex == 2 ){
	        		myChart.setOption(option);
	        	}else{
	        		myChart.clear();
	        	}
		        activeDiv.find('.animate').each(function(i,ele){
		        	$(ele).addClass($(ele).attr('data-animate'));
		        });
		        previousDiv.find('.animate').each(function(i,ele){
		        	$(ele).removeClass($(ele).attr('data-animate'));
		        });
		        switch (Math.abs(swiper.activeIndex)) {
					case 0:
						var timer = setTimeout(function(){
							page_1();
							clearTimeout(timer);
						},2000);						
						break;
					case 1:
						page_2();					
						break;
					case 2:
						$('.progress-bar').css('width','0');
						page_3();					
						break;
					case 3:
						$('.progress-bar').css('width',$('.progress-bar').attr('data-width'));
						if( true ){
							page_4();
						}else{
							return
						}										
						break;
					case 4:
						$('.progress-bar').css('width','0');
						page_5();					
						break;
				}
		    }
		});
		// 滚屏 end
	});
});


// 设置延迟
$('.animate').each(function(i,ele){
	if( !!$(ele).attr('data-delay') ){
		$(ele).css('animation-delay',$(ele).attr('data-delay'))
	}
});



// 上传图片
$('.inputFile').on('change', function () {
    var that = this;
    lrz(that.files[0], {
        height: 400
    })
    .then(function (rst) {             
        portrait.img.attr('src',rst.base64);
        return rst;
    });
});






// 设置第四屏间距
setSpacing();
function setSpacing(){
	var $sum = $('.slide-4-1-sum');
	var $status = $('.slide-4-1-status');
	var $footer = $('.slide-4-1-footer');
	if( $sum.css('display') === 'none' ){
		$status.css('margin-top','0.6rem');
		$footer.css('margin-top','0.6rem');
	}
};


// 设置各页需要滚动的数字
function page_1(){
	var o = {
		useEasing: true,
		useGrouping: true,
		separator: ",",
		decimal: ".",
		prefix: "",
		suffix: ""
	};
	var a = new CountUp("number_01", 0, '365', 0, 2.5, o);
	a.start();
};
function page_2(){
	var o = {
		useEasing: true,
		useGrouping: true,
		separator: ",",
		decimal: ".",
		prefix: "",
		suffix: ""
	};
	var a = new CountUp("number_02", 0, '365', 0, 2.5, o);
	var b = new CountUp("number_03", 0, '70', 0, 2.5, o);
	var c = new CountUp("number_04", 0, '365', 0, 2.5, o);
	var d = new CountUp("number_05", 0, '365', 0, 2.5, o);
	var e = new CountUp("number_06", 0, '365', 0, 2.5, o);
	a.start();
	b.start();
	c.start();
	d.start();
	e.start();
};
function page_3(){
	var o = {
		useEasing: true,
		useGrouping: true,
		separator: ",",
		decimal: ".",
		prefix: "",
		suffix: "%"
	};
	var a = new CountUp("number_07", 0, '33.13', 2, 2.5, o);
	var b = new CountUp("number_08", 0, '42.24', 2, 2.5, o);
	var c = new CountUp("number_09", 0, '24.63', 2, 2.5, o);
	a.start();
	b.start();
	c.start();
};
function page_4(){
	var o = {
		useEasing: true,
		useGrouping: true,
		separator: ",",
		decimal: ".",
		prefix: "",
		suffix: ""
	};
	var a = new CountUp("number_14", 0, '8888', 0, 2.5, o);
	var b = new CountUp("number_15", 0, '80', 0, 2.5, o);
	var c = new CountUp("number_16", 0, '50', 0, 2.5, o);
	a.start();
	b.start();
	c.start();
};
function page_5(){
	var o = {
		useEasing: true,
		useGrouping: true,
		separator: ",",
		decimal: ".",
		prefix: "",
		suffix: ""
	};
	var a = new CountUp("number_10", 0, '8', 0, 2, o);
	var b = new CountUp("number_11", 0, '8', 0, 2, o);
	var c = new CountUp("number_12", 0, '8', 0, 2, o);
	var d = new CountUp("number_13", 0, '90', 0, 2, o);
	a.start();
	b.start();
	c.start();
	d.start();
};