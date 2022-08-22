alert("let us start the game!!!!!!")
var name1 = prompt("Enter Player one name?")
var name2 = prompt("Enter Player two name?")
var turns = 1;
var chip_color;
var red_blocks=[],blue_blocks=[];
var sty1={
    'color' : 'blue',
    'font-size' : '20px',
    'background-color' :'white'

};
var sty2={
    'color' : 'red',
    'font-size' : '20px',
    'background-color' :'white'

};
var red = {
  'background-color':'red'
}
var blue = {
  'background-color':'blue'
}
function change(){
  if(turns%2==1){
    $(".turn").text(name2+" click the any button.... ");
    $(".turn").css(sty2);
    chip_color=blue;
  }
  else{
    $(".turn").text(name1 +" click the any button.... ");
    $(".turn").css(sty1);
    chip_color=red;
  }
}
// ============================ shows the  1st turn =================
  $(".turn").text(name1+" click the any button.... ");
  $(".turn").css(sty1);

// ================== add chips to list ==============================
  function check_chip_color(a,b){
    val = a*10+b;
    if(chip_color==blue){
      blue_blocks.push(val);
      horizontalcheck(val,blue_blocks,name1);
      verticalcheck(val,blue_blocks,name1);
    }
    else if(chip_color==red){
      red_blocks.push(val);
      horizontalcheck(val,red_blocks,name2);
      verticalcheck(val,red_blocks,name2)
    }
    full();
  }
  // ========================= game logic ================
  function horizontalcheck(val,check,nm){
    var valu = Math.floor(val/10)*10;
    var cnt = 0;
    for(var i=0;i<5;i++){
      valu++;
      if(check.includes(valu)){
        cnt++;
        if(cnt>=3){
          alert(nm + " wins the match!!!");
           window.location.reload();
           break;
        }
      }
      else{
        cnt=0;
      }
    }
  }
  function verticalcheck(val,check,nm){
    var valu = (val%10);
    var cnt = 0;
    for(var i=0;i<5;i++){
      valu=valu+10;
      if(check.includes(valu)){
        cnt++;
        if(cnt>=3){
          alert(nm + " wins the match!!!");
           window.location.reload();
          break;
        }
      }
      else{
        cnt=0;
      }
    }
  }
// ===========================  clickme =================================
var pointer1=4,pointer2=4,pointer3=4,pointer4=4,pointer5=4;
$(".co1").click(function(){
        change();
        var ele1 = $(".c1").eq(pointer1)
        ele1.css(chip_color);
        check_chip_color(pointer1+1,1);
        pointer1--;
        turns++;
    if(pointer1<0){
        alert("coloumn1 is filled...")
    }
});

$(".co2").click(function(){
       change();
      var ele2=  $(".c2").eq(pointer2)
      ele2.css(chip_color);
      check_chip_color(pointer2+1,2);
    pointer2--;
    turns++;;
    if(pointer2<0){
        alert("coloumn2 is filled...")
    }
});
$(".co3").click(function(){
change();
        var ele3=$(".c3").eq(pointer3)
        ele3.css(chip_color);
        check_chip_color(pointer3+1,3);
    pointer3--;
    turns++;
    if(pointer3<0){
        alert("coloumn3 is filled...")
    }
});
$(".co4").click(function(){
change();
        var ele4=$(".c4").eq(pointer4)
        ele4.css(chip_color);
        check_chip_color(pointer4+1,4);
    pointer4--;
    turns++;
    if(pointer4<0){
        alert("coloumn4 is filled...")
    }
});
$(".co5").click(function(){
change();
        var ele5=$(".c5").eq(pointer5)
        ele5.css(chip_color);
        check_chip_color(pointer5+1,5);
    pointer5--;
    turns++;
    if(pointer5<0){
        alert("coloumn5 is filled...")
    }
});
function full(){
if((red_blocks.length+blue_blocks.length)==25){
  alert("All chips are FILLED!!")
}
}
