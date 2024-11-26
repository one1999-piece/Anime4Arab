// إضافة كارد جديدة
function addCard() {
    const title = prompt("Enter the title of the anime:");
    const imageUrl = prompt("Enter the image URL:");
    const link = prompt("Enter the link to the anime:");
  
    if (title && imageUrl && link) {
      const newCard = {
        title: title,
        imageUrl: imageUrl,
        link: link
      };
  
      let cards = JSON.parse(localStorage.getItem("cards")) || [];
      cards.push(newCard);
      localStorage.setItem("cards", JSON.stringify(cards));
  
      alert("Card added successfully!");
      loadCards();  // إعادة تحميل الكروت لتحديث الصفحة
    } else {
      alert("All fields are required!");
    }
  }
  
  // تحميل الكروت من localStorage وعرضها مع إمكانية التعديل والحذف
  function loadCards() {
    const cards = JSON.parse(localStorage.getItem("cards")) || [];
    const cardList = document.getElementById('cardList');
    cardList.innerHTML = '';  // مسح الكروت القديمة
  
    cards.forEach((card, index) => {
      const cardHTML = `
        <div class="card">
          <img src="${card.imageUrl}" alt="${card.title}">
          <div class="card-content">
            <h3>${card.title}</h3>
            <p>Anime<sup>4</sup>Arab</p>
            <a href="${card.link}"><button>Watch The Anime</button></a>
            <button onclick="editCard(${index})">Edit</button>
            <button onclick="deleteCard(${index})">Delete</button>
          </div>
        </div>
      `;
      cardList.insertAdjacentHTML('beforeend', cardHTML);
    });
  }
  
  // تعديل كارد
  function editCard(index) {
    const cards = JSON.parse(localStorage.getItem("cards"));
    const card = cards[index];
  
    const newTitle = prompt("Enter the new title:", card.title);
    const newImageUrl = prompt("Enter the new image URL:", card.imageUrl);
    const newLink = prompt("Enter the new link:", card.link);
  
    if (newTitle && newImageUrl && newLink) {
      // تحديث الكارد في المصفوفة
      cards[index] = { title: newTitle, imageUrl: newImageUrl, link: newLink };
      localStorage.setItem("cards", JSON.stringify(cards));
  
      alert("Card updated successfully!");
      loadCards();  // إعادة تحميل الكروت لتحديث الصفحة
    } else {
      alert("All fields are required!");
    }
  }
  
  // حذف كارد
  function deleteCard(index) {
    const cards = JSON.parse(localStorage.getItem("cards"));
    cards.splice(index, 1);  // إزالة الكارد من المصفوفة
  
    localStorage.setItem("cards", JSON.stringify(cards));
  
    alert("Card deleted successfully!");
    loadCards();  // إعادة تحميل الكروت لتحديث الصفحة
  }
  
  // تحميل الكروت عند تحميل الصفحة
  window.onload = function() {
    loadCards();
  };
  