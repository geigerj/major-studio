import os

FILE_TEMPLATE = """<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="smoothscroll.js"></script>
</head>

<body>
<div class="scrollcontainer">
{}
</div>
</body>
</html>"""

INNER_TEMPLATE = "    <div class=\"imgcontainer\"><img src=\"files/{}\" /></div>"

inner = "\n".join(sorted([INNER_TEMPLATE.format(f) for f in os.listdir('files') if f[-4:] == '.jpg']))
output = FILE_TEMPLATE.format(inner)

with open("index.html", "w", encoding="utf-8") as out:
  out.write(output)