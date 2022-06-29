// Ищем все элементы
document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
    item.addEventListener('click' , () => { // тут мы говорим, когда мы нажимаем на этот элемент, делай что-то
        const parent = item.parentNode; // определяем родителя

        // Условие: если есть класс accordion-item--active, то мы его убираем
        if(parent.classList.contains('accordion-item--active')) {
            parent.classList.remove('accordion-item--active');

            // В противном случае, сначала мы ищем все accordion-item
        } else {
            document.querySelectorAll('.accordion-item')

            // И для каждого дочернего child убираем класс active
            .forEach((child) => child.classList.remove('accordion-item--active'))

            // А для parent мы этот класс устанавливаем
            parent.classList.add('accordion-item--active');
        }

    })
)
    
