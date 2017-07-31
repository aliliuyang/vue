<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>
	
export default {
  name: 'app'
}

</script>

<style lang="scss">
	@import './styles/reset.scss';
	html{
		font-size:23.4375px;
		height:100%;
	}
	body{
		overflow: scroll;
		font-size: 0.5rem;
    font-family: Arial,Helvetica,sans-serif;
    margin: 0px auto;
    min-width: 320px;
    max-width: 640px;
    min-height: 100%;
    background-color: #fff;
    position: relative;

	}
	.hd_left{
		
			display: flex;
	    	margin-top: 0.7rem;
    		
    		a{
    			width:20%;
    			color: #fea060;
   			 	text-decoration: none;
   			 	b{
		 		    font-size: 1.15rem;
				    line-height: 2.2rem;
				    margin-left: .25rem;
   			 	}
    		}
	    }
	    
	
</style>
