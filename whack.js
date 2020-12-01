var temp;
var count=0;
var y;
var x;
var highscore;
var time;
var flag;
document.getElementById('game').style.display="none";
var arr=document.getElementsByClassName('image');
function update()
{
  
  if (time>0)
  { 
   if(temp!=undefined)
    {
 	    arr[temp].innerHTML="";
     }	
	   var x=Math.floor(Math.random()*9);
      flag=0;
      arr[x].innerHTML="<img class='mole' src='mole.png' onclick='valueupdate()'>";
      
      temp=x;
      time=time-1;
   console.log(time);
   document.getElementById('time').innerHTML="Time left:"+time +" sec";
  }
  else
  {  
    if(count>highscore)
    {
      document.getElementById('newscore').innerHTML="Congratulation you create new highscore";
    }
    

  	document.getElementById('game').style.display="none";
  	clearInterval(y);
    document.getElementById('scorerow').style.display="none";
    document.getElementById('gameover').style.display="block";
    document.getElementById('show1').style.display="block";
    document.getElementById('show1').innerHTML="Your Score is:"+count;
  	document.getElementById('time').innerHTML="Time left:"+time +" sec" ;
  }

}

function start()
{    
   highscore=document.cookie.split("=")[1];
   highscore=parseInt(highscore);
   if (!isNaN(highscore))
    {
       document.getElementById('highscore').innerHTML="Highscore:"+highscore;

    }
 else
    {
      highscore=0;
    } 
    	count=0;
      document.getElementById('show').innerHTML="Score:"+count;
    	document.getElementById('start').style.display="none";
    	document.getElementById('gameover').style.display="none";
    	document.getElementById('game').style.display="block";
    	document.getElementById('scorerow').style.display="block";
	
    	
       y=setInterval(update,1000);
    
      time=10;
}

function valueupdate()
{
  if(flag==0)
  {
	  count=count+10;
	  document.getElementById('show').innerHTML="Score:"+count;
    flag=1;
  }
  if (count>highscore)
  {  
     document.cookie="highscore="+count;
     document.getElementById('highscore').innerHTML="Highscore:"+count;
     console.log(document.cookie);
  }
}