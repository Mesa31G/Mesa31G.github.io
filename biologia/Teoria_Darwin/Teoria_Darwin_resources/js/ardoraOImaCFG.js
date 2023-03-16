//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#11B5B0"; colorText="#000000"; colorSele="#9751AE";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=1; scoMessage=""; scoPtos=10;
var fMenssage="Century Gothic, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Century Gothic, sans-serif";
var timeOnMessage=3; messageOk="LO HAS LOGRADO!!"; messageTime="VUELVE A INTENTARLO"; messageError="VUELVE A INTENTAR "; messageErrorG="VUELVE A INTENTAR "; messageAttempts="SIGUE INTENTANDO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#00FF40"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FFFF00";
var wordsGame="VGVvcmlhX0Rhcndpbg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["dW5vLnBuZw==","ZG9zLnBuZw==","dHJlcy5wbmc=","Y3VhdHJvLnBuZw==","Y2luY28ucG5n"];
var alts=["uno","dos","tres","cuatro","cinco"];
var actMaxWidth="900"; actMaxHeight="700";indexG=0;profG=0;dirMedia="Teoria_Darwin_resources/media/";
var wordsG=[];aW=[];
colorText="#000000";colorButton="#50A82D";colorBack="#FFFFFF";colorSele="#D0F58F";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
