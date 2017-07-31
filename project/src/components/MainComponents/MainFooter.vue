<template>
	<footer class="main-footer">		
            <router-link class="tab-item external active" to="/main">
            	<span class="icon icon-home"></span>
                <span class="tab-label">首页</span>
            </router-link>  
            <router-link class="tab-item external" to="/list">
            	<span class="icon icon-menu"></span>
                <span class="tab-label">分类</span>
            </router-link>
            <router-link class="tab-item external " to="/shopcar">
            	<span class="icon icon-cart"></span>
                <span class="tab-label">购物车</span>
            </router-link>
            <router-link class="tab-item external " to="/mine">
            	<span class="icon icon-me"></span>
                <span class="tab-label">我的</span>
            </router-link>
	</footer>
</template>

<script >
	export default {
		name:'main-footer'
		
	}
	
</script>

<style scoped lang="scss">
	.main-footer{
		width: 100%;
	    height: 2.25rem;
	    border-top: 0.05rem solid #d2d2d2;
	    background-color: #fff;
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    .tab-item {
	    	display: flex;
	    	flex-direction: column;
	    	justify-content: space-between;	    	
	    	float: left;
    	    color: #82737A;    
		    width: 25%;
		    text-align: center;		   
		   
		   
		    .icon{
		    	font-size: 1rem;
		    	flex-grow: 1;
		    }
		     span{
		    	flex-grow: 1;
		    	flex-shrink: 1;
		    }
	    }
	}
	.tab-item.active{
		color:#f60;
	}
</style>