<template>
	<section>
		<div class="main-content">
			<div class="swiper-container ">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide" style="background-image:url(http://img.muyingzhijia.com/img/201707/20170720152546_10_ls1242.jpg)"></div>
		            <div class="swiper-slide" style="background-image:url(http://img.muyingzhijia.com/img/201707/20170717112533_10_mjm.jpg)"></div>
		            <div class="swiper-slide" style="background-image:url(http://img.muyingzhijia.com/img/201707/20170721150947_10_1242x580.jpg)"></div>
		            <div class="swiper-slide" style="background-image:url(http://img.muyingzhijia.com/img/201707/20170721122731_10_qk1242.jpg)"></div>
		            <div class="swiper-slide" style="background-image:url(http://img.muyingzhijia.com/img/201707/20170721102716_10_1242hs.jpg)"></div>
		            <div class="swiper-slide" style="background-image:url(http://img.muyingzhijia.com/img/201707/20170717151041_10_1242x580.jpg)"></div>
		        </div>
		        
		        <div class="swiper-pagination"></div>
		    </div>
		</div>
		<div class="notice">
			<span class="tips_notice">公告</span>
			<span>谨防诈骗的安全提醒</span>
		</div>
		<div class="nav">
			<ul>
				<li v-for='nav in navs'><dl><dt><a :href='nav.LinkUrl'><img :src='nav.SmallPic'/></a></dt><dd v-text='nav.Title'></dd></dl></li>
				
			</ul>
		</div>
		<div class="newcustomer">
	         <div class="newcustomer_con">
	           <a href="//m.muyingzhijia.com/Activity/ActivePage?id=1597"><img src="//img.muyingzhijia.com/img/201705/20170502155746_10_xk.jpg"/></a>
	         </div>
        </div>
     	<div class="today_activity" >
        	<div class="today_list">
        		<div class="today_list_item" v-for="n in news">
        			<a :href="n.LinkUrl"><img :src="n.SmallPic"/></a>
        		</div>
        	</div>
        </div>
        <div class="homezone">
             <div class="homezone_con">
               <a href="//m.muyingzhijia.com/Activity/ActivePage?id=1484" data-index="4"><img src="//img.muyingzhijia.com/img/201704/20170417104645_10_nf.jpg"/></a>
             </div>
             <div class="homezone_con">
               <a href="//m.muyingzhijia.com/Activity/ActivePage?id=596" data-index="5"><img src="//img.muyingzhijia.com/img/201704/20170417104703_10_znk.jpg" /></a>
             </div>
        </div>
        <div class="TP_title">
	        <h2>
	            <span>今日专场</span>
	        </h2>
	    </div>
		  <div id="wrapper">
		  	<ul class="wrapper_list">
		  		<li v-for="list in lists">
                    <router-link :to="{name:'detail',params:{id:list.Id}}">
                    	
                        <div class="img_info">    
                            <img :src="list.PictureUrl" />
                            <div class="SurplusTime">
                                <span><img src="//static.boodoll.cn/wap/v2/img/icon/h-time.png"></span>
                                <span>剩余0天</span>
                            </div>
                        </div>
                        <div class="text_info">
                            <span>{{list.SubjectName}}</span>
                            <span>{{list.OriDiscount}}</span>
                        </div>
                    </router-link>
                </li>
		  	</ul>
		  </div>
		  <div class="not_more">
		        <div class="more_box">
		            <span>
		                <img src="//static.boodoll.cn/wap/v2/img/icon/h-girl.png"></span><span>没有更多啦!</span>
		        </div>
		    </div>
		   <div class="top hide" >
		   		<span class="icon icon-star"></span>
		   </div>
	</section>		
	
		
	   
		
	
</template>

<script >
	
	import axios from 'axios'

	export default {
		name:'main-content',

		data(){
			return {
				navs:[],
				news:[],
				lists:[],
				swiper:null,
				myscroll:null

			}
		},
		
		methods:{
			getJson(){
				var that = this;
				axios.all([
					axios.get('./static/json/rukou.json'),
					axios.get('./static/json/newperson.json'),
					axios.get('./static/json/list.json')					
				])
				.then(axios.spread(function(rkResponse,newResponse,lisResponse){
				  that.navs=rkResponse.data
				  that.news = newResponse.data
				  that.lists = lisResponse.data
				  
				}))
				.catch(function(err){
				  console.log(err);
				})
			}			
		},
		
		mounted(){
			this.getJson()	
			
			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        effect: 'cube',
		        grabCursor: true,
		        cube: {
		            shadow: true,
		            slideShadows: true,
		            shadowOffset: 20,
		            shadowScale: 0.94,		          
		            autoplay: 1000
        			
		        }
		  })

		},
		update(){
			
		}
		
		
	}
	
</script>

