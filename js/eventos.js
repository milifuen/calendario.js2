
let eventoArray = [] /////
let lsLongitud = localStorage.length
console.log(lsLongitud)

const btnAgregarEvento = document.getElementById("#btn-evento")
const lista = document.querySelector("#listado")
fetch('https://raw.githubusercontent.com/milifuen/json/main/feriados.json')
  .then(response => response.json())
  .then(data => {
    html = ""
    data.forEach(feriado => {
      html += `
      <li> 
          <h4>${feriado.title}</h4>
          
          <p>${feriado.start}</p>
          <br>
      </li>`

  })
  lista.innerHTML = html
  })




//calendario
document.addEventListener('DOMContentLoaded', function() {
  
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      
      initialView: 'dayGridMonth',
      locale: 'es',
      headerToolbar: {
        
      },
      
      eventSources: [

        
        {
          url: 'https://raw.githubusercontent.com/milifuen/json/main/feriados.json', 
          color: 'green',  
          focusable: false
        }
    
        
    
      ],

      eventClick: function(info) {
          const eventid = info.event.id;
          console.log(eventid)
          swal({
            title: "¿Desea borrar el evento?",
            text: "Una vez eliminado no podrá restaurarlo",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
            let evento = calendar.getEventById(eventid);
            evento.remove();
  
            localStorage.removeItem(eventid)
            swal({
              icon: "success",
              title: "se borró el evento"
            })}
          })

        
        
        
      },

      dateClick: function(info) {
        let nombreEvento = swal("Ingrese el nombre del evento", {
          content: "input",
        })
        .then((value) => {
          if(value != null) {
            let dateCalendario = info.dateStr
          let EvID = Date.now()
          console.log("usted tiene", value, "el", dateCalendario)
          calendar.addEvent({
          title: value,
          start: dateCalendario,
          id: EvID,
          allDay: true,
        })
        const eventosObj = {title: value, start: dateCalendario, id: EvID}
        const eventosJson = JSON.stringify(eventosObj)
        localStorage.setItem(EvID, eventosJson)
          }
          

        });
      
      },
      
      
      
    });
    
    if(lsLongitud > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        const localStorageKey = localStorage.getItem(localStorage.key(i));
        const keys = JSON.parse(localStorageKey)
        let eventoName = keys.title
        let eventoDate = keys.start
      
      calendar.addEvent({
        title: eventoName,
        start: eventoDate,
        id: keys.id,
        allDay: true
    });
      }
      
    }

    calendar.render();
  });

  

 

  