/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    var jsonArrMain = [];
    var QuestionFlag="";
    var userInfo;
    $('#questionType li').on('click', function(){
                QuestionFlag = $(this).text();
                 $("#otherQuestionType").css("display","none");
                 $("#multipleQuestionType").css("display","none");
                 $("#multipleChoiceQuestion").css("display","none");
                 $("#binaryQuestion").css("display","none");
                if(QuestionFlag=="Descriptive"){
                    $("#otherQuestionType").css("display","block");
                }
                else if(QuestionFlag=="Multiple"){
                   $("#multipleQuestionType").css("display","block"); 
                }
                else if(QuestionFlag=="Binary"){
                   $("#binaryQuestionType").css("display","block"); 
                }
            });

function addQuestionUI(){
    $('#NewSurvey').modal('hide');
    $('#addQuestion').modal('show');
}

function multipleOption(){
//   alert( $("#multipleQuestionType").val())
   var index = $("#multipleQuestionType").val();
   var htmlvar = "";
   for(var i=0;i<index;i++ ){
       htmlvar+="<div class='col-lg-6' style='margin-top:2%'>"
       htmlvar+="Option "+(i+1)+": ";
       htmlvar+='<input id="option'+(i+1)+'" type="text">';
       htmlvar+="</div>"; 
   }
   $("#multipleChoiceQuestion").html(htmlvar);
    $("#multipleChoiceQuestion").css("display","block");
}

function binaryOption(){
     var index = $("#binaryQuestionType").val();
   var htmlvar = "";
   for(var i=0;i<index;i++ ){
       htmlvar+="<div class='col-lg-6' style='margin-top:2%'>"
       htmlvar+="Radio "+(i+1)+": ";
       htmlvar+='<input id="binaryOption'+(i+1)+'" type="text">';
       htmlvar+="</div>"; 
   }
   $("#binaryQuestion").html(htmlvar);
   $("#binaryQuestion").css("display","block");
}

function saveToJson(){
    var QuestionType="";
    var optionIndex =0;
    var jsonMap = {};
    var Question = $("#Question").val();
    var optionAnswer = "";
    jsonMap["Question"] = Question;
    jsonMap["QuestionType"] = QuestionFlag;
    if(QuestionFlag=="Descriptive"){
        var optionArr = [];
        optionAnswer =    $("#otherQuestionType").val();
        optionArr.push(optionAnswer)
        jsonMap["Option"] = optionArr;
        $("#otherQuestionType").val("");
        $("#otherQuestionType").css("display","none") 
    }
    else if(QuestionFlag=="Multiple"){
        var optionArr = [];
        var index = $("#multipleQuestionType").val();
        for(var i=0;i<index;i++ ){
         optionArr.push($("#option"+(i+1)).val())
         $("#option"+(i+1)).val("");
        }
        $("#multipleQuestionType").val("");
        $("#multipleQuestionType").css("display","none");
        $("#multipleChoiceQuestion").css("display","none");
        
        jsonMap["Option"] = optionArr; 
    }else{
        var optionArr = [];
        var index = $("#binaryQuestionType").val();
        for(var i=0;i<index;i++ ){
         optionArr.push($("#binaryOption"+(i+1)).val())   
        }
        $("#binaryQuestionType").val("");
        $("#binaryQuestionType").css("display","none");
        $("#binaryQuestion").css("display","none");
       jsonMap["Option"] = optionArr; 
    }
    jsonArrMain.push(jsonMap);
    $("#Question").val("");
//    alert(JSON.stringify(jsonArrMain))
}

function showData(){
//   alert(JSON.stringify(jsonArrMain)) 
   var htmlvar = "";
   var data = jsonArrMain[0]
   var rows = Object.keys(jsonArrMain)
   var column = Object.keys(data);
   htmlvar +='<table id="example" class="display" cellspacing="0" width="100%">';
   htmlvar +="<thead>";
   htmlvar +="<tr>";
   
   for(var i in column){
    htmlvar +="<th>"+column[i]+"</th>"
   }
   htmlvar +="<th style='width:0px'>Edit</th>"
   htmlvar +="<th style='width:0px'>Delete</th>"
   htmlvar +="</tr>";
   htmlvar +="</thead>";
   htmlvar +="<tbody>";
   for(var row in rows){
     htmlvar +="<tr>";  
     
        for (var col in column){
          htmlvar +="<td>"+jsonArrMain[row][column[col]]+"</td>";  
        }
     htmlvar +='<td><p data-placement="top" data-toggle="tooltip" title="Edit"><button style="font-size:larger;background-color:#ff9600" class="btn  btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><i class="fa fa-pencil" style="color:white" aria-hidden="true"></i></button></p></td>';
     htmlvar+='<td><p data-placement="top" data-toggle="tooltip" title="Delete"><button style="font-size:larger;" class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><i class="fa fa-trash-o" aria-hidden="true"></i></button></p></td>'   
     htmlvar +="</tr>";  
   }
   htmlvar +="</tbody>";
   htmlvar +="</table>";
//    alert(htmlvar)
   $("#displayTable").html(htmlvar);
   $('#example').DataTable();
   
}

