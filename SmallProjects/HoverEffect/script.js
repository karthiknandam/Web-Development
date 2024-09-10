    const container = document.getElementById('container');
    const boxCount = 400; // 20x20 grid

    function getRandomColor() {
        return `rgb(${Math.random()*256|0}, ${Math.random()*256|0}, ${Math.random()*256|0})`;
    }

    function createBoxes() {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < boxCount; i++) {
            const box = document.createElement('div');
            box.className = 'box';
            fragment.appendChild(box);
        }
        container.appendChild(fragment);
    }

    function handleMouseEvents(event) {
        if (event.target.classList.contains('box')) {
            if (event.type === 'mouseover') {
                event.target.style.backgroundColor = getRandomColor();
            }
            if (event.type === 'mouseout') {
                setTimeout(() => {
                    event.target.style.backgroundColor = '';
                }, 200);
            }
        }
    }

    createBoxes();

    // ^ we must add the events for both of the mouses otherwise it wont work because we mensioned there;

    container.addEventListener('mouseover', handleMouseEvents);
    container.addEventListener('mouseout', handleMouseEvents);