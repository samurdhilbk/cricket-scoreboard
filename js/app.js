
var balls = 0;

var selected = 0;

var editing = 0;

$(document).ready(function(){

	$("#batsman1").click(function(){
		selected = 0;
		$("#batsman1>h2>i").addClass("asterisk");
		$("#batsman2>h2>i").removeClass("asterisk");
	});

	$("#batsman2").click(function(){
		selected = 1;
		$("#batsman2>h2>i").addClass("asterisk");
		$("#batsman1>h2>i").removeClass("asterisk");
	});

	$(document).keydown(function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if(editing) return;
       	switch(code) {
		    case 38:
		        $('#score_val').text(''+(parseInt($('#score_val').text()) + 1));
		        break;
		    case 40:
		        $('#score_val').text(''+Math.max(parseInt($('#score_val').text()) - 1,0));
		        break;
		    case 37:
		        $('#wickets_val').text(''+Math.max(parseInt($('#wickets_val').text()) - 1, 0));
		        break;
		    case 39:
		        $('#wickets_val').text(''+(parseInt($('#wickets_val').text()) + 1));
		        break;
		    case 98:
		    	balls = Math.max(balls - 1, 0);
		        $('#overs_val').text(''+Math.floor(balls/6)+'.'+(balls%6));
		        break;
		    case 104:
		    	balls++;
		    	$('#overs_val').text(''+Math.floor(balls/6)+'.'+(balls%6));
		        break;
		    case 87:
		    	if(selected === 0){
		    		$('#bats1').text(''+(parseInt($('#bats1').text()) + 1));
		    	}
		    	else{
		    		$('#bats2').text(''+(parseInt($('#bats2').text()) + 1));
		    	}	    	
		        break;
		    case 83:
		    	if(selected === 0){
		    		$('#bats1').text(''+Math.max(parseInt($('#bats1').text()) - 1, 0));
		    	}
		    	else{
		    		$('#bats2').text(''+Math.max(parseInt($('#bats2').text()) - 1, 0));
		    	}
		        break;
		    case 69:
		    	if(selected === 0){
		    		$('#balls1').text(''+(parseInt($('#balls1').text()) + 1));
		    	}
		    	else{
		    		$('#balls2').text(''+(parseInt($('#balls2').text()) + 1));
		    	}	    	
		        break;
		    case 68:
		    	if(selected === 0){
		    		$('#balls1').text(''+Math.max(parseInt($('#balls1').text()) - 1, 0));
		    	}
		    	else{
		    		$('#balls2').text(''+Math.max(parseInt($('#balls2').text()) - 1, 0));
		    	}
		        break;
		}
	});	


	var replaceWith = $('<input name="temp" type="text" />'),
    connectWith = $('input[name="hiddenField"]');

	

	$.fn.inlineEdit = function(replaceWith, connectWith) {

	    $(this).hover(function() {
	        $(this).addClass('hover');
	    }, function() {
	        $(this).removeClass('hover');
	    });

	    $(this).click(function() {


	    	editing = 1;
	        var elem = $(this);

	        elem.hide();
	        elem.after(replaceWith);
	        replaceWith.focus();

	        replaceWith.blur(function() {

	            if ($(this).val() != "") {
	                connectWith.val($(this).val()).change();
	                elem.text($(this).val());
	            }

	            $(this).remove();
	            elem.show();
	            editing = 0;
	        });
	        
	    });
	};

	$('#bats1name').inlineEdit(replaceWith, connectWith);


	$('#bats2name').inlineEdit(replaceWith, connectWith);


});