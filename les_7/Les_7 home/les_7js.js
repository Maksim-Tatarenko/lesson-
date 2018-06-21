
 function myClock() {
 let clock = document.getElementById('clock');
 var siteTime = new Date(); 
     	hour = siteTime.getHours(); 
     	min = siteTime.getMinutes();
     	sec = siteTime.getSeconds(); 
    if (hour < 10) hour = "0" + hour;
    if (min < 10) min  = "0" + min;
    if (sec < 10) sec  = "0" + sec;
   

    clock.innerHTML = hour + ":" + min + ":" + sec; 
    setTimeout(myClock, 1000)
}
myClock();




    /*let time = new Date();
	hours = time.getHours();
	min = time.getMinutes();
	sec = time.getUTCSeconds();

	taimer = [
	hours,
	min,
	sec
];
console.log(taimer);*/



/*if (sec < 10) {
		document.write('0' + sec);
	} else (document.write(sec));*/