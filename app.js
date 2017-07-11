

(function (){
                                                    
    $(document).ready(function(){
        $('.buttonOne').css('top', 200);
        $('.buttonOne').css('left', 600);    
    });

    $('.buttonOne').on('mouseenter', function (){
        changeBackgroundColor1();
        changePosition1();
    });

    function changeBackgroundColor1 () {
	   var mix1 = (Math.floor(Math.random()*7)+1);

		switch (mix1) {
			case 1:
			    $('.buttonOne').css('background-color', 'beige');
			     break;
			case 2:
			    $('.buttonOne').css('background-color', 'hotpink');
			     break;
            case 3:
                $('.buttonOne').css('background-color', 'lightblue');            
                 break;
			case 4:
                $('.buttonOne').css('background-color', 'limegreen');
                 break;
            case 5: 
                $('.buttonOne').css('background-color', 'khaki');
                 break;
            case 6:
                $('.buttonOne').css('background-color', 'orange');
                 break;
            case 7:
                $('.buttonOne').css('background-color', 'yellow');
		}
    }

    function changePosition1 () {
        var top1 = (Math.floor(Math.random()*600)+1);
        var left1 = (Math.floor(Math.random()*1350)+1);      

        $('.buttonOne').css('top', top1);
        $('.buttonOne').css('left', left1);

        changeBodyBackgroundColor();
    }

       function slowDown() {
    	time = setTimeout(function(){ 
		}, 3000);
	}

    function changeBodyBackgroundColor () {

        var choice = (Math.floor(Math.random()*7)+1);

        switch (choice) {
            	case 1:
			    $('body').css('background-color', 'dodgerblue');
			     break;
			case 2:
			    $('body').css('background-color', 'dimgray');
			     break;
            case 3:
                $('body').css('background-color', 'crimson');            
                 break;
			case 4:
                $('body').css('background-color', 'darkgreen');
                 break;
            case 5: 
                $('body').css('background-color', 'darkturquoise');
                 break;
            case 6:
                $('body').css('background-color', 'magenta');
                 break;
            case 7:
                $('body').css('background-color', 'mediumvioletred');
		}
            slowDown();
    }

    $('.buttonOne').on('click', function () {  
        $('.buttonOne').addClass('hidden');
		$('body').css('background-color', 'black');
        $('.banner').css('color', 'black');
        $('.banner').css('font-weight', 'bold');
        $('.banner').css('font-size', '5rem');
        $('.banner').html('<strong>YOU WIN!!!</strong>')
        $('.banner').addClass('alert alert-success');
        $('.banner').removeClass('hidden');
	});

})();
