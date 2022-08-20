// 設定 webpack 的進入點
import './scss/main.scss'
console.log('JS loaded!')
// 打包 webpack => npm run build

// add DOM object
const steps = document.querySelectorAll(".stepper__step");
const forms = document.querySelectorAll(".form-content__part");
const btnPanel = document.querySelector(".btn-control-panel");
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

const mainContent = document.getElementById("main-content");
const deliveryPrice = document.querySelector(".delivery-price");
const cartProduct = document.querySelector(".cart__product");
const shippingRows = document.querySelector(".form-content__part__shipping");
const cartSubtotal = document.querySelector(".cart__subtotal .subtotal-price");

let step = 0;
let deliveryCost = 0;
let subtotal = 4500;

// Go to next/previous form when click next/previous-btn
// Active stepper when click next/previous-btn
function handleStepControl(e) {
  e.preventDefault();
  const nowStep = steps[step];
  if (e.target.matches(".next")) {
    const nextStep = steps[step + 1];
    nowStep.classList.add("checked");
    nextStep.classList.add("active");
    forms[step].classList.add("d-none");
    forms[step + 1].classList.remove("d-none");
    step += 1;
  } else if (e.target.matches(".previous")) {
    const prevStep = steps[step - 1];
    nowStep.classList.remove("active");
    nowStep.classList.remove("checked");
    prevStep.classList.add("active");
    forms[step].classList.add("d-none");
    forms[step - 1].classList.remove("d-none");
    step -= 1;
  }
  setBtnStatus();
}

// set btn status
function setBtnStatus() {
  if (step === 0) {
    prevBtn.classList.add("d-none");
  } else {
    prevBtn.classList.remove("d-none");
  }
  if (step === 2) {
    nextBtn.innerHTML = "確認下單";
  } else {
    nextBtn.innerHTML = "下一步";
  }
}

function changeDeliveryFee(e) {
  e.preventDefault()
  if (e.target.matches(".standard")) {
    deliveryPrice.innerHTML = "免費";
    deliveryCost = 0;
  } else if (e.target.matches(".express")) {
    deliveryPrice.innerHTML = "$ 500";
    deliveryCost = 500;
  }
}

// Active add/minus amount and price
function handleProductAmount(e) {
  e.preventDefault()
  let amount = Number(e.target.parentElement.children[1].innerHTML);
  let price = Number(e.target.parentElement.nextElementSibling.innerHTML);
  // console.log(price);
  if (e.target.matches(".amount__add")) {
    e.target.parentElement.children[1].innerHTML = amount + 1;
    subtotal += price;
  } else if (e.target.matches(".amount__minus") && amount > 1) {
    e.target.parentElement.children[1].innerHTML = amount - 1;
    subtotal -= price;
  } else {
    return;
  }
}

function renderCart() {
  cartSubtotal.innerHTML = subtotal + deliveryCost;
}

btnPanel.addEventListener("click", handleStepControl);
shippingRows.addEventListener("click", changeDeliveryFee);
cartProduct.addEventListener("click", handleProductAmount);
mainContent.addEventListener("click", renderCart);