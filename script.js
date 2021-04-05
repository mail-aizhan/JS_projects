var user = prompt("Adiniz nedir?")
let visitor = document.getElementById('myName')



if (user !=null){
    visitor.innerHTML = ` ${user} `}


     setInterval(showTime, 500);
    function showTime() {
        var time = new Date();
        var hrs = time.getHours();
        var min = time.getMinutes();
        var sec =time.getSeconds();
        var day =time.getDay();
       
        
            switch(day){
              case 0:
                day="Sunday"
                break;
                case 1:
                  day="Monday"
                  break;
                  case 2:
                    day="Tuesday"
                    break;
                    case 3:
                      day="Wednesday"
                      break;
                      case 4:
                        day="Thursday"
                        break;
                        case 5:
                          day="Friday"
                          break;
                          case 6:
                            day="Saturday"
                            break; 
            }

        let en = "PM";

        if(hrs > 12){
          en ="AM";
        }


        if(hrs>24){
          hrs = hrs - 12;
        }
        if (hrs == 0){
          hrs = 12;
        }
        if(min < 10){
          min ="0" + min;
        }
        if(sec< 10){
          sec ="0" + sec;
        }
        


        document.getElementById('myClock').innerHTML = `${hrs}: ${min}: ${sec} ${en} ${day} `
      }
      window.onload = showTime;