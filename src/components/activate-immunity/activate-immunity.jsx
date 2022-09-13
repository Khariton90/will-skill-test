import './activate-immunity.scss';

export function ActivateImmunity() {
  return (
    <section className="activate-immunity">
       <div className="container">
          <div className="activate-immunity__wrapper">
            <div className="activate-immunity__top">
              <h1 className="activate-immunity__title">Активируй <br/> иммунитет!</h1>
            </div>
            <div className="activate-immunity__bottom immunity-bottom">
              <div className="immunity-bottom__description">
              <p className="activate-immunity__subtitle subtitle-phrase">Всего пять секунд в день помогут укрепить иммунитет <br/>
                и повысить защитные силы организма</p>
                <h3 className="immunity-bottom-title subtitle">NOOTRIS ПОМОГАЕТ</h3>
                <p className="immunity-bottom-subtitle">Вашему организму во время пандемии <br/>и сезонных простуд</p>
              </div>
            </div>

            <div className="activate-immunity__images images">
              <img src="./images/nootris.png" className="images__nootris" alt="nootris" />
              <img src="./images/Lemon.png" className="images__lemon" alt="lemon" />
              <img src="./images/ginger.png" className="images__ginger" alt="ginger" />
            </div>
          </div>
        </div> 
    </section>
  )
}