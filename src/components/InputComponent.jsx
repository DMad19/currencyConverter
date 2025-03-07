import React from 'react'

function InputComponent({currencyValue=0,label,currencyType,changeCurrencyValue,currencies,changeCurrencyType,isReadOnly}) {
  return (
    <div className="flex flex-row items-center justify-between space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <input
        type="number"
        min={0}
        value={currencyValue}
        step="any"
        onChange={(e) => changeCurrencyValue(parseInt(e.target.value))}
        readOnly={isReadOnly}
        id="currencyTo"
        className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex flex-col space-y-2">
        <label htmlFor="currencyType" className="text-sm font-semibold text-gray-700">
          {label}:
        </label>
        <select
          name="currencyType"
          id="currencyType"
          value={currencyType}
          onChange={(e) => changeCurrencyType(e.target.value)}
          onInvalid={(e)=>{e.preventDefault()}}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {currencies?.map((currencyType) => (
            <option key={currencyType} value={currencyType}>
              {currencyType}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputComponent