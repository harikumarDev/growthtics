const form = document.getElementById("feedback-form");

const submitFeedback = (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const feedback = document.getElementById("feedback").value;

  fetch("https://chat-api.growthtics.com/feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, feedback }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Feedback submitted successfully!");
      form.reset();
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong!");
    });
};

form.addEventListener("submit", submitFeedback);
