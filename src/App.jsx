import { Suspense, useEffect } from 'react';
import LandModel from './components/Land';

function App() {
  return (
    <div className='card' id='card'>
      <h2 className='title'>SPORTBASE</h2>
      <div className='card__img'>
        <div className='scene'>
          <Suspense
            fallback={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Plot Loading...
              </div>
            }
          >
            <LandModel />
          </Suspense>
        </div>
        <h2 className='subtitle'>METAVERSE</h2>
      </div>
      <div className='card__description'>
        <div className='card__container'>
          <div className='card__info'>
            <div className='card__header'>
              <div className='card__rating'>
                <svg
                  height='25'
                  width='23'
                  className='star rating'
                  data-rating='1'
                >
                  <polygon points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78' />
                </svg>
                <svg
                  height='25'
                  width='23'
                  className='star rating'
                  data-rating='1'
                >
                  <polygon points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78' />
                </svg>
                <svg
                  height='25'
                  width='23'
                  className='star rating'
                  data-rating='1'
                >
                  <polygon points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78' />
                </svg>
                <svg
                  height='25'
                  width='23'
                  className='star rating'
                  data-rating='1'
                >
                  <polygon points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78' />
                </svg>
                <svg
                  height='25'
                  width='23'
                  className='star rating'
                  data-rating='1'
                >
                  <polygon points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78' />
                </svg>
              </div>
              <p className='card__price'>1.5 ETH</p>
            </div>
            <h1 className='card__title'>Metaverse</h1>
            <h2 className='card__subtitle'>Plot - Basketball</h2>
          </div>
          <div className='colors'>
            <span className='color__title'>Other plots</span>
            <div className='color__container'>
              <div className='color__item'></div>
              <div className='color__item'></div>
              <div className='color__item'></div>
              <div className='color__item'></div>
              <div className='color__item'></div>
            </div>
          </div>
          <a className='card__button'>Buy this Land</a>
        </div>
      </div>
    </div>
  );
}

export default App;
