function leAzJatekhoz() {
    var kozepso = document.getElementById('kozepso');
    kozepso.scrollIntoView({ behavior: 'smooth' });
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.leajatekhoz').style.display = 'inline';
    }
}

function leAzJatekhozujra() {
    var kozepso = document.getElementById('kozepso');
    kozepso.scrollIntoView({ behavior: 'smooth' });
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.leajatekhozujra').style.display = 'inline';
    }
}

function leAzFooterhez() {
    var footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.leafooterhez').style.display = 'inline';
    }
}