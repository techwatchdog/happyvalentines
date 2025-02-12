let currentCardIndex = 0;
        const directions = ['left', 'right', 'left', 'right'];

        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(pageId).classList.add('active');
        }

        function moveCard(card) {
            const direction = directions[currentCardIndex % directions.length];
            card.style.transform = `translateX(${direction === 'left' ? '-200%' : '200%'}) rotate(${direction === 'left' ? '-20deg' : '20deg'})`;
            card.style.opacity = '0';
            card.style.pointerEvents = 'none';
            currentCardIndex++;
        }

        function openBook() {
            document.querySelector('.book').classList.toggle('open');
        }

        function checkPin() {
            const correctPin = "1234";
            const enteredPin = document.getElementById("pinInput").value;
            if (enteredPin === correctPin) {
                document.getElementById("loginPage").style.display = "none";
                document.getElementById("page1").classList.add("active");
            } else {
                alert("Incorrect PIN. Try again.");
            }
        }