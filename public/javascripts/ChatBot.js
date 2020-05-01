$(document).ready(function(){
			var User_Name;
			var Question_Body;
			var Input_Response ;
			var Answer_Body;
			var dt = new Date();
			var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
			var Question_Serial = 0;
			var Response_Count=0;  
var question='Welcome to self assessment guide.Please note this should not be used for medical purposes.This test is just assessment of your symptoms. To proceed further please enter your name.'                        // keep count of question, used for IF condition.
Question_Body =  '<div class="row msg_container base_receive">' +
'<div class="col-md-2 col-xs-2 avatar">' +
'<img id="img101" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSP0an7IiHrBg-2vbnHkt8xV__DBEBMmcQBhOBh8gd12fTdQYG6&usqp=CAU">'+
'</div>'+
'<div class="col-md-10 col-xs-10">'+
'<div class="messages msg_receive">' +
'<p>'+ question + '</p>'+
' <time>Bot  Today '+time+'</time>'+
'</div>' +
'</div>' 
'</div>';
$(Question_Body).appendTo("#messagebody");


function answer_func()
{
	Input_Response = document.getElementById("btn-input").value;

	Answer_Body =                       '<div class="row msg_container base_sent">' +
	'<div class="col-md-10 col-xs-10 ">' +
	'<div class="messages msg_sent">' +
	'<p>'+ Input_Response + '</p>'+
	' <time datetime="2009-11-13T20:00">'+User_Name+ '  Today '+time+'</time>'+
	'</div>' +
	'</div>' +
	'</div>';
	$(Answer_Body).appendTo("#messagebody");
	$('#btn-input').val('');
	$("#messagebody").animate({ scrollTop: 20000000 }, "slow")
}



function bot(){
	Input_Response = document.getElementById("btn-input").value;


	if((Input_Response.toLowerCase()=="yes")||(Question_Serial==4&&parseInt(Input_Response,10)>0)||(Question_Serial==1&&parseInt(Input_Response,10)>=40))
		Response_Count++;

	if (Question_Serial == 0) {


		User_Name=Input_Response;
		answer_func();
		question='What is your age';
		setTimeout(timedQuestion, 1000);

	}
	if(Question_Serial==1)
	{
		answer_func();
		question='Are you experiencing cough?';
		setTimeout(timedQuestion, 1000);


	}
	if(Question_Serial==2)
	{
		answer_func();
		question='Are you feeling cold or fever?';
		setTimeout(timedQuestion, 1000);


	}
	if(Question_Serial==3)
	{
		answer_func();
		question='Do you have any difficulty in breathing';
		setTimeout(timedQuestion, 1000);


	}
	if(Question_Serial==4)
	{
		answer_func();
		question='How many cases of corona are reported in area you are living.If there are none report them as 0?';
		setTimeout(timedQuestion, 1000);


	}
	if(Question_Serial==5)
	{
		answer_func();
		question='Are you a medical professional or having contact with some medical professionals?';
		setTimeout(timedQuestion, 1000);


	}
	if(Question_Serial==6)
	{
		answer_func();
		question='Have you any recent travel history from foreign in last 50 days???';
		setTimeout(timedQuestion, 1000);


	}
	if(Question_Serial==7)
	{
		answer_func();
		question='Do you have and other underlying medical condition such as diabetes or hypertension';
		setTimeout(timedQuestion, 1000);


	}
	if(Question_Serial==8)
	{
		answer_func();
		if(Response_Count>=6)
			question='Based on your conditions you are at higher risk of Corona Virus.If symptoms persists please seek medical as soon as possible.Please Note that do not take this is as medical advice.Consult to your doctors for your exact evaulation.Have a nice day.Bye';
		setTimeout(timedQuestion, 1000);
		if(Response_Count<=2)
			question='Based on your conditions you are at very low risk of Corona Virus.Please Note that do not take this is as medical advice.Consult to your doctors for your exact evaulation.Have a nice day.Bye';
		if(Response_Count>=3&&Response_Count<6)
			question='Based on your conditions you are at moderate risk of Corona Virus.If symptoms persists please seek medical as soon as possible.Please Note that do not take this is as medical advice.Consult to your doctors for your exact evaulation.Have a nice day.Bye'


	}







}


function timedQuestion() {
	Question_Body =                       '<div class="row msg_container base_receive">' +
	'<div class="col-md-2 col-xs-2 avatar">' +
	'<img id="img101" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSP0an7IiHrBg-2vbnHkt8xV__DBEBMmcQBhOBh8gd12fTdQYG6&usqp=CAU">'+
	'</div>'+
	'<div class="col-md-10 col-xs-10">'+
	'<div class="messages msg_receive">' +
	'<p>'+' '+User_Name+', '+question + '</p>'+
	' <time>Bot  Today '+time+'</time>'+
	'</div>' +
	'</div>' 
	'</div>';
	$(Question_Body).appendTo("#messagebody");
	$("#messagebody").animate({ scrollTop: 20000000 }, "slow")


}





// $("#messagebody").animate({ scrollTop: $("#messagebody")[0].scrollHeight}, 'slow');


// send function end


$('#btn-input').keypress(function (e) {
	if (e.which == 13) {
		var en_tt = document.getElementById("btn-input").value;
		if(Question_Serial==5||Question_Serial==1)
		{

			if(Number.isInteger(parseInt(en_tt,10))==false)
			{
				answer_func();
				question="Response should be an integer"
				setTimeout(timedQuestion, 1000);

			}
			else{
				bot();
				Question_Serial++;
			}
		}
		else if(en_tt.toLowerCase()=="yes"||en_tt.toLowerCase()=="no"||Question_Serial==0||en_tt.toLowerCase()=="nopes")
		{
			bot();
			Question_Serial++;
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
	if(Question_Serial==4)
	{

		if(Number.isInteger(parseInt(en_tt,10))==false)
		{
			answer_func();
			question="Response should be an integer"
			setTimeout(timedQuestion, 1000);

		}
		else{
			bot();
			Question_Serial++;
		}
	}
	else if(en_tt=="yes"||en_tt=="no"||Question_Serial==0||en_tt=="Yes"||en_tt=="No"||en_tt=="YES"||en_tt=="NO"||en_tt=="nopes"||en_tt=="Nopes"||en_tt=="NOPES")
	{
		bot();
		Question_Serial++;
	}
	else
	{
		answer_func();
		question="Response should be in form of yes or no."
		setTimeout(timedQuestion, 1000);

	}


});






});


function Chat_Box_Hide()
{
	var x = document.getElementById("Chat_Box_1");
	x.style.display = "block";

	var y= document.getElementById("img_bot");
	y.style.display = "none";


}


function Chat_Box_Show()
{
	var x = document.getElementById("Chat_Box_1");
	x.style.display = "none";

	var y= document.getElementById("img_bot");
	y.style.display = "block";


}
