function tr2h(stroka){
var trON=0;
 var s1 = '~ABVGDEXZIJKLMNOPRSTUFHC8W15Y60Q2abvgdexzijklmnoprstufhc4w75y63q9';
 var s =''; var n = 0; var ss = ''; 
try{
  for(var i=0; i<stroka.length;i++){
   s=stroka.charAt(i); n=s1.indexOf(s);
   if (s=='`'){  
    if(stroka.charAt(i+1)=='`'){i++;} 
    else{trON=(trON+1)&1;s="";} //perekl
   } 
    if(trON==1 && n>=0){ //n=-1 no find=old simv
     if(n<1)s='&#1105;'; //yo
     if(n>0)s='&#'+(1039+n)+';'; 
    }
    ss=ss+s; 
  }//next i
}
catch(e){ss='error='+e;}
 return ss;
}

function hex2(vDec){
 var hx='0123456789ABCDEF';
 var lo=vDec%16;
 var hi=(vDec-lo)/16;
 return hx.charAt(hi)+hx.charAt(lo);
}

//dl9 stroki statusa html kody ne rabotaqt
function tr2u(stroka){
var trON=0;
 var s1 = '~ABVGDEXZIJKLMNOPRSTUFHC8W15Y60Q2abvgdexzijklmnoprstufhc4w75y63q9';
 var s =''; var n = 0; var ss = ''; 
try{
  for(var i=0; i<stroka.length;i++){
   s=stroka.charAt(i); n=s1.indexOf(s);
   if (s=='`'){  //n=-1
    if(stroka.charAt(i+1)=='`'){i++;} 
    else{trON=(trON+1)&1;s="";} 
   } 
    if(trON==1 && n>-1){ 
     if(n==0)s='%u0451'; 
     if(n>0)s='%u04'+hex2(n+15);
    }
    ss=ss+s; 
  }//next i
}
catch(e){ss='error='+e;}

 return unescape(ss);
}

function rus2tr2(stroka){
 var s1 = 'ЁАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯёабвгдежзийклмнопрстуфхцчшщъыьэюя';
 var s2 = '~ABVGDEXZIJKLMNOPRSTUFHC8W15Y60Q2~abvgdexzijklmnoprstufhc4w75y63q9';
 var s =''; var n = 0; var ss = ''; 
 var s0=stroka.replace("`","'");// zamena kav
try{
  for(var i=0; i<s0.length;i++){
   s=s0.charAt(i);
    n=s1.indexOf(s); 
    if(n>=0){s="`"+s2.charAt(n) +"`"}
    ss=ss+s; 
  }//next i
ss=ss.replace(/``/g,"");
ss=ss.replace(/` `/g," ");

}
catch(e){ss='error='+e;}
return ss;
}
