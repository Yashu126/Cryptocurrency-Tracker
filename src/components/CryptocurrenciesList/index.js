import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {cryptoList} = props
  return (
    <div className="cryptocurrency-list">
      <h1 className="main-heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <ul className="ul">
        <nav className="nav-bar">
          <h2 className="coin-type">Coin Type</h2>
          <div className="usd-euro-section">
            <h2 className="coin-type">USD</h2>
            <h2 className="coin-type">EURO</h2>
          </div>
        </nav>
        {cryptoList.map(eachCrypto => (
          <CryptocurrencyItem eachCrypto={eachCrypto} key={eachCrypto.id} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
