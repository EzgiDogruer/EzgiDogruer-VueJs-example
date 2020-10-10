
    
<template>

    <div >
		<div >

		<select v-model="$i18n.locale" class="custom-select" style="width:100px; margin-right:-95em;margin-top:5px;text-align: center; opacity: 0.6;" >
			
      		<option  v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang" >{{ options[i] }}</option>
			 
    	</select>
		</div>
		<div>
			
		</div>
        <ul style="margin: 30px auto;text-align: center; margin-left:-70em;margin-top:-20px">
            <li style="list-style: none;position: relative;display: inline-block;width: 100px;height: 100px;">
                   <router-link to="/home"  class="round yellow">{{ $t('message.home' )}} <span class="round"></span></router-link></li>
            <li style="list-style: none;position: relative;display: inline-block;width: 100px;height: 100px;">
                 <router-link to="/login"  class="round green">{{ $t('message.log' )}} <span class="round"></span></router-link></li>
            <li style="list-style: none;position: relative;display: inline-block;width: 100px;height: 100px;">
                <router-link to="/register"  class="round red">{{ $t('message.sUp' )}} <span class="round"></span></router-link></li>

			
	
        </ul> 
	
		
  <router-view></router-view>
    </div>
	
</template>


               
        


<script>


import { mapState, mapActions } from 'vuex'


export default {
	name: 'app',

  
    computed: {
        ...mapState({
            alert: state => state.alert
        })
	},
	data() {
	return { langs: ['en', 'tr'],
			 options :['English','Türkçe'] ,
			}
  },
	
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear' 
		}),

	
  
	},
    watch: {
        $route (to, from){
            // clear alert on location change
            this.clearAlert();
        }
    } 
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
  	-moz-box-sizing: border-box;
		-o-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	body {
		width: 100%;
		height: 100%;
		font-family: "helvetica neue", helvetica, arial, sans-serif;
		font-size: 13px;
		text-align: center;
		
	}



	.round {
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		padding-top: 20px;		
		text-decoration: none;		
		text-align: center;
		font-size: 25px;		
		text-shadow: 0 1px 0 rgba(46, 25, 25, 0.7);
		letter-spacing: -.065em;
		font-family: "Hammersmith One", sans-serif;		
		-webkit-transition: all .25s ease-in-out;
		-o-transition: all .25s ease-in-out;
		-moz-transition: all .25s ease-in-out;
		transition: all .25s ease-in-out;
		box-shadow: 2px 2px 7px rgba(0,0,0,.2);
		border-radius: 300px;
		z-index: 1;
		border-width: 4px;
		border-style: solid;
	}

	.round:hover {
		width: 130%;
		height: 130%;
		left: -15%;
		top: -15%;
		font-size: 33px;
		padding-top: 38px;
		-webkit-box-shadow: 5px 5px 10px rgba(0,0,0,.3);
		-o-box-shadow: 5px 5px 10px rgba(0,0,0,.3);
		-moz-box-shadow: 5px 5px 10px rgba(0,0,0,.3);
		box-shadow: 5px 5px 10px rgba(0,0,0,.3);
		z-index: 2;
		
		
	}

	a.red {
		
		color: rgb(111, 30, 25);
		border-color: rgba(133,32,28,.2);
	}

	a.red:hover {
		color: rgb(101, 16, 13);
	}

	a.green {
		
		color: rgba(0,63,71,1);
		border-color: rgba(2, 44, 49, 0.2);
	}

	a.green:hover {
		color: rgb(5, 78, 88);
	}

	a.yellow {
		
		color: rgb(81, 67, 10);
		border-color: rgba(108, 85, 22, 0.2);
	}

	a.yellow:hover {
		color: rgb(73, 70, 14);
	}

	.round span.round {
		display: block;
		opacity: 0;
		-webkit-transition: all .5s ease-in-out;
		-moz-transition: all .5s ease-in-out;
		-o-transition: all .5s ease-in-out;
		transition: all .5s ease-in-out;
		font-size: 1px;
		border: none;
		padding: 40% 20% 0 20%;
		color: rgb(17, 5, 5);
	}

	.round span:hover {
		opacity: .85;
		font-size: 16px;
		-webkit-text-shadow: 0 1px 1px rgba(0,0,0,.5);
		-moz-text-shadow: 0 1px 1px rgba(0,0,0,.5);
		-o-text-shadow: 0 1px 1px rgba(0,0,0,.5);
		text-shadow: 0 1px 1px rgba(0,0,0,.5);	
	}

	.green span {
		background: rgba(33, 59, 59, 0.7);		
	}

	.red span {
		background: rgba(64, 27, 26, 0.7);		
	}

	.yellow span {
		background: rgba(83, 76, 14, 0.7);	

	}

	select option {
  font-size: 14px;
  background: rgba(0, 0, 0, 0.3);
  color: rgb(12, 9, 9);
  text-shadow: 0 1px 0 rgba(194, 135, 135, 0.4);
  
}




</style>