function togglelanguage() {
    var languageBtn = document.querySelector('.language-btn');
    if (languageBtn.innerText === 'English') {
        languageBtn.innerText = 'Hindi';
        // Code to change text to Hindi
        

    } else {
        languageBtn.innerText = 'English';
        // Code to change text to English
    }
}

function getStarted() {
    var emailInput = document.querySelector('.email-input-field');
    var email = emailInput.value.trim();

    if (email !== '') {
        window.location.href = 'file:///S:/NETFLIX/signinpage/index.html';
    }
}
function getStarted() {
    var emailInput = document.querySelector('.email-input-field');
    var email = emailInput.value.trim();

    if (email !== '') {
        window.location.href = 'file:///S:/NETFLIX/signinpage/index.html';
    }
}

function openSignInPage() {
    window.location.href = 'file:///S:/NETFLIX/signinpage/index.html';
}

var faqBlocks = document.querySelectorAll('.faq-block');

        faqBlocks.forEach(function(block, index) {
            block.addEventListener('click', function() {
                toggleAnswer(index + 1);
            });

            block.addEventListener('touchstart', function() {
                toggleAnswer(index + 1);
            });
        });

     /*   function toggleAnswer(id) {
            var answer = document.getElementById('answer' + id);
            var question = document.querySelector('.faq-question:nth-child(' + id + ')');
        
            // Hide all other answers
            var allAnswers = document.querySelectorAll('.faq-answer');
            allAnswers.forEach(function(ans) {
                ans.style.display = 'none';
            });
        
            // Toggle the display of the clicked answer
            answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
        }
        */
        document.addEventListener('DOMContentLoaded', function() {
            const questions = document.querySelectorAll('.question');
            questions.forEach(question => {
              question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
                
                // Smooth scroll to the answer
                const yOffset = -40; // Adjust this value as needed
                const y = answer.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              });
            });
          });