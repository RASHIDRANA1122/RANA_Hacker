
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Online Ludo Game </title>
        <style> 

* {
    border: 0;
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing:border-box;
}



body {
    background-image: url(https://i.ibb.co/PN5V5YS/Capture-2021-09-29-10-31-35-01.jpg);
    background-size:cover;
    background-repeat:repeat;
    background-attachment: fixed;
    
}



.game {
    display: flex;
    flex-wrap: wrap;
    margin: 20px auto;
    position: relative;
    width: 100vw;
    height: 100vw;
    position:absolute;
    bottom:15vh;
    transform:translate(-50% -50%);
}


.cells {
    position: absolute;
    width: 6.66% ;
    height: 6.66%;
    border-collapse:collapse;
    border: 0.1px solid black;
    display:flex;
    background-color:white;
}




.green {
    background-color: #01A147;
}
.red {
    background-color: #ec1d27;
}
.yellow {
    background-color: #ffe01b;
}
.blue {
    background-color: #29b6f6;
}

.house {
    display: inline-block;
    position: absolute;
    width:40%;
    height:40%;
    padding:7%;
    border: 1px solid black;
    
}


.redhouse {
    animation: redready 0.5s ease-in-out infinite;
}



@keyframes redready {
    0%{
        background-color:#ec1d27;
    }
    50% {
        background-color:#810e13;
    }
    100% {
        background-color:#ec1d27;
    }
}



.yellowhouse {
    animation: yellowready 0.5s ease-in-out infinite;
}



@keyframes yellowready {
    0%{
        background-color:#ffe01b;
    }
    50% {
        background-color:#a9920e;
    }
    100% {
        background-color:#ffe01b;
    }
}













.box {
    position: relative;
    width:100%;
    height:100%;
    background-color:white;
    padding:20%;
    border: 1px solid black;
}
.square {
    position: absolute;
    width:25%;
    height:25%;
    border-radius:50%;

}
.square-one {
    top:12%;
    left:12%;
}
.square-two {
    top: 12%;
    right: 12%;
}
.square-three {
    bottom: 12%;
    left: 12%;
}
.square-four {
    bottom: 12%;
    right: 12%;
}



.home {
    position: absolute;
    top:40%;
    left: 40%;
    width: 20%;
    height: 20%;
    border-bottom: 10vw solid #e53935;
    border-top: 10vw solid #fff176;
    border-left: 10vw solid #66bb6a;
    border-right: 10vw solid #29b6f6;
    background-color:transparent;
}






/*.safe {
    background-color: #ffffff;
    -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    border: 0.1px solid black;*/
    
.safe {
background-image: url(https://i.ibb.co/cXmb7c1/star-safe.jpg);

background-repeat:repeat;
background-size:cover;



}
    
}
.g-start {
    background-color: #01A147;
    
}

.y-start {
    background-color: #ffe01b;
    
}
.r-start {
    background-color: #ec1d27;
    

}
.b-start {
    background-color: #29b6f6;
    
}



.yellowpiece {
    
}

.dice {
   width:100%;
}

.mydice {
    
}

.pieceready {
    transform-box:fill-box;
    transform-origin:center;
    animation:vinay 0.1s ease-in-out infinite;
}

@keyframes vinay {
    from {
        transform:rotateZ(0deg);
    }
    to {
        transform:rotateZ(360deg);
    }
}







.rdicebox {
    height:50px;
    width:50px;
    position:absolute;
    bottom:5vh;
    left:45vw;
    border:0px solid white;
    transform-style: preserve-3d;
    /*transform:rotateX(-90deg);*/
    /*transform:rotateY(90deg);*/
    /*animation: tirugura 1s linear infinite;*/
}


@keyframes tirugura {
    from{
        transform:rotateY(0deg);
    }
    to {
        transform:rotateY(1500deg);
    }
}

@keyframes tirugu {
    0% {
        transform:rotateY(0deg);
        
    }
    25% {
        transform:rotateY(360deg);
        
    }
    50% {
        
        transform:rotateX(0deg);
        
        
    }
    75% {
        transform:rotateX(360deg);
        
    }
    
    100% {
        transform:rotateX(-3600deg);
        
    }
}

.card {
    height:50px;
    width:50px;
    text-align:center;
    padding:0px 0px;
    border:0.1px solid white;
    background:red;
    color:black;
    font-size:32px;
    box-sizing:border-box;
    position:absolute;
    text-align:center;
    border-radius:10%;
    /*box-shadow:0px 0px 15px 0.1px black;*/
    
}


#left {
    right:50%;
    transform:rotateY(90deg);
}

#right {
    left:50%;
    transform:rotateY(90deg);
}

#top {
    bottom:50%;
    transform:rotateX(90deg);
}

#bottom {
    top:50%;
    transform:rotateX(90deg);
}

#front {
    transform:translateZ(25px);
}

#back {
    transform:translateZ(-25px);
}

#front .dot1 {
    height:25%;
    width:25%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    left:37.5%;
    top:37.5%;
}

#right .dot1 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    left:10%;
    top:10%;
}

#right .dot2 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    left:40%;
    top:40%;
}

#right .dot3 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    right:10%;
    bottom:10%;
}

#back .dot1 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:10%;
    right:10%;
}

#back .dot2 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:10%;
    left:10%;
}

#back .dot3 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:40%;
    left:40%;
}

#back .dot4 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    bottom:10%;
    right:10%;
}

#back .dot5 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    bottom:10%;
    left:10%;
}

#left .dot1 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    bottom:15%;
    left:15%;
}

#left .dot2 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:10%;
    right:10%;
}

#bottom .dot1 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:10%;
    right:15%;
}

#bottom .dot2 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:40%;
    right:15%;
}

#bottom .dot3 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    bottom:10%;
    right:15%;
}

#bottom .dot4 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:10%;
    left:15%;
}

#bottom .dot5 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:40%;
    left:15%;
}

#bottom .dot6 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    bottom:10%;
    left:15%;
}

#top .dot1 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:15%;
    left:15%;
}

#top .dot2 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:15%;
    right:15%;
}

#top .dot3 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    bottom:15%;
    left:15%;
}

#top .dot4 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    bottom:15%;
    right:15%;
}

.dots {
    background-color:white;
}

.ydicebox {
    height:50px;
    width:50px;
    position:absolute;
    top:5vw;
    right:45vw;
    border:0px solid white;
    transform-style: preserve-3d;
    /*transform:rotateX(-90deg);*/
    /*transform:rotateY(90deg);*/
    /*animation: tirugura 1s linear infinite;*/
    /* Created By YASH Tyagi*/
}

@keyframes tirugur {
    from{
        transform:rotateY(0deg);
    }
    to {
        transform:rotateY(1500deg);
    }
}

@keyframes tirug {
    0% {
        transform:rotateY(0deg);
        
    }
    25% {
        transform:rotateY(360deg);
        
    }
    50% {
        
        transform:rotateX(0deg);
        
        
    }
    75% {
        transform:rotateX(360deg);
        
    }
    
    100% {
        transform:rotateX(-3600deg);
        
    }
}

.ycard {
    height:50px;
    width:50px;
    text-align:center;
    padding:0px 0px;
    border:0.1px solid black;
    background:yellow;
    color:black;
    font-size:32px;
    box-sizing:border-box;
    position:absolute;
    text-align:center;
    border-radius:10%;
    /*box-shadow:0px 0px 15px 0.1px black;*/
    
}


#left1 {
    right:50%;
    transform:rotateY(90deg);
}

#right1 {
    left:50%;
    transform:rotateY(90deg);
}

#top1 {
    bottom:50%;
    transform:rotateX(90deg);
}

#bottom1 {
    top:50%;
    transform:rotateX(90deg);
}

#front1 {
    transform:translateZ(25px);
}

#back1 {
    transform:translateZ(-25px);
}

#front1 .dot1 {
    height:25%;
    width:25%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    left:37.5%;
    top:37.5%;
}

#right1 .dot1 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    left:10%;
    top:10%;
}

#right1 .dot2 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    left:40%;
    top:40%;
}

#right1 .dot3 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    right:10%;
    bottom:10%;
}

#back1 .dot1 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:10%;
    right:10%;
}

#back1 .dot2 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:10%;
    left:10%;
}

#back1 .dot3 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:40%;
    left:40%;
}

#back1 .dot4 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    bottom:10%;
    right:10%;
}

#back1 .dot5 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    bottom:10%;
    left:10%;
}

#left1 .dot1 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    bottom:15%;
    left:15%;
}

#left1 .dot2 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:10%;
    right:10%;
}

#bottom1 .dot1 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:10%;
    right:15%;
}

#bottom1 .dot2 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:40%;
    right:15%;
}

#bottom1 .dot3 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    bottom:10%;
    right:15%;
}

#bottom1 .dot4 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:10%;
    left:15%;
}

#bottom1 .dot5 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:40%;
    left:15%;
}

#bottom1 .dot6 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    bottom:10%;
    left:15%;
}

#top1 .dot1 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:15%;
    left:15%;
}

#top1 .dot2 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    top:15%;
    right:15%;
}

#top1 .dot3 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    bottom:15%;
    left:15%;
}

#top1 .dot4 {
    height:20%;
    width:20%;
    border-radius:50%;
    
    position:absolute;
    transform:translate(-50% -50%);
    bottom:15%;
    right:15%;
}



.ydots {
    background-color:black;
}



.redhome {
    position:absolute;
    top:100%;
    border:0.0px solid white;
    height:10vw;
    left:-5vw;
    width:10vw;
    display:flex;
    flex-basis:25%;
}

.yellowhome {
    position:absolute;
    bottom:100%;
    border:0.0px solid black;
    height:10vw;
    left:-5vw;
    width:10vw;
}


.rsvg {
    height:5vw;
    width:5vw;
}

.r106{
    position:absolute;
    top:0;
    left:0;
    
}

.r107{
    position:absolute;
    top:0;
    right:0;
    
}

