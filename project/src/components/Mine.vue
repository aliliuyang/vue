<template>
	<div class="mine">
		<div class="hd_left">
			<router-link to='/main'><b class="icon icon-left"></b></router-link>
			<span class="hd_title">登录</span>
		</div>
		<div class="mine-content">
			<div class="form_box">
				<div class="item">
					<input type="text" id="txtUserAccount" placeholder="请输入邮箱或手机号">
				</div>
				<div class="item">
					<input type="password" id="txtPsw" placeholder="请输入密码(6-20位数字、字母、符号)" maxlength="20">
				</div>
				<p class="forget"><a href="">忘记密码</a></p>
				<div class="login_box">
					
					<router-link to="mine/1" id="login">登录</router-link>
					<router-link to="mine/register" class="new_person">新用户注册</router-link>
					<router-link to="" class="phone">手机有验证码登录</router-link>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Register from './MainComponents/Register'
	export default{
		name:'mine',		
			subRoutes:{
				'register':{component:Register}
			}
		
	}
</script>

<style scoped  lang="scss">
	body{
		height:100%;
	}
	.mine{
	    height: 2.2rem;
	    background-color: #fff;
	    color: #333;
	    
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
			margin: 1.5rem auto 0;
			
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
		.forget{
			a{
			    font-size: .6rem;
			    line-height: 2rem;
			    color: #fe6700;
			    float:right;
			}
		}
		#login{
			overflow: hidden;
		    display: inline-block;
		    width: 13.25rem;
		    height: 1.9rem;
		    font-size: .7rem;
		    line-height: 1.9rem;
		    text-align: center;
		    color: #fea060;
		    border-radius: 2rem;
		    margin: .5rem auto .4rem;
		    color: #fff;
		    background-color: #fea060;
		}
		.new_person{
			    font-size: .6rem;
			    line-height: 2rem;
			    color: #fe6700;
		}
		.phone{
			    font-size: .6rem;
			    line-height: 2rem;
			    color: #fe6700;
			    float:right;
		}
</style>