  var B=document.all;
  var T1=new Array("cursor.gif",18,18,"cursor.gif",18,18,"cursor.gif",18,18,"cursor.gif",18,18,"cursor.gif",18,18)
  var nos=parseInt(T1.length/3);
  var rate=100;
  var iefix1=0;
  var iefix2=0;

  for (i=0;i<nos;i++){
    createContainer("CUR"+i,i*10,i*10,i*3+1,i*3+2,"<img src='"+T1[i*3]+"' width="+T1[(i*3+1)]+" height="+T1[(i*3+2)]+" border=0>")
  }

  function createContainer(N,Xp,Yp,W,H,HT){
    with (document){
      write("<div id='"+N+"' style='position:absolute; left:"
       +Xp+"px; top:"+Yp+"px; width:"+W+"px; height:"+H+"px; z-index:-1' >");
      write((HT) ? HT : "");
      write("</div>");
    }
  }

  function getXpos(N){ return  parseInt(B[N].style.left);}
  function getYpos(N){ return  parseInt(B[N].style.top);}

  function moveContainer(N,DX,DY){
    document.all[N].style.left=DX+'px';
    document.all[N].style.top=DY+'px';
  }

  function cycle(){
   iefix1=0;iefix2=0;
   var t1=0; var t2=0;
    try{
       iefix1=document.body.scrollLeft;
       iefix2=document.body.scrollTop;
    }
    catch(e){}
    try{
     t1= $('html,body').scrollLeft();
     t2= $('html,body').scrollTop();
    }
    catch(e){}     
    if(iefix1<t1)iefix1=t1; if(iefix2<t2)iefix2=t2;

    for (i=0;i<(nos-1);i++){
      moveContainer("CUR"+i,getXpos("CUR"+(i+1)),getYpos("CUR"+(i+1)));
    }
  }

  function newPos(e){
    moveContainer("CUR"+(nos-1),event.clientX+iefix1,event.clientY+iefix2);
  }

  document.body.onscroll=newPos;
  document.onmousemove=newPos;
  setInterval("cycle()",rate);
