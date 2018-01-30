 var url = 'http://localhost:8000/';
 var url_landing = 'http://localhost/certify_college/';
	
$(document).ready(function(){
// Send an AJAX request
	
	function prXHR(){
		var xhr = new window.XMLHttpRequest();
		xhr.upload.addEventListener('progress', function(evt){
			if(evt.lengthComputable){
				var percentComplete = evt.loaded / evt.total;
				//$('#general_progress').find('.determinate').width(Math.round(percentComplete * 100)+'%');
			}
		},false);
		xhr.addEventListener('progress', function(evt){
			if (evt.lengthComputable){
				var percentComplete = evt.loaded / evt.total;
				//$('#general_progress').find('.determinate').width(Math.round(percentComplete * 100)+'%');
			}
		},false);
		return xhr;
	}
				
	function nfXHR(){return new window.XMLHttpRequest();}
		
	function makeAjax(url,method,dat,type,callback,x,extra){
		var processData=true;
		if(method != "GET" || null === dat)
			processData=false;
		else
			processData=true;
		
		return $.ajax({
			xhr:x?prXHR:nfXHR,
			url: url,
			method: method,
			cache:false,
			data:dat,
			processData: processData,
			contentType: false,
			dataType: type
		}).done(function(d){
			if(extra)
				callback(d,extra);
			else
				callback(d);
		}).fail(function(d){			
			if(extra)
				callback(false,extra);
			else
				callback(false);				
		});
	}	

	var crearCookie = function (key, value) {
	    expires = new Date();
	    expires.setTime(expires.getTime() + 31536000000); // Estableces el tiempo de expiración, genius
	    cookie = key + "=" + value + ";expires=" + expires.toUTCString();
	    return document.cookie = cookie;
	}

	var leerCookie = function (key) {
	    keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
	    if (keyValue) {
	        return keyValue[2];
	    } else {
	        return null;
	    }
	}

	function checkCookie() {
	    var name = leerCookie("name");
	    if(name != "" && name != null) {
	       // alert("Bienvenido " + name);
	       $('.over').css('display','none');
	    }
	}

	function makeCategorie(d){
		var item = [], itemm = [],i = 0,q = 0, l = d.quiz.length, id;
		id = leerCookie("id");
		item[i++]='<div  class="dropdown open">';
		item[i++]='	<a id="categorie_'+d.id+'" class="text-primary dropdown-item dropdown-toggle display-7" href="javascript:void(0)" aria-expanded="true" data-toggle="dropdown-submenu" >'+d.name+'</a>';
		item[i++]='	<div class="dropdown-menu dropdown-submenu ">';
		item[i++]='		<div class="dropdown " >';
		for(var p=0;p<l;p++){			
			var data = d.quiz[p];	
			//if(id != "" && id != null)	
				item[i++]='			<a id="quiz_'+data.id+'" class="text-primary dropdown-item display-7" href="pago.html?id='+data.id+'" aria-expanded="false">'+data.title+'</a>'; 	
			//else
				//item[i++]='			<a id="quiz_'+data.id+'" class="text-primary dropdown-item display-7" href="index.html#header15-2" aria-expanded="false">'+data.title+'</a>'; 	
		}
		item[i++]='		</div>';
		item[i++]='	</div>';
		item[i++]='</div>'; 	
		console.log(item);
		return item.join("");
	}	

	function getCategorie(d){
		//console.log(d);
		if(d.e == 0){			
			var data = d.data;

			//console.log(data);
			
			var l = data.length,
			item,
			items=[];				
							
			for(var i=0;i<l;i++){
				item = data[i];
				items[i] = makeCategorie(item);
			}
			$('#list_categorie').html(items.join(""));
			//$('.dropdown-menu .dropdown-submenu').dropdown();
		}
	}

	function get_categories(){
		makeAjax(url+'api/categorie','GET',null,'json',getCategorie,true);
	}	
	get_categories();

	function post_login_register(d){
		login = false;
		console.log('post_login_register');
		
		if(d.e == 0){
			var data = d.data;	
			console.log(data);		
			$('#btn-cancel').click();

			crearCookie("id", data.id);
			crearCookie("name", data.name);
			crearCookie("email", data.email);
			crearCookie("level", data.level);
			$('.over').css('display','none');
			console.log(d.msj);
			checkCookie();
			//sesion(); 

			//document.cookie trae todas las cookies
			location.href = url_landing+'gracias_registro.html';
			
		}else
			alert(d.msj);
	}

	function login_register(d,x){

		console.log(d);
		console.log(x);

		email = d.data.email;
		token = x;
		act = 'facebook';

		console.log('--Token para pass--');
		console.log(token);

		var formData = new FormData();
		formData.append('email',email);
		formData.append('token',token);
		formData.append('act',act);						

		makeAjax(url+'api/login','POST',formData,'json',post_login_register,true);	
	}
	
	function addUsuario(d,x){
		add_user = false;
		console.log('addUsuario');
		if(d.e == 0){			
			if(x){	
				$id = d.id;
				makeAjax(url+'api/user_data/'+$id,'GET',null,'json',login_register,true,x);				
			}else{
				$('.over').css('display','none');
				//document.getElementById("form_register").reset();
				location.href = url_landing+'gracias_registro.html';
			}
		}else{
			alert('Error, no se pudo Agregar el Usuario');
			$('.over').css('display','none');
		}
	}

	var add_user = false;
	$('body').on('submit','#form_register',function(){
		if(add_user)
			return false;
		add_user = true;
		
		$('.over').css('display','block');

		name = document.form_register.name.value;
		email = document.form_register.email.value;
		pass = document.form_register.pass.value;
		//social_network = document.form_register.social_network.value;

		var formData = new FormData();
		formData.append('name',name);
		formData.append('email',email);
		formData.append('pass',pass);
		//formData.append('social_network',social_network);		
		console.log('here');
		makeAjax(url+'api/user','POST',formData,'json',addUsuario,true,pass);				
		return false;	
	});	


	function sesion(){
		id = leerCookie("id");
		console.log('recarga');
		if(id != "" && id != null){
			$('.sesion').html("<a class='logout nav-link link text-primary display-7' href='javascript:void(0)'><span class='mbri-logout mbr-iconfont mbr-iconfont-btn'></span>Cerrar Sesion</a>");
        }else
        	$('.sesion').html("<a class='nav-link link text-primary display-7' data-toggle='modal' href='#modal_login'><span class='mbri-users mbr-iconfont mbr-iconfont-btn'></span>Inicia Sesión</a>");
        	
	}
	sesion();


	var eliminarCookie = function (key) {
		console.log(key);
	    return document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}

	function post_login(d){
		login = false;
		console.log('post_login');
		
		if(d.e == 0){
			var data = d.data;	
			console.log(data);		
			$('#btn-cancel').click();			
			crearCookie("id", data.id);
			crearCookie("name", data.name);
			crearCookie("email", data.email);
			crearCookie("level", data.level);			

			checkCookie();
			sesion();
			get_categories();
			get_test();
			logueado();
			$('.over').css('display','none');
			//$('.registrate').css('disable','none');
			console.log(d.msj);
		}else
			alert(d.msj);
			$('.over').css('display','none');
	}

	var login = false;
	$('body').on('submit','#form_login',function(){	
      	if(login)
			return false;
		login = true; 

		$('.over').css('display','block');

		email = document.form_login.email.value;
		password = document.form_login.pass.value;
		act = 'normal';

		var formData = new FormData();
		formData.append('email',email);
		formData.append('password',password);
		formData.append('act',act);
		
		makeAjax(url+'api/login','POST',formData,'json',post_login,true);
		return false;	      
    });

	/*
	function getCertificado(d){
		if(d.e==0){			
			location.href="http://localhost/certify_college/certificado.html?data="+d;
		}else
			alert(d.msj);
	};	
	*/

	$('#certificado').on('click', function(){
		location.href=url_landing+"certificado.html";
		//var id = getParameterByName('id');		
		//makeAjax(url+'api/certificado/'+id,'GET',null,'json',getCertificado,true);
	});

	//FACEBOOK   
		window.fbAsyncInit = function(){
		    FB.init({
		      appId      : '150225095732942',
		      cookie     : true,
		      xfbml      : false,
		      version    : 'v2.11'
		    });

		    FB.getLoginStatus(function(response) {
	    		statusChangeCallback(response);
			});        
		};

		(function(d, s, id){
	     var js, fjs = d.getElementsByTagName(s)[0];
		     if (d.getElementById(id)) return;
		     js = d.createElement(s); js.id = id;
		     js.src = "https://connect.facebook.net/es_LA/sdk.js";
		     fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));	

		$('.facebook_login').on('click',function(){
			FB.login(function(response){
	 			if (response.status === 'connected') {
	 				console.log('Logged in.');
	 				console.log(response);
	 				$('.over').css('display','block');
	 				checkLoginStateLogin();
				}else{
					alert('No se puedo Iniciar sesión con Facebook');
				}
			}, {scope: 'email'});
		});

		function logoutFace(){
			FB.logout(function(response){
				console.log('logoutFace');
				$('.over').css('display','none');
		   		location.href = url_landing;		   
			});
		}

		function statusChangeCallbackLogin(response) {
		    console.log('statusChangeCallback');
		    console.log(response);
		   
		    if(response.status === 'connected'){
		    	var token = response.authResponse.accessToken;
		    	var id_user = response.authResponse.userID;
		    	//console.log(token);
		    	//console.log(id_user);
		    	if(token != "" & token != null)
		    		testAPILogin(token);
		    	else{
		    		alert('No hay respuesta valida de Facebook');
		    		logoutFace();
		    	}	
		    }else{
		      // The person is not logged into your app or we are unable to tell.
		     	console.log('No ha iniciado sesión en Facebook');
		    }
		}

		function checkLoginStateLogin() {
		    FB.getLoginStatus(function(response) {
		      statusChangeCallbackLogin(response);
		    });
	  	}

		function statusChangeCallback(response) {
		    console.log('statusChangeCallback');
		    console.log(response);
		   
		    if(response.status === 'connected'){
		    	var token = response.authResponse.accessToken;
		    	var id_user = response.authResponse.userID;
		    	//console.log(token);
		    	//console.log(id_user);
		    	if(token != "" & token != null)
		    		testAPI();
		    	else{
		    		alert('No hay respuesta valida de Facebook');
		    		logoutFace();
		    	}	
		    }else{
		      // The person is not logged into your app or we are unable to tell.
		     	console.log('No ha iniciado sesión en Facebook');
		    }
		}


		function checkLoginState() {
		    FB.getLoginStatus(function(response) {
		      statusChangeCallback(response);
		    });
	  	}

	  	/*function rand_code(chars, lon){
			code = "";
			for (x=0; x < lon; x++)
			{
				rand = Math.floor(Math.random()*chars.length);
				code += chars.substr(rand, 1);
			}
			return code;
		
		}*/

		function post_login_register_face(d){
			login = false;
			console.log('post_login_register_face');
			
			if(d.e == 0){
				var data = d.data;	
				console.log(data);		
				$('#btn-cancel').click();

				crearCookie("id", data.id);
				crearCookie("name", data.name);
				crearCookie("email", data.email);
				crearCookie("level", data.level);

				$('.over').css('display','none');

				console.log(d.msj);
				checkCookie();
				sesion(); 	
				get_categories();
				get_test();
				logueado();
				//$('.registrate').css('disable','none');
				//document.cookie trae todas las cookies			
			}else
				alert(d.msj);
		}
		
	  	function getUserExists(d,x){
	  		if(d.e == 0){  			
	  			console.log(d);  
	  			var data = d.data;  			
	  			console.log(data);	

				email = data.email;
				token = x.token;
				act = 'facebook';

				console.log('--Token para pass--');
				console.log(token);

				var formData = new FormData();
				formData.append('email',email);
				formData.append('token',token);
				formData.append('act',act);						

				makeAjax(url+'api/login','POST',formData,'json',post_login_register_face,true);
	  		}else{  
	  			console.log(x);
					
				//var caracteres = "0123456789abcdefABCDEF?¿¡!:;";
				//var longitud = 10;

				name = x.name;
				email = x.email;
				//pass = rand_code(caracteres, longitud);
				pass = x.token;
				//console.log(pass);

				var formData = new FormData();
				formData.append('name',name);
				formData.append('email',email);
				formData.append('pass',pass);				

				makeAjax(url+'api/user','POST',formData,'json',addUsuario,true,pass);   
	  		}
	  	}

	  	function testAPI(){
	    	console.log('Welcome!  Fetching your information.... ');
		    FB.api('/me?fields=name,email', function(response){
		        console.log(response);	        
		    });
		}	

		function testAPILogin(d){
	    	console.log('Welcome!  Fetching your information.... ');
		    //console.log(d);
		    var token = d;	
		    FB.api('/me?fields=name,email', function(response){
		        console.log(response);
		        var email = response.email;
		        var name = response.name;
		        //console.log(token);
		        var data = {email:email, name:name, token:token, act:'facebook'};
		        console.log(data);
		      	id = leerCookie("id");
		      	if(id == "" || id == null){
		      		makeAjax(url+'api/user_get/'+email,'GET',null,'json',getUserExists,true,data); 
		    	}
		    });
		}

		function getLogout(){		
			//alert('Sesión cerrada');
			FB.getLoginStatus(function(response) {
		    	if(response.status === 'connected')
		      		logoutFace();
		        else{
		        	IN.User.isAuthorized(function(res){
		        		if(res == true){
		        			IN.User.logout(function(){
			                    console.log('linkedIn');
								$('.over').css('display','none');
						   		location.href = url_landing;	
			                });
		        		}else{
		        			console.log('logout');
							$('.over').css('display','none');
				   			location.href = url_landing;
		        		}
		        	});
		        	
		    		
		   		}			
		    });
		}

		$('body').on('click','.logout', function(){	
			console.log('logout');
			$('.over').css('display','block');

			$data = ['id','name','email','level'];
			var l = $data.length;

			for(var i = 0; i < l; i++){
				eliminarCookie($data[i]);
				console.log($data[i]);
			}

			makeAjax(url+'api/logout','GET',null,'json',getLogout,true);		
		});
	//FACEBOOK


	//LinkedIn
		 // Setup an event listener to make an API call once auth is complete
	    $('.linked_login').on('click',function(){
	    	$('.over').css('display','block');
	        IN.User.authorize(function(){
	        	IN.API.Raw("/people/~:(id,first-name,last-name,email-address,picture-url)").result(onSuccess).error(onError);
	        });
	    });

	    // Handle the successful return from the API call
	    function onSuccess(items) {
	        console.log(items);
	        
	        var data = {email:items.emailAddress, name:items.firstName+" "+items.lastName, token:items.id, act:'linkedIn'};
	        id = leerCookie("id");
	      	if(id == "" || id == null){
	      		makeAjax(url+'api/user_get/'+data.email,'GET',null,'json',getUserExists,true,data); 
	    	}
		}	

	    // Handle an error response from the API call
	    function onError(error) {
	        console.log(error);
	        $('.over').css('display','none');
	        alert('No se pudo iniciar sesion con LinkedIn');
	    }	
	//LinkedIn

	//Google
		var googleUser = {};
		var startApp = function() {
		    gapi.load('auth2', function(){
		      // Retrieve the singleton for the GoogleAuth library and set up the client.
		      auth2 = gapi.auth2.init({
		        client_id: '74901395238-krh5s5uf7q7da417893on550b6r9gn6i.apps.googleusercontent.com',
		        cookiepolicy: 'http://localhost',
		        // Request scopes in addition to 'profile' and 'email'
		        scope: 'email'
		      });
		      attachSignin(document.getElementById('google_login'));
		    });
		};
		startApp();
		
		function attachSignin(element){
		    console.log(element.id);
		    auth2.attachClickHandler(element, {},
		        function(googleUser) {
		          	var profile = googleUser.getBasicProfile();
			        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
			        console.log('Full Name: ' + profile.getName());
			        console.log('Given Name: ' + profile.getGivenName());
			        console.log('Family Name: ' + profile.getFamilyName());
			        console.log("Image URL: " + profile.getImageUrl());
			        console.log("Email: " + profile.getEmail());

			        // The ID token you need to pass to your backend:
			        var id_token = googleUser.getAuthResponse().id_token;
			        console.log("ID Token: " + id_token);
			        
					var data = {email:profile.getEmail(), name:profile.getName(), token:id_token, act:'Google'};
			        id = leerCookie("id");
			      	if(id == "" || id == null){
			      		$('.over').css('display','block');
			      		makeAjax(url+'api/user_get/'+data.email,'GET',null,'json',getUserExists,true,data); 
			    	}
		        }, function(error) {
		          	alert(JSON.stringify(error, undefined, 2));
		        });
		}
	//Google

	function makeTest(d){
		console.log(d);
		var item = [], i = 0;
		var l = d.questions.length;
		console.log(l);
		var p = 0;
		var f = 0;
		var id = leerCookie("id");		

			item[i++]='<div id="test" class="plan col-12 mx-2 my-2 justify-content-center" style="background-color:white; height:396px;">';
			item[i++]='	<div class="plan-header text-center pt-5">';
			item[i++]='		<h2>'+d.title+'</h2>';
			item[i++]='		<h3 class="plan-title mbr-fonts-style display-5">Individual</h3>';
			item[i++]='		<div class="plan-price">';		
			item[i++]='			<span class="price-figure mbr-fonts-style display-1">'+d.amount+'</span>';
			item[i++]='			<small class="price-term mbr-fonts-style display-7">'+d.currency+'</small>'; 	
			item[i++]='		</div>';
			item[i++]='	</div>';
			item[i++]='	<div class="plan-body" style="height:208px;">';	
			item[i++]='		<div class="plan-list align-center">';	
			item[i++]='			<ul class="list-group list-group-flush mbr-fonts-style display-7">';	
			item[i++]='				<li class="list-group-item">Es el costo de esta certificación</li>';
			item[i++]='			</ul>';	
			item[i++]='		</div>';						
			item[i++]='		<form id="form_paypal" name="form_paypal" method="">';
			item[i++]='			<input id="id" type="hidden" value="'+d.id+'">';
			item[i++]='			<input id="email" type="hidden" value="'+d.email+'">';
			item[i++]='			<input id="amount" type="hidden" value="'+d.amount+'">';
			item[i++]='			<input id="currency" type="hidden" value="'+d.currency+'">';
			item[i++]='			<div class="mbr-section-btn text-center py-4 pb-5">';
			if(id != '' && id != null)
				item[i++]='				<button type="button"  class="btn pay_button btn-primary display-4">Pagar</button>';
			else
				item[i++]='				<a type="button" href="#modal_login" data-toggle="modal" class="btn btn-primary display-4">Pagar</a>';
			item[i++]='			</div>';
			item[i++]='		</form>';		
			item[i++]='	</div>';
			item[i++]='</div>';	
			item[i++]='<div id="temario" class="plan col-12 mx-2 my-2 justify-content-center" style="background-color:white; height:396px;">';
			item[i++]='	<div class="plan-header text-center pt-5">';
			item[i++]='		<h2>Temario</h2>';
			item[i++]='	</div>';
			item[i++]='	<div class="plan-body" style="overflow:scroll; height:308px;">  ';	
			item[i++]='		<div class="plan-list align-center">';	
			item[i++]='			<ul class="list-group list-group-flush mbr-fonts-style display-7" style="margin-bottom:6%;">';					
			item[i++]='			<li class="list-group-item"><p class="text-justify">'+d.description+'</p></li>';	
			item[i++]='			</ul>';	
			item[i++]='		</div>';
			item[i++]='	</div>';
			item[i++]='</div>';			
			if(d.specialist != null){
				item[i++]='<div id="specialist" class="plan col-12 mx-2 my-2 justify-content-center" style="background-color:white; height:396px;">';
				item[i++]='	<div class="plan-header text-center pt-5">';
				item[i++]='		<h2>Especialista</h2>';
				item[i++]='		<h3 class="plan-title mbr-fonts-style display-5">'+d.specialist.name+'</h3>';
				item[i++]='	</div>';
				item[i++]='	<div class="plan-body" style="overflow:scroll; height:276px;">  ';	
				item[i++]='		<div class="plan-list align-center">';	
				item[i++]='			<ul class="list-group list-group-flush mbr-fonts-style display-7" style="margin-bottom:6%;">';				
				item[i++]='				<li class="list-group-item"><p class="text-justify">'+d.specialist.description+'</p></li>';					
				item[i++]='			</ul>';	
				item[i++]='		</div>';
				item[i++]='	</div>';
			}			
			item[i++]='</div>';
			console.log(item);
			return item.join("");
		}				

	function getTest(d){
		//console.log(d);
		if(d.e == 0){			
			var data = d.data;
			var item2;
			//console.log(data);	
			item = makeTest(data);			
			$('#quiz').html(item);
		}
	}

	function getParameterByName(name) {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	    results = regex.exec(location.search);
	    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

	function get_test(){
		var id = getParameterByName('id');

		makeAjax(url+'api/details_test/'+id,'GET',null,'json',getTest,true);
	}	
	get_test();

	function responsePaypal(d,x){

		pay = false;
		crearCookie("currency", x);
		$('.over').css('display','none');
		location.href=d;
		//makeAjax(url+'api/paypal','POST', formData, 'json', responsePaypal, true, data);
	}

	var pay = false;
	$('body').delegate('.pay_button','click', function(){
		if(pay)
			return false;
		pay = true;
		
			console.log('paypal');

			id = document.form_paypal.id.value;
			amount = document.form_paypal.amount.value;
			email = document.form_paypal.email.value;
			currency = document.form_paypal.currency.value;

			var data = {amount:amount, id:id};
			//id_order = document.formPaypal.id_order.value;

			$('.pay_button').prop('disabled', 'disabled');
			$('.pay_button').text('Cargando...');
			$('.over').css('display','block');

			makeAjax(url+'api/paypal','GET', data, 'json', responsePaypal, true,currency);

			return false;
	});

	$('body').delegate('.btn_nuevo_intento','click', function(){
		id = document.form_nuevo_intento.id.value;
		location.href='pago.html?id='+id;
	});

	function logueado(){
		var id = leerCookie("id");
		console.log(id);
		if(id != '' && id != null){
			$('.registrate').css('display','none');	
			$('.section_register').css('display','none');
		}
	}
	logueado();


});
