document
  .getElementById('currentDay')
  .innerText = moment().format('LL');

const hours = ['5:00 AM','6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM','11:00 PM'];

hours.forEach((hour,i) => {
  document
    .querySelector('.container')
    .innerHTML += `
     <div class="row task-name">
          <div class="col-1 hour"> ${hour} </div>
          <div class="col task 
          ${
            (i+9) < parseInt(moment().format('H'))  
              ? 'past'
              : (i+9) == parseInt(moment().format('H')) 
                ? 'present'
                : 'future'
          }
          "></div>
          <button class="col-1 saveBtn  justify-content-center align-items-center">
            <span class=""></span>
          </button>  
     </div>
    `    
});

window.setInterval('refresh()', 90000); 	
    
    function refresh() {
        window.location.reload();
    }