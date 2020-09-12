let text_written = false;

async function execute() {
    const response = await fetch('config.txt');
    const data = await response.text();
    document.getElementById("container").innerHTML =
        data.split(/(\r?\n){2}/)
            .map((s) => s.trim())
            .filter((s) => s !== "")
            .map(s => makeRow(s))
            .join("\n\n");
            
  

}

function makeRow(s) {
    var lines = s.split(/\r?\n/);
    var title = lines.shift();
    var content = lines.map((l) => l.split(","))
      .map((arr) => `<div>${arr[0]}<br><br><img src="img/${arr[1]}"></div>`)
      .join("\n  ");
    return `<div class="scrolling-wrapper">
  <div class="title">${title}</div>
  ${content}
</div>`;
}


function linkHandle(s, windowWidth) {
    const DOT_WIDTH = 3.776;
    // Number of dots across the row to the name
    const DOT_COUNT = Math.min(Math.max(windowWidth/11, 65), 130);
    let [handle,name] = s.split(",");
    return "<a href=\"https://instagram.com/"
        + handle.substring(1)
        + "\">"
        + handle
        + ".".repeat(Math.floor(DOT_COUNT - getTextWidth(handle, "12pt Lato")/DOT_WIDTH))
        + (name || "????") 
        + "</a>";
}


document.onload = execute();