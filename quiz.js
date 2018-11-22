$(document).ready(function(){
    
    $("#info").on("click", function(){
        $("#more").slideToggle("500");
    });
    
    var que;
    var ans;
    var right;
    var i=0;
    var score=0;
    var que1={que:"Vilket av följande påståenden stämmer INTE om Marketing Automation?",
    ans:["Lätt att mäta och ger möjlighet att följa hela säljprocessen","Ger kunden rätt information vid rätt tidpunkt","När ett Marketing Automation-system väl är implementerat krävs inget mer arbete"],right:"2"};
    var que2={que:"1 + 1 = ?",ans:["11","1","2"],right:"2"};
    var que3={que:"Vad behöver man utvärdera för att få den bästa möjliga vinsten med sin MA investering?",ans:["Mognadsnivåer av sina processer, system och färdigheter","Årlig budget","Kapacitet av sina anställda"],right:"0"};
    var que4={que:"Vad är viktigt i en bra marketing automation kampanj?",ans:["Att kampanjen är utformad för att passa alla - 'one size fits all'","Att ha tydliga mål och delmål för att prospects ska flyttas längre ner i funneln","Att enbart satsa på en kanal, tex e-post"],right:"1"};
    var que5={que:"Vilka fyra nyckelegenskaper ska du leta efter hos en kandidat?",ans:["Ledarskap, empatisk förmåga, skrivkunskap och proaktivitet","Resultat driven, empatisk förmåga, analytisk och kreativ","Empatisk förmåga, kreativ, analytiskt tankesätt och tekniskt lagd"],right:"2"};
    var que6={que:"Vad bör du tänka på först vid val av MA-system?",ans:["Bäst omdöme om systemet","Support hos systemleverantören","Lägsta startavgift"],right:"1"};
    var quelist=[que1,que2,que3,que4,que5,que6];
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
                Cookies.set("quiz", "done", { expires: 1/1440 });
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
            $(".message").text("You nailed it! 😎");
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

        location.reload();
    });
    
});
