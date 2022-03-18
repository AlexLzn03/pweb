OnOff = 0

function OnOffLamp(){
    if(OnOff %2 == 0)
    {
        document.getElementById("lampada").src="./assets/lampadalig.png";
        document.body.style.background = 'rgb(199, 199, 199)';
    }
    else
    {
        document.getElementById("lampada").src="./assets/lampadadesligada.png";
        document.body.style.background = 'rgb(60, 60, 60)';
    }
    OnOff +=1
}