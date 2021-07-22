// api keys / secrets
const secrets = ["5f8a52bb-ef57-468b-a3fe-8f1110209d3a", "9bdd0e4d-10f8-449d-b837-cb0d2d3ce2b8"];


class Meeting {
    // my contructor
    constructor(roomName, email, displayName, secret){
        this.roomName = roomName;
        this.email = email;
        this.displayName = displayName;  
        this.secret = secret;  // client secrate key
  }
    // function to open the meetings
    startMeeting = () => {
        let __startMeeting = document.getElementById('__startMeeting')

        __startMeeting.addEventListener('click', (e) => {
            console.log(e)
            // start meeting if the secret is in array
            if(secrets.includes(this.secret)){
                this.openMeeting();
            }else{
                console.log("invalid secret");
                alert("invalid secret");
            }
        })
    }
    openMeeting = () =>{
        console.log("opening window...");
        window.open(
        "https://vue-jitsi-simple.vercel.app/_meet/call?roomName="+this.roomName+"&email="+this.email+"&displayName="+this.displayName,
        "popUpWindow",
        "height=auto,width=auto,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
        );
    }
}