.r108{
    position:absolute;
    bottom:0;
    left:0;
    
}

.r109{
    position:absolute;
    bottom:0;
    right:0;
    
}

.rsvg svg {
    height:2vw;
    width:2vw;
}



.ysvg {
    height:5vw;
    width:5vw;
}

.y206{
    position:absolute;
    top:0;
    left:0;
    
}

.y207{
    position:absolute;
    top:0;
    right:0;
    
}

.y208{
    position:absolute;
    bottom:0;
    left:0;
    
}

.y209{
    position:absolute;
    bottom:0;
    right:0;
    
}



canvas {
    position:absolute;
    height:60px;
    width:60px;
}

.yellowuser {
    position:absolute;
    border:0px solid white;
    right:80px;
    top:20px;
}

.yellowuser img {
    position:absolute;
    margin:0px;
    padding:4px;
    height:60px; /*82.5px*/
    border:0px solid black;
    
}

.reduser {
    position:absolute;
    border:0px solid white;
    left:20px;
    bottom:80px;
}

.reduser img {
    position:absolute;
    margin:0px;
    padding:4px;
    height:60px; /*82.5px*/
    border:0px solid black;
    
}

.cheatbox {
    position:absolute;
    height:75px;
    width:150px;
    background-color:rgba(0,255,0,0.2);
    border-radius:10px;
    color:white;
    font-weight:500;
    top:5vw;
    left:5vw;
    font-size:15px;
    border:1px solid yellow;
    display:none;
}

#dicep6 {
    position:absolute;
    top:15px;
    left:20px;
    line-height:5px;
}

#dicep1 {
    position:absolute;
    bottom:15px;
    left:20px;
    line-height:5px;
}

.switch {
    position:absolute;
    top:50px;
    height:10px;
    width:23px;
    background-color:#D3D3D3;
    border-radius:10px;
    border:0.1px solid black;
}

.upswitch {
    top:15px;
    right:20px;
}

.downswitch {
    bottom:15px;
    right:20px;
}



.ball {
    height:15px;
    width:15px;
    border-radius:50%;
    background-color:grey;
    position:absolute;
    top:-2.5px;
    left:-1px;
    transition:0.1s ease-in-out;
    border:0.1px solid black;
}







span {
    display:none;
}

#finalnote {
    position:fixed;
    height:100%;
    width:100%;
    background-color:black;
    z-index:20;
    top:0;
    left:0;
    display:none;
}

#finalnote p{
    position:absolute;
    transform:translate(-50%,-50%);
    top:50%;
    left:50%;
    font-weight:500;
    font-size:30px;
    color:white;
}

/*svg {
    position:absolute;
    top:-9vw;
    left:-10.5vw;
    height:17vw;
    width:17vw;
    z-index:10;
    transition:0.1s ease-in-out;
}*/


svg {
    position:absolute;
    top:-5.6vw;
    left:-3vw;
    height:12vw;
    width:12vw;
    z-index:10;
    transition:0.1s ease-in-out;
}

#yellow1 {
    z-index:5;
}

#yellow2 {
    z-index:5;
}

#yellow3 {
    z-index:5;
}

#yellow4 {
    z-index:5;
}

.autoExit {
    position:absolute;
    width:30px;
    background-color:;
    height:5px;
    top:45px;
    left:15px;
    z-index:2;
    display:flex;
    justify-content:center;
    align-content:space-between;
}

.autoExit div {
    height:4px;
    width:4px;
    border-radius:50%;
    background-color:#1DFE00;
    margin-left:2.5px;
    margin-right:2.5px;
    box-shadow:0px 0px 1px 1px #1DFE00;
}

#hintArrowRed {
    height:50px;
    width:50px;
    position:absolute;
    top:80vh;
    left:45vw;
    animation: hintshow 0.5s ease-in-out infinite; 
}

@keyframes hintshow {
    0%{
        top:73vh;
    }
    50%{
        top:78vh;
    }
    100%{
        top:73vh;
    }
}

/*
.dot2 {
    background-color:white;
}
.dot3 {
    background-color:white;
}
.dot4 {
    background-color:white;
}
.dot5 {
    background-color:white;
}
.dot6 {
    background-color:white;
}
*/</style>
        
    </head>
    <body>
    
    <div class="dice">
        <div class="mydice"> </div>
    </div>
    
    
    
        <div class="game">
    <div class="house green greenhouse">
        <div class="box">
            <div class="square square-one green">
                
            </div>
            <div class="square square-two green">
                
               
            </div>
            <div class="square square-three green">
                
                
            </div>
            <div class="square square-four green">
                
                
            </div>
        </div>
    </div>

    <div class="house yellow yellowhouse" style="right: 0">
        <div class="box">
            <div class="square square-one yellow" id="yellowrestart1" >
                
                <svg class="yellowpiece" id="yellow1"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0%" y="0%"
    width="100%" height="100%"
    viewBox="0 0 24.0 24.0"
    enable-background="new 0 0 24.0 24.0"
    xml:space="preserve">
<defs>
    <linearGradient id="stkGrad1" x1="-3.107%" y1="49.865%" x2="100.605%" y2="50.091%">
           <stop offset="0.000%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="6.078%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="6.915%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="15.308%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="15.397%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="24.482%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="23.852%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="31.406%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="31.673%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="40.151%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="39.950%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="47.912%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="48.169%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="56.636%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="56.896%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="63.504%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="63.484%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="70.505%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="70.453%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="78.398%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="78.685%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="86.747%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="86.677%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="95.395%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="95.665%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="100.000%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
    </linearGradient>

</defs>
    <path
        fill="#FFFFFF"
        stroke="#682400"
        fill-opacity="0.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="1.0240875"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,12.38C14.95,12.38,17.21,14.53,17.21,17.19C17.21,19.84,14.95,21.99,12.15,21.99C9.35,21.99,7.09,19.84,7.09,17.19C7.09,14.53,9.35,12.38,12.15,12.38z"/>
    <path class="pieceready" id="yellow1ready"
        transform = "rotate(-0.00 12.15 17.19)"
        fill="#FFFFFF"
        stroke="url(#stkGrad1)"
        fill-opacity="0.000"
        stroke-opacity="1.0"
        fill-rule="nonzero"
        stroke-width="0.71999997"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,11.55C15.26,11.55,17.79,14.07,17.79,17.19C17.79,20.30,15.26,22.82,12.15,22.82C9.04,22.82,6.51,20.30,6.51,17.19C6.51,14.07,9.04,11.55,12.15,11.55z"/>
    <path
        fill="#FFFFFF"
        stroke="#000000"
        fill-opacity="1.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="0.4011954"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,17.19C9.33,14.13,6.17,10.31,6.01,6.69C6.01,-1.10,18.15,-1.10,18.11,6.65C17.96,10.00,15.12,14.17,12.15,17.19z"/>
    <path
        fill="#ffe01b"
        stroke="#000000"
        fill-opacity="1.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="0.4011954"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M11.92,2.70C14.17,2.70,15.99,4.52,15.99,6.77C15.99,9.02,14.17,10.85,11.92,10.85C9.67,10.85,7.85,9.02,7.85,6.77C7.85,4.52,9.67,2.70,11.92,2.70z"/>
</svg>
                
                
                
                
            </div>
            <div class="square square-two yellow" id="yellowrestart2" >
                
                <svg class="yellowpiece" id="yellow2"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0%" y="0%"
    width="100%" height="100%"
    viewBox="0 0 24.0 24.0"
    enable-background="new 0 0 24.0 24.0"
    xml:space="preserve">
<defs>
    <linearGradient id="stkGrad1" x1="-3.107%" y1="49.865%" x2="100.605%" y2="50.091%">
           <stop offset="0.000%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="6.078%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="6.915%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="15.308%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="15.397%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="24.482%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="23.852%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="31.406%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="31.673%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="40.151%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="39.950%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="47.912%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="48.169%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="56.636%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="56.896%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="63.504%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="63.484%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="70.505%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="70.453%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="78.398%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="78.685%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="86.747%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="86.677%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="95.395%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="95.665%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="100.000%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
    </linearGradient>

</defs>
    <path
        fill="#FFFFFF"
        stroke="#682400"
        fill-opacity="0.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="1.0240875"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,12.38C14.95,12.38,17.21,14.53,17.21,17.19C17.21,19.84,14.95,21.99,12.15,21.99C9.35,21.99,7.09,19.84,7.09,17.19C7.09,14.53,9.35,12.38,12.15,12.38z"/>
    <path class="pieceready" id="yellow2ready"
        transform = "rotate(-0.00 12.15 17.19)"
        fill="#FFFFFF"
        stroke="url(#stkGrad1)"
        fill-opacity="0.000"
        stroke-opacity="1.0"
        fill-rule="nonzero"
        stroke-width="0.71999997"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,11.55C15.26,11.55,17.79,14.07,17.79,17.19C17.79,20.30,15.26,22.82,12.15,22.82C9.04,22.82,6.51,20.30,6.51,17.19C6.51,14.07,9.04,11.55,12.15,11.55z"/>
    <path
        fill="#FFFFFF"
        stroke="#000000"
        fill-opacity="1.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="0.4011954"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,17.19C9.33,14.13,6.17,10.31,6.01,6.69C6.01,-1.10,18.15,-1.10,18.11,6.65C17.96,10.00,15.12,14.17,12.15,17.19z"/>
    <path
        fill="#ffe01b"
        stroke="#000000"
        fill-opacity="1.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="0.4011954"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M11.92,2.70C14.17,2.70,15.99,4.52,15.99,6.77C15.99,9.02,14.17,10.85,11.92,10.85C9.67,10.85,7.85,9.02,7.85,6.77C7.85,4.52,9.67,2.70,11.92,2.70z"/>
</svg>
                
              <!--NEP DEVS-->  
            </div>
            <div class="square square-three yellow" id="yellowrestart3" >
                
                <svg class="yellowpiece" id="yellow3"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0%" y="0%"
    width="100%" height="100%"
    viewBox="0 0 24.0 24.0"
    enable-background="new 0 0 24.0 24.0"
    xml:space="preserve">
