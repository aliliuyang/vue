<template>
	<header class="main-header">
		
	    <div class="hd_left hd_logo">
	        <img src="//static.boodoll.cn/wap/v2/img/icon/logo.png"></div>
	    <div class="hd_title hd_search">
	        
	        <input type="text" placeholder="搜索" id="ckSearch">
	    </div>
		
	</header>
</template>

<script >
	export default {
		name:'main-header'
	}
	
</script>

<style scoped lang="scss">
	.main-header{
		width: 16rem;
		height: 2.2rem;
	    background-color: #f60;
	    color: #fff;
	    
	    .hd_left{
    	    width: 3rem;
			float: left;
			img{
			    width: 2.35rem;
			    margin: 0px auto;
			    margin: 0.55rem 0rem 0rem 0.325rem;
			}
	    }
	    
	    
	}
	.main-header .hd_title{
	    	width: 12.5rem;
    		float: left;
	}
    .hd_search{	    	
	    width: 100%;
	    height: 1.4rem;
	    background-color: #ff8c3c;
	    margin-top: 0.4rem;
	    border-radius: 0.2rem;
	    color: #fff;
    }
    .hd_search input {
    padding: 0;
    height: 1.4rem;
    width: 10.5rem;
    float: left;
    border-radius: 0rem 0.2rem 0.2rem 0rem;
    font-size: 0.6rem;
    background-color: #ff8c3c;
    color: #fff;
    border:none;
	}
	.hd_search span {
    height: 1.5rem;
    width: 1.5rem;
    float: left;
    text-align: center;
    border-radius: 0.2rem 0rem 0rem 0.2rem;
}
</style>