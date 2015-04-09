/*FeedEk jQuery RSS/ATOM Feed Plugin v2.0
* http://jquery-plugins.net/FeedEk/FeedEk.html  
* https://github.com/enginkizil/FeedEk
* Author : Engin KIZIL http://www.enginkizil.com */

(function($){$.fn.FeedEk=function(opt){
	var def=$.extend({
		FeedUrl:"http://rss.cnn.com/rss/edition.rss",MaxCount:5,
		ShowDesc:true,
		ShowPubDate:true,
		CharacterLimit:0,
		TitleLinkTarget:"_blank",
		DateFormat:"",
		DateFormatLang:"en"},
		opt);
	var id=$(this).attr("id"),
	i,
	s="",
	dt;
	$("#"+id).empty().append('<img src="img/loader.gif" />');
	$.ajax({url:"http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num="+def.MaxCount+"&output=json&q="+encodeURIComponent(def.FeedUrl)+"&hl=en&callback=?",
		dataType:"json",
		success:function(data){
			$("#"+id).empty();
			$.each(data.responseData.feed.entries,
				function(e,item){
										// Aqui Ponemos el html para el titulo
					s+='

    <div class="thumbnail col-sm-6 col-md-4 col-lg-3">
      <div class="alert alert-success" role="alert"><h3 style="color:black;"><a href="

					'+item.link+'" target="'+def.TitleLinkTarget+'" >'+item.title+"</a></h3></div>";

					if(def.ShowPubDate){dt=new Date(item.publishedDate);if($.trim(def.DateFormat).length>0){
						try{moment.lang(def.DateFormatLang);
							//Aqui va el html para La Fecha
							s+='<div class="itemDate">'+moment(dt).format(def.DateFormat)+"</div>"}
							catch(e){s+='<div class="itemDate">'+dt.toLocaleDateString()+"</div>"}}
							else{s+='<div class="itemDate">'+dt.toLocaleDateString()+"</div>"}}

								if(def.ShowDesc){if(def.DescCharacterLimit>0&&item.content.length>def.DescCharacterLimit){
									//Aqui va el html para el contenido

									s+='

									 <div class="row">

      <img class="col-xs-6 col-lg-12" src="img/foto1.png" style="max-height:200px" alt="...">
      <div class="col-xs-6 col-lg-12">


        
        <p style="color:black;">

									'+item.content.substr(0,def.DescCharacterLimit)+"

									</p>

      </div><!-- Caption -->
    </div><!-- Row -->
        <div class='row'>
      <p class='col-xs-12'>
        <a href='#'' class='btn btn-primary' role='button'>Fecha: 12/03/2015</a> 
          <a href='#' class='pull-right btn btn-default' role='button'>Leer mas...</a>
        </p>
    </div><!-- Row -->
  </div><!-- Thumbnail -->

									"}


									else{s+='

										 <div class="row">

      <img class="col-xs-6 col-lg-12" src="img/foto1.png" style="max-height:200px" alt="...">
      <div class="col-xs-6 col-lg-12">


        
        <p style="color:black;">

									'+item.content+"

									</p>

      </div><!-- Caption -->
    </div><!-- Row -->
        <div class='row'>
      <p class='col-xs-12'>
        <a href='#'' class='btn btn-primary' role='button'>Fecha: 12/03/2015</a> 
          <a href='#' class='pull-right btn btn-default' role='button'>Leer mas...</a>
        </p>
    </div><!-- Row -->
  </div><!-- Thumbnail -->

									"}}});


			$("#"+id).append('<div>'+s+"</div>")}})}})(jQuery);





