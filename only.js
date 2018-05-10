<script type="text/javascript">
var url = window.location.href, currentUrl = window.location.origin, tumblr = url.match(/tumblr.com/), newUrl = ''; 
var yt = url.match(/(?:|\s)youtube.com/ig); 
var fb = url.match(/(?:|\s)facebook.com/ig); 
/* functions */	
function write( line, i = null ) {
	/* write into a HTML */
	if(line.length > 445){return html};
	if(i!=null){
		html = ( line ? line : '-' ) + html;
	}else{
		html += ( line ? line : '' ) + '<br/>';
	}
};
var createElem = function(element){
	return document.createElement(element);
}
function newElement(element,attribute,inner){
	if(typeof(element) === "undefined"){return false;}
	if(typeof(inner)   === "undefined"){inner = "";}
	var el = document.createElement(element);
	if(typeof(attribute) === 'object'){
		for(var key in attribute){
			el.setAttribute(key,attribute[key]);
		}
	}
	if(!Array.isArray(inner)){inner = [inner];}
	for(var k = 0;k < inner.length;k++){
		if(inner[k].tagName){
			el.appendChild(inner[k]);
		}else{
			el.appendChild(document.createTextNode(inner[k]));
		}
	}
	return el;
}
var yt_ocultar = function(){ 
	var $parm,
	$yt_icon = document.getElementsByTagName('yt-icon'), id_container = document.querySelector("#content.ytd-app");
	if($yt_icon.length > 0){for (i = 0; i < $yt_icon.length; i++) {$parm = 'S';void($yt_icon[i].style.cssText = 'display:none;'); }
	}else{ $parm = 'N';} 
	return $parm; 
}
var elegirTumblr = function(){
	var d = new Date(), c_date  = d.getDate(), c_day   = d.getDay(), c_month = d.getMonth(), c_year  = d.getFullYear();
	var rand_year = Math.floor( Math.random() * (c_year - 2010 + 1)) + 2010;
	var currentUrl = window.location.origin, ntumblr='',
	/* seraparar url y solo obtener el subdominio */
	subdominio = currentUrl.match(/[^(http:\/\/|https:\/\/|http:\/\/www)][^.]*/);
	if(!subdominio) return;
	c_month = c_month + 1;
	/* random date & month */
	c_date  = Math.floor(Math.random() * 31) + 1; 
	c_month = Math.floor(Math.random() * 12) + 1;
	var toTumblr = ["random","archive", "filter-by/audio", 
					/*"http://tumblr.com/liked/by/" + subdominio, */
					"day/"+rand_year+"/"+c_month +"/"+c_date+""];  
	var setTumblr = toTumblr[Math.floor(Math.random() * toTumblr.length)];	
	if( setTumblr.match(/http:\/\/tumblr.com/) != null ){
		ntumblr = setTumblr;
	}else if(setTumblr.match(/filter\.*/) != null ){
		ntumblr = currentUrl + '/archive/' + setTumblr;
	}else{
		ntumblr = currentUrl + '/' + setTumblr;
	}
	return ntumblr;
} 
function fbHidden(doit){
	/* change icon if you are on facebook */ 
	console.log('╔════⬇️ FACEBOOK ⬇️════╗');
	let url_ = 'https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d';
	let link = document.querySelector("link[rel*='icon']") || newElement('link',{type:"image/x-icon",rel:"shortcut icon",href:url_}); 
	link.href=url_;
	document.getElementsByTagName('head')[0].appendChild(link); 
	let todark = document.getElementById("mainContainer");
	let nofb = doit, $passed = true;
	if(nofb){
		for (i = 0; i < x.length; i++){    x[i].style.backgroundColor = "black";    } 
		for (i = 0; i < x5vb.length; i++){ x5vb[i].style.backgroundColor = "black"; } 
		for (i = 0; i < y.length; i++){    void(y[i].style.cssText = cssString);    } 
		for (i = 0; i < chat.length; i++){ void(chat[i].style.cssText = cssString); }
		if((id_cont !=null) ){id_cont.style.backgroundColor = "black";}
		if((id_fb   !=null) ){id_fb.style.cssText = 'background-color: #34436182;height:100%';}
		if((todark  !=null) ){todark.style.cssText = "opacity:0.1";}		
		if (aborrar){ removeClass("_5r93"); }else{ $passed = removeClass();}
		write(profile,1);
	}else{
		$passed = removeClass();
	}
	console.log('╚═════ FIN ═════╝');
	return $passed;
}
function removeClass(classToRemove,otherCSS){
	var elems, setCss, claseElemento, many,elem,classes,newClass,textoCss,howMany=0;
	var html1 = '', nArray = [], x=0,nElemts=0,txt='';
	var toReplace = otherCSS;
	if(!classToRemove){
		var answer = window.prompt('hey! put css class name: so im going to code');
		claseElemento = answer;
		if(answer!="" || answer != null){many = answer.split(' ');if(many.length > 1){var contador = many.length}}
	}else{
		many = classToRemove.split(' ');if(many.length > 1){var contador = many.length}
		claseElemento = classToRemove;
		elems = document.getElementsByClassName(classToRemove);
	}
	if(typeof(contador) === "undefined"){ /* only one class*/
		setCss  = (typeof(answer) != "undefined") ? answer:claseElemento;
		elems   = (typeof(answer) != "undefined") ? document.getElementsByClassName(setCss):document.getElementsByClassName(classToRemove);
		nElemts = elems.length; txt = (nElemts > 1) ? 'elements':'element';
		if(answer){claseElemento = answer; console.log(setCss + '>> eleme:' + elems.length);console.log('procesing...');}
		else{console.log('process...')}
		for (var i=elems.length-1;i>=0;i--){
			howMany    = 1;
			elem       = elems[i];
			classes    = elem.className.split(" ");
			newClass   = classes.splice(classes.indexOf(setCss),1).join(" ");
			nArray[x]  = elem;
			textoCss   = classes.join(' ');
			elem.className = (toReplace==null) ? textoCss : textoCss += toReplace;
			console.log(elem, '=elem ');
			html1 += 'element:'+JSON.stringify(classes)+' newClass:'+newClass+ ' | ';
			x+=1;
		}
		console.log('done, only 1 class removed that had \('+ nElemts +'\) ' + txt);
	}else{
		/* more that one classes*/
		console.log('Total of class: (' + contador + ')  ');
		howMany = contador;
		while( contador > 0){
			setCss = many[contador-1];
			console.log('css found: ' + setCss);
			elems = document.getElementsByClassName(many[contador-1]);
			console.log('eleme.: ',elems.length,' from array=>',many[contador-1]);
			if (!elems) return;
			for (var i=elems.length-1;i>=0;i--){
				elem       = elems[i];
				classes    = elem.className.split(" ");
				newClass   = classes.splice(classes.indexOf(many[contador-1]),1).join(" ");
				html1 += JSON.stringify(classes);
				textoCss = classes.join(' ');
				x+=1;
				nArray[x]  = elem;
				elem.className = (toReplace==null) ? textoCss : textoCss += toReplace;
				html1 += ' element:' + JSON.stringify(nArray) + ' of '+contador + ' ';
				console.log('counter:',contador,' elemen: ', elem); 
			}			
			contador -= 1;
		}
		console.log('more than 1 class');
	}
	write(html1);
	return {
		answer : answer, returnClass : claseElemento, resp: html1, arrays: many,
		htmlCollection: nArray, total : howMany
	};
} 
var setnewTitle = function (texto, a = null){
	/* reset title with no special character nor emojis */
	var cTitle  = window.document.title;
	var ntexto = cTitle.replace(/[\u1000-\uFFFF]+/ig, "").trim();
    window.document.title = ntexto;
	/* set new title with special character */
	var w = window.document;
	var current_title = w.title;
	switch (a){
		case null:
			if(texto != null){ w.title = texto;}else{
				var answer = window.prompt('Put a new title for window');
				if(answer){
					w.title = answer;				
				}else{
					while (answer == null || answer == ""){
						answer = window.prompt('Cmon Put a valid title for window ');
					}
					w.title = answer;
				}
			}
			break;
		case "1":
			if(texto == null){ w.title = emojis[nuRandom + 1] + ' ' + current_title + ' ' + getEmojis; }else{
				w.title = emojis[nuRandom + 1] + ' ' + texto + ' ' + getEmojis;
			}
			break;
		default: 
			alert('that parm isnt set already');
	}
}
function hideAds($element_arr,$p){
	var divs,$counter = 0,$arr = new Array(),yes = true,no = false,$boll = no,$txt='';
	var accepted = ($p) ? yes:no;
	if($element_arr){
		divs = $element_arr.join(",");
		}else{	
		divs = "[id*='to'],[id*='root'],[id*='ads'],[class*='ads'],[id*='ad_'],[class*='ad_'],[id*='azk'],[class*='azk']";
	}	
	var arr = [].slice.call(document.querySelectorAll(divs));
	var tagArrayAllowed = ["div","a","p","ins","iframe"];
	/* select options 
	   $p = null ( remove all inner content from tags allowed) then remove the general content 
	        '1'  ( option to remove only content if id/class begins with 'ads,ad_' )
	        def  ( remove all inner content from tags allowed) but not remove the general content 
	*/
	switch ($p){
		case null:
			for(var i=arr.length-1;i>=0;i--){
				var ele = arr[i];
				let for_h = [].slice.call(ele.querySelectorAll(divs));
				let x = for_h.length-1;		
				while( x > 0  ){ 
					if( tagArrayAllowed.indexOf(for_h[x].localName,0) >= 0){
						$counter += 1;
						$arr[$counter] = for_h[x];
						arr[x].remove();
						$boll = yes;
					}		
					x-=1;
				}
				ele.remove();
			}
			$txt = "option null";
			break;
		case "1":
			let $divs = "[id*='ads'],[class*='ads'],[id*='ad_'],[class*='ad_']";
			let $arr1 = [].slice.call(document.querySelectorAll($divs));
			let x = $arr1.length-1;
			$txt = 'total of element with ads:' + $arr1.length;
			while( x > 0 ){
				if(tagArrayAllowed.indexOf($arr1[x].localName,0) >= 0){
					$counter += 1;
					$arr[$counter] = $arr1[x];
					$arr1[x].remove();
					$boll = yes;
				}
				x-=1;
			}
			$txt = "option 1";
			break;
		default: 
			for(var i=arr.length-1;i>=0;i--){
				var ele = arr[i];
				let for_h = [].slice.call(ele.querySelectorAll(divs));
				let x = for_h.length-1;		
				if(for_h.length == 0){ele.remove();$boll = yes;$counter += 1;}else{
					while( x > 0  ){ 
					if( tagArrayAllowed.indexOf(for_h[x].localName,0) >= 0){
						$counter += 1;
						$arr[$counter] = for_h[x];
						arr[x].remove();
						$boll = yes;
					}		
					x-=1;
					}
				}
			}
			$txt = "option default";
	}
	/*all variables to return*/
	return { 
		element_find: divs,done: $boll,count: $counter,message: $txt,
		_arrays: {elements:arr,tags:tagArrayAllowed, values:$arr },
		_params: {element_arr:$element_arr, p:$p }
	};	
}
/* END FUNCTION*/
</script>