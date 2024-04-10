/* Hide all slides by default */
.slides {
    display: none;
  }
  
  /* Fade animation for slides */
  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }
  
  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
  