<defs>
    <linearGradient id="stkGrad1" x1="-3.107%" y1="49.865%" x2="100.605%" y2="50.091%">
           <stop offset="0.000%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="6.078%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="6.915%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="15.308%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="15.397%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="24.482%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="23.852%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="31.406%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="31.673%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="40.151%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="39.950%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="47.912%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="48.169%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="56.636%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="56.896%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="63.504%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="63.484%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="70.505%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="70.453%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="78.398%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="78.685%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="86.747%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="86.677%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="95.395%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="95.665%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="100.000%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
    </linearGradient>

</defs>
    <path
        fill="#FFFFFF"
        stroke="#682400"
        fill-opacity="0.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="1.0240875"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,12.38C14.95,12.38,17.21,14.53,17.21,17.19C17.21,19.84,14.95,21.99,12.15,21.99C9.35,21.99,7.09,19.84,7.09,17.19C7.09,14.53,9.35,12.38,12.15,12.38z"/>
    <path class="pieceready" id="yellow3ready"
        transform = "rotate(-0.00 12.15 17.19)"
        fill="#FFFFFF"
        stroke="url(#stkGrad1)"
        fill-opacity="0.000"
        stroke-opacity="1.0"
        fill-rule="nonzero"
        stroke-width="0.71999997"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,11.55C15.26,11.55,17.79,14.07,17.79,17.19C17.79,20.30,15.26,22.82,12.15,22.82C9.04,22.82,6.51,20.30,6.51,17.19C6.51,14.07,9.04,11.55,12.15,11.55z"/>
    <path
        fill="#FFFFFF"
        stroke="#000000"
        fill-opacity="1.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="0.4011954"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,17.19C9.33,14.13,6.17,10.31,6.01,6.69C6.01,-1.10,18.15,-1.10,18.11,6.65C17.96,10.00,15.12,14.17,12.15,17.19z"/>
    <path
        fill="#ffe01b"
        stroke="#000000"
        fill-opacity="1.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="0.4011954"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M11.92,2.70C14.17,2.70,15.99,4.52,15.99,6.77C15.99,9.02,14.17,10.85,11.92,10.85C9.67,10.85,7.85,9.02,7.85,6.77C7.85,4.52,9.67,2.70,11.92,2.70z"/>
</svg>
                <!--NEP DEVS-->
                
            </div>
            <div class="square square-four yellow" id="yellowrestart4">
                
                
                <svg class="yellowpiece" id="yellow4"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0%" y="0%"
    width="100%" height="100%"
    viewBox="0 0 24.0 24.0"
    enable-background="new 0 0 24.0 24.0"
    xml:space="preserve">
<defs>
    <linearGradient id="stkGrad1" x1="-3.107%" y1="49.865%" x2="100.605%" y2="50.091%">
           <stop offset="0.000%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="6.078%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="6.915%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="15.308%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="15.397%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="24.482%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="23.852%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="31.406%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="31.673%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="40.151%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="39.950%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="47.912%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="48.169%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="56.636%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="56.896%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="63.504%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="63.484%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="70.505%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="70.453%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="78.398%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="78.685%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="86.747%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="86.677%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="95.395%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="95.665%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="100.000%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
    </linearGradient>

</defs>
    <path
        fill="#FFFFFF"
        stroke="#682400"
        fill-opacity="0.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="1.0240875"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,12.38C14.95,12.38,17.21,14.53,17.21,17.19C17.21,19.84,14.95,21.99,12.15,21.99C9.35,21.99,7.09,19.84,7.09,17.19C7.09,14.53,9.35,12.38,12.15,12.38z"/>
    <path class="pieceready" id="yellow4ready"
        transform = "rotate(-0.00 12.15 17.19)"
        fill="#FFFFFF"
        stroke="url(#stkGrad1)"
        fill-opacity="0.000"
        stroke-opacity="1.0"
        fill-rule="nonzero"
        stroke-width="0.71999997"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,11.55C15.26,11.55,17.79,14.07,17.79,17.19C17.79,20.30,15.26,22.82,12.15,22.82C9.04,22.82,6.51,20.30,6.51,17.19C6.51,14.07,9.04,11.55,12.15,11.55z"/>
    <path
        fill="#FFFFFF"
        stroke="#000000"
        fill-opacity="1.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="0.4011954"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,17.19C9.33,14.13,6.17,10.31,6.01,6.69C6.01,-1.10,18.15,-1.10,18.11,6.65C17.96,10.00,15.12,14.17,12.15,17.19z"/>
    <path
        fill="#ffe01b"
        stroke="#000000"
        fill-opacity="1.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="0.4011954"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M11.92,2.70C14.17,2.70,15.99,4.52,15.99,6.77C15.99,9.02,14.17,10.85,11.92,10.85C9.67,10.85,7.85,9.02,7.85,6.77C7.85,4.52,9.67,2.70,11.92,2.70z"/>
</svg>
                
            </div>
        </div>
    </div>

    <div class="house red redhouse" style="bottom: 0">
        <div class="box">
            <div class="square square-one red" id="redrestart1">
                
                
                
                
                <svg class="redpiece" id="red1"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0%" y="0%"
    width="100%" height="100%"
    viewBox="0 0 24.0 24.0"
    enable-background="new 0 0 24.0 24.0"
    xml:space="preserve">
<defs>
    <linearGradient id="stkGrad1" x1="-3.107%" y1="49.865%" x2="100.605%" y2="50.091%">
           <stop offset="0.000%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="6.078%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="6.915%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="15.308%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="15.397%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="24.482%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="23.852%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="31.406%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="31.673%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="40.151%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="39.950%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="47.912%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="48.169%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="56.636%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="56.896%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="63.504%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="63.484%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="70.505%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="70.453%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="78.398%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="78.685%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="86.747%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="86.677%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="95.395%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="95.665%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="100.000%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
    </linearGradient>

</defs>
    <path
        fill="#FFFFFF"
        stroke="#682400"
        fill-opacity="0.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="1.0240875"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,12.38C14.95,12.38,17.21,14.53,17.21,17.19C17.21,19.84,14.95,21.99,12.15,21.99C9.35,21.99,7.09,19.84,7.09,17.19C7.09,14.53,9.35,12.38,12.15,12.38z"/>
    <path class="pieceready" id="red1ready"
        transform = "rotate(-0.00 12.15 17.19)"
        fill="#FFFFFF"
        stroke="url(#stkGrad1)"
        fill-opacity="0.000"
        stroke-opacity="1.0"
        fill-rule="nonzero"
        stroke-width="0.71999997"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,11.55C15.26,11.55,17.79,14.07,17.79,17.19C17.79,20.30,15.26,22.82,12.15,22.82C9.04,22.82,6.51,20.30,6.51,17.19C6.51,14.07,9.04,11.55,12.15,11.55z"/>
    <path
        fill="#FFFFFF"
        stroke="#000000"
        fill-opacity="1.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="0.4011954"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,17.19C9.33,14.13,6.17,10.31,6.01,6.69C6.01,-1.10,18.15,-1.10,18.11,6.65C17.96,10.00,15.12,14.17,12.15,17.19z"/>
    <path
        fill="#ec1d27"
        stroke="#000000"
        fill-opacity="1.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="0.4011954"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M11.92,2.70C14.17,2.70,15.99,4.52,15.99,6.77C15.99,9.02,14.17,10.85,11.92,10.85C9.67,10.85,7.85,9.02,7.85,6.77C7.85,4.52,9.67,2.70,11.92,2.70z"/>
</svg>
                
                
                
                
                
                
                
                
                <!-- NEP DEVS -->
                
                
                <!-- NEP DEVS -->
                
                
                
                
                
                <!-- NEP DEVS -->
                
                
            </div>
            <div class="square square-two red" id="redrestart2">
                
                
                <svg class="redpiece" id="red2"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0%" y="0%"
    width="100%" height="100%"
    viewBox="0 0 24.0 24.0"
    enable-background="new 0 0 24.0 24.0"
    xml:space="preserve">
<defs>
    <linearGradient id="stkGrad1" x1="-3.107%" y1="49.865%" x2="100.605%" y2="50.091%">
           <stop offset="0.000%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="6.078%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="6.915%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="15.308%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="15.397%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="24.482%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="23.852%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="31.406%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="31.673%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="40.151%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="39.950%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="47.912%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="48.169%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="56.636%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="56.896%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="63.504%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="63.484%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="70.505%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="70.453%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="78.398%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="78.685%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="86.747%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="86.677%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="95.395%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="95.665%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="100.000%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
    </linearGradient>

</defs>
    <path
        fill="#FFFFFF"
        stroke="#682400"
        fill-opacity="0.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="1.0240875"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,12.38C14.95,12.38,17.21,14.53,17.21,17.19C17.21,19.84,14.95,21.99,12.15,21.99C9.35,21.99,7.09,19.84,7.09,17.19C7.09,14.53,9.35,12.38,12.15,12.38z"/>
    <path class="pieceready" id="red2ready"
        transform = "rotate(-0.00 12.15 17.19)"
        fill="#FFFFFF"
        stroke="url(#stkGrad1)"
        fill-opacity="0.000"
        stroke-opacity="1.0"
        fill-rule="nonzero"
        stroke-width="0.71999997"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,11.55C15.26,11.55,17.79,14.07,17.79,17.19C17.79,20.30,15.26,22.82,12.15,22.82C9.04,22.82,6.51,20.30,6.51,17.19C6.51,14.07,9.04,11.55,12.15,11.55z"/>
    <path
        fill="#FFFFFF"
        stroke="#000000"
        fill-opacity="1.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="0.4011954"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,17.19C9.33,14.13,6.17,10.31,6.01,6.69C6.01,-1.10,18.15,-1.10,18.11,6.65C17.96,10.00,15.12,14.17,12.15,17.19z"/>
    <path
        fill="#ec1d27"
        stroke="#000000"
        fill-opacity="1.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="0.4011954"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M11.92,2.70C14.17,2.70,15.99,4.52,15.99,6.77C15.99,9.02,14.17,10.85,11.92,10.85C9.67,10.85,7.85,9.02,7.85,6.77C7.85,4.52,9.67,2.70,11.92,2.70z"/>