function mediaPlanningModule(){
    var htmlvar = "";
    htmlvar +="<div class='col-lg-12' style='background-color:gold;height:45px'>"
    htmlvar +="<h2 align='center' style='padding-top:10px;font-size:x-large'>Cost Per Thousand (CPM) </h2>"
    htmlvar +="</div>"
    htmlvar +="<div class='col-lg-12' style=' height:220px'>";
    htmlvar +="<div class='col-lg-6' style=' height:100%'>";
        htmlvar +="<div class='col-lg-8' style='color:#fff;background-color:slategray;margin-top:1%; height:23%'>";
        htmlvar +="<h6 style=''>CPM- For Print Media (when Audience data are not available)</h6>"
        htmlvar +="</div>"
        htmlvar +="<div class='col-lg-4' style='border:1px solid #ddd; margin-top:1%;height:23%'>";
        htmlvar +="<h6 style='float:right'>5,534</h6>"
        htmlvar +="</div>"
        htmlvar +="<div class='col-lg-8' style='color:#fff; margin-top:1%;background-color:slategray;height:23%'>";
        htmlvar +="<h6 style=''>CPM- For Print Media (when Audience data is available)</h6>"
        htmlvar +="</div>"
        htmlvar +="<div class='col-lg-4' style='border:1px solid #ddd; margin-top:1%;height:23%'>";
        htmlvar +="<h6 style='float:right'>2,498,500</h6>"
        htmlvar +="</div>"
        htmlvar +="<div class='col-lg-8' style='color:#fff; margin-top:1%;background-color:slategray;height:23%'>";
        htmlvar +="<h6 style=''>CPM- For Broadcast Media (Based on homes reached by a given program or time period)</h6>"
        htmlvar +="</div>"
        htmlvar +="<div class='col-lg-4' style='border:1px solid #ddd; margin-top:1%;height:23%'>";
        htmlvar +="<h6 style='float:right'>209,874</h6>"
        htmlvar +="</div>"
        htmlvar +="<div class='col-lg-8' style='color:#fff; margin-top:1%;background-color:slategray;height:22%'>";
        htmlvar +="<h6 style=''>CPM- For Broadcast Media (when Audience data is available)</h6>"
        htmlvar +="</div>"
        htmlvar +="<div class='col-lg-4' style='border:1px solid #ddd; margin-top:1%;height:22%'>";
         htmlvar +="<h6 style='float:right'>209,874</h6>"
        htmlvar +="</div>"
    htmlvar +="</div>"
    htmlvar +="<div class='col-lg-6' style=' height:100%'>";
        htmlvar +="<div class='col-lg-12' style='color:#fff;background-color:slategray;margin-top:1%; height:23%'>";
        htmlvar +="<div class='col-lg-6'><h6 style=''>Cost of 1 Ad:</h6></div><div style='margin-top:1%' class='col-lg-6'><input placeholder='1,000' type='text'></div>"
        htmlvar +="</div>"
        htmlvar +="<div class='col-lg-12' style='color:#fff;background-color:slategray;margin-top:1%; height:23%'>";
        htmlvar +="<div class='col-lg-6'><h6 style=''>Circulation:</h6></div><div style='margin-top:1%' class='col-lg-6'><input placeholder='1,806,084' type='text'></div>"
        htmlvar +="</div>"
        htmlvar +="<div class='col-lg-12' style='color:#fff;background-color:slategray;margin-top:1%; height:23%'>";
        htmlvar +="<div class='col-lg-6'><h6 style=''>Number of Prospects Reached:</h6></div><div style='margin-top:1%' class='col-lg-6'><input placeholder='4,000' type='text'></div>"
        htmlvar +="</div>"
        htmlvar +="<div class='col-lg-12' style='color:#fff;background-color:slategray;margin-top:1%; height:22%'>";
        htmlvar +="<div class='col-lg-6'><h6 style=''>Number of homes reached by a given programs or time period:</h6></div><div style='margin-top:1%' class='col-lg-6'><input placeholder='1,000' type='text'></div>"
        htmlvar +="</div>"
    htmlvar +="</div>"
    htmlvar +="</div>"
    htmlvar +="<div class='col-lg-12' style='margin-top:1%;background-color:gold;height:45px'>"
    htmlvar +="<h2 align='center' style='padding-top:10px;font-size:x-large'>Cost Per Point (CPP) </h2>"
    htmlvar +="</div>";
    htmlvar +="<div class='col-lg-12' style=' height:100px'>";
         htmlvar +="<div class='col-lg-6' style=' height:100%'>";
         htmlvar +="<div class='col-lg-8' style='color:#fff;background-color:slategray;margin-top:1%; height:100%'>";
        htmlvar +="<h6 style='margin-top:17%'>Cost Per Point</h6>"
        htmlvar +="</div>"
        htmlvar +="<div class='col-lg-4' style='border:1px solid #ddd; margin-top:1%;height:100%'>";
        htmlvar +="<h6 style='float:right;margin-top:38%'>2,252,563</h6>"
        htmlvar +="</div>"
         htmlvar +="</div>"
         htmlvar +="<div class='col-lg-6' style=' height:100%'>";
         htmlvar +="<div class='col-lg-12' style='color:#fff;background-color:slategray;margin-top:1%; height:46%'>";
        htmlvar +="<div class='col-lg-6'><h6 style=''>Reach:</h6></div><div style='margin-top:1%' class='col-lg-6'><input placeholder='1,073,293' type='text'></div>"
        htmlvar +="</div>"
        htmlvar +="<div class='col-lg-12' style='color:#fff;background-color:slategray;margin-top:1%; height:46%'>";
        htmlvar +="<div class='col-lg-3'><h6 style=''>Select CPM..:</h6></div><div style='margin-top:1%' class='col-lg-9'>"
        htmlvar +='<div class="dropdown">';
        htmlvar +='<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">CPM-for brodcast media (when audience..'
        htmlvar +='<span class="caret"></span></button>'
        htmlvar +="</div>"
         htmlvar +="</div>"
         htmlvar +="</div>"
    htmlvar +="</div>";
   htmlvar +="</div>";
     htmlvar +="<div class='col-lg-12' style='margin-top:1%; height:220px'>";
     htmlvar +="<div class='col-lg-6' style='background-color:gold;height:33%'>"
    htmlvar +="<h5 align='center' style='padding-top:3px;'>Calculation For Combined Reach and Frequency Across Media Channels </h5>"
    htmlvar +="</div>";
    htmlvar +="<div class='col-lg-6' style=' height:33%'>";
     htmlvar +="<div class='col-lg-12' style='color:#fff;background-color:slategray;margin-top:1%; height:46%'>";
        htmlvar +="<div class='col-lg-6'><h6 style=''>High Reach:</h6></div><div style='margin-top:1%' class='col-lg-6'><input placeholder='60' type='text'></div>"
        htmlvar +="</div>"
         htmlvar +="<div class='col-lg-12' style='color:#fff;background-color:slategray;margin-top:1%; height:46%'>";
        htmlvar +="<div class='col-lg-6'><h6 style=''>Low Reach:</h6></div><div style='margin-top:1%' class='col-lg-6'><input placeholder='50' type='text'></div>"
        htmlvar +="</div>";
    htmlvar +="</div>";
    htmlvar +="<div class='col-lg-6' style=' height:50%'>";
    htmlvar +="<div class='col-lg-8' style='color:#fff; margin-top:1%;background-color:slategray;height:48%'>";
        htmlvar +="<h6 style=''>Combined Frequency:</h6>"
        htmlvar +="</div>"
        htmlvar +="<div class='col-lg-4' style='border:1px solid #ddd; margin-top:1%;height:48%'>";
        htmlvar +="<h6 style='float:right'>51,362,789</h6>"
        htmlvar +="</div>"
    htmlvar +="<div class='col-lg-8' style='color:#fff; margin-top:1%;background-color:slategray;height:48%'>";
        htmlvar +="<h6 style=''>Combined Reach:</h6>"
        htmlvar +="</div>"
        htmlvar +="<div class='col-lg-4' style='border:1px solid #ddd; margin-top:1%;height:48%'>";
        htmlvar +="<h6 style='float:right'>799,520</h6>"
        htmlvar +="</div>"
    htmlvar +="</div>";
    htmlvar +="<div class='col-lg-6' style=' height:50%'>";
     htmlvar +="<div class='col-lg-12' style='color:#fff;background-color:slategray;margin-top:1%; height:48%'>";
        htmlvar +="<div class='col-lg-3'><h6 style=''>GRP1:</h6></div>"
        htmlvar +='<div class="col-lg-9">'
        htmlvar +='<div class="range range-warning">'
        htmlvar +=' <input type="range" name="range" min="1" max="50000" value="38404" onchange="range.value=value">'
        htmlvar +=' <output id="range">38,404</output>'
        htmlvar +=' </div>'
        htmlvar +=' </div>'
        htmlvar +="</div>"
     htmlvar +="<div class='col-lg-12' style='color:#fff;background-color:slategray;margin-top:1%; height:48%'>";
        htmlvar +="<div class='col-lg-3'><h6 style=''>GRP2:</h6></div>"
        htmlvar +='<div class="col-lg-9">'
        htmlvar +='<div class="range range-warning">'
        htmlvar +=' <input type="range" name="range" min="1" max="400000" value="372,745" onchange="range.value=value">'
        htmlvar +=' <output id="range">372,745</output>'
        htmlvar +=' </div>'
        htmlvar +=' </div>'
        htmlvar +="</div>"
    htmlvar +="</div>";
    htmlvar +="</div>";
    htmlvar +="<div class='col-lg-12' style='color:#fff;margin-top:3%; height:150px'>";
    htmlvar +="<div class='col-lg-5' style='float:left;color:#fff;background-color:slategray; height:96%'>";
    htmlvar +="<div class='col-lg-6' style='height:96%;color:#fff;margin-top: 1%;border-right: 1px solid #ddd;'>";
    htmlvar +="<h4>For News paper - CPM</h4>";
    htmlvar +="<div class='col-lg-8' style='height:96%;color:#fff'>";
    htmlvar +="<h5>CPP - For Newspaper</h5>";
    htmlvar +="</div>";
    htmlvar +="<div class='col-lg-4' style='height:96%;color:#fff'>";
    htmlvar +="<h5>10.52</h5>";
    htmlvar +="</div>";
    htmlvar +="</div>";
    htmlvar +="<div class='col-lg-6' style='height:96%'>";
    htmlvar +="<div class='col-lg-12' style='height:48%'>";
    htmlvar +="<h6>Circulation:</h6>"
    htmlvar +='<div class="range range-warning">'
        htmlvar +=' <input type="range" name="range" min="1" max="1900000" value="1806084" onchange="range.value=value">'
        htmlvar +=' <output id="range">1806084</output>'
        htmlvar +=' </div>'
    htmlvar +="</div>";
    htmlvar +="<div class='col-lg-12' style='height:48%'>";
    htmlvar +="<h6>Cost of 1 Ad:</h6>"
    htmlvar +='<div class="range range-warning">'
        htmlvar +=' <input type="range" name="range" min="1" max="20000" value="1000" onchange="range.value=value">'
        htmlvar +=' <output id="range">1000</output>'
        htmlvar +=' </div>'
    htmlvar +="</div>";
    htmlvar +="</div>";
    htmlvar +="</div>";
    htmlvar +="<div class='col-lg-5' style='float:right;color:#fff;background-color:slategray; height:96%'>";
     htmlvar +="<div class='col-lg-6' style='height:96%;color:#fff;margin-top: 1%;border-right: 1px solid #ddd;'>";
    htmlvar +="<h4>For Broadcast - CPM</h4>";
    htmlvar +="<div class='col-lg-8' style='height:96%;color:#fff'>";
    htmlvar +="<h5>CPP - Broadcast</h5>";
    htmlvar +="</div>";
    htmlvar +="<div class='col-lg-4' style='height:96%;color:#fff'>";
    htmlvar +="<h5>4,750</h5>";
    htmlvar +="</div>";
    htmlvar +="</div>";
    htmlvar +="<div class='col-lg-6' style='height:96%'>";
    htmlvar +="<div class='col-lg-12' style='height:48%'>";
    htmlvar +="<h6>Number of Prospects Reached:</h6>"
    htmlvar +='<div class="range range-warning">'
        htmlvar +=' <input type="range" name="range" min="1" max="5000" value="4000" onchange="range.value=value">'
        htmlvar +=' <output id="range">4000</output>'
        htmlvar +=' </div>'
    htmlvar +="</div>";
    htmlvar +="<div class='col-lg-12' style='height:48%'>";
    htmlvar +="<h6>Cost of 1 Ad Broadcast:</h6>"
    htmlvar +='<div class="range range-warning">'
        htmlvar +=' <input type="range" name="range" min="1" max="5000" value="1000" onchange="range.value=value">'
        htmlvar +=' <output id="range">1000</output>'
        htmlvar +=' </div>'
    htmlvar +="</div>";
    htmlvar +="</div>";
    htmlvar +="</div>";
    htmlvar +="</div>";
    
    $("#displayTable").html(htmlvar)
}

