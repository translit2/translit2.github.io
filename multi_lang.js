//utf-8  XingSoft*2018  skype: xing.polar 
//framework MULTI-LANG 2018 для перевода интерфейса в браузере,
//независимо от IP, настроек сервера, языка браузера итд.
//словари-списки во внешних файлах, +кнопка ночной режим и крупнее

if(window['xing_lib_loaded']==undefined)alert('не загружен скрипт xing_lib.js');
if(window['ClassMultiLang']!=undefined)alert('name err');
//--------------мульти-язык фреймворк-----
ClassMultiLang={
lang_tek:'en',
//сохр начальные значения полей чтобы стр не перегружать
load_texts:function(){ var k=0,i,m;
 window.document.title=mOporLang[k++];
 m=find_tag('.multiLangText',-1);
  for(i=0;i<len(m);i++)if(m[i].innerHTML!=U)m[i].innerHTML=mOporLang[k++];
 m=find_tag('.multiLangValue',-1);
  for(i=0;i<len(m);i++)if(m[i].value!=U)m[i].value=mOporLang[k++];

 if(multi_lang.label>0){  m=find_tag('label',-1);
  for(i=0;i<len(m);i++)if(m[i].innerHTML!=U)m[i].innerHTML=mOporLang[k++];
 }

 if(multi_lang.help_text>0){  m=find_tag('span.helptext',-1);
  for(i=0;i<len(m);i++)if(m[i].innerHTML!=U)m[i].innerHTML=mOporLang[k++];
 }

 if(multi_lang.flag>0){
  m=find_tag('input',-1);
  for(i=0;i<len(m);i++){ 
   if(m[i].value!=U)      m[i].value=mOporLang[k++];
   if(m[i].title!=U)      m[i].title=mOporLang[k++];
   if(m[i].placeholder!=U)m[i].placeholder=mOporLang[k++];
  }
 }
 return k; //vsego polei
}
,
save_texts:function(){ var k=0,i,m;
 mOporLang=[];
 mOporLang.push(''+window.document.title);
 m=find_tag('.multiLangText',-1);
  for(i=0;i<len(m);i++)if(m[i].innerHTML!=U){mOporLang.push(''+m[i].innerHTML);k++;}
 m=find_tag('.multiLangValue',-1);
  for(i=0;i<len(m);i++)if(m[i].value!=U){mOporLang.push(''+m[i].value);k++;}

 if(multi_lang.label>0){  m=find_tag('label',-1);
  for(i=0;i<len(m);i++)if(m[i].innerHTML!=U){mOporLang.push(''+m[i].innerHTML);k++;}
 }

 if(multi_lang.help_text>0){  m=find_tag('span.helptext',-1);
  for(i=0;i<len(m);i++)if(m[i].innerHTML!=U){mOporLang.push(''+m[i].innerHTML);k++;}
 }

 if(multi_lang.flag>0){  m=find_tag('input',-1);
  for(i=0;i<len(m);i++){ 
   if(m[i].value!=U)      {mOporLang.push(m[i].value);k++;}
   if(m[i].title!=U)      {mOporLang.push(m[i].title);k++;}
   if(m[i].placeholder!=U){mOporLang.push(m[i].placeholder);k++;}
  }
 }
 return k; //vsego polei
}
,
translate:function(){ var b;
 ClassMultiLang.load_texts(); //вспомнить опорный язык- англ
 ClassMultiLang.translate2();
//разблокировать кнопку перекл.
 b=find_tag('#id_but_multi_lang');
 if(b!='')b.disabled=false;
}
,
translate2:function(){ var nl,op,d,k=0,i,m,v,t;
 nl=ClassMultiLang.tek_lang;
 op=multi_lang.lang_oporn;
// if(nl==op)return; //нечего не надо

 d=window['dict_'+op+'_'+nl];
 if(d==''){log('нет словаря!');return -1;}
 d=split_dict(d); //строку в словарь {'слово':'перевод'}

 v=window.document.title;t=d[''+v];if(t!=U){window.document.title=t;k++;}
 m=find_tag('.multiLangText',-1);    
  for(i=0;i<len(m);i++){v=m[i].innerHTML;t=d[''+v];if(t!=U){m[i].innerHTML=t;k++;}}

 m=find_tag('.multiLangValue',-1);
  for(i=0;i<len(m);i++){v=m[i].value;t=d[''+v];if(t!=U){m[i].value=t;k++;}}

 if(multi_lang.label>0){ m=find_tag('label',-1);
  for(i=0;i<len(m);i++){v=m[i].innerHTML;t=d[''+v];if(t!=U){m[i].innerHTML=t;k++;}}
 }

 if(multi_lang.help_text>0){ m=find_tag('span.helptext',-1);
  for(i=0;i<len(m);i++){v=m[i].innerHTML;t=d[''+v];if(t!=U){m[i].innerHTML=t;k++;}}
 }

 if(multi_lang.flag>0){  m=find_tag('input',-1);  //[type="text"]
  for(i=0;i<len(m);i++){ 
   v=m[i].value;      if(v!=U){t=d[''+v];if(t!=U){m[i].value=t;k++;}}
   v=m[i].title;      if(v!=U){t=d[''+v];if(t!=U){m[i].title=t;k++;}}
   v=m[i].placeholder;if(v!=U){t=d[''+v];if(t!=U){m[i].placeholder=t;k++;}}
  }
 }
 return k; //vsego polei
}
,
//грузим асинхр словарь + вызов перевода после 
translate_all:function(){ var nl,op,ph,s,d;
 nl=ClassMultiLang.tek_lang;
 op=multi_lang.lang_oporn;
 ph=multi_lang.path_dict;
 s='dict_'+op+'_'+nl;
 //if(nl==op)return; //нечего не надо
 d=window[s];
 if(d!=''){ClassMultiLang.translate();return;}
 run_js(ph+s+'.js',ClassMultiLang.translate);
}
,
//добавим кнопку если нету
add_knopka:function(){ var b,i,s,m;
 b=find_tag('#id_but_multi_lang');
 if(b==''){
  b=add_tag2(D.body,'button');
  b.id='id_but_multi_lang';
  b.style="position:fixed;top:5px;right:5px";
 }
  b.onclick=function(){setTimeout(function(){ClassMultiLang.change_lang();},0);}

 s='';m=multi_lang.lang_all.split(',');
 for(i=0;i<len(m);i++)s=s+'<span>'+UCase(m[i])+'</span>|';
 b.innerHTML=r_short(s);
}
,
view_lang:function(){ var i,f,c,o,m;
  m=find_tag('#id_but_multi_lang span',-1);
  for(i=0;i<len(m);i++){  
   o=m[i];f=16;c='black';
   if(LCase(o.innerHTML)==ClassMultiLang.tek_lang){f=20;c='red';}
   o.style.fontSize=f+'pt';o.style.color=c;
  }
}
,
change_lang:function(){var b,i,m,tl;
 b=find_tag('#id_but_multi_lang');
 if(b!='')b.disabled=true; //заблокировать кнопку
 tl=''+ClassMultiLang.tek_lang;
 m=multi_lang.lang_all.split(',');
 for(i=0;i<len(m);i++)if(m[i]==tl)break;
 i=i+1;if(i>=len(m))i=0; // индекс по кругу
 save_LocSt('MultiLang_Lang',m[i]); //запомним выбор юзера
 ClassMultiLang.tek_lang=m[i];
 ClassMultiLang.view_lang();     //кнопку покажем
 ClassMultiLang.translate_all();  //перевод по словарю
}
,
tek_color:'',
tek_bg:'',
tek_dark:0,

start:function(){var tl;
 ClassMultiLang.tek_color=D.body.style.color || '#000000';
 ClassMultiLang.tek_bg=D.body.style.backgroundColor || '#FFFFFF';
 ClassMultiLang.dark_htm();

 tl=load_LocSt('MultiLang_Lang');
 if(tl=='')tl=get_lang(); 
 ClassMultiLang.tek_lang=tl;
 ClassMultiLang.save_texts();  //англ
 ClassMultiLang.add_knopka();
 ClassMultiLang.view_lang();
 ClassMultiLang.translate_all();
}
,
dark_htm:function(){var b;
 b=find_tag('#id_dark_kn');
 if(b==''){
  b=add_tag2(D.body,'button');
  b.id='id_dark_kn';
  b.style="position:fixed;top:5px;right:140px";
  b.innerHTML="Ночной Режим";
 }
 b.onclick=ClassMultiLang.change_dark;
  //if((new Date).getHours()>18)ClassMultiLang.change_dark();
 b=find_tag('#id_fsize_kn');
 if(b==''){
  b=add_tag2(D.body,'button');
  b.id='id_fsize_kn';
  b.style="position:fixed;top:5px;right:260px";
  b.innerHTML="Крупнее";
 }
 b.onclick=ClassMultiLang.change_fsize;

}
,
change_dark:function(){ var o=D.body;
 set_color(o,'#FFFFFF'); set_bg(o,'#111111');
 for(o in D.body){
  try{if(o.style!=U){set_color(o,'#FFFFFF'); set_bg(o,'#111111');}}
  catch(e){}
 } 
}
,
change_fsize:function(){ var o=D.all,k,le,i;
 le=len(o);
 for(i=0;i<le;i++){
  if(o[i].style!=U)if(o[i].style.fontSize!=U){
   k=o[i].style.fontSize || '14pt'
   k=parseInt(k)+2; 
   o[i].style.fontSize=k+'pt';
  }
 } 
}

}//end class

//--start--
ClassMultiLang.start();