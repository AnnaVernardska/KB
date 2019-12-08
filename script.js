let homeBut =  document.querySelectorAll('.navBut')[0];
let aboutBut =  document.querySelectorAll('.navBut')[1];
let cyberBut =  document.querySelectorAll('.navBut')[2];
let contactBut =  document.querySelectorAll('.navBut')[3];

let homeButM =  document.querySelectorAll('.navBut')[4];
let aboutButM =  document.querySelectorAll('.navBut')[5];
let cyberButM =  document.querySelectorAll('.navBut')[6];
let contactButM =  document.querySelectorAll('.navBut')[7];

let buttons = document.querySelectorAll('.navBut');

let enigma = document.querySelector('.title');
let log = document.querySelector('.subtitle');
let download = document.querySelector('.download');

let modal1 = document.querySelectorAll('.modalka')[0];
let modal2 = document.querySelectorAll('.modalka')[1];
let modal3 = document.querySelectorAll('.modalka')[2];
let modal4 = document.querySelectorAll('.modalka')[3];

let modals = [modal1, modal2, modal3, modal4];

homeBut.addEventListener("click",()=>{
    for(let i = 1; i < modals.length; i++){
        if(!modals[i].classList.contains('none')){
            modals[i].classList.add('none');
        }
    }
    for(let i = 1; i < buttons.length; i++){
        if(buttons[i].classList.contains('yellow')){
            buttons[i].classList.remove('yellow');
        }
    }
    homeBut.classList.add('yellow');
    
    enigma.classList.remove('none');
    log.classList.remove('none');
    download.classList.remove('none');   
});

aboutBut.addEventListener("click",()=>{
    let t = true;
    for(let i = 0; i < modals.length; i++){
        if(i==1){
            continue;
        }
        if(!modals[i].classList.contains('none')){
            modals[i].classList.add('none');
        }
    }
    for(let i = 0; i < buttons.length; i++){
        if(i==1){
            continue;
        }
        if(buttons[i].classList.contains('yellow')){
            buttons[i].classList.remove('yellow');
        }
    }
    modals[1].classList.toggle('none');
    aboutBut.classList.toggle('yellow');
    for(let i = 0; i < modals.length; i++){
        if(!modals[i].classList.contains('none')){
            t = false;
            break;
        }
    }
    if(t){
        enigma.classList.remove('none');
        log.classList.remove('none');
        download.classList.remove('none');
        homeBut.classList.add('yellow');  
    }
    else{
        enigma.classList.add('none');
        log.classList.add('none');
        download.classList.add('none');
    }  
});

cyberBut.addEventListener("click",()=>{
    let t = true;
    for(let i = 0; i < modals.length; i++){
        if(i==2){
            continue;
        }
        if(!modals[i].classList.contains('none')){
            modals[i].classList.add('none');
        }
    }
    for(let i = 0; i < buttons.length; i++){
        if(i==2){
            continue;
        }
        if(buttons[i].classList.contains('yellow')){
            buttons[i].classList.remove('yellow');
        }
    }
    modals[2].classList.toggle('none');
    cyberBut.classList.toggle('yellow');
    for(let i = 0; i < modals.length; i++){
        if(!modals[i].classList.contains('none')){
            t = false;
            break;
        }
    }
    if(t){
        enigma.classList.remove('none');
        log.classList.remove('none');
        download.classList.remove('none');
        homeBut.classList.add('yellow');  
    }
    else{
        enigma.classList.add('none');
        log.classList.add('none');
        download.classList.add('none');
    }  
});

