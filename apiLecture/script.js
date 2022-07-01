const COIN_API = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

async function fetchCoins() {
  let response = await fetch(COIN_API)
  let coinData = await response.json()

  let coinListElement = document.querySelector(".coinList")
  coinData.forEach(element => {
    let pTag = document.createElement("p")
    pTag.innerHTML = `${element.name} - ${element.current_price}`
    coinListElement.append(pTag)
  });
}
