// ربط عناصر موجودة على الصفحة بالبيانات
const data = [
    { name: "Bleach", id: "bleach" },
    { name: "Naruto", id: "ragna-crimson" },
    { name: "Tokyo Ghoul", id: "tokyo-ghoul" },
    { name: "One Piece", id: "one-piece" },
    { name: "Attack On Titen", id: "attack-on-titan" },
    { name: "Black Clover", id: "black-clover" },
    { name: "Demon Slayer", id: "demon-slayer" },
    { name: "Boku No Hero", id: "my-hero" },
    { name: "Death Note", id: "death-note" },
    { name: "Vinland Saga", id: "vinland-saga" },
    { name: "Hunter x Hunter", id: "hunter-x-hunter" },
    { name: "Solo Leveling", id: "solo"}
];

// ربط إدخال المستخدم وإظهار النتائج
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // تفريغ النتائج السابقة

    if (query) {
        const filteredResults = data.filter(item => item.name.toLowerCase().startsWith(query));
        filteredResults.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.textContent = result.name;
            resultItem.classList.add('result-item');

            // إضافة رابط للنتيجة
            resultItem.addEventListener('click', function() {
                document.getElementById(result.id).scrollIntoView({ behavior: 'smooth' });
            });

            resultsContainer.appendChild(resultItem);
        });
    }
});
