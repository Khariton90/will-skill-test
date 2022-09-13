import './get-protection.scss';

export function GetProtection() {
  return (
    <section className="get-protection">
      <div className="container">
        <div className="get-protection__wrapper">
            <div className="get-protection__title">
              <h2>Получи защиту иммунитета</h2>
              <p className="yellow">Со скидкой -15% первым!</p>
            </div>

            <div className="get-protection__price price">
                <p>
                  <span className="price__old">750₽</span>
                  <span className='price__new'>690₽</span>
                </p>
            </div>

            <div className="get-protection__offer offer">
              <article className="offer__card">
                <div className="offer__card-image">
                  <img src="./images/ginger.png" alt="ginder" />
                </div>
                <div className="offer__card-description">
                    <p>Содержит</p>
                    <p className="yellow">имбирь</p>
                </div>
              </article>
              <article className="offer__card">
                <div className="offer__card-image">
                  <img src="./images/nootris-protection.png" alt="nootris-protection" />
                </div>
                <div className="offer__card-description offer__card-center">
                  <p className="subtitle">+ Бесплатная доставка </p>
                  <p className="subtitle-phrase yellow">Специальная цена</p>
                </div>
              </article>
              <article className="offer__card">
                <div className="offer__card-image">
                  <img src="./images/vorus.png" alt="vorus" />
                </div>
                <div className="offer__card-description">
                  <p>Нейтрализует</p>
                  <p className="yellow">вирусы</p>
                </div>
              </article>
            </div>

            <a href="/" className="btn primary-btn">Оформить заказ</a>
        </div>
      </div>
    </section>
  )
}