</svg>
                
                
                
                
                
            </div>
            <div class="square square-three red" id="redrestart3" >
                
                
                <svg class="redpiece" id="red3"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0%" y="0%"
    width="100%" height="100%"
    viewBox="0 0 24.0 24.0"
    enable-background="new 0 0 24.0 24.0"
    xml:space="preserve">
<defs>
    <linearGradient id="stkGrad1" x1="-3.107%" y1="49.865%" x2="100.605%" y2="50.091%">
           <stop offset="0.000%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="6.078%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="6.915%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="15.308%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="15.397%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="24.482%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="23.852%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="31.406%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="31.673%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="40.151%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="39.950%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="47.912%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="48.169%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="56.636%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="56.896%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="63.504%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="63.484%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="70.505%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="70.453%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="78.398%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="78.685%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="86.747%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="86.677%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="95.395%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="95.665%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="100.000%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
    </linearGradient>

</defs>
    <path
        fill="#FFFFFF"
        stroke="#682400"
        fill-opacity="0.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="1.0240875"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,12.38C14.95,12.38,17.21,14.53,17.21,17.19C17.21,19.84,14.95,21.99,12.15,21.99C9.35,21.99,7.09,19.84,7.09,17.19C7.09,14.53,9.35,12.38,12.15,12.38z"/>
    <path class="pieceready" id="red3ready"
        transform = "rotate(-0.00 12.15 17.19)"
        fill="#FFFFFF"
        stroke="url(#stkGrad1)"
        fill-opacity="0.000"
        stroke-opacity="1.0"
        fill-rule="nonzero"
        stroke-width="0.71999997"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,11.55C15.26,11.55,17.79,14.07,17.79,17.19C17.79,20.30,15.26,22.82,12.15,22.82C9.04,22.82,6.51,20.30,6.51,17.19C6.51,14.07,9.04,11.55,12.15,11.55z"/>
    <path
        fill="#FFFFFF"
        stroke="#000000"
        fill-opacity="1.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="0.4011954"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,17.19C9.33,14.13,6.17,10.31,6.01,6.69C6.01,-1.10,18.15,-1.10,18.11,6.65C17.96,10.00,15.12,14.17,12.15,17.19z"/>
    <path
        fill="#ec1d27"
        stroke="#000000"
        fill-opacity="1.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="0.4011954"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M11.92,2.70C14.17,2.70,15.99,4.52,15.99,6.77C15.99,9.02,14.17,10.85,11.92,10.85C9.67,10.85,7.85,9.02,7.85,6.77C7.85,4.52,9.67,2.70,11.92,2.70z"/>
</svg>
                
                
                
                
            </div>
            <div class="square square-four red" id="redrestart4">
                
                
                <svg class="redpiece" id="red4"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0%" y="0%"
    width="100%" height="100%"
    viewBox="0 0 24.0 24.0"
    enable-background="new 0 0 24.0 24.0"
    xml:space="preserve">
<defs>
    <linearGradient id="stkGrad1" x1="-3.107%" y1="49.865%" x2="100.605%" y2="50.091%">
           <stop offset="0.000%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="6.078%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="6.915%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="15.308%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="15.397%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="24.482%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="23.852%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="31.406%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="31.673%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="40.151%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="39.950%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="47.912%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="48.169%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="56.636%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="56.896%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="63.504%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="63.484%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="70.505%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="70.453%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="78.398%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="78.685%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="86.747%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="86.677%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="95.395%" style="stop-color:rgb(255,255,255);stop-opacity:1.000" />
        <stop offset="95.665%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
        <stop offset="100.000%" style="stop-color:rgb(0,0,0);stop-opacity:1.000" />
    </linearGradient>

</defs>
    <path
        fill="#FFFFFF"
        stroke="#682400"
        fill-opacity="0.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="1.0240875"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,12.38C14.95,12.38,17.21,14.53,17.21,17.19C17.21,19.84,14.95,21.99,12.15,21.99C9.35,21.99,7.09,19.84,7.09,17.19C7.09,14.53,9.35,12.38,12.15,12.38z"/>
    <path class="pieceready" id="red4ready"
        transform = "rotate(-0.00 12.15 17.19)"
        fill="#FFFFFF"
        stroke="url(#stkGrad1)"
        fill-opacity="0.000"
        stroke-opacity="1.0"
        fill-rule="nonzero"
        stroke-width="0.71999997"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,11.55C15.26,11.55,17.79,14.07,17.79,17.19C17.79,20.30,15.26,22.82,12.15,22.82C9.04,22.82,6.51,20.30,6.51,17.19C6.51,14.07,9.04,11.55,12.15,11.55z"/>
    <path
        fill="#FFFFFF"
        stroke="#000000"
        fill-opacity="1.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="0.4011954"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.15,17.19C9.33,14.13,6.17,10.31,6.01,6.69C6.01,-1.10,18.15,-1.10,18.11,6.65C17.96,10.00,15.12,14.17,12.15,17.19z"/>
    <path
        fill="#ec1d27"
        stroke="#000000"
        fill-opacity="1.000"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="0.4011954"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M11.92,2.70C14.17,2.70,15.99,4.52,15.99,6.77C15.99,9.02,14.17,10.85,11.92,10.85C9.67,10.85,7.85,9.02,7.85,6.77C7.85,4.52,9.67,2.70,11.92,2.70z"/>
</svg>
                
                
                
                
            </div>
        </div>
    </div>

    <div class="house blue bluehouse" style="bottom: 0;right: 0">
        <div class="box">
            <div class="square square-one blue"></div>
            <div class="square square-two blue"></div>
            <div class="square square-three blue"></div>
            <div class="square square-four blue"></div>
        </div>
    </div>

    <div class="home">
        
      <div class="yellowhome"> 
      
      <div class="ysvg y206" id="206"> </div>
      <div class="ysvg y207" id="207"> </div>
      <div class="ysvg y208" id="208"> </div>
      <div class="ysvg y209" id="209"> </div>
      
      </div>
        
        
      <div class="redhome"> 
      
      <div class="rsvg r106" id="106"> </div>
      <div class="rsvg r107" id="107"> </div>
      <div class="rsvg r108" id="108"> </div>
      <div class="rsvg r109" id="109"> </div>
      
      </div>
        
    </div>
    <div class="cells" id="39"style="top: 40%;"></div>
    <div class="cells g-start" id="40"style="top: 40%;left:6.66%; background-color:#01A147"><span>40</span></div>
    <div class="cells" id="41"style="top: 40%;left:13.32%;"></div>
    <div class="cells" id="42"style="top: 40%;left:19.98%;"></div>
    <div class="cells" id="43"style="top: 40%;left:26.64%;"></div>
    <div class="cells" id="44"style="top: 40%;left:33.3%;"></div>

    <div class="cells" id="50"style="top: 0;left:40%;"></div>
    <div class="cells" id="49"style="top: 6.66%;left:40%;"></div>
    <div class="cells safe" id="48"style="top: 13.32%;left:40%;"><span>48</span></div>
    <div class="cells" id="47"style="top: 19.98%;left:40%;"></div>
    <div class="cells" id="46"style="top: 26.64%;left:40%;"></div>
    <div class="cells" id="45"style="top: 33.3%;left:40%;"></div>

    <div class="cells" id="51"style="top: 0;left:46.66%;"></div>
    <div class="cells yellow" id="201" style="top: 6.66%;left:46.66%;"></div>
    <div class="cells yellow" id="202" style="top: 13.32%;left:46.66%;"></div>
    <div class="cells yellow" id="203" style="top: 19.98%;left:46.66%;"></div>
    <div class="cells yellow" id="204" style="top: 26.64%;left:46.66%;"></div>
    <div class="cells yellow" id="205" style="top: 33.3%;left:46.66%;"></div>

    <div class="cells" id="52"style="top: 0;left:53.32%;"></div>
    <div class="cells y-start" id="1"style="top: 6.66%;left:53.32%;"><span>1</span></div>
    <div class="cells" id="2"style="top: 13.32%;left:53.32%;"></div>
    <div class="cells" id="3" style="top: 19.98%;left:53.32%;"></div>
    <div class="cells" id="4" style="top: 26.64%;left:53.32%;"></div>
    <div class="cells" id="5" style="top: 33.3%;left:53.32%;"></div>

    <div class="cells" id="6"style="top: 40%; right: 33.3%"></div>
    <div class="cells" id="7"style="top: 40%;right:26.64%;"></div>
    <div class="cells" id="8"style="top: 40%;right:19.98%;"></div>
    <div class="cells safe" id="9"style="top: 40%;right:13.32%;"><span>9</span></div>
    <div class="cells" id="10"style="top: 40%;right:6.66%;"></div>
    <div class="cells" id="11"style="top: 40%;right:0;"></div>

    <div class="cells blue" style="top: 46.66%; right: 33.3%"></div>
    <div class="cells blue" style="top: 46.66%;right:26.64%;"></div>
    <div class="cells blue" style="top: 46.66%;right:19.98%;"></div>
    <div class="cells blue" style="top: 46.66%;right:13.32%;"></div>
    <div class="cells blue" style="top: 46.66%;right:6.66%;"></div>
    <div class="cells" id="12"style="top: 46.66%;right:0;"></div>

    <div class="cells" id="18"style="top: 53.32%; right: 33.3%"></div>
    <div class="cells" id="17"style="top: 53.32%;right:26.64%;"></div>
    <div class="cells" id="16"style="top: 53.32%;right:19.98%;"></div>
    <div class="cells" id="15"style="top: 53.32%;right:13.32%;"></div>
    <div class="cells b-start" id="14"style="top: 53.32%;right:6.66%;"><span>14</span></div>
    <div class="cells" id="13"style="top: 53.32%;right:0;"></div>

    <div class="cells" id="24"style="bottom: 0;left:53.32%;"> </div>
    <div class="cells" id="23"style="bottom: 6.66%;left:53.32%;"> </div>
    <div class="cells safe" id="22"style="bottom: 13.32%;left:53.32%;"><span>22</span></div>
    <div class="cells" id="21"style="bottom: 19.98%;left:53.32%;"> </div>
    <div class="cells" id="20"style="bottom: 26.64%;left:53.32%;"> </div>
    <div class="cells" id="19"style="bottom: 33.3%;left:53.32%;"> </div>

    <div class="cells" id="25"style="bottom: 0;left:46.66%;"> </div>
    <div class="cells red " id="101"style="bottom: 6.66%;left:46.66%;"></div>
    <div class="cells red" id="102"style="bottom: 13.32%;left:46.66%;"></div>
    <div class="cells red" id="103"style="bottom: 19.98%;left:46.66%;"></div>
    <div class="cells red" id="104"style="bottom: 26.64%;left:46.66%;"></div>
    <div class="cells red" id="105"style="bottom: 33.3%;left:46.66%;"></div>

    <div class="cells" id="26" style="bottom: 0;left:40%;"> </div>
    <div class="cells r-start" id="27"style="bottom: 6.66%;left:40%;"><span>27</span></div>
    <div class="cells" id="28" style="bottom: 13.32%;left:40%;"> </div>
    <div class="cells" id="29"style="bottom: 19.98%;left:40%;"> </div>
    <div class="cells" id="30" style="bottom: 26.64%;left:40%;"> </div>
    <div class="cells" id="31"style="bottom: 33.3%;left:40%;"> </div>

    <div class="cells" id="32"style="top: 53.32%; left: 33.3%"> </div>
    <div class="cells" id="33"style="top: 53.32%;left:26.64%;"> </div>
    <div class="cells" id="34"style="top: 53.32%;left:19.98%;"> </div>
    <div class="cells safe" id="35"style="top: 53.32%;left:13.32%;"> <span>35</span></div>
    <div class="cells" id="36"style="top: 53.32%;left:6.66%;"> </div>
    <div class="cells" id="37"style="top: 53.32%;left:0;"> </div>

    <div class="cells green" id="red111"style="top: 46.66%;left: 33.3%"></div>
    <div class="cells green" style="top: 46.66%;left:26.64%;"></div>
    <div class="cells green" style="top: 46.66%;left:19.98%;"></div>
    <div class="cells green" style="top: 46.66%;left:13.32%;"></div>
    <div class="cells green" style="top: 46.66%;left:6.66%;"></div>
    <div class="cells" id="38"style="top: 46.66%;left:0;">   </div>