contactBut.addEventListener("click",()=>{
    let t = true;
    for(let i = 0; i < modals.length; i++){
        if(i==3){
            continue;
        }
        if(!modals[i].classList.contains('none')){
            modals[i].classList.add('none');
        }
    }
    for(let i = 0; i < buttons.length; i++){
        if(i==3){
            continue;
        }
        if(buttons[i].classList.contains('yellow')){
            buttons[i].classList.remove('yellow');
        }
    }
    modals[3].classList.toggle('none');
    contactBut.classList.toggle('yellow');
    for(let i = 0; i < modals.length; i++){
        if(!modals[i].classList.contains('none')){
            t = false;
            break;
        }
    }
    if(t){
        enigma.classList.remove('none');
        log.classList.remove('none');
        download.classList.remove('none');
        homeBut.classList.add('yellow');  
    }
    else{
        enigma.classList.add('none');
        log.classList.add('none');
        download.classList.add('none');
    }  
});


homeButM.addEventListener("click",()=>{
    for(let i = 1; i < modals.length; i++){
        if(!modals[i].classList.contains('none')){
            modals[i].classList.add('none');
        }
    }
    for(let i = 0; i < buttons.length; i++){
        if(i==4){
            continue;
        }
        if(buttons[i].classList.contains('yellow')){
            buttons[i].classList.remove('yellow');
        }
    }
    homeButM.classList.toggle('yellow');
    
    enigma.classList.remove('none');
    log.classList.remove('none');
    download.classList.remove('none');   
});

aboutButM.addEventListener("click",()=>{
    let t = true;
    for(let i = 0; i < modals.length; i++){
        if(i==1){
            continue;
        }
        if(!modals[i].classList.contains('none')){
            modals[i].classList.add('none');
        }
    }
    for(let i = 0; i < buttons.length; i++){
        if(i==5){
            continue;
        }
        if(buttons[i].classList.contains('yellow')){
            buttons[i].classList.remove('yellow');
        }
    }
    modals[1].classList.toggle('none');
    aboutButM.classList.toggle('yellow');
    for(let i = 0; i < modals.length; i++){
        if(!modals[i].classList.contains('none')){
            t = false;
            break;
        }
    }
    if(t){
        enigma.classList.remove('none');
        log.classList.remove('none');
        download.classList.remove('none'); 
        homeButM.classList.add('yellow'); 
    }
    else{
        enigma.classList.add('none');
        log.classList.add('none');
        download.classList.add('none');
    }  
});

cyberButM.addEventListener("click",()=>{
    let t = true;
    for(let i = 0; i < modals.length; i++){
        if(i==2){
            continue;
        }
        if(!modals[i].classList.contains('none')){
            modals[i].classList.add('none');
        }
    }
    for(let i = 0; i < buttons.length; i++){
        if(i==6){
            continue;
        }
        if(buttons[i].classList.contains('yellow')){
            buttons[i].classList.remove('yellow');
        }
    }
    modals[2].classList.toggle('none');
    cyberButM.classList.toggle('yellow');
    for(let i = 0; i < modals.length; i++){
        if(!modals[i].classList.contains('none')){
            t = false;
            break;
        }
    }
    if(t){
        enigma.classList.remove('none');
        log.classList.remove('none');
        download.classList.remove('none');  
        homeButM.classList.add('yellow'); 
    }
    else{
        enigma.classList.add('none');
        log.classList.add('none');
        download.classList.add('none');
    }  
});

contactButM.addEventListener("click",()=>{
    let t = true;
    for(let i = 0; i < modals.length; i++){
        if(i==3){
            continue;
        }
        if(!modals[i].classList.contains('none')){
            modals[i].classList.add('none');
        }
    }
    for(let i = 0; i < buttons.length; i++){
        if(i==7){
            continue;
        }
        if(buttons[i].classList.contains('yellow')){
            buttons[i].classList.remove('yellow');
        }
    }
    modals[3].classList.toggle('none');
    contactButM.classList.toggle('yellow');
    for(let i = 0; i < modals.length; i++){
        if(!modals[i].classList.contains('none')){
            t = false;
            break;
        }
    }
    if(t){
        enigma.classList.remove('none');
        log.classList.remove('none');
        download.classList.remove('none'); 
        homeButM.classList.add('yellow');  
    }
    else{
        enigma.classList.add('none');
        log.classList.add('none');
        download.classList.add('none');
    }  
});


