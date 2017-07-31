<template>
	<div class="detail">
		<div class="hd_Top">
			<router-link to='/main'class="hd_left"><b class="icon icon-left"></b></router-link>
			<span class="hd_title" v-text='this.dtitle.Title'></span>
		</div>
		<div class="detail_content">
			<div class="detail_content_column">
				<div class="con_cilumn">
					<div class="Top_pic" v-for='dnav in dnavs'>
						<router-link  to="">
							<img :src="dnav.ImgUrl"/>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:'detail',
		data(){
			return {
				data:[],
				id:''
			}
		},
		methods:{
			getActive(){
				var that = this;
				axios.get('./static/json/dlist.json').then(function(response){
					var res = response.data
					
					
				})
			}
		},
		mounted(){
			this.getActive()
			this.id = this.$router.params.id
			
		}
		
	}
</script>

<style scoped lang = 'scss'>
.detail{
	width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    height: 2.2rem;
    background-color: #f60;
    color: #fff;
}
.hd_Top{
	width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
        height: 2.2rem;
    background-color: #f60;
    color: #fff;
    .hd_left{
    	width: 15%;
    	float: left;
    	font-size: 1rem;
    	display:flex;
    	margin-top:0.4rem;
    	color:#fff;
    }
    .hd_title{
    	width: 70%;
    	float: left;
    	height: 100%;
	    text-align: center;
	    font-size: 0.9rem;
	    line-height: 2.2rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
    }
}
.detail_content_column{
	position: relative;
    top: 0rem !important;
    padding-bottom: 2.2rem;
}
</style>