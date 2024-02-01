function main() {
    var size = window.innerWidth
    var off = size / 10
    var s = size - off
    s = s / 14.6
    for(var i = 0; i < 330; i++) {
        var con = document.getElementById("con")
        var sq = document.createElement("div")
        sq.style.width = "100%"
        sq.style.height = "100%"
        sq.style.backgroundColor = "#751D0A"
        sq.style.border = "1px solid black"
        sq.id = i + 1
        sq.addEventListener("drop", (e) => drop(e))
        sq.addEventListener("dragover", (e) => allowDrop(e))
        con.style.border = "3px solid black"
        con.appendChild(sq)
    } 
    gameLoop()
    cropLoop()
}

function renderFoods() {
    console.log("food Menu")
}

function renderMachines() {
    console.log("machine menu")
}

function renderAnimals() {
    console.log("animal menu")
}

function renderStorage() {
    /*
    Steps
    1 add body of it 
    2 add header
    3 add tbl
    4 get tbl data
    5 render x
    */
    var st = document.createElement("section")
    st.style.width = "30vw"
    st.style.marginLeft = "40%"
    st.style.height = "90vh"
    st.style.zIndex = 15
    st.style.background = "gray"
    var head = document.createElement("div")
    head.style.backgroundColor = "black"
    head.style.width = "100%"
    head.style.height = "5%"
    document.body.appendChild(st)
}

function delSt() {

}

