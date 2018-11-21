$(document).ready(function(){
    
    $("#info").on("click", function(){
        $("#more").slideToggle("500");
    });
    
    var que;
    var ans;
    var right;
    var i=0;
    var score=0;
    var que1={que:"Vad heter James Bond i efternamn?",ans:["James","Bond","007"],right:"1"};
    var que2={que:"1 + 1 = ?",ans:["11","1","2"],right:"2"};
    var que3={que:"Vad är det för år nu?",ans:["2018","2019","2017"],right:"0"};
    var que4={que:"Vad står MA för?",ans:["Marketing Advisor","Marketing Automation","Marketing Agency"],right:"1"};
    var quelist=[que1,que2,que3,que4];
    var wrong=[];

    if(Cookies.get("quiz") == "done"){
        $("#start").prop("disabled", true);
        $("#start").addClass("disabled");
        $("#warning").html("Du har redan gjort quizen idag! Kom tillbaka imorgon!");
    }else{
        $("#start").prop("disabled", false);
        $("#start").click(function(){
            $(".intro").hide();
            $("#sub").show();
            $(".quiz").show();
            $("#num").text(i+1+"/"+quelist.length);
            $("#q").text(quelist[i].que);
            $("#op1").html("<input type='radio' name='opt' id='o1' value='0'><label for='o1'>"+quelist[i].ans[0])+"</label>";
            $("#op2").html("<input type='radio' name='opt' id='o2' value='1'><label for='o2'>"+quelist[i].ans[1])+"</label>";
            $("#op3").html("<input type='radio' name='opt' id='o3' value='2'><label for='o3'>"+quelist[i].ans[2])+"</label>";       
        });
    }

    $("#sub").click(function(){
        if($("input[name='opt']:checked").val()!=null){
            if($("input[name='opt']:checked").val()==quelist[i].right){
                score++;
            }
            else{
                wrong.push(i);
            }   
            $("#sub").hide();
            $(".score").text(score);
            if(i!=quelist.length-1){
                next();
            }
            else{
                reslt();
                Cookies.set("quiz", "done");
            }
        }
        else{
            $(".p").text("Välj ett alternativ!");
        }
    });

    function next(){
        if(i!=(quelist.length)-1){
            i++;
        }
        $("#q").text(quelist[i].que);
        $("#op1").html("<input type='radio' name='opt' id='o1' value='0'><label for='o1'>"+quelist[i].ans[0])+"</label>";
        $("#op2").html("<input type='radio' name='opt' id='o2' value='1'><label for='o2'>"+quelist[i].ans[1])+"</label>";
        $("#op3").html("<input type='radio' name='opt' id='o3' value='2'><label for='o3'>"+quelist[i].ans[2])+"</label>";
        $("#num").text(i+1+"/"+quelist.length);
        $("#sub").show();
        }

    function reslt(){
        $(".quiz").hide();
        $(".result").show();
        $(".score").text(score+"/"+quelist.length);
        if(score<=3){
            $(".message").text("Oj, du kanske borde plugga lite mer... 🤓");
        }
        else if(score<5){
            $(".message").text("Du var ganska bra där! 🤗");
        }
        else{
            $(".message").text("You rock! 😎");
        }
    }
    $("#an").click(function(){
        $(".result").hide();
        $(".answers").show();
        if((wrong.toString()).search("0")!=-1){
            $("#a1").css('color','#EE1B1B');
        }
        if((wrong.toString()).search("1")!=-1){
            $("#a2").css('color','#EE1B1B');
        }
        if((wrong.toString()).search("2")!=-1){
            $("#a3").css('color','#EE1B1B');
        }
        if((wrong.toString()).search("3")!=-1){
            $("#a4").css('color','#EE1B1B');
        }
        if((wrong.toString()).search("4")!=-1){
            $("#a5").css('color','#EE1B1B');
        }
        if((wrong.toString()).search("5")!=-1){
            $("#a6").css('color','#EE1B1B');
        }
        if((wrong.toString()).search("6")!=-1){
            $("#a7").css('color','#EE1B1B');
        }
        if((wrong.toString()).search("7")!=-1){
            $("#a8").css('color','#EE1B1B');
        }
        if((wrong.toString()).search("8")!=-1){
            $("#a9").css('color','#EE1B1B');
        }
        if((wrong.toString()).search("9")!=-1){
            $("#a10").css('color','#EE1B1B');
        }
        
    });

    $("#again").click(function(){ 
        $(".answers").hide();
        $(".intro").show();
        $("input[name='opt']").prop('checked', false);
        i = 0;
        score = 0;
        wrong = [];
    });
    
});
