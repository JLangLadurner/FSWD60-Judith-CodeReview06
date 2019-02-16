function comment() {
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;
    document.getElementById('output').innerHTML += "<h3>" + name + "</h3><br><p>" + comment + "</p>";
}
document.getElementById('btn').addEventListener('click', comment, false);
