let reviews = JSON.parse(localStorage.getItem('reviews') || '[]');

// Функция для добавления отзыва
function addReview(e) {
    e.preventDefault();

    const product = document.getElementById('productInput').value;
    const review = document.getElementById('reviewInput').value;

    if (product && review) {
        reviews.push({
            product,
            review,
            id: Date.now()
        });
        localStorage.setItem('reviews', JSON.stringify(reviews));
        document.getElementById('reviewForm').reset();
        showProducts();
        alert('Отзыв добавлен!');
    } else {
        alert('Заполните все поля!');
    }
}

// Функция для списка продуктов
function showProducts() {
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = '';

    const uniqueProducts = [...new Set(reviews.map(r => r.product))];
    uniqueProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.textContent = product;
        productDiv.addEventListener('click', () => showReviewsForProduct(product));
        productsList.appendChild(productDiv);
    });
}

// Функция для отзывов по конкретному продукту
function showReviewsForProduct(product) {
    const reviewsSection = document.getElementById('reviewsSection');
    reviewsSection.innerHTML = '';

    const filteredReviews = reviews.filter(r => r.product === product);
    if (filteredReviews.length === 0) {
        reviewsSection.textContent = 'Нет отзывов для данного продукта.';
    } else {
        const reviewsDiv = document.createElement('div');
        filteredReviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.textContent = `${review.review} (${review.id})`;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Удалить';
            deleteBtn.addEventListener('click', () => deleteReview(review.id));
            reviewDiv.appendChild(deleteBtn);
            reviewsDiv.appendChild(reviewDiv);
        });
        reviewsSection.appendChild(reviewsDiv);
    }
}

// Функция для удаления отзыва
function deleteReview(id) {
    reviews = reviews.filter(r => r.id !== id);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    showProducts();
    alert('Отзыв удалён!');
}

document.getElementById('reviewForm').addEventListener('submit', addReview);

showProducts();