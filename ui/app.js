// $(".hud-car").hide()
let seatbeltAudio = new Audio('beltalarm.ogg');
seatbeltAudio.loop = true;
let isPlaying = false;

let HudFunctions = {
    HudSimple: function (Voice, Health, armour, Eat, Water, Strees, Walk, proxmity, breath, area, waydist, directions) {
        // $(".hud-main").show()
        $(".streeat-name").html(area);
        if (waydist >= 0) {
            $(".waypoint").html((waydist).toFixed(1) + " كم")
        }else{
            $(".waypoint").html("--")
        }

        if (directions === "Front") {
            $(".left").html(`<i class="fa-solid fa-arrow-up"></i>`);
        } else if (directions === "Back") {
            $(".left").html(`<i class="fa-solid fa-arrow-turn-left-down"></i>`);
        } else if (directions === "Left") {
            $(".left").html(`<i class="fa-solid fa-arrow-left"></i>`);
        } else if (directions === "Right") {
            $(".left").html(`<i class="fa-solid fa-arrow-right"></i>`);
        } else if (directions === "Halfright") {
            $(".left").html(`<i class="fa-regular fa-arrow-up-right"></i>`);
        } else if (directions === "Halfleft") {
            $(".left").html(`<i class="fa-regular fa-arrow-up-left"></i>`);
        } else if (directions === "None") {
            $(".left").html(`<i class="fa-sharp fa-solid fa-location-crosshairs-slash"></i>`);
        }
        
        if (Voice == true) {
            $("#Mic-Icon").removeClass("fa-solid fa-microphone-lines-slash");
            $("#Mic-Icon").addClass("fa-solid fa-microphone-lines");
            $("#mic-pressent").css("background", "#B1B1B1");
        }
        else {
            $("#Mic-Icon").removeClass("fa-solid fa-microphone-lines");
            $("#Mic-Icon").addClass("fa-solid fa-microphone-lines-slash");
            $("#mic-pressent").css("background", "#B1B1B1");
        }

        $("#armor").fadeIn(500);
        $("#armorhud").fadeIn(500);
        $("#health").fadeIn(500);
        $("#healthhud").fadeIn(500);

        // Stress - Disabled
        $("#strees").fadeOut(0);
        $("#streeshud").fadeOut(0);

        // Stamina (Running) - Show only when used
        if (Walk < 100) {
            $("#walk").fadeIn(500);
            $("#walkhud").fadeIn(500);
        } else {
            $("#walk").fadeOut(500);
            $("#walkhud").fadeOut(500);
        }

        // Oxygen (Diving) - Show only when underwater/used
        if (breath < 100) {
            $("#oxygen").fadeIn(500);
            $("#oxygenhud").fadeIn(500);
        } else {
            $("#oxygen").fadeOut(500);
            $("#oxygenhud").fadeOut(500);
        }


        if (armour <= 60) {
            $("#armor-pressent").addClass("lowarmor");
        } else {
            $("#armor-pressent").removeClass("lowarmor");
        }

        if (Walk <= 90) {
            $("#walk-pressent").addClass("lowwa");
        } else {
            $("#walk-pressent").removeClass("lowwa");
        }

        if (Health < 60) {
            $("#health-pressent").addClass("lowh");
        } else {
            $("#health-pressent").removeClass("lowh");
        }

        if (breath < 60) {
            $("#oxygen-pressent").addClass("lowox");
        } else {
            $("#oxygen-pressent").removeClass("lowox");
        }

        if (Eat < 30) {
            $("#eat-pressent").addClass("lowf");
        } else {
            $("#eat-pressent").removeClass("lowf");
        }

        if (Water < 30) {
            $("#water-pressent").addClass("loww");
        } else {
            $("#water-pressent").removeClass("loww");
        }

        // Stress Low Logic Disabled
        $("#strees-pressent").removeClass("lows");

        if (proxmity === "whisper") {

            $("#svg-mic").css("height", `${100 + 30}%`);

        } else if (proxmity === "normal") {

            $("#svg-mic").css("height", `${100 + 50}%`);

        } else if (proxmity === "loud") {

            $("#svg-mic").css("height", `${100 + 100}%`);

        }

        $("#svg-health").css("height", `${100 + Health}%`);
        $("#svg-armor").css("height", `${100 + armour}%`);
        $("#svg-eat").css("height", `${100 + Eat}%`);
        $("#svg-water").css("height", `${100 + Water}%`);
        $("#svg-strees").css("height", `${100 + Strees}%`);
        $("#svg-walk").css("height", `${100 + Walk}%`);
        $("#svg-oxygen").css("height", `${100 + breath}%`);
    },
    HudCar: function (StreetName, Fuel, Engine, Speed, Gear , SeatBelt, waydist, directions) {
        $(".hud-car").fadeIn(500);
        $(".streeat-name").html(StreetName)
        $("#svg-fuel").css("height", `${100 + Fuel}%`);
        $("#svg-engine").css("height" , `${100 +Engine / 10}%`);
        $(".gear-label").html(Gear);

        if (Engine / 10 < 60) {
            $("#svg-pressent-engine").addClass("lowengine");
        } else {
            $("#svg-pressent-engine").removeClass("lowengine");
        }

        if (Fuel < 30) {
            $("#svg-pressent-fuel").addClass("lowfuel");
        } else {
            $("#svg-pressent-fuel").removeClass("lowfuel");
        }

        if (Gear === 0) {
            $(".gear-label").html("R");
        } else {
            $(".gear-label").html(Gear);
        }


        if (directions === "Front") {

            $(".left").html(`<i class="fa-solid fa-arrow-up"></i>`);

        } else if (directions === "Back") {

            $(".left").html(`<i class="fa-solid fa-arrow-turn-left-down"></i>`);

        } else if (directions === "Left") {

            $(".left").html(`<i class="fa-solid fa-arrow-left"></i>`);

        } else if (directions === "Right") {

            $(".left").html(`<i class="fa-solid fa-arrow-right"></i>`);

        } else if (directions === "Halfright") {

            $(".left").html(`<i class="fa-regular fa-arrow-up-right"></i>`);

        } else if (directions === "Halfleft") {

            $(".left").html(`<i class="fa-regular fa-arrow-up-left"></i>`);

        } else if (directions === "None") {

            $(".left").html(`<i class="fa-sharp fa-solid fa-location-crosshairs-slash"></i>`);

        }

        if (waydist >= 0) {
            $(".waypoint").html((waydist).toFixed(1) + " كم")
        }else{
            $(".waypoint").html("--")
        }


        //    if (Speed > 100) {


        if (Speed == 0) {
            $(".km").html('<span >' + "000" + '</span>');
            
            }else{
                $(".km").html('<span >' + "00" + '<span >' + Speed + '</span>' + '</span>');
            }
            if (Speed > 9) {
                $(".km").html('<span >' + "0" + '<span >' + Speed + '</span>' + '</span>');
            }
            if (Speed > 99) {
                $(".km").html(Speed);
            }
        

        if (SeatBelt === true) {
            $(".seat-circle").fadeOut(500)
        }else{
            $(".seat-circle").fadeIn(500)
        }
        
        //  console.log(Engine / 10)
    },
    updateRPM : function (rpm) {
        var rpmBar = document.getElementById('rpmBar');
        if (rpmBar) {
            var items = rpmBar.getElementsByClassName('seggement');
            for (var i = 0; i < 17; i++) {
                var item;
                if (items[i]) {
                    item = items[i];
                }
                item.classList.remove('filled', 'between', 'critical');
                if (i < rpm) {
                    if (i >= 14) {
                        item.classList.add('critical');
                    } else if (i >= 11) {
                        item.classList.add('between');
                    } else {
                        item.classList.add('filled');
                    }
                }
            }
        } else {
            //console.log("Element with ID 'rpmBar' not found");
        } 
    }
}


