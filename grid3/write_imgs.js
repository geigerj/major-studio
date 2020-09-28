let text_written = false;

async function execute() {
    
    document.body.style.fontSize = screen.width / 160 + "px";
    const response = await fetch('config.txt');
    const data = await response.text();
    document.getElementById("wrapper").style.width = screen.width * .98 + "px";
    let innerWrap = document.getElementById("innerWrapper");
    data.split(/(\r?\n){2}/)
            .map((s) => s.trim())
            .filter((s) => s !== "")
            .map(s => makeRow(s, innerWrap.offsetWidth))
            .forEach((row) => innerWrap.appendChild(row));
}

function makeRow(s, width) {
    console.log(width);
    var lines = s.split(/\r?\n/);
    
    let wrapper = document.createElement("div"); 
    wrapper.className = "row-wrapper";
    
    let title = lines.shift();
    let titleDiv = document.createElement("div");
    titleDiv.className = "title";
    titleDiv.innerHTML = "<br>&nbsp;&nbsp;" + title.replace(/ /g, "&nbsp;");
    wrapper.appendChild(titleDiv);
    
    lines
      .map((ref) => makeimgElt(ref, width * 0.18))
      .forEach((div) => wrapper.appendChild(div));
      
    return wrapper;
}

function makeimgElt(ref, width) {
    let imgCont = document.createElement("div");
    imgCont.className = "imgCont";
    let anch = document.createElement("a")
    anch.href = "img/" + ref;
    let imgElt = document.createElement("img");
    imgElt.src = "img/" + ref;
    imgElt.style.maxWidth = width + "px";
    imgElt.style.maxHeight = width + "px";
    imgElt.style.position = "absolute";
    imgElt.style.top = "50%";
    imgElt.style.left = "50%";
    imgElt.style.transform = "translate(-50%, -50%)";
    imgElt.onerror = function() {
        imgElt.onerror = null;
        imgElt.src= "img/black.jpg";
    }
    anch.appendChild(imgElt);
    imgCont.appendChild(anch);
    return imgCont;
}

document.onload = execute();