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

document.onload = execute();