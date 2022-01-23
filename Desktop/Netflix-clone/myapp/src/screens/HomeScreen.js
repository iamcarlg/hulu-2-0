import React from "react";
import "./HomeScreen.css";
import Nav from '../Nav';

function HomeScreen(){
    return (
        <div className="homeScreen">
            <Nav />
        </div>
    );

}

export default HomeScreen;




// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Netflix 2.0: Homepage</title>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
//         <link rel="stylesheet" href="css/style.css">
//     </head>

//     <body>

//         <!-- navbar -->
//         <nav class ="navbar">
//             <img src="img/logo.png" alt="logo" class = "logo">
//             <div class="join-box" >
//                 <p class = "join-msg">unlimited tv shows & movies</p>
//                 <a href = "https://iamcarlg.github.io/personal-portfolio/" target = "_blank"><button class = "btn">The creator</button></a>
//                 <a href="./login"><button class = "btn join-btn">sign in</button></a>

//             </div>
//         </nav>

//         <!-- main section -->
//         <header class="main">
//             <h1 class="heading">movies</h1>
//             <p class="info">Movies move us like nothing else can, whether they're scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>

//             <br>
//             <a href="./login"><button class = "btn join-btn">join now</button></a>

//             <!-- movie list div -->
//             <!-- <div class="movie-list">

//                 <button class="pre-btn"><img src="img/pre.png" alt=""></button>
            
//                 <h1 class="movie-category">Popular movie</h1>
            
//                 <div class="movie-container">
//                     <div class="movie">
//                         <img src="img/poster.jpg" alt="">
//                         <p class="movie-title">movie name</p>
//                     </div>
//                 </div>
            
//                 <button class="nxt-btn"><img src="img/nxt.png" alt=""></button>
            
//             </div> -->

//         </header>

//         <script src = "js/api.js"></script>
//         <script src = "js/scroll.js"></script>
//         <script src = "js/home.js"></script>

//     </body>
// </html>