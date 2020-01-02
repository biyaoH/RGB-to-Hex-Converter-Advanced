const view = {
  rgbNumber(rValue, gValue, bValue) {
    const rNumber = document.getElementById('r-number')
    rNumber.innerHTML = rValue

    const gNumber = document.getElementById('g-number')
    gNumber.innerHTML = gValue

    const bNumber = document.getElementById('b-number')
    bNumber.innerHTML = bValue

  },

  hexNumber(hexValue) {
    let hexNumber = document.querySelector('#hex-number')
    hexNumber.innerHTML = hexValue
  },

  hexColor(hexValue) {
    let container = document.querySelector('.container')

    container.setAttribute('style', `background-color:${hexValue}`)
  }

}

const controller = {
  valueRGB() {
    var rValue = parseInt(document.getElementById("r-input").value);
    var gValue = parseInt(document.getElementById("g-input").value);
    var bValue = parseInt(document.getElementById("b-input").value);

    view.rgbNumber(rValue, gValue, bValue)
    this.valueHex(rValue, gValue, bValue)

  },

  valueHex(rValue, gValue, bValue) {
    rValue = parseInt(rValue).toString(16)
    if (rValue.length < 2) {
      rValue = '0' + rValue
    }

    gValue = parseInt(gValue).toString(16)
    if (gValue.length < 2) {
      gValue = '0' + gValue
    }

    bValue = parseInt(bValue).toString(16)
    if (bValue.length < 2) {
      bValue = '0' + bValue
    }

    const hexValue = `#${rValue}${gValue}${bValue}`

    view.hexNumber(hexValue)
    view.hexColor(hexValue)
  },

  valueR(value) {
    view.valueOutputR(value)
    model.valueRGB.splice(0, 1, parseInt(value))
    console.log(model.valueRGB)
  },




}


