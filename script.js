
  const faqBoxes = document.querySelectorAll(".faqbox");

  faqBoxes.forEach(box => {
    box.addEventListener("click", () => {
      const answer = box.querySelector(".faq-answer");

      // Collapse all others if you want accordion style
      if (!box.classList.contains("active")) {
        document.querySelectorAll(".faqbox.active").forEach(activeBox => {
          activeBox.classList.remove("active");
          activeBox.querySelector(".faq-answer").style.maxHeight = null;
        });
      }

      box.classList.toggle("active");

      if (box.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });
