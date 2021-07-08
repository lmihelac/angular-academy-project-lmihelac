let reviews = [
	{ comment: 'Great show!', rating: 2 },
	{ comment: 'Hugh Laurie is awesome :)', rating: 3 },
	{ comment: 'Hope there will be 9th season!', rating: 5 },
];

const reviewList = document.querySelector('#review-list');
const submitBtn = document.getElementById('submitBtn');
const inputField = document.getElementById('input-field');
const reviewFormElement = document.querySelector('#review-form');

function renderReview(review) {
	const listItem = document.createElement('li');
	const textElement = document.createElement('span');
	const ratingElement = document.createElement('span');
	textElement.textContent = review.comment;
	ratingElement.textContent = review.rating;
	reviewList.appendChild(listItem);
	listItem.appendChild(textElement);
	listItem.appendChild(ratingElement);
	const createBtn = document.createElement('button');
	createBtn.textContent = 'remove';
	listItem.appendChild(createBtn);
	createBtn.addEventListener('click', () => {
		const index = reviews.indexOf(review);
		console.log(index);
		reviews.splice(index, 1);
		renderAll();
	});
}

function renderAll() {
	reviewList.innerHTML = '';
	for (let i = 0; i < reviews.length; i++) {
		renderReview(reviews[i]);
	}
}

renderAll();

reviewFormElement.addEventListener('submit', function (event) {
	event.preventDefault();
	const formData = new FormData(reviewFormElement);
	const inputText = formData.get('input');
	const inputRating = formData.get('rating');
	const review = { comment: inputText, rating: inputRating };

	reviews.push(review);
	renderAll();
});
