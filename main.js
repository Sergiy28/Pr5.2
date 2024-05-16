let authors = {
    "Д. Байрон": "Той, хто не любить своєї країни, нічого любити не може.",
    "Г. Сковорода": "Кожному мила своя сторона.",
    "Д. Лихачев": "Усвідомлена любов до свого народу не поєднується з ненавистю до інших.",
    "М. Шумило": "Мова — це глибина тисячоліть.",
    "Ч. Айтматов": "Той, хто в біді кидає свій народ, стає його ворогом."
};


function showQuote(author) {
    alert(authors[author]);
}


for (let author in authors) {
    document.getElementById(author).addEventListener('click', function() {
        showQuote(author);
    });
}