function adminPanel(){
   $.getJSON("resources/json/userInfo.json",function(data){
      userInfo = data;
      var column = Object.keys(data[0]);
      var htmlvar = "";
      htmlvar +='<button type="button" data-toggle="modal" data-target="#addclient" class="btn btn-warning" style="margin:2%">Add Client</button>';
      htmlvar +='<button type="button" data-toggle="modal" data-target="#adduser" class="btn btn-warning" style="margin:2%">Add New User</button>';
      htmlvar +='<button type="button"  class="btn btn-warning" style="margin:2%">Edit User Settings</button>';
      htmlvar +='<button type="button"  class="btn btn-warning" style="margin:2%">Add New Survey</button>';
      htmlvar +='<button type="button"  class="btn btn-warning" style="margin:2%">Add New Module </button>';
      htmlvar +='<table id="adminTable" class="display" cellspacing="0" width="100%">';
      htmlvar +="<thead>";
      htmlvar +="<tr>";
      for(var col in column){
          htmlvar +="<th>"+column[col]+"</th>";
      }
      htmlvar +="</tr>";
      htmlvar +="</thead>";
      htmlvar +="<tbody>";
      for(var i in data){
       htmlvar +="<tr>";
        for(var c in column){
          htmlvar +="<td>"+data[i][column[c]]+"</td>";
        }
       htmlvar +="</tr>";
      }
      htmlvar +="</tbody>";
      htmlvar +="</table>";
     $("#displayTable").html(htmlvar) 
     $('#adminTable').DataTable();
   });
}