<style scoped lang="scss">
		.main-content{
			width: 100%;
    		height: 7.5rem;
    		position: relative;
		}
	  .main-content .swiper-container {
	   		perspective: 1500px;
            height: 7.5rem;
		    width: 100%;
		    overflow: hidden;
		    position: relative;
		    background-color: #FAFAFA;
    }
    .swiper-wrapper{
    	width:100%;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
       
    }
    .notice {
	    width: 100%;
	    height: 1.35rem;
	    line-height: 1.35rem;
	    background-color: #fff;
	    text-align: left;
	    overflow: hidden;
	}
	.tips_notice {
	    height: 0.65rem;
	    width: 1.1rem;
	    border: 0.05rem solid #f60;
	    border-radius: 0.15rem;
	    margin: 0rem 0.25rem;
	    padding: 0.05rem;
	    color: #f60;
	}
	.nav {
	    height: 3.7rem;
	    line-height: 0.9rem;
	    background-color: #fff;
	}
	.nav ul li:nth-child(1) {
	    color: #e7507b;
	}
	.nav ul li {
	    float: left;
	    width: 25%;
	    text-align: center;
	    margin-top: 0.575rem;
	}
	.nav ul li img {
	    height: 1.45rem;
	    width: 1.45rem;
	    margin: 0px auto;
	}
	.nav ul li dt{
		padding-bottom:10px;
	}
	.newcustomer {
	    overflow: hidden;
	    width: 100%;
	    height: 6.68rem;
	    background-color: #fff;
	    margin-top: 0.5rem;
	    .newcustomer_con {
	    	height: 6.68rem;
    		width: 100%;
    		img{
    			width:100%;
    			height:100%;
    		}
	    }
	}
	.today_list {
	    overflow: hidden;
	    width: 100%;
	    height: 5.8rem;
	    background-color: #fff;
	    .today_list_item{
    	    float: left;
		    height: 5.8rem;
		    width: 5.28rem;
		    img{
		    	width:100%;
		    	height:100%;
		    }
	    }
	}
	.homezone {
	    overflow: hidden;
	    width: 100%;
	    height: 3.3rem;
	    margin-bottom: 0.5rem;
	    .homezone_con {
	    	width: 7.95rem;
		    height: 3.3rem;
		    float: left;
		    border-top: 0.05rem solid #f3f3f3;
		    
	    }
	}
	.TP_title {
	    text-align: center;
	    h2{
    	    line-height: 2rem;
		    height: 0.9375rem;
		    width: 7rem;
		    border-bottom: 0.05rem solid #d2d2d2;
		    margin: 0px auto;
		    span{
	    	    font-size: 0.7rem;
			    background-color: #f3f3f3;
			    color: #82737A;
			    padding: 0.4rem 0.5rem;
		    }
	    }
	}

	.wrapper_list{
		li{
		    width: 15.35rem;
		    margin: 0 auto;
		    margin-top: 0.4rem;
		    margin-bottom: 0.4rem;
		    background-color: #fff;
		    box-shadow: 0px 2px 4px rgba(0,0,0,0.35);
		    a{
		    	color: #82737A;
		    	display: block;
		    	.img_info {
				    height: 7.2rem;
				    width: 15.35rem;
				    position: relative;
				}
				
		    }
		}
	}
	.SurplusTime {
	    height: 0.9rem;
	    background-color: #000;
	    opacity: 0.5;
	    border-radius: 1.5rem 0rem 0rem 0rem;
	    position: absolute;
	    float: right;
	    right: 0;
	    bottom: 0;
	    span{
	    	float: left;
		    color: #fff;
		    font-size: 0.5rem;
		    line-height: 0.9rem;
		    img{
	    	    height: 0.75rem;
			    width: 0.75rem;
			    margin-top: 0.1rem;
			    margin-left: 0.25rem;
		    }
	    }
	}
	.text_info {
	    height: 1.6rem;
	    width: 15.35rem;
	    line-height: 1.6rem;
	}
	.text_info span:nth-child(1) {
	    width: 70%;
	    text-align: left;
	    float: left;
	    font-size: 0.6rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	    margin-left: 0.5rem;
    }
    .text_info span:nth-child(2) {
	    width: 21%;
	    text-align: right;
	    float: left;
	    color: red;
	    padding-right: 2%;
	    font-size: 0.6rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	    margin-left: 0.5rem;
	}
	.not_more {
		padding-bottom:4rem;
	    width: 100%;
	    height: 1.5rem;
	    margin: 0px auto;
	    line-height: 1.5rem;
	    color: #82737A;
	    .more_box {
		    width: 4.5rem;
		    margin: 0px auto;
		    span{
	    	    float: left;
			    display: block;
			    height: 100%;
			    img{
			    	margin-top: -0.25rem;
				    height: 1rem;
				    width: 1rem;
			    }
		    }
		}
	}
	.top{
		width:2rem;
		height:2rem;
		background:#fff;
		position: fixed;
		right:.5rem;
		bottom:3rem;
		border-radius: 50%;
		text-align: center;
		line-height: 2rem;
		span{
			font-size: 1rem;
		}
	}
	.hide{
		display: none;
	}
</style>