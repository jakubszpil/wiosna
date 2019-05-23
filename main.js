//dodawanie postów
function postsAdder(number,array) {
    for(var i = 0; i < number; i++) {
        document.querySelector(".flow-content").innerHTML += `
        <div class="post">
            <img class="post-picture" src="img/posts/`+array.post[i].imgSrc+`" alt="`+array.post[i].imgSrc+`"></img>
            <header class="post-header">`+ array.post[i].header +`</header>
            <div class="post-description">`+array.post[i].description+`</div>
        </div>
        `;
    }
}
//pobieranie danych z pliku JSON do tablicy w JS
var postsJSON;
var req = new XMLHttpRequest();
req.open("GET","data.json",true);
req.send(null);
req.onreadystatechange = function() {
    if(req.readyState == 4) {
        postsJSON = JSON.parse(req.responseText);
        var postsNumb = postsJSON.post.length;
        postsAdder(postsNumb, postsJSON);
    }
};