function saveUser(){
    var Username = $("#Username").val();
    var userType = "Restricted Power User";
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var password = $("#password").val();
    var email = $("#email").val();
    var mobile = $("#mobile").val();
     $.getJSON("resources/json/userInfo.json",function(data){
      userInfo = data;
      var column = Object.keys(data[0]);
      var htmlvar = "";
      htmlvar +='<button type="button" data-toggle="modal" data-target="#adduser" class="btn btn-warning" style="margin-bottom:2%">Add New User</button>';
      htmlvar +='<button type="button"  class="btn btn-warning" style="margin-bottom:2%">Edit User Settings</button>';
      htmlvar +='<button type="button"  class="btn btn-warning" style="margin-bottom:2%">Add New Survey</button>';
      htmlvar +='<button type="button"  class="btn btn-warning" style="margin-bottom:2%">Configure Media Planning </button>';
      htmlvar +='<table id="adminTable" class="display" cellspacing="0" width="100%">';
      htmlvar +="<thead>";
      htmlvar +="<tr>";
      for(var col in column){
          htmlvar +="<th>"+column[col]+"</th>";
      }
      htmlvar +="</tr>";
      htmlvar +="</thead>";
      htmlvar +="<tbody>";
      for(var i in data){
       htmlvar +="<tr>";
        for(var c in column){
          htmlvar +="<td>"+data[i][column[c]]+"</td>";
        }
       htmlvar +="</tr>";
      }
      htmlvar +="<tr>"
      htmlvar +="<td>"+Username+"</td>";
      htmlvar +="<td>"+password+"</td>";
      htmlvar +="<td>"+userType+"</td>";
      htmlvar +="<td>"+fname+"</td>";
      htmlvar +="<td>"+lname+"</td>";
      htmlvar +="<td>"+email+"</td>";
      htmlvar +="<td>"+mobile+"</td>";
      htmlvar +="</tr>"
      htmlvar +="</tbody>";
      htmlvar +="</table>";
     $("#displayTable").html(htmlvar) 
     $('#adminTable').DataTable();
   });
}