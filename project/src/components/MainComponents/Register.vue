<template>
		<div class="register">
			<div class="hd_left">
				<router-link to='/mine'><b class="icon icon-left"></b></router-link>
				<span class="hd_title">注册</span>
			</div>
			<div class="register_content">
				<div class="form_box">
					<div class="item">
						<input type="text" id="txtUserAccount" placeholder="请输入手机号">
					</div>
					<p class="send">发送验证码</p>
					<div class="agree">
						<input type="checkbox" checked='checked'/>
						<label for="agree">
							<a href="http://m.muyingzhijia.com/Agreement.html">同意《母婴之家注册协议》</a>
						</label>
					</div>
					
				</div>
			</div>
		</div>
</template>

<script>
	
	export default {
		name:'register'
	}
</script>

<style scoped lang='scss'>

	.register{
	    height: 2.2rem;
	    background-color: #fff;
	    color: #333;
   
	}
	.hd_title{
	    	width: 60%;
    		
    		height: 100%;
			text-align: center;
			font-size: .9rem;
			line-height: 2.2rem;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
	    }
	    .form_box{
    	    width: 13.25rem;
			margin: 5rem auto 0;
			
	    }
	    .item{
			    position: relative;
			    overflow: hidden;
			    height: 2.5rem;
			    border-bottom: 1px solid #ffb480;
			    input{
		    	    text-align: center;
				    height: 2.5rem;
				    width: 13.25rem;
				    font-size: .7rem;
				    
			    }
		}
		.register_content{
			margin: 0rem 0rem 2.5rem 0rem;
		}
		.send{
			    font-size: .8rem;
			    text-align: center;
			    margin-top: 1.3rem;
		}
		.agree{
			    width: 100%;
			    font-size: .6rem;
			    text-align: center;
			    margin: 3.5rem auto 0;
			    line-height: 0.85rem;
			   a{
			   	 color:#f60;
			   }
		}
</style>