</div>


<p id="live">  </p>




<div class="ydicebox" id="ydicebox">
       <div class="ycard" id="front1">
       
       <div class="dot1 ydots " > </div>
       
       </div>
       <div class="ycard" id="back1">
       
       <div class="dot1 ydots"> </div>
       <div class="dot2 ydots"> </div>
       <div class="dot3 ydots"> </div>
       <div class="dot4 ydots"> </div>
       <div class="dot5 ydots"> </div>
       
       </div>
       <div class="ycard" id="left1">
       
       <div class="dot1 ydots"> </div>
       <div class="dot2 ydots"> </div>
       
       </div>
       <div class="ycard" id="right1">
         
         <div class="dot1 ydots"> </div>
         <div class="dot2 ydots"> </div>
         <div class="dot3 ydots"> </div>
         
       </div>
       <div class="ycard" id="top1">
       
         <div class="dot1 ydots"> </div>
         <div class="dot2 ydots"> </div>
         <div class="dot3 ydots"> </div>
         <div class="dot4 ydots"> </div>
         
       </div>
       <div class="ycard" id="bottom1">
         <div class="dot1 ydots"> </div>
         <div class="dot2 ydots"> </div>
         <div class="dot3 ydots"> </div>
         <div class="dot4 ydots"> </div>
         <div class="dot5 ydots"> </div>
         <div class="dot6 ydots"> </div>
       
       </div>
    </div> 

<svg id="hintArrowRed"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0%" y="0%"
    width="100%" height="100%"
    viewBox="0 0 24.0 24.0"
    enable-background="new 0 0 24.0 24.0"
    xml:space="preserve">
<defs>
    <linearGradient id="fillGrad22" x1="49.661%" y1="12.877%" x2="50.010%" y2="98.830%">
           <stop offset="0.000%" style="stop-color:rgb(239,255,11);stop-opacity:1.000" />
        <stop offset="49.859%" style="stop-color:rgb(255,149,0);stop-opacity:1.000" />
        <stop offset="100.000%" style="stop-color:rgb(255,0,0);stop-opacity:1.000" />
    </linearGradient>

</defs>
    <path
        transform = "rotate(-0.00 12.16 12.21)"
        fill="url(#fillGrad22)"
        stroke="#000000"
        fill-opacity="1.0"
        stroke-opacity="1.000"
        fill-rule="nonzero"
        stroke-width="0.3057089"
        stroke-linejoin="miter"
        stroke-linecap="square"
        d="M12.75,19.93L23.31,9.27C23.85,8.62,23.70,8.00,23.00,7.90L20.29,7.90L20.29,4.94Q20.13,4.21,19.15,4.21L4.93,4.17Q3.75,4.16,3.54,5.11L3.54,8.01L1.08,8.01C0.42,8.26,0.63,8.79,1.27,9.62L11.15,19.93Q12.00,20.58,12.75,19.93z"/>
</svg>



<div class="rdicebox" id="rdicebox">
       <div class="card" id="front">
       
       <div class="dot1 dots " > </div>
       
       </div>
       <div class="card" id="back">
       
       <div class="dot1 dots"> </div>
       <div class="dot2 dots"> </div>
       <div class="dot3 dots"> </div>
       <div class="dot4 dots"> </div>
       <div class="dot5 dots"> </div>
       
       </div>
       <div class="card" id="left">
       
       <div class="dot1 dots"> </div>
       <div class="dot2 dots"> </div>
       
       </div>
       <div class="card" id="right">
         
         <div class="dot1 dots"> </div>
         <div class="dot2 dots"> </div>
         <div class="dot3 dots"> </div>
         
       </div>
       <div class="card" id="top">
       
         <div class="dot1 dots"> </div>
         <div class="dot2 dots"> </div>
         <div class="dot3 dots"> </div>
         <div class="dot4 dots"> </div>
         
       </div>
       <div class="card" id="bottom">
         <div class="dot1 dots"> </div>
         <div class="dot2 dots"> </div>
         <div class="dot3 dots"> </div>
         <div class="dot4 dots"> </div>
         <div class="dot5 dots"> </div>
         <div class="dot6 dots"> </div>
       
       </div>
    </div>
    
    <div class="yellowuser" id="yellowuser">
<canvas id="my_canvas" width="70" height="70" style="">

</canvas>

<img style="border-radius:50%;" 
src="https://i.ibb.co/qBL3SgJ/IMG-20220321-151132-192.jpg"/> 



</div>



<script> 

var al = 100;

var ctx = document.getElementById('my_canvas').getContext('2d'); 

var start = 4.72; 
var startColor = "#1DFE00"; //red "#1DFE00"
var cw = ctx.canvas.width; 
var ch = ctx.canvas.height; 
var diff; 
function progressSim(){ 
    diff = ((al / 100) * Math.PI*2*10).toFixed(2);     ctx.clearRect(0, 0, cw, ch); 
    ctx.lineWidth = 9;     
ctx.fillStyle = '#09F'; 
    ctx.strokeStyle = startColor;     
ctx.textAlign = 'center';     
ctx.fillText('', cw*.5, ch*.5+2, cw);     ctx.beginPath();     
ctx.arc(35, 35, 30, start, diff/10+start, false);     ctx.stroke();

if(al <= 25)
{
    startColor = "red";
}
else if(al < 60 && al > 25)
{
    startColor = "orange";
}
else {
    startColor = "#1DFE00";
}


if(al <= 0){         
clearInterval(sim);

} 
    al--; 
}

sim = setInterval(progressSim, 150); 
clearInterval(sim);

</script> 


<div class="reduser" id="reduser">
<canvas id="my_canvas2" width="70" height="70" style="">

</canvas>

<img style="border-radius:50%;" src="https://i.ibb.co/QKD4MCt/images-22-01.png"/>

<div class="autoExit">
    <div id="c3"></div>
    <div id="c2"></div>
    <div id="c1"></div>
</div>


</div>




<script> 



</script>


<div class="cheatbox">
            <p id="dicep6"> 6 Only </p>
            <div class="switch upswitch" id="dice6ballbg">
                <div class="ball" id="ball1"> </div>
            </div>
            
            
            <p id="dicep1"> 1 Only </p>
            
            <div class="switch downswitch" id="dice1ballbg">
                <div class="ball" id="ball2"> </div>
            </div>
            
        </div>

    <div id="finalnote">
        
        <p id="finalnotep"> You Won </p>
        
    </div>
    
<script> 

