  
$(document).ready(function(){
var user_name;
var ask_body;
var entered_text ;
var ans_body;
var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
var questionNum = 0;
var yes=0;  
var question='Welcome to self assessment guide.Please note this should not be used for medical purposes.This test is just assessment of your symptoms. To proceed further please enter your name.'                        // keep count of question, used for IF condition.
ask_body =                       '<div class="row msg_container base_receive">' +
                        '<div class="col-md-2 col-xs-2 avatar">' +
                             '<img id="img101" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSP0an7IiHrBg-2vbnHkt8xV__DBEBMmcQBhOBh8gd12fTdQYG6&usqp=CAU">'+
                              '</div>'+
                              '<div class="col-md-10 col-xs-10">'+
                            '<div class="messages msg_receive">' +
                                '<p>'+ question + '</p>'+
                               ' <time>Robot • Today '+time+'</time>'+
                            '</div>' +
                        '</div>' 
                    '</div>';
$(ask_body).appendTo("#messagebody");


function answer_func()
{
  entered_text = document.getElementById("btn-input").value;
        
         ans_body =                       '<div class="row msg_container base_sent">' +
                        '<div class="col-md-10 col-xs-10 ">' +
                            '<div class="messages msg_sent">' +
                                '<p>'+ entered_text + '</p>'+
                               ' <time datetime="2009-11-13T20:00">'+user_name+ '• Today '+time+'</time>'+
                            '</div>' +
                        '</div>' +
                    '</div>';
$(ans_body).appendTo("#messagebody");
	$('#btn-input').val('');
 $("#messagebody").animate({ scrollTop: 20000000 }, "slow")
}


 
function bot(){
   entered_text = document.getElementById("btn-input").value;
    

   if((entered_text.toLowerCase()=="yes")||(questionNum==4&&parseInt(entered_text,10)>1))
    yes++;
         
    if (questionNum == 0) {

  
         user_name=entered_text;
          ans_body =                       '<div class="row msg_container base_sent">' +
                        '<div class="col-md-10 col-xs-10 ">' +
                            '<div class="messages msg_sent">' +
                                '<p>'+ entered_text + '</p>'+
                               ' <time datetime="2009-11-13T20:00">'+user_name+ '• Today '+time+'</time>'+
                            '</div>' +
                        '</div>' +
                    '</div>';
$(ans_body).appendTo("#messagebody");
		$('#btn-input').val('');
question='Are you experiencing any sort of cough???';
 setTimeout(timedQuestion, 1000);

    }
      if(questionNum==1)
      {
     answer_func();
     question='Are you feeling cold or fever?';
 setTimeout(timedQuestion, 1000);


      }
       if(questionNum==2)
      {
     answer_func();
     question='Do you have any difficulty in breathing';
 setTimeout(timedQuestion, 1000);


      }
        if(questionNum==3)
      {
     answer_func();
     question='How many cases of corona are reported in area you are living.If there are none report them as 0?';
 setTimeout(timedQuestion, 1000);


      }
       if(questionNum==4)
      {
     answer_func();
     question='Are you a medical professional or having contact with some medical professionals?';
 setTimeout(timedQuestion, 1000);


      }
       if(questionNum==5)
      {
     answer_func();
     question='Have you any recent travel history from foreign in last 50 days???';
 setTimeout(timedQuestion, 1000);


      }
       if(questionNum==6)
      {
     answer_func();
     question='Do you have and other underlying medical condition such as diabetes or hypertension';
 setTimeout(timedQuestion, 1000);


      }
       if(questionNum==7)
      {
     answer_func();
     if(yes>=6)
     question='Based on your conditions you are at higher risk of Corona Virus.If symptoms persists please seek medical as soon as possible.Please Note that do not take this is as medical advice.Consult to your doctors for your exact evaulation.Have a nice day.Bye';
 setTimeout(timedQuestion, 1000);
      if(yes<=2)
         question='Based on your conditions you are at very low risk of Corona Virus.Please Note that do not take this is as medical advice.Consult to your doctors for your exact evaulation.Have a nice day.Bye';
     if(yes>=3&&yes<6)
         question='Based on your conditions you are at moderate risk of Corona Virus.If symptoms persists please seek medical as soon as possible.Please Note that do not take this is as medical advice.Consult to your doctors for your exact evaulation.Have a nice day.Bye'


      }

      





}


function timedQuestion() {
  ask_body =                       '<div class="row msg_container base_receive">' +
                        '<div class="col-md-2 col-xs-2 avatar">' +
                             '<img id="img101" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSP0an7IiHrBg-2vbnHkt8xV__DBEBMmcQBhOBh8gd12fTdQYG6&usqp=CAU">'+
                              '</div>'+
                              '<div class="col-md-10 col-xs-10">'+
                            '<div class="messages msg_receive">' +
                                '<p>'+' '+user_name+', '+question + '</p>'+
                               ' <time>Robot • Today '+time+'</time>'+
                            '</div>' +
                        '</div>' 
                    '</div>';
                    $(ask_body).appendTo("#messagebody");
                     $("#messagebody").animate({ scrollTop: 20000000 }, "slow")
                    
          
}





// $("#messagebody").animate({ scrollTop: $("#messagebody")[0].scrollHeight}, 'slow');


// send function end


$('#btn-input').keypress(function (e) {
  if (e.which == 13) {
   var en_tt = document.getElementById("btn-input").value;
	  if(questionNum==4)
		  {
			   
			  if(Number.isInteger(parseInt(en_tt,10))==false)
				  {
					  answer_func();
					  question="Response should be an integer"
			  setTimeout(timedQuestion, 1000);
					  
				  }
			  else{
				      bot();
      questionNum++;
			  }
          }
	  else if(en_tt=="yes"||en_tt=="no"||questionNum==0||en_tt=="Yes"||en_tt=="No"||en_tt=="YES"||en_tt=="NO"||en_tt=="nopes"||en_tt=="Nopes"||en_tt=="NOPES")
		  {
			    bot();
      questionNum++;
		  }
	  else
		  {
			   answer_func();
			  question="Response should be in form of yes or no."
			  setTimeout(timedQuestion, 1000);
			 
          }
	  

	
   
  }
});

 $("#btn-chat").click(function(){

    var en_tt = document.getElementById("btn-input").value;
	  if(questionNum==4)
		  {
			   
			  if(Number.isInteger(parseInt(en_tt,10))==false)
				  {
					  answer_func();
					  question="Response should be an integer"
			  setTimeout(timedQuestion, 1000);
					  
				  }
			  else{
				      bot();
      questionNum++;
			  }
          }
	  else if(en_tt=="yes"||en_tt=="no"||questionNum==0||en_tt=="Yes"||en_tt=="No"||en_tt=="YES"||en_tt=="NO"||en_tt=="nopes"||en_tt=="Nopes"||en_tt=="NOPES")
		  {
			    bot();
      questionNum++;
		  }
	  else
		  {
			   answer_func();
			  question="Response should be in form of yes or no."
			  setTimeout(timedQuestion, 1000);
			 
          }
	  

  });





  
  });


function Function101()
{
     var x = document.getElementById("haddi");
    x.style.display = "block";
  
   var y= document.getElementById("img200");
     y.style.display = "none";
  

}


function Function100()
{
     var x = document.getElementById("haddi");
    x.style.display = "none";
  
   var y= document.getElementById("img200");
     y.style.display = "block";
  

}