function spawnCrop(food) {
    switch (food) {
        case "tomato":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Tomato.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(Element))
            var check = 1;
            var num = 0;
            while(check == 1 && num < 1000) {
                num++
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck() == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "wheat":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Wheat.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            var check = 1
            var num = 0
            while(check == 1 && num > 1000) {
                num++
                var num = Math.floor((Math.random() * 330) + 1)
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck() == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break
    }
}

function spawnBuilding() {

}

function spawnPen() {

}

function gameLoop() {
    cropId()
    updataCropVals()
    setTimeout(function() {gameLoop()}, 100)
}

function cropLoop() {

}

function updataCropVals() { 
    /*steps
    1 get all crops
    figure out how long it has been scince last update
    see if we should update that crop
    update all the crops that apply
    */
}

function lockChck() {
    return false;
}

function merge(plant, n) {
    console.log(plant)
    switch (plant) {
        case "tomatoT1":
            var img = document.createElement("img")
            img.src = "Media/Crops/T2/Tomato.png"
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.draggable = "true"
            n.appendChild(img)
            cropId()
            console.log(n)
        break;
        case "tomatoT2":
            var img = document.createElement("img")
            img.src = "Media/Crops/T3/Tomato.png"
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;
        case "tomatoT3":
            var img = document.createElement("img")
            img.src = "Media/Crops/T4/Tomato.png"
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break; 
        case "tomatoT4":
            var img = document.createElement("img")
            img.src = "Media/Crops/T5/Tomato.png"
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;
        case "tomatoT5":
            var img = document.createElement("img")
            img.src = "Media/Crops/T6/Tomato.png"
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;  
        case "tomatoT6":
            var img = document.createElement("img")
            img.src = "Media/Crops/T7/Tomato.png"
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;  
        case "tomatoT7":
            var img = document.createElement("img")
            img.src = "Media/Crops/T8/Tomato.png"
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;
        case "tomatoT8": 
            var img = document.createElement("img")
            img.src = "Media/Crops/T9/Tomato.png"
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.draggable = "true"
            cropId()
            n.appendChild(img)            
        break;
        case "wheatT1":
            var img = document.createElement("img")
            img.src = "Media/Crops/T2/wheat.png"
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    cropId()
    console.log(ev.target)
    window.sessionStorage.setItem("old", ev.target.parentElement.id)
    window.sessionStorage.setItem("id", ev.target.id)
}

function drop(ev) {
    ev.preventDefault();
    data = window.sessionStorage.getItem("id")
    var old = window.sessionStorage.getItem("old")
    var targ = ev.target
    if(targ.parentElement.id != "con") {
        targ = ev.target.parentElement
    }
    if(targ.children.length == 1) {
        var p1 = document.getElementById(data)
        var p2 = targ.children[0]
        var arr = mergechck(p1, p2)
        console.log(arr)
        var chck = arr[0]
        var plant = arr[1]
        if(chck == true) {
            targ.children[0].remove()
            console.log(plant)
            merge(plant, targ)
            old = document.getElementById(old)
            if(old.children.length > 0) {
                old.children[0].remove()
            }
        }
    } else {
        ev.target.appendChild(document.getElementById(data));
    }
}

function cropId() {
    var crops = document.getElementsByClassName("cropImage")
    var teir = 0
    var crop = ""
    var tomato = {
        T1: 0,
        T2: 0,
        T3: 0,
        T4: 0,
        T5: 0,
        T6: 0,
        T7: 0,
        T8: 0,
        T9: 0
    }  
    var wheat = {
        T1: 0,
        T2: 0,
    }
    for(var j = 0; j < crops.length; j++) {
        //find teir
        if(crops[j].src.includes("T1")) {
            teir = 1
        } else if(crops[j].src.includes("T2")) {
            teir = 2
        } else if(crops[j].src.includes("T3")) {
            teir = 3
        } else if(crops[j].src.includes("T4")) {
            teir = 4
        } else if(crops[j].src.includes("T5")) {
            teir = 5
        } else if(crops[j].src.includes("T6")) {
            teir = 6
        } else if(crops[j].src.includes("T7")) {
            teir = 7
        } else if(crops[j].src.includes("T8")) {
            teir = 8
        } else if(crops[j].src.includes("T9")) {
            teir = 9
        }
        //find crop type
        if(crops[j].src.includes("Tomato")) {
            crop = "tomato"
        } else if(crops[j].src.includes("Wheat")) {
            crop = "wheat"
        }
        if(crop == "tomato" && teir == 1) {
            tomato.T1 += 1
            crops[j].id = tomato.T1 + crop + teir
        } else if(crop == "tomato" && teir == 2) {
            tomato.T2 += 1
            crops[j].id = tomato.T2 + crop + teir
        } else if(crop == "tomato" && teir == 3) {
            tomato.T3 += 1
            crops[j].id = tomato.T3 + crop + teir
        } else if(crop == "tomato" && teir == 4) {
            tomato.T4 += 1
            crops[j].id = tomato.T4 + crop + teir
        } else if(crop == "tomato" && teir == 5) {
            tomato.T5 += 1
            crops[j].id = tomato.T5 + crop + teir
        } else if(crop == "tomato" && teir == 6) {
            tomato.T6 += 1
            crops[j].id = tomato.T6 + crop + teir
        } else if(crop == "tomato" && teir == 7) {
            tomato.T7 += 1
            crops[j].id = tomato.T7 + crop + teir
        } else if(crop == "tomato" && teir == 8) {
            tomato.T8 += 1
            crops[j].id = tomato.T8 + crop + teir
        } else if(crop == "tomato" && teir == 9) {
            tomato.T9 += 1
            crops[j].id = tomato.T9 + crop + teir
        } else if(crop == "wheat" && teir == 1) {
            wheat.T1 += 1
            crops[j].id = wheat.T1 + crop + teir
        } else if(crop == "wheat" && teir == 2) {
            wheat.T2 += 1
            crops[j].id = wheat.T2 + crop + teir
        }
    }
}

function del() {
    var con = document.getElementById("con")
    for(var i = 0; i < con.children.length; i++) {
        con.children[0].remove()
    }
}

function mergechck(p1, p2) {
    var teir
    var crop
    var plant1
    var plant2
    //find teir
    console.log(p1)
    if(p1.src.includes("T1")) {
        teir = 1
    } else if(p1.src.includes("T2")) {
        teir = 2
    } else if(p1.src.includes("T3")) {
        teir = 3
    } else if(p1.src.includes("T4")) {
        teir = 4
    } else if(p1.src.includes("T5")) {
        teir = 5
    } else if(p1.src.includes("T6")) {
        teir = 6
    } else if(p1.src.includes("T7")) {
        teir = 7
    } else if(p1.src.includes("T8")) {
        teir = 8
    } else if(p1.src.includes("T9")) {
        teir = 9
    }
    //find crop type
    if(p1.src.includes("Tomato")) {
        crop = "tomato"
    } else if(p1.src.includes("Wheat")) {
        crop = "wheat"
    }
    plant1 = crop + "T" + teir
    //find teir of plant 2
    if(p2.src.includes("T1")) {
        teir = 1
    } else if(p2.src.includes("T2")) {
        teir = 2
    } else if(p2.src.includes("T3")) {
        teir = 3
    } else if(p2.src.includes("T4")) {
        teir = 4
    } else if(p2.src.includes("T5")) {
        teir = 5
    } else if(p2.src.includes("T6")) {
        teir = 6
    } else if(p2.src.includes("T7")) {
        teir = 7
    } else if(p2.src.includes("T8")) {
        teir = 8
    } else if(p2.src.includes("T9")) {
        teir = 9
    }
    //find crop type of plant 2
    if(p2.src.includes("tomato")) {
        crop = "tomato"
    } else if(p2.src.includes("Wheat")) {
        crop = "wheat"
    }
    plant2 = crop + "T" + teir
    //check if they are the same type of plant
    console.log(plant1, plant2)
    var arr = [0, ""]
    if(plant1 == plant2) {
        arr[0] = true
        arr[1] = plant1
        return arr
    } else {
        arr[0] = false
        return arr
    }
} 

function collect(e) {

}