window.onload = function () {


var diceMove1 = new Audio("https://dl.dropboxusercontent.com/s/z7kwanleo6vni5x/1%20dice.mp3?dl=0");
diceMove1.preload="auto";

var diceMove2 = new Audio("https://dl.dropboxusercontent.com/s/eq23l4kqjpcc9wf/2%20dice.mp3?dl=0");
diceMove2.preload="auto";

var diceMove3 = new Audio("https://dl.dropboxusercontent.com/s/w1kz4j6rn03o6ti/3%20dice.mp3?dl=0");
diceMove3.preload="auto";

var diceMove4 = new Audio("https://dl.dropboxusercontent.com/s/wxcdu13y1u5qy6d/4%20dice.mp3?dl=0");
diceMove4.preload="auto";

var diceMove5 = new Audio("https://dl.dropboxusercontent.com/s/c3ca85oz3j7gta7/5%20dice.mp3?dl=0");
diceMove5.preload="auto";

var diceMove6 = new Audio("https://dl.dropboxusercontent.com/s/6l73tj7qybhncza/6%20dice.mp3?dl=0");
diceMove6.preload="auto";

var diceDie = new Audio("https://dl.dropboxusercontent.com/s/c2wrdqdnyku82we/Die%20sound.mp3?dl=0");
diceDie.preload ="auto";

var diceSound = new Audio("https://dl.dropboxusercontent.com/s/6sji3hofyb4ztb5/Dice%20roll.mp3?dl=0");
diceSound.preload = "auto";

var pantaSound = new Audio("https://dl.dropboxusercontent.com/s/g956e4zuulplkxr/panta_tone.mp3?dl=0");

var diceRand = 0;
var diceRandY = 0;


/*if (window.navigator.onLine) {
onlineMode();
} else {
offlineMode();
}*/

var r1clickvar;

var redHomeVal = 106;
var yelHomeVal = 206;

var isEverythingFree = true;

var hasExtraChanceY = false;
var hasExtraChance = false;

class RedPiece {
    
    static activeCount = 0;
    
    constructor(id)
    {
        this.id = id;
        this.color = "red";
        this.piece = document.getElementById(id);
        this.redpieceready = document.getElementById(""+this.id+"ready");
        this.steps = 0;
        this.isAlive = false;
        this.currBlock = 0;
        this.isMovable = true;
        this.isCurrentlyMovable = true;
        this.isMoving = false;
        this.isReachedDestination = false;
    }
    
    ready() {
        this.redpieceready.style.opacity = 1;
    }
    
    notready() {
        this.redpieceready.style.opacity = 0;
    }
    
    dead() {
        this.redpieceready.style.opacity = 0;
    }
    
    getp() {
        return this.piece;
    }
    
    release() {
    if(diceRand == 6 && !this.isAlive) { 
    document.getElementById("hintArrowRed").style.display = "block";
    box.onclick = boxclick;
    diceRand = 0;
    checkAdjustments(); document.getElementById("27").append(this.piece);
      RedPiece.activeCount += 1;
      this.isAlive = true;
      this.currBlock = 27;
      //alert(RedPiece.activeCount);
      
      }
    }
    
    move() {
    
    
    if(this.isMovable) {
    this.currBlock = this.currBlock+1;
    this.steps+=1;
    if(this.steps == 51)
    {
        this.currBlock = 101;
    }
    
    if(this.currBlock >= 106)
    {
        this.currBlock = redHomeVal;
        this.isReachedDestination = true;
        this.piece.style.height = "5vw";
        this.piece.style.width = "5vw";
        checkWin(this);
        hasExtraChance = true;
        redHomeVal++;
        pantaSound.play();
        this.isMovable = false;
    } document.getElementById(""+this.currBlock).append(this.piece);
            if(this.currBlock == 52)
            {
                this.currBlock = 0;
            }
            
    
    //clearInterval(this.moveinterval,n*100);
           }
        }
        
    die() {
        
        
        if(this.steps==0)
        {
        if(this.id == "red1") { document.getElementById("redrestart1").append(this.piece); }
        if(this.id == "red2") { document.getElementById("redrestart2").append(this.piece); }
        if(this.id == "red3") { document.getElementById("redrestart3").append(this.piece); }
        if(this.id == "red4") { document.getElementById("redrestart4").append(this.piece); }
        this.currBlock = 0;
        
         this.isAlive = false;
        }
        else
        {
        if(this.currBlock == 1)
        {
            this.currBlock = 53;
        }
        this.currBlock = this.currBlock-1;
        this.steps-=1;
        document.getElementById(""+this.currBlock).append(this.piece);
        }
        
        
        
        
    }
}


class YellowPiece {
    
    static aliveCount = 0;
    
    constructor(id)
    {
        this.id = id;
        this.color = "yellow";
        this.piece = document.getElementById(id);
        this.yellowpieceready = document.getElementById(""+this.id+"ready");
        this.isMovable = true;
        this.currBlock = 0;
        this.steps = 0;
        this.isAlive = false;
        this.isCurrentlyMovable = true;
        this.isMoving = false;
        this.isReachedDestination = false;
    }
    
    ready() {
        this.yellowpieceready.style.opacity = 0;
    }
    
    dead() {
        this.yellowpieceready.style.opacity = 0;
    }
    
    release() {
      document.getElementById("1").append(this.piece);
      this.currBlock = 1;
      this.isAlive = true;
      YellowPiece.activeCount += 1;
      checkAdjustments();
    }
    
    move() {
        
        if(this.isMovable) {
    this.currBlock = this.currBlock+1;
    this.steps+=1;
    if(this.steps == 51)
    {
        this.currBlock = 201;
    }
    
    if(this.currBlock >= 206)
    {
        this.currBlock = yelHomeVal;
        this.isReachedDestination = true;
        this.piece.style.height = "5vw";
        this.piece.style.width = "5vw";
        checkWin(this);
        hasExtraChanceY = true;
        yelHomeVal++;
        pantaSound.play();
        this.isMovable = false;
    } document.getElementById(""+this.currBlock).append(this.piece);
            if(this.currBlock == 52)
            {
                this.currBlock = 0;
            }
            
    
    //clearInterval(this.moveinterval,n*100);
    
           }
    }
    
    die() {
        
        if(this.steps<=0)
        {
        if(this.id == "yellow1") { document.getElementById("yellowrestart1").append(this.piece); }
        if(this.id == "yellow2") { document.getElementById("yellowrestart2").append(this.piece); }
        if(this.id == "yellow3") { document.getElementById("yellowrestart3").append(this.piece); }
        if(this.id == "yellow4") { document.getElementById("yellowrestart4").append(this.piece); } 
         this.isAlive = false;
         this.steps = 0;
        }
        else
        {
        /*if(this.currBlock == 1)
        {
            this.currBlock = 53;
        }*/
        this.currBlock = this.currBlock-1;
        this.steps-=1;
        document.getElementById(""+this.currBlock).append(this.piece);
        }
}
}


var r1 = new RedPiece("red1");
var r2 = new RedPiece("red2");
var r3 = new RedPiece("red3");
var r4 = new RedPiece("red4");

var rarr = [r1,r2,r3,r4];

var y1 = new YellowPiece("yellow1");
var y2 = new YellowPiece("yellow2");
var y3 = new YellowPiece("yellow3");
var y4 = new YellowPiece("yellow4");

var yarr = [y1,y2,y3,y4];

for(let i=0;i<4;i++)
    {
       rarr[i].dead();
       yarr[i].dead();
    }





class Board {
    
    constructor(color) 
    {
        this.color = color;
    }
    
    active()
    {
    document.getElementsByClassName(this.color+"house")[0].style.animation = this.color+"ready 0.5s ease-in-out infinite";
    this.isActive = true;
    
    
    }
    inactive()
    {
        document.getElementsByClassName(this.color+"house")[0].style.animation = "none";
    this.isActive = false;
    
    
    }
    
    
}


var yellowBoard = new Board("yellow");

var redBoard = new Board("red");


redBoard.active();
yellowBoard.inactive();

var yellowuser = document.getElementById("yellowuser");

var reduser = document.getElementById("reduser");


function toggled() {
    
    //alert(redBoard.isActive);
    
    if(redBoard.isActive)
    {
        redBoard.inactive();
        yellowBoard.active();
        document.getElementById("hintArrowRed").style.display = "none";
        box.style.display = "none";
        ybox.style.display = "block";
        yellowuser.style.display = "block";
        reduser.style.display = "none";
        clearInterval(sim2);
        clearInterval(sim);
        al = 100;
        sim = setInterval(progressSim,50);
    }
    else
    {
        redBoard.active();
        document.getElementById("hintArrowRed").style.display = "block";
        playerInactive = true;
        box.onclick = boxclick;
        yellowBoard.inactive();
        box.style.display = "block";
        ybox.style.display = "none";
        yellowuser.style.display = "none";
        reduser.style.display = "block";
        clearInterval(sim);
        clearInterval(sim2);
        al2 = 100;
        sim2 = setInterval(progressSim2,50);
    }
    
}






var ybox = document.getElementById("ydicebox");

class YellowDice {
    constructor ()
    {
        this.diceReady = true;
        this.diceValue = 0;
    }
    
    roll() {
    
    
    diceSound.play();
    ybox.style.animation = "tirugur 1s linear infinite";
    for(let i=0;i<4;i++)
    {
    if(!(yarr[i].isReachedDestination))
        yarr[i].piece.style.zIndex = "15";
    else
        yarr[i].piece.style.zIndex = "10";
    if(!(rarr[i].isReachedDestination))
        rarr[i].piece.style.zIndex = "10";
    else
        rarr[i].piece.style.zIndex = "15";
    }
    if(dice6hack)
    diceRandY = 6;
    else if(dice1hack)
    diceRandY = 1;
    else
    diceRandY = Math.floor(Math.random()*7);
    //diceRandY = 6;
    this.diceValue = diceRandY;
    
    
    setTimeout( function () {
    
    ybox.style.animation = "none";
    
    
    if(diceRandY==0)
    diceRandY=1;
    
    ybox.style.transform = "rotateX(0deg)";
    ybox.style.transform = "rotateY(0deg)";
    
    switch(diceRandY) {
        case 1:
        
        ybox.style.transform = "rotateX(0deg)";
        ybox.style.transform = "rotateY(0deg)";
        
        break;
        
        case 2:
        
        ybox.style.transform = "rotateX(0deg)";
        ybox.style.transform = "rotateY(90deg)";
        
        
        break;
        
        case 3:
        
        ybox.style.transform = "rotateX(0deg)";
        ybox.style.transform = "rotateY(270deg)";
        
        
        break;
        
        case 4:
        
        ybox.style.transform = "rotateX(-90deg)";
        
        
        break;
        
        case 5:
        
        ybox.style.transform = "rotateY(180deg)";
        
        
        break;
        
        case 6:
        
        ybox.style.transform = "rotateX(90deg)";
        
        break;
        default:
        }
        },400);
        
        
        setTimeout(function () {
            
            if(diceRandY == 6)
            {
            //alert("dice value 6");
                if(!y1.isAlive)
                {
                    y1.release();
                    setTimeout(function () {
                    yellowDice.roll(); },250);
                }
                else if(!y2.isAlive) {
                    y2.release();
                    setTimeout(function () {
                    yellowDice.roll(); },250);
                }
                else if(!y3.isAlive) {
                    y3.release();
                    setTimeout(function () {
                    yellowDice.roll(); },250);
                }
                else if(!y4.isAlive) {
                    y4.release();
                    setTimeout(function () {
                    yellowDice.roll(); },250);
                }
                else
                {
                    if(y1.isAlive && y1.isMovable && !(y1.steps+diceRandY > 56))
                    {
                        moveY(y1);
                    }
                    else if(y2.isAlive && y2.isMovable && !(y2.steps+diceRandY > 56))
                    {
                        moveY(y2);
                    }
                    else if(y3.isAlive && y3.isMovable && !(y3.steps+diceRandY > 56))
                    {
                        moveY(y3);
                    }
                    else if(y4.isAlive && y4.isMovable && !(y4.steps+diceRandY > 56))
                    {
                        moveY(y4);
                    }
                    else {
                        toggled();
                    }
                }
            }
            else {
                
                if(y1.isAlive && y1.isMovable && !(y1.steps+diceRandY > 56))
                    {
                        moveY(y1);
                    }
                    else if(y2.isAlive && y2.isMovable && !(y2.steps+diceRandY > 56))
                    {
                        moveY(y2);
                    }
                    else if(y3.isAlive && y3.isMovable && !(y3.steps+diceRandY > 56))
                    {
                        moveY(y3);
                    }
                    else if(y4.isAlive && y4.isMovable && !(y4.steps+diceRandY > 56))
                    {
                        moveY(y4);
                    }
                else
                {
                   //console.log("no piece alive");
                   setTimeout(toggled,250);
                }
                
            }
            
            
            
            
            
        },500);
        
        setTimeout(function () {
        
        
        if(diceRandY == 6)
        {
            
        }
        else {
            if(!y1.isAlive && !y2.isAlive && !y3.isAlive && !y4.isAlive)
        {
            //toggled();
        }
        
        
            }
            
        },1000);
        
        
    }
}

var yellowDice = new YellowDice();



class RedDice {
    constructor()
    {
        this.diceReady = true;
        this.diceValue = 0;
        this.isReady = true;
    }
    
    roll() {
    
    playerInactive = false;
    var noMovesPossible = true;
    clearInterval(sim2);
    box.onclick = null;
r1.piece.onclick = function () {
    move(r1);
}

r2.piece.onclick = function () {
    move(r2);
}

r3.piece.onclick = function () {
    move(r3);
}

r4.piece.onclick = function () {
    move(r4);
}
    for(let i=0;i<4;i++)
    {
        if(!(yarr[i].isReachedDestination))
        yarr[i].piece.style.zIndex = "10";
        else
        yarr[i].piece.style.zIndex = "10";
        if(!(rarr[i].isReachedDestination))
        rarr[i].piece.style.zIndex = "15";
        else
        rarr[i].piece.style.zIndex = "15";
    }
    document.getElementById("hintArrowRed").style.display = "none";
    diceSound.play();
    box.style.animation = "tirugura 1s linear infinite";
    if(dice6hack)
    diceRand = 6;
    else if(dice1hack)
    diceRand = 1;
    else
    diceRand = Math.floor(Math.random()*7);
    
    this.diceValue = diceRand;
    
    setTimeout( function () {
    
    box.style.animation = "none";
    if(diceRand == 6)
    {
        for(let i=0;i<4;i++) {
            if((!rarr[i].isAlive || rarr[i].isMovable ) && !(rarr[i].steps+diceRand > 56)) {
       rarr[i].ready();
       noMovesPossible = false;
     }
     else {
       rarr[i].dead();
     }
    }
    }
    else {
    for(let i=0;i<4;i++)
    {
    if(rarr[i].isAlive && rarr[i].isMovable && !(rarr[i].steps+diceRand > 56))
    {
        rarr[i].ready();
        noMovesPossible = false;
        rarr[i].isCurrentlyMovable = true; 
       }
       else 
       {
        rarr[i].dead();
        rarr[i].isCurrentlyMovable = false;
        }
    }
    }
    
    if(diceRand==0)
    diceRand=1;
    
    box.style.transform = "rotateX(0deg)";
    box.style.transform = "rotateY(0deg)";
    
    switch(diceRand) {
        case 1:
        
        box.style.transform = "rotateX(0deg)";
        box.style.transform = "rotateY(0deg)";
        
        break;
        
        case 2:
        
        box.style.transform = "rotateX(0deg)";
        box.style.transform = "rotateY(90deg)";
        
        
        break;
        
        case 3:
        
        box.style.transform = "rotateX(0deg)";
        box.style.transform = "rotateY(270deg)";
        
        
        break;
        
        case 4:
        
        box.style.transform = "rotateX(-90deg)";
        
        
        break;
        
        case 5:
        
        box.style.transform = "rotateY(180deg)";
        
        
        break;
        
        case 6:
        
        box.style.transform = "rotateX(90deg)";
        
        break;
        default:
        }
        
        },400);
        
        setTimeout(function () {
            
            
            setTimeout(function () {
                if(noMovesPossible)
       {
    r1.piece.onclick = null;
    r2.piece.onclick = null;
    r3.piece.onclick = null;
    r4.piece.onclick = null;
            toggled();
            yellowDice.roll();
            
        }
        
        
            
            },500)
            
        },500)
        
    }
    
    
    
}



//setInterval(toggle,3000);



function moveY(r) {
    
    r.isMoving = true;
    yDice = diceRandY;
    checkLastStep = diceRandY;
    
    switch(diceRandY)
    {
       case 1:
       diceMove1.play();
       break;
       case 2:
       diceMove2.play();
       break;
       case 3:
       diceMove3.play();
       break;
       case 4:
       diceMove4.play();
       break;
       case 5:
       diceMove5.play();
       break;
       case 6:
       diceMove6.play();
       break;
       default:
       
    }
    var xk = setInterval( function() {
    r.move();
    
    
    setTimeout( function () {
    
    let topP = "-7.6vw";
    let leftP = "-4.5vw";
    
    let currb = r.currBlock;
    
    if(checkLastStep == 1) {
        //console.log("laststep :"+currb);
    }
    else if((currb > 25 && currb < 32) || (currb > 44 && currb < 51) || (currb > 36 && currb < 39)) {
        topP = "-9.6vw";
        leftP = "-4.5vw";
        //up
    }
    else if(currb == 52 || (currb > 0 && currb < 6) || (currb > 10 && currb < 14) || (currb > 18 && currb < 25)) {
        topP = "-5.6vw";
        leftP = "-4.5vw";
        //down
    }
    else if((currb > 31 && currb < 37) || (currb > 12 && currb < 19) || (currb > 23 && currb < 26)) {
        
        leftP = "-5.5vw";
        topP = "-7.6vw";
        //left
    }
    else if((currb > 38 && currb < 45) || (currb > 49 && currb < 52) || (currb > 5 && currb < 11)) {
        leftP = "-3.5vw";
        topP = "-7.6vw";
        //right
    }
    
    checkLastStep -= 1;
    
    
        r.piece.style.height = "15vw";
        r.piece.style.width = "15vw";
        r.piece.style.top = topP;
        r.piece.style.left = leftP;
    },1);
    
    setTimeout( function () {
        r.piece.style.height = "12vw";
        r.piece.style.width = "12vw";
        r.piece.style.top = "-5.6vw";
        r.piece.style.left = "-3vw";
    },125);
    
    checkAdjustments();
    
    },250);
    
    setTimeout(function () {
    clearInterval(xk);
    checkAdjustments();
    checkDeath(r);
    
    if(diceRandY == 6 || hasExtraChanceY)
    {
        hasExtraChanceY = false;
        yellowDice.roll();
    }
    else {
        toggled();
    }
    
    
    yDice = 0;
    this.isMoving = false;
    },diceRandY*250);
    
}












function move(r) {

    r1.piece.onclick = null;
    r2.piece.onclick = null;
    r3.piece.onclick = null;
    r4.piece.onclick = null;

    if((diceRand == 6 && !(r.steps+diceRand > 56)) || (r.isAlive && r.isMovable && !(r.steps+diceRand > 56)))
    {
    for(let i=0;i<4;i++) {
    rarr[i].dead();
    } }
            
    if(!r.isAlive)
    {
    r.release();
    }
    else
    {
    if(r.isMovable && !r.isMoving && !(r.steps+diceRand > 56))
    {
    
    
    r.isMoving = true;
    redDice = diceRand;
    var checkLastStepR = diceRand;
    //diceRand = 0;
    switch(redDice)
    {
       case 1:
       diceMove1.play();
       break;
       case 2:
       diceMove2.play();
       break;
       case 3:
       diceMove3.play();
       break;
       case 4:
       diceMove4.play();
       break;
       case 5:
       diceMove5.play();
       break;
       case 6:
       diceMove6.play();
       break;
       default:
       
    }
    x = setInterval( function() {
    r.move();
    
    
    
    setTimeout( function () {
    
    
    
    
    
    let topP = "-7.6vw";
    let leftP = "-4.5vw";
    
    let currb = r.currBlock;
    
    if(checkLastStepR == 1) {
        //console.log("laststep :"+currb);
    }
    else if((currb > 25 && currb < 32) || (currb > 44 && currb < 51) || (currb > 36 && currb < 39)) {
        topP = "-9.6vw";
        leftP = "-4.5vw";
        //up
    }
    else if(currb == 52 || (currb > 0 && currb < 6) || (currb > 10 && currb < 14) || (currb > 18 && currb < 25)) {
        topP = "-5.6vw";
        leftP = "-4.5vw";
        //down
    }
    else if((currb > 31 && currb < 37) || (currb > 12 && currb < 19) || (currb > 23 && currb < 26)) {
        
        leftP = "-5.5vw";
        topP = "-7.6vw";
        //left
    }
    else if((currb > 38 && currb < 45) || (currb > 49 && currb < 52) || (currb > 5 && currb < 11)) {
        leftP = "-3.5vw";
        topP = "-7.6vw";
        //right
    }
    
    checkLastStepR -= 1;
    
    
        r.piece.style.height = "15vw";
        r.piece.style.width = "15vw";
        r.piece.style.top = topP;
        r.piece.style.left = leftP;
        
    },1);
    
    setTimeout( function () {
        r.piece.style.height = "12vw";
        r.piece.style.width = "12vw";
        r.piece.style.top = "-5.6vw";
        r.piece.style.left = "-3vw";
        //navigator.vibrate(0.1*500);
    },125);
    
    
    checkAdjustments();
    
    },250);
    
    setTimeout(function () {
    clearInterval(x);
    checkAdjustments();
    checkDeath(r);
    for(let i=0;i<4;i++)
    {
        rarr[i].notready;
    }
    
    r1.piece.onclick = null;
    r2.piece.onclick = null;
    r3.piece.onclick = null;
    r4.piece.onclick = null;
    
    setTimeout(function () {
    if(redDice != 6 && redDice != 0 && !hasExtraChance) {
    hasExtraChance = false;
    toggled();
    yellowDice.roll();
    }
    if(diceRand == 6 || hasExtraChance) {
     box.onclick = boxclick; document.getElementById("hintArrowRed").style.display = "block"; 
     hasExtraChance = false; }
    diceRand = 0;
    redDice = 0;
    },500);
    
    r.isMoving = false;
    },redDice*250);
    }
    }
}

function die(r) {
    diceDie.play();
    isEverythingFree = false;
    r.isAlive = false;
    r.piece.style.position = "absolute";
    r.piece.style.left = "-3vw";
    y = setInterval( function () {
    r.die();
    },60)
    
    setTimeout( function () {
        clearInterval(y);
        if(r.id == "yellow1") { document.getElementById("yellowrestart1").append(r.piece); }
        if(r.id == "yellow2") { document.getElementById("yellowrestart2").append(r.piece); }
        if(r.id == "yellow3") { document.getElementById("yellowrestart3").append(r.piece); }
        if(r.id == "yellow4") { document.getElementById("yellowrestart4").append(r.piece); } 
        if(r.id == "red1") { document.getElementById("redrestart1").append(r.piece); }
        if(r.id == "red2") { document.getElementById("redrestart2").append(r.piece); }
        if(r.id == "red3") { document.getElementById("redrestart3").append(r.piece); }
        if(r.id == "red4") { document.getElementById("redrestart4").append(r.piece); }
        checkAdjustments();
         r.isAlive = false;
         r.steps = 0;
        r.currBlock = 0;
        isEverythingFree = true;
    },(r.steps+1)*60);
}
















r1.piece.onclick = function () {
    move(r1);
}

r2.piece.onclick = function () {
    move(r2);
}

r3.piece.onclick = function () {
    move(r3);
}

r4.piece.onclick = function () {
    move(r4);
}

/*
y1.piece.onclick = function () {
    y1clickvar = move(y1);
}

y2.piece.onclick = function () {
    y2clickvar = move(y2);
}

y3.piece.onclick = function () {
    y3clickvar = move(y3);
}

y4.piece.onclick = function () {
    y4clickvar = move(y4);
} */

var box = document.getElementById("rdicebox");
var redDicee = new RedDice();



var boxclick = box.onclick = function () {
    redDicee.roll();
}




function checkAdjustments() {
    // Upgrade needed
}





function checkDeath(killer) {

    let curr = killer.currBlock;
        
        if(curr != 0 && curr != 1 && curr != 9 && curr != 14 && curr != 22 && curr != 27 && curr != 35 && curr != 40 && curr != 48)
        {
        if(killer.color == "red") {
        for(let i=0;i<4;i++)
           {
            if(curr == yarr[i].currBlock) {
              hasExtraChance = true;
              die(yarr[i]);
              checkAdjustments();
              }
           }
        }
        else
        {
        for(let i=0;i<4;i++)
            {
            if(curr == rarr[i].currBlock) {
                hasExtraChanceY = true;
                die(rarr[i]);
                checkAdjustments();
                }
            }
        }
        }
}

var redAutoExit = false;

function checkWin(winner)
{
    if(winner.color == "red")
    {
      if(r1.isReachedDestination && r2.isReachedDestination && r3.isReachedDestination  && r4.isReachedDestination) { document.getElementById("finalnote").style.display = "block";
      }
    }
    else {
        if((y1.isReachedDestination && y2.isReachedDestination && y3.isReachedDestination  && y4.isReachedDestination) || redAutoExit) {
         document.getElementById("finalnotep").innerHTML = "NEP DEVS Bot Won"; document.getElementById("finalnote").style.display = "block";
      }
    }
}




var dice6hack = false;

var dice1hack = false;


var dice6btn = document.getElementById("ball1");
var dice1btn = document.getElementById("ball2");

dice6btn.onclick = function (){
if(dice6hack) {
dice6hack = false;
dice6btn.style.marginLeft = "0px";
dice6btn.style.backgroundColor = "grey";
}
else {
dice6hack = true;
dice6btn.style.marginLeft = "9px";
dice6btn.style.backgroundColor = "red";
}
dice1hack = false;
dice1btn.style.marginLeft = "0px";
dice1btn.style.backgroundColor = "grey";
}
dice1btn.onclick = function (){
if(dice1hack)
{
dice1hack = false;
dice1btn.style.marginLeft = "0px";
dice1btn.style.backgroundColor = "grey";
}
else {
dice1hack = true;
dice1btn.style.marginLeft = "9px";
dice1btn.style.backgroundColor = "red";
}
dice6hack = false;
dice6btn.style.marginLeft = "0px";
dice6btn.style.backgroundColor = "grey";
}



var playerInactive = true;

var al2 = 100;
var ct = 1;
var ctx2 = document.getElementById('my_canvas2').getContext('2d'); 

var start2 = 4.72; 
var startColor2 = "#1DFE00"; //red "#1DFE00"
var cw2 = ctx2.canvas.width; 
var ch2 = ctx2.canvas.height; 
var diff2; 
function progressSim2(){ 
    diff2 = ((al2 / 100) * Math.PI*2*10).toFixed(2);     
    ctx2.clearRect(0, 0, cw, ch); 
    ctx2.lineWidth = 9;     
ctx2.fillStyle = '#09F'; 
    ctx2.strokeStyle = startColor2;     
ctx2.textAlign = 'center';     
ctx2.fillText('', cw*.5, ch*.5+2, cw);     ctx2.beginPath();     
ctx2.arc(35, 35, 30, start2, diff2/10+start2, false);     ctx2.stroke();

if(al2 <= 25)
{
    startColor2 = "red";
}
else if(al < 60 && al > 25)
{
    startColor = "orange";
}
else
{
    startColor2 = "#1DFE00";
}


if(al2 <= 0){
clearInterval(sim2);
if(playerInactive)
{
    if(ct > 3)
    {
        box.onclick = null;
        redAutoExit = true;
        checkWin(y1);
    }
    else {
    redDicee.roll(); document.getElementById("c"+ct).style.backgroundColor = "red";
    setTimeout(function () {
                if(r1.isAlive && r1.isMovable && !(r1.steps+diceRandY > 56))
                    {
                        move(r1);
                    }
                    else if(r2.isAlive && r2.isMovable && !(r2.steps+diceRandY > 56))
                    {
                        move(r2);
                    }
                    else if(r3.isAlive && r3.isMovable && !(r3.steps+diceRandY > 56))
                    {
                        move(r3);
                    }
                    else if(r4.isAlive && r4.isMovable && !(r4.steps+diceRandY > 56))
                    {
                        move(r4);
                    }
    },500);
    document.getElementById("c"+ct).style.boxshadow = "0px 0px 1px 1px #1DFE00";
    ct++;
    }
}   
} 
    al2--; 
}

sim2 = setInterval(progressSim2, 150); 





alert(" Ludo Game \n\n This Game Made For Fun \n\n FUTURE FIND ");







}



