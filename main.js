const inputs = document.querySelectorAll('.controls input')
const spacingPx = document.querySelector(".spac")
const inputSpacing = document.querySelector("#spacing")
const blurPx = document.querySelector(".blu")
const inputBlur = document.querySelector("#blur")

function inputChange() {
  const pxSize = this.dataset.sizing || ''
  document.documentElement.style.setProperty(`--${this.name}`, this.value + pxSize)
  spacingPx.innerHTML = `spacing:${inputSpacing.value}px`
  blurPx.innerHTML = `blur:${inputBlur.value}px`
}

inputs.forEach(input => input.addEventListener("change", inputChange))
inputs.forEach(input => input.addEventListener('mousemove', inputChange))



