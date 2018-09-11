
  var arr=[];
  var str1='';
  var arr1=[];
  var data;
  var strArr=[];
  var data1=0;
  var data2='';
  function operaciya(a,q){
   var value=0;
   switch (a){
     case 'sqrt': value=Math.sqrt(q[0]);
	 break;
	 case '%': value=100*q[1]/q[0];
	 break;
	 case '/': value=q[0]/q[1];
	 break;
	 case '*': value=q[0]*q[1];
	 break;
	 case '-': value=q[0]-q[1];
	 break;
	 case '+': value=q[0]+q[1];
	 break;
	 case 'sin': value=Math.sin(q[0]);
	 break;
	 case 'cos':value=Math.cos(q[0]);
	 break;
	 case 'x^2':value=q[0]*q[0];
	 break;
   }
   return value;
  };
  $("button").click(function(){
   if($(this).hasClass('number')){
    data=parseInt($(this).val());<!-- перобразуем строку в число-->
   }else {data=$(this).val();}
   
   
   if(typeof data ==='number'|| data==='.'){<!--если было введено число или точка-->
    arr.push(data);
	$("#target1").html(arr.join(''));
	$("#target2").append(data);
   }
   else{<!-- Если была введена операция-->
      if(arr.length>=1&&data!="ce"&&data!='ac'){<!--Если в массиве чисел есть хотя бы 1 число -->
	   if(data=='='){
	    str1=arr.join('');
	    arr1.push(parseFloat(str1));
		arr=[];
	   }
	   else{
	    if(data2!=''){
		 if(arr1.length==2){
		  data1=operaciya(data2,arr1);
		  arr1=[];
		  arr1.push(data1);
		  data2=data;
		  $("#target2").append(data2);
		  $("#target1").html(data1);
		 }
		 else{
	     str1=arr.join('');
	     arr1.push(parseFloat(str1));
		 data1=operaciya(data2,arr1);
		 arr1=[];
		 arr1.push(data1);
	     data2=data;
	     arr=[];
	     $("#target1").html(data);
		 $("#target2").append(data);
		}}
		else{
	     str1=arr.join('');
	     arr1.push(parseFloat(str1));
	     data2=data;
	     arr=[];
	     $("#target1").html(data);
		 $("#target2").append(data);
		}
	   }
	  }
	 }
	if(data=='sin'||data=='cos'||data=='sqrt'||data=='x^2'){
	 data1=operaciya(data2,arr1);
	 arr1=[];
	 arr.push(data1);
	 $("#target1").html(data1);
	 $("#target2").append("=");
	 $("#target2").append(data1);
	 data2='';
	}
	if(arr1.length==2){
	 if(data=='='){
	  data1=operaciya(data2,arr1);
	  $("#target1").html(data1);
	  arr1=[];
	  arr.push(data1);
	  $("#target2").append(data);
	  $("#target2").append(data1);
	  data2='';
	 }
	}
	if(data=="ce"||data=="ac"){
	 arr=[];
	 arr1=[];
	 $("#target1").html(0);
	 $("#target2").html('');
	}
  });
  