document.getElementById('checkButton').addEventListener('click', () => {
    const review = document.getElementById('reviewInput').value.trim();
    const resultDiv = document.getElementById('result');
  
    if (!review) {
      resultDiv.textContent = "Please enter a review.";
      resultDiv.className = "result";
      return;
    }

    const isFake = simulateFakeReviewCheck(review);
  
    if (isFake) {
      resultDiv.textContent = "This review is likely FAKE.";
      resultDiv.className = "result fake";
    } else {
      resultDiv.textContent = "This review seems REAL.";
      resultDiv.className = "result safe";
    }
});

function simulateFakeReviewCheck(review) {
    const suspiciousWords = ["great deal", "unbelievable", "cheap", "100%"];
    const suspiciousPattern = new RegExp(suspiciousWords.join("|"), "i");

    return review.length < 20 || suspiciousPattern.test(review) || (review.match(/!/g) || []).length > 3;
}
