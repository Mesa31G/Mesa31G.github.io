//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=337; timeIni=337; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=10;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;var tiAudio=false;
var colorBack="#800080"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Lo has logrado, muchas felicidades!"; messageTime=""; messageError="¡Hazlo de nuevo!"; messageErrorG="¡Hazlo de nuevo!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="TXVlcnRvc195X2hlcmlkb3M="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}

var col=0; row=0; writeDir=0;
var words=["RVZPTFVDScOTTg==","TU9Mw4lDVUxBUw==","R8OJTkVUSUNB","TMONUElET1M=","QkFDVEVSSUFT","UFJPVEXDjU5BUw=="];var defs=["Implica cambios en las características de las poblaciones de organismos a lo largo del tiempo.","Están formadas por átomos unidos entre sí mediante enlaces químicos.","Es una rama de la biología que estudia cómo se transmiten los caracteres hereditarios de una generación a otra.","Son insolubles en agua, pero solubles en disolventes orgánicos como el alcohol y la acetona.","on microorganismos unicelulares que se encuentran por todas partes y pueden ser dañinas como servibles.","Son esenciales para el crecimiento y desarrollo del cuerpo humano."];
var indexWords=0;var indexAttemps=0;
colorText="#000000";colorButton="#50A82D";colorBack="#FFFFFF";colorSele="#D0F58F";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
