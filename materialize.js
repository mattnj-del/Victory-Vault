<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Materialize JavaScript including Carousel + Collapsible Demo</title>


  <!-- Materialize CSS (CDN) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />


  <!-- Material Icons (optional, for icons in collapsible headers) -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


  <style>
    body { padding-bottom: 48px; }
    header { margin-bottom: 24px; }
    .demo-section { margin-top: 32px; }
    .controls .btn { margin-right: 8px; margin-bottom: 8px; }
    .carousel { margin-top: 12px; }


    /* Optional: make collapsible content a bit easier to read for students */
    .collapsible-body p { margin-top: 0; }
  </style>
</head>


<body>
  <!-- Simple top nav -->
  <header>
    <nav class="blue">
      <div class="nav-wrapper container">
     
    </nav>
  </header>
<div id="radio-section" class="section container">
       <h2>Select Your Favorite Sport</h2>
       <form>
           <p>
               <label>
                   <input name="Sport" type="radio" value="Football" onclick="displaySport()"/>
                   <span>Football</span>
               </label>
           </p>
           <p>
               <label>
                   <input name="Sport" type="radio" value="Basketball" onclick="displaySport()"/>
                   <span>Muffin</span>
               </label>
           </p>
           <p>
               <label>
                   <input name="Sport" type="radio" value="Baseball" onclick="displaySport()"/>
                   <span>Baseball</span>
               </label>
           </p>
       </form>
       <div id="pastry-response"></div>
   </div>
 <!-- Email Feedback Section -->
   <div id="feedback-section" class="section container">
       <h2>Subscribe for Updates</h2>
       <form onsubmit="submitEmail(event)">
           <div class="input-field">
               <input id="email" type="email" required>
               <label for="email">Email</label>
           </div>
           <button type="submit" class="btn waves-effect waves-light">Subscribe</button>
       </form>
       <div id="email-response"></div>
   </div>




    <!-- BASIC CAROUSEL -->
    <section id="basic" class="demo-section">


      <div class="controls">
        <button id="basicPrev" class="btn waves-effect">Prev</button>
        <button id="basicNext" class="btn waves-effect">Next</button>
      
      </div>


      <div class="carousel" id="basicCarousel">
        <a class="carousel-item" href="#one!">
         "<img src="https://picsum.photos/id/1058/600/400" alt="Soccer ball on a field" />
        </a>
        <a class="carousel-item" href="#two!">
         "<img src="https://picsum.photos/id/1077/600/400" alt="Sports stadium and track" />
        </a>
        <a class="carousel-item" href="#three!">
       "<img src="https://picsum.photos/id/146/600/400" alt="Person on a bicycle" />
        </a>
        <a class="carousel-item" href="#four!">
       "<img src="https://picsum.photos/id/73/600/400" alt="Baseball field and items" />
        </a>
        <a class="carousel-item" href="#five!">
        "<img src="https://picsum.photos/id/1022/600/400" alt="Person surfing a wave" />
        </a>
      </div>


      <p class="grey-text">
        Tip: Try dragging/swiping the carousel.
      </p>
    </section>


    <div class="divider"></div>


    <!-- COLLAPSIBLE -->
    <section id="collapsible" class="demo-section">
      <h5>2) Collapsible</h5>
      <p class="grey-text text-darken-1">
        Below is a standard collapsible list. You can also enable "accordion" behavior or allow multiple sections open.
      </p>


      
