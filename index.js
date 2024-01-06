const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay');
    const cartButton = document.querySelector('#cart-button');

    openModal = () => {
        modal.classList.add('open');
    };

    closeModal = () => {
        modal.classList.remove('open');
    };

    cartButton.addEventListener('click', () => {
        openModal();
    });

    modal.addEventListener('click', (event) => {

        if (
            event.target.classList.contains('cart-modal__overlay') ||
            event.target.closest('#close-button') ||
            event.target.closest('#cancel-button')
        ) {
            closeModal()
        };
    });
};

const restsFunc = () => {
    const container = document.querySelector('#rests-container');

    const restArray = [
        {
            id: 1,
            title: 'Пицца плюс',
            time: '50 мин',
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image-1.jpg'
        },

        {
            id: 2,
            title: 'Тануки',
            time: '50 мин',
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image-2.jpg'
        },

        {
            id: 3,
            title: 'FoodBand',
            time: '50 мин',
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image-3.jpg'
        },

        {
            id: 4,
            title: 'Жадина-пицца',
            time: '50 мин',
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image-4.jpg'
        },

        {
            id: 5,
            title: 'Точка еды',
            time: '50 мин',
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image-5.jpg'
        },

        {
            id: 6,
            title: 'PizzaBurger',
            time: '50 мин',
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image-6.jpg'
        },
    ];

    const renderRests = (array) => {
        container.innerHTML = '';

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend',
                `<a class="products__card card" href="./goods.html?id=${card.id}">
                <div class="card__image">
                    <img src="./images/rests/${card.image}" alt="${card.image}">
                </div >
    <div class="card__description">
        <div class="card__description-row">
            <h4 class="card__description-title">${card.title}</h4>
            <div class="card__description-badge">${card.time}</div>
        </div>
        <div class="card__description-row">
            <div class="card__description-info">
                <div class="card__description-rating">
                    <img src="./images/icons/rating_star.svg" alt="rating star">
                        ${card.rating}
                </div>
                <div class="card__description-price">${card.price}</div>
                <div class="card__description-group">${card.type}</div>
            </div>
        </div>
    </div>          
            </a > `
            );
        })
    }

    if (container) {
        setTimeout(() => { renderRests(restArray) }, 1000);

        const loading = () => {
            container.innerHTML = '<p style="width: 100%; text-align: center;">Loading...</p>';
        };

        loading();
    }





}

const goodsFunc = () => {
    const container = document.querySelector('#goods-container');

    const goodsArray = [
        {
            id: 1,
            title: 'Ролл угорь стандарт',
            contain: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            price: '250 ₽',
            image: 'image-1.jpg'
        },

        {
            id: 2,
            title: 'Калифорния лосось стандарт',
            contain: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            price: '395 ₽',
            image: 'image-2.jpg'
        },

        {
            id: 3,
            title: 'Окинава стандарт',
            contain: ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            price: '250 ₽',
            image: 'image-3.jpg'
        },

        {
            id: 4,
            title: 'Цезарь маки хl',
            contain: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            price: '250 ₽',
            image: 'image-4.jpg'
        },

        {
            id: 5,
            title: 'Ясай маки стандарт 185 г',
            contain: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            price: '250 ₽',
            image: 'image-5.jpg'
        },

        {
            id: 6,
            title: 'Ролл с креветкой стандарт',
            contain: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            price: '250 ₽',
            image: 'image-6.jpg'
        }
    ];

    const renderGoods = (array) => {
        container.innerHTML = '';
        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend',
                `<div class="products__card card">
            <div class="card__image">
              <img src="./images/goods/${card.image}" alt="${card.image}" />
            </div>
            <div class="card__description">
              <div class="card__description-row">
                <h5 class="card__description--name">${card.title}</h5>
              </div>
              <div class="card__description-row">
                <p class="card__description--contain">
                ${card.contain}
                </p>
              </div>
              <div class="card__description-row">
                <div class="card__description--controls">
                  <button class="button button--primary">
                    <img
                      src="./images/controls/user.svg"
                      alt="button user login"
                    />
                    В корзину
                  </button>
                  <span class="card__description--price">${card.price}</span>
                </div>
              </div>
            </div>
          </div>
            `)
        })
    };

    if (container) {
        setTimeout(() => { renderGoods(goodsArray) }, 1000);

        const loading = () => {
            container.innerHTML = '<p style="width: 100%; text-align: center;">Loading...</p>';
        };

        loading();
    }


    console.log(container);
}

// modalFunc();
restsFunc();
goodsFunc();

