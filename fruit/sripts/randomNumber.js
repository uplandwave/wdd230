        // Function to generate a random 16-digit number
        function generateRandomNumber() {
            // Generate 16 random digits
            let randomNumber = '';
            for (let i = 0; i < 16; i++) {
                randomNumber += Math.floor(Math.random() * 10);
            }
            return randomNumber;
        }

        // Display the random number in the HTML element
        document.getElementById('random-number').textContent = generateRandomNumber();