/*r1.piece.style.height = "15vw";
r1.piece.style.width = "15vw";*/



/*
for(let i=0;i<places.length;i++)
    {
       places[i].style.border = "0.1px solid black"
    }
    
    
    var red1 = document.getElementById("red1");
    var red2 = document.getElementById("red2");
    red1.onclick = function () {
        document.getElementById("red111").append(red1);
    }
*/</script>


<script type="text/javascript">
var arrgetbtn=[];

arrgetbtn.push({"title":"NEP DEVS","icon":"fwidgethelp-telegram_v2","link":"https://t.me/Abdullha_404","target":"_blank","color":"#ffffff","background":"rgb(39, 165, 231)"});
 var WidGetButtonOptions = {
  id:"4b6927c0bcf610aab29c4c3629bb2a1f",
  iconopen:"fwidgethelp-level-up",
  maintitle:"NEP DEVS",
  mainbackground:"#ff0000",
  maincolor:"hsv(0, 0%, 100%)",
  pulse:"widgethelp_pulse",
  fasize:"2",
  direction:"top",
  position:"rightbottom",
  arrbtn: arrgetbtn
};
(function() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = "https://getbtn.com/widget/index.php?id="+WidGetButtonOptions.id;
  document.getElementsByTagName("head")[0].appendChild(script);
})();</script>

    </body>
</html>