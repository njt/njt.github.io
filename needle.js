var n=0;
function needle (e) {
    if (e.key != 'D') { return }
    if (++n % 2 == 1) {
        document.body.style.cursor="url(file:///Users/gnat/Source/njt.github.io/needle.png), auto";
    } else {
        document.body.style.cursor="auto";
    }
}
