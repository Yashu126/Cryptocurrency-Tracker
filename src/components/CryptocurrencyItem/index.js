import './index.css'

const CryptocurrencyItem = props => {
  const {eachCrypto} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachCrypto
  return (
    <li className="li">
      <div className="logo-name">
        <img src={currencyLogo} alt={currencyName} className="bitcoin-logo" />
        <p>{currencyName}</p>
      </div>
      <div className="usd-euro-section">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
