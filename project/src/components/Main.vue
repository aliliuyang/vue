<template>
	<div class='main'>
		<main-header></main-header>
		<main-content></main-content>
		<main-footer></main-footer>
		
	</div>
</template>

<script>
	import MainHeader from './MainComponents/MainHeader'
	import MainContent from './MainComponents/MainContent'
	import MainFooter from './MainComponents/MainFooter'
	

	export default {
		name:'main',
		data(){
			return{
				
			}
		},
		components:{
			MainHeader,
			MainContent,
			MainFooter	
		}
	}
</script>
	
<style scoped lang="scss">
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
	
</style>