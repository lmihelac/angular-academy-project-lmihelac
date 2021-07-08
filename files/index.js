let reviews = ['Great show!', 'Hugh Laurie is awesome :)', 'Hope there will be 9th season!'];

const reviewList = document.querySelector('#review-list');
const submitBtn = document.getElementById('submitBtn');
const inputField = document.getElementById('input-field');
const reviewFormElement = document.querySelector('#review-form');

function renderReview(input) {
	const listItem = document.createElement('li');
	listItem.textContent = input.text;
	reviewList.appendChild(listItem);
}

for (let i = 0; i < reviews.length; i++) {
	renderReview(reviews[i]);
}

reviewFormElement.addEventListener('submit', function (event) {
	event.preventDefault();
	const formData = new FormData(reviewFormElement);
	const inputText = formData.get('input');
	const todo = [inputText];

	reviews.push(input);
	renderTodo(input);
});
