document.getElementById("myMenu").onmouseout = closeMenu;
function openMenu(event, id) {
var el, x, y;
el = document.getElementById(id);
if (window.event) {
x = window.event.clientX + document.documentElement.scrollLeft
+ document.body.scrollLeft;
y = window.event.clientY + document.documentElement.scrollTop +
+ document.body.scrollTop;
}
else {
x = event.clientX + window.scrollX;
y = event.clientY + window.scrollY;
}
x -= 2; y -= 2;
el.style.left = x + "px";
el.style.top = y + "px";
el.style.visibility = "visible";
}
function closeMenu(event) {
var current, related;
if (window.event) {
current = this;
related = window.event.toElement;
}
else {
current = event.currentTarget;
related = event.relatedTarget;
}
if (current != related && !contains(current, related))
current.style.visibility = "hidden";
}
function contains(a, b) {
// Return true if node a contains node b.
while (b.parentNode)
if ((b = b.parentNode) == a)
return true;
return false;
}