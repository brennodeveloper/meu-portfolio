// scroller
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller-inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// send message //
const fields = document.querySelectorAll("#name, #message");

fields.forEach(field => {
  field.addEventListener("input", function() {
    if (this.value.length > 0) {
      this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
    }
  });
});

function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const phoneNumber = "5591984438803";
  
  const whatsappURL = `https://wa.me/${phoneNumber}?text=Olá, meu nome é ${encodeURIComponent(name)}. ${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
  document.querySelector(".form-contact").reset();
}