window.addEventListener('message', (event) => {
    let data = event.data
    if (data.action === true) {
        switch (data.type) {
            case "SimpleHud":
                if (isPlaying) {
                    seatbeltAudio.pause();
                    seatbeltAudio.currentTime = 0;
                    isPlaying = false;
                }
                $(".hud-main").css("display", "flex");
                $(".hud-car").fadeOut(500);
                $(".street-continer").fadeIn(500);
                $(".hud-main").fadeIn(500);
                HudFunctions.HudSimple(data.voice, data.health, data.armour, data.food, data.thirst, data.stress, data.stamina, data.proxmity, data.breath, data.area, data.waydist, data.directions)
                break;
            case "CarHud":
                $(".hud-car").css("display", "block");
                $(".hud-main").css("display", "flex");
                $(".street-continer").fadeIn(500);
                HudFunctions.HudSimple(data.voice, data.health, data.armour, data.food, data.thirst, data.stress, data.stamina, data.proxmity, (data.breath) *100, data.area, data.waydist, data.directions)
                HudFunctions.HudCar(data.area, data.fuel, data.enginerun, data.vehspeed, data.gear , data.seatbelt, data.waydist, data.directions)
                HudFunctions.updateRPM((data.rpm / 1) * 18)

                if (data.seatbeltAlert) {
                    if (!isPlaying) {
                        seatbeltAudio.play().catch(e => console.log("Audio play failed: ", e));
                        isPlaying = true;
                    }
                } else {
                    if (isPlaying) {
                        seatbeltAudio.pause();
                        seatbeltAudio.currentTime = 0;
                        isPlaying = false;
                    }
                }
                break;
            default:
                break;
        }

    } else if (data.action === false) {
        if (isPlaying) {
            seatbeltAudio.pause();
            seatbeltAudio.currentTime = 0;
            isPlaying = false;
        }
        switch (data.type) {
            case "SimpleHud":
                $(".hud-main").fadeOut(500);
                $(".street-continer").fadeOut(500);
                $(".hud-main").css("display", "none");
                break;
            case "CarHud":
                $(".hud-car").css("display", "none");
                $(".hud-car").fadeOut(500);
                $(".street-continer").fadeOut(500);
                $(".hud-main").fadeOut(500);
                break;
            default:
                break;
        }
    }

})


// window.addEventListener('message', function(event) {
//     var rpm = event.data.rpm;
//     if (rpm !== undefined) {
//         //console.log("Received RPM: " + rpm);
//         updateRPM((rpm / 1) * 18);
//     } else {
//         //console.log("RPM data not received");
//     }
// });
// // HudFunctions.HudSimple(true , 50 , 75 ,50 , 100 , 50 , 100)