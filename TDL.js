var x = document.getElementById("x"),
    inp = document.getElementById("inp"),
    section = document.getElementById("section");

window.onload = function () {
    inp.focus();
}

function addItem() {
    if (inp.value == '') {
        alert("Can't Enter an Empty Field");
    } else {
        var article = document.createElement('article');
        var p = document.createElement('input');
        article.appendChild(p);
        var div = document.createElement('div');
        var input = document.createElement('input');
        var btn = document.createElement('button');
        var time = document.createElement('p');
        var edit = document.createElement('img');
        edit.src = "https://img.icons8.com/material-rounded/24/ffffff/pencil--v1.png"
        edit.setAttribute('id', 'edit');
        div.appendChild(time);
        div.appendChild(input);
        div.appendChild(edit);
        div.appendChild(btn);
        article.appendChild(div);
        section.appendChild(article);
        p.setAttribute('readonly', '');
        p.setAttribute('id', 'rOnly');
        p.style.border = 'none';
        div.classList.add('divRight');
        time.classList.add('local');
        input.setAttribute('type', 'checkbox');
        btn.setAttribute('id', 'x');
        btn.innerHTML = 'x';
        time.innerHTML = new Date().toLocaleString();
        p.value = inp.value;
        inp.value = '';

        btn.addEventListener("click", () => { article.remove() });

        input.onclick = () => {
            var ins = input.parentElement.previousElementSibling;
            if (input.checked == true) {
                ins.style.textDecoration = 'line-through';
                ins.style.color = "gray";
            } else {
                ins.style.removeProperty("text-decoration");
                ins.style.removeProperty("color");
            }
            inp.focus();
        }

        edit.onclick = () => {
            if (edit.src == "https://img.icons8.com/material-rounded/24/ffffff/pencil--v1.png") {
                edit.src = "https://img.icons8.com/sf-black/64/ffffff/checkmark.png"
                p.removeAttribute('readonly');
                p.style.removeProperty("border");
                p.focus();
            } else {
                edit.src = "https://img.icons8.com/material-rounded/24/ffffff/pencil--v1.png"
                p.value = p.value;
                p.setAttribute('readonly', '');
                p.style.border = 'none';
            }
        }

        inp.focus();
    }
}

inp.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addItem();
    }
});




