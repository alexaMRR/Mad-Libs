 var currentage;
 var addtoage;
 var whenyoureage = currentage + addtoage;
 var noun1;
 var adj1;
 var noun2;
 var deathnumber;
var endNumber = whenyoureage + deathnumber;

 console.log(currentage);

 $("#Start").click(function() {

     $("#message").text("Enter your age.");
     $("#Start").hide();
     $("#input1").show();
     $("#button1").show();
 });

 $("#button1").click(function() {

     currentage = parseInt($("#input1").val());
     addtoage = parseInt($("#input2").val());
     whenyoureage = currentage + addtoage;
     console.log(currentage);
     $("#message").text("Enter a number.");
     $("#button1").remove();
     $("#input1").remove();
     $("#button2").show();
     $("#input2").show();



 });
 $("#button2").click(function() {

     addtoage = parseInt($("#input2").val());
     console.log(addtoage);
     $("#message").text("Pick a plural noun.");
     $("#button2").remove();
     $("#input2").remove();
     $("#button3").show();
     $("#input3").show();

 });
 $("#button3").click(function() {

     noun1 = $("#input3").val();
     console.log(noun1);
     $("#message").text("Pick an adjective.");
     $("#button3").remove();
     $("#input3").remove();
     $("#button4").show();
     $("#input4").show();

 });
 $("#button4").click(function() {

     adj1 = $("#input4").val();
     console.log(adj1);
     $("#message").text("Pick a plural noun.");
     $("#button4").remove();
     $("#input4").remove();
     $("#button5").show();
     $("#input5").show();
 });

 $("#button5").click(function() {

     noun2 = $("#input5").val();
     console.log(noun2);
     $("#message").text("Pick a number.");
     $("#button5").remove();
     $("#input5").remove();
     $("#button6").show();
     $("#input6").show();
 });
 $("#button6").click(function() {

     deathnumber = parseInt($("#input6").val());
     console.log(deathnumber);
     $("#message").text("Pick another number.");
     $("#button6").remove();
     $("#input6").remove();
     $("#input7").show();
     $("#finalbutton").show();
 });
 $("#finalbutton").click(function() {

     $("#input7").remove();
     $("#message").text("This is your mad libs.");

     whenyoureage = parseInt(currentage + addtoage);
     currentage = $("#input1").val();
     addtoage = $("#input2").val();
     endNumber = parseInt(whenyoureage + deathnumber);

     $("#container").text("When you turn " + whenyoureage + " you will eat many " + noun1 + ", see a lot of " + adj1 + " " + noun2 + " and die at the age of " + endNumber + ".");

     $("finalbutton").remove();

 });