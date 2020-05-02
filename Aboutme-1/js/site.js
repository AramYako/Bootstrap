document.addEventListener('DOMContentLoaded', (event) => {
  HideAlertMessage();
  activateAlert();
  dissmissAlert();

  $('#year').text(new Date().getFullYear());
        
  //Init scrollSpy
  $('body').scrollspy({target: "#main-nav", offset:10 }); 


  })



  //ALERTS 
  const HideAlertMessage = (event)=>{
    document.getElementById('alert-create-user').style.display = "none";
  }

  const activateAlert = ()=>{
    document.getElementById('submit-btn').addEventListener("click", (event)=>{
      event.preventDefault();

      document.getElementById('alert-create-user').style.display = "block";

      setTimeout(() => {
        document.getElementById('alert-create-user').style.display = "none";
      }, 2000);
    })
  }

  const dissmissAlert = ()=>{

    document.getElementById('dismiss-alert').addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById('alert-create-user').style.display="none";
    });


  }