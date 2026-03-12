document.getElementById("btn").addEventListener("click", function () {
  let discountPercentage = document.getElementById("discount-percentage").value;
  discountPercentage = Number(discountPercentage);
  let discountPrice = document.getElementById("price").value;
  discountPrice = Number(discountPrice);
  

  let discountPricePercentage = 100 - discountPercentage;
  let originalPrice = (discountPrice / (discountPricePercentage / 100)).toFixed(2);
  let discountRs = (originalPrice - discountPrice).toFixed(2);
  
  document.getElementById("original-price").innerHTML = originalPrice;
  document.getElementById("discountRs").innerHTML = discountRs + ".Rs";
  console.log(originalPrice);
});
