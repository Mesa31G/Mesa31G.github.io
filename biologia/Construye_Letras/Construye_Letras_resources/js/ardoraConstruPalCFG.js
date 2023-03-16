//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=10;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#97FFFF"; colorButton="#FF0000"; colorText="#000000"; colorSele="#800080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICITACIONES"; messageTime=""; messageError="UPS"; messageErrorG="UPS"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var cp_pal=["Q0hBUkxFUyBEQVJXSU4=","SkVBTiBCQVBUSVNURSBMQU1BUkNL","VEVPUsONQSBTSU5Uw4lUSUNBIERFIExBIEVWT0xVQ0nDk04=","TVVUQUNJw5NO","RkxVSk8gR8OJTklDTw=="];var cp_ima=["","","","",""];var cp_mp3=["","","","",""];var cp_ogg=["","","","",""];var cp_que=["RnVlIGVsIGNyZWFkb3IgZGUgbGEgdGVvcsOtYSBkZSBsYSBzZWxlY2Npw7NuIG5hdHVyYWw=","Q3JlbyBsYSB0ZW9yw61hIGRlbCBUcmFuc2Zvcm1pc21v","RXMgbGEgdW5pZmljYWNpw7NuIGRlIGxhcyB0ZW9yw61hcyBkZSBEYXJ3aW4geSBXYWxsYWNlLCBsYXMgbGV5ZXMgZGUgTWVuZGVsIHkgbGEgZ2Vuw6l0aWNhIGRlIHBvYmxhY2lvbmVz","Q2FtYmlvcyBwZXJtYW5lbnRzIGVuIGVsIG1hdGVyaWFsIGdlbsOpdGljbyBxdWUgc29uIHZpc2libGVz","VHJhbnNmZXJlbmNpYSBkZSBnZW5lcyBkZSB1bmEgcG9ibGFjacOzbiBhIG90cmE="];var cp_num=[14,21,32,8,12];var cp_alt=["","","","",""];
var wordsGame="Q29uc3RydXllX0xldHJhcw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var au="";var cp=[];var letters=[];var posAns=0;var lettersId=[];var lettersX=[];var lettersY=[];var lettersAns=[];var answers=[];var indexGame=1;var numle=5; var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";var jobindex=[];
colorText="#000000";colorButton="#50A82D";colorBack="#FFFFFF";colorSele="#D0F58F";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
