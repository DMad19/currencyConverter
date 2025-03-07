import { useEffect, useState } from 'react'
import './App.css'
import InputComponent from './components/inputComponent'
import useFetchCurrencies from './hooks/useFetchCurrencies'

function App() {
  const [fromValue,setFromValue] = useState(0)
  const [toValue,setToValue] = useState(0)
  const [fromCurrency,setFromCurrency] = useState("inr")
  const [toCurrency,setToCurrency] = useState("usd")
  let currenciesObject = useFetchCurrencies(fromCurrency)
  let currencies = Object.keys(currenciesObject)

  function calculateToValue(){
    if(Object.keys(currenciesObject).length!=0){
      setToValue((fromValue * currenciesObject[toCurrency]).toFixed(2))
    }
  }

  function swap(){
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  useEffect(()=>{calculateToValue()},[currenciesObject,fromValue,toCurrency])

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6">
      <div className="text-3xl font-bold text-gray-800 mb-8">
        CURRENCY CONVERTER
      </div>

      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6 mb-6 transform transition-all hover:shadow-2xl">
        <InputComponent
          currencyValue={fromValue}
          label="From"
          currencyType={fromCurrency}
          changeCurrencyValue={(currency) => setFromValue(currency)}
          currencies={currencies}
          changeCurrencyType={(currencyType) => setFromCurrency(currencyType)}
        />
      </div>

      <button
        className="bg-blue-500 text-white border-2 border-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-200 mb-6"
        onClick={swap}
      >
        SWAP
      </button>

      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6 transform transition-all hover:shadow-2xl">
        <InputComponent
          currencyValue={toValue}
          label="To"
          currencyType={toCurrency}
          changeCurrencyValue={(currency) => setToValue(currency)}
          currencies={currencies}
          changeCurrencyType={(currencyType) => setToCurrency(currencyType)}
          isReadOnly={true}
        />
      </div>
    </div>
  )
}

export default App
