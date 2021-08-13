document.addEventListener('DOMContentLoaded', () => {
    let aside = document.getElementsByTagName('aside');
    let body = document.getElementsByTagName("body");
    let main = document.querySelector('main');
    let btnMenu =  document.getElementById('check');
    let btnDarkLight = document.getElementById('btnDarkLight');
    let btnDarkLightI = document.getElementsByTagName('i');
    const backgroundBarLenguage = document.querySelectorAll(".background-bar");
    
    let modeLightDark = true;
    btnDarkLight.addEventListener('click',() =>{
        if(modeLightDark){
            localStorage.setItem('modeLightDark',true);
            modeLightDark = false;
        }else{
            localStorage.setItem('modeLightDark',false);
            modeLightDark = true;
        }
        
        changeModeLightDark();
        
    });

    let changeModeLightDark = () => {    

        if(localStorage.getItem('modeLightDark') === 'true'){
            document.documentElement.style.setProperty('--background-color-light','rgb(45, 45, 45)');
            document.documentElement.style.setProperty('--background-color-dark','white');
            document.documentElement.style.setProperty('--color-font','white'); 
            document.documentElement.style.setProperty('--bacground-color-frame','rgba(71,71,71)');
            btnDarkLightI[0].style.color = 'white';
        }else if(localStorage.getItem('modeLightDark') === 'false'){
            document.documentElement.style.setProperty('--background-color-light','white');
            document.documentElement.style.setProperty('--background-color-dark','rgb(45, 45, 45)');
            document.documentElement.style.setProperty('--color-font','black');
            document.documentElement.style.setProperty('--bacground-color-frame','rgba(217,217,217)');
            btnDarkLightI[0].style.color = 'rgb(254, 201, 7, 0.8)';               
        }
    }        

    changeModeLightDark();

    let resizeScreenWindows = () => {
        let ancho =  (document.body.offsetWidth + 17);
        if(ancho >= 751){
            //alert();
            aside[0].style.width = "15%";
        }else{
            aside[0].style.width = "0%";
        }
    }

    /*Cuando se mueve el mouse en la pantalla*/
    body[0].addEventListener('mousemove',(e) =>{
        // Cuando el mouse esta moviendose en la parte izquierda de la pantalla
        if(e.pageX < 50){
            
            asideShow();
            btnMenu.checked = true;
        }
    });

    /*Cuando el mosuse sale del elemeto*/
    body[0].addEventListener('mouseleave',(e) =>{
        asideHide();
        btnMenu.checked = false;
    });

    window.addEventListener('resize', (event) => {
        resizeScreenWindows();
    });
    
    
    
    btnMenu.addEventListener('click', () => {
        if(btnMenu.checked === true){
            asideShow();
        }else if(btnMenu.checked === false){
            asideHide();
        }
        
    });

    const asideShow =  () =>{
        let anchoVentana =  (document.body.offsetWidth + 17);
        if(anchoVentana <= 750 ){
            /*aside[0].style.marginLeft = "0px";
            resizeScreenWindows('15%','85%');*/
            aside[0].style.width = "150px";
        }else if(anchoVentana >= 751 ){
            aside[0].style.width = "15%";
        }
    }

    const asideHide = (ancho) => {
        let anchoVentana =  (document.body.offsetWidth + 17);
        estado = 0;
            if(anchoVentana <= 750 ){
                //aside[0].style.marginLeft = "-150px";
                aside[0].style.width = "0%";
            }
    }

    // Modifica el ancho de las barras que muestra el % de aprendizaje según los lenguajes 
    const addWhidthBarLanguaje = () => {
            for(let i = 0; i < backgroundBarLenguage.length; i++){
                if(i > 1 && i <= 3){
                    
                    backgroundBarLenguage[i].style.width = '75%';
                }
                else if(i > 3 && i <= 5){
                    backgroundBarLenguage[i].style.width = '65%';
                }else if(i == 6){
                    backgroundBarLenguage[i].style.width = '35%';
                }
            }
            console.log("Whid"+(backgroundBarLenguage[1].style.width));
    }

    addWhidthBarLanguaje();
});

