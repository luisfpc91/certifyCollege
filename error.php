<!DOCTYPE html>
<html>
	<head>
	  <!-- Site made with Mobirise Website Builder v4.3.4, https://mobirise.com -->
	  <meta charset="UTF-8">
	  <meta http-equiv="X-UA-Compatible" content="IE=edge">
	  <meta name="generator" content="Mobirise v4.3.4, mobirise.com">
	  <meta name="viewport" content="width=device-width, initial-scale=1">
	  <link rel="shortcut icon" href="assets/images/boceto-5-300x300-128x128.png" type="image/x-icon">
	  <meta name="description" content="Web Site Builder Description">
	  <title>¡Error!</title>
	  <link rel="stylesheet" href="assets/web/assets/mobirise-icons/mobirise-icons.css">
      <link rel="stylesheet" href="assets/tether/tether.min.css">
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-grid.min.css">
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-reboot.min.css">
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-social.css">
      <link rel="stylesheet" href="assets/socicon/css/styles.css">
      <link rel="stylesheet" href="assets/dropdown/css/style.css">
      <link rel="stylesheet" href="assets/theme/css/style.css">
      <link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css"> 
      <link rel="stylesheet" href="assets/mystile.css" />
        <script type="text/javascript" src="//platform.linkedin.com/in.js">
            api_key: 77449ojdxf0c8y
            //onLoad: onLinkedInLoad
            authorize: true
            lang: es_ES
        </script>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
        <script src="https://apis.google.com/js/api:client.js"></script>
	</head>
	<body>
	  <div class="over">
	    <div class="in">
	        <img src="assets/img/loading.svg"></img>
	    </div>
	  </div>   
	
	<!-- Google Analytics -->
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-108400267-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	
	  gtag('config', 'UA-108400267-1');
	</script>
	<?php 
	  $id = $_GET['id'];
	  $status = $_GET['status'];
	?>
	<!-- /Google Analytics -->
	
	<section class="menu cid-qunBlCOuGu" once="menu" id="menu1-0" data-rv-view="34">
	    <nav class="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
	        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	            <div class="hamburger">
	                <span></span>
	                <span></span>
	                <span></span>
	                <span></span>
	            </div>
	        </button>
	        <div class="menu-logo">
	            <div class="navbar-brand">                
	                <span class="navbar-caption-wrap"><a class="navbar-caption text-primary display-4" href="#top">
	                        Certify College</a></span>
	            </div>
	        </div>
	        <div class="collapse navbar-collapse" id="navbarSupportedContent">
	            <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true">
	                <li class="nav-item">
	                    <a class="nav-link link text-primary display-7" href="index.html">
	                        <span class="mbri-home mbr-iconfont mbr-iconfont-btn"></span>
	                        &nbsp;
	                    </a>
	                </li>
	                <li class="nav-item dropdown open">
	                    <a class="nav-link link text-primary dropdown-toggle display-7" data-toggle="dropdown-submenu" aria-expanded="true">
	                        <span class="mbri-menu mbr-iconfont mbr-iconfont-btn"></span>&nbsp;Categorías&nbsp;
	                    </a>
	                    <div class="dropdown-menu" id="list_categorie" name="list_categorie">
	                        
	                    </div>                    
	                </li>
	                <!--<li class="nav-item dropdown">
	                    <a class="nav-link link text-primary display-7" >
	                        <span class="mbri-search mbr-iconfont mbr-iconfont-btn"></span>Navega
	                    </a>
	                </li> -->               
	                <!--<li class="nav-item">
	                    <a class="nav-link link text-primary display-7" href="eng.html">
	                        Eng
	                    </a>
	                </li>-->
	                <li class="nav-item">
	                    <a class="nav-link link text-primary display-7" href="index.html#pricing-tables1-5">
	                        Precios
	                    </a>
	                </li>
	                <li>
	                    <div class="navbar-buttons mbr-section-btn"> 
	                        <a class="registrate btn btn-sm btn-primary display-4" href="index.html#header15-2">
	                           Regístrate
	                        </a>
	                    </div>    
	                </li>               
	            </ul>
	            <div class="navbar-buttons mbr-section-btn"> 
	                 <li class="sesion nav-item">
	                    
	                </li>
	            </div>
	        </div>
	    </nav>
	</section>
	
	<section class="engine"><a href="https://mobirise.co/n">bootstrap modal popup</a></section>
	
	<section class="header11 cid-qBzJGzEdPo mbr-fullscreen" id="header11-19" data-rv-view="710">
	
	    <div class="mbr-overlay color_pantallas" >
	    </div>
	    
	    <div class="container align-left">
	        <div class="media-container-column mbr-white col-md-12">
	            <h3 class=" mbr-section-subtitle py-3 mbr-fonts-style display-5">
	              ¡Error!
	            </h3>
	            <h1 class=" mbr-section-title py-3 mbr-fonts-style display-1">
	              El cobro fue fallido.
	            </h1>
	            <p class=" mbr-text py-3 mbr-fonts-style display-5">
	              Tuvimos problemas para procesar tu pago, Status: 
	              <span style="color:red;">
	                <?php echo $status ?>                  
	              </span>
	              </span>, puedes intentarlo de nuevo.     
	            </p>
	            <div class="mbr-section-btn py-4">
	              <form id="form_nuevo_intento" name="form_nuevo_intento">
	                <input id="id" type="hidden" value="<?php echo $id ?>" />  
	                <button type="button" class="btn_nuevo_intento btn btn-md btn-primary display-4" >
	                  Volver a intentar
	                </button>
	              </form>  
	            </div>
	        </div>
	    </div>
	
	    <div class="mbr-arrow hidden-sm-down" aria-hidden="true">
	        <a href="#next">
	            <i class="mbri-down mbr-iconfont"></i>
	        </a>
	    </div>
	</section>
	<div id="modal_login" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    Iniciar Sesión
                </div>
                <form id="form_login" name="form_login" method="POST">
                    <div class="modal-body">
                        <div class="form-group text-center">
                            <a class="facebook_login btn btn-facebook btn-social" href="javascript:void(0)" >
                                <i class="socicon-facebook" style="margin-top:5%;" ></i>
                                Facebook
                            </a>
                        </div>
                        <div  class="form-group text-center">
                            <a  id="google_login" class="btn btn-google btn-social" href="javascript:void(0)" >
                                <i class="socicon-google" style="margin-top:5%;" ></i>
                                Google
                            </a>
                        </div>
                        <div class="form-group text-center">
                            <a class="linked_login btn btn-linkedin btn-social" href="javascript:void(0)" >
                                <i class="socicon-linkedin" style="margin-top:5%;" ></i>
                                linkedIn
                            </a>
                        </div>
                        <div class="form-group">
                            <label for="email">E-mail:</label>
                            <input id="email" name="email" placeholder="E-mail" class="form-control" type="email" data-form-field="email" required="" />
                        </div>
                        <div class="form-group">
                            <label for="pass">Contraseña:</label>
                            <input id="pass" name="pass" placeholder="Contraseña" class="form-control" type="password" data-form-field="pass" required="" />
                        </div>                    
                    </div>
                    <div class="modal-footer">
                        <div class="form-group">
                            <button class="btn btn-secondary" id="btn-cancel" type="button" data-dismiss="modal">Cerrar</button>
                            <button id="submit_form_login" name="submit_form_login" class="btn btn-primary" type="submit" >Entrar</button>
                        </div>
                    </div>
                </form>    
            </div>
        </div>
    </div>
	
	  <script src="assets/web/assets/jquery/jquery.min.js"></script>
      <script src="assets/popper/popper.min.js"></script>
      <script src="assets/tether/tether.min.js"></script>
      <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      <script src="assets/smooth-scroll/smooth-scroll.js"></script>
      <script src="assets/jquery-mb-ytplayer/jquery.mb.ytplayer.min.js"></script>
      <script src="assets/jquery-mb-vimeo_player/jquery.mb.vimeo_player.js"></script>
      <script src="assets/touch-swipe/jquery.touch-swipe.min.js"></script>
      <script src="assets/vimeo_player/vimeo_player.js"></script>
      <script src="assets/jarallax/jarallax.min.js"></script>
      <script src="assets/social-likes/social-likes.js"></script>
      <script src="assets/dropdown/js/script.min.js"></script>
      <script src="assets/theme/js/script.js"></script>
      <!--<script src="assets/formoid/formoid.min.js"></script>-->
      <script src="scripts/app.js"></script>
	</body>
</html>