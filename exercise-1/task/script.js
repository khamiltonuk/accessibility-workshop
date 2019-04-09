document.addEventListener("DOMContentLoaded", function(event) {
  const collapsibleContainer = document.querySelector(".collapsible-container");
  const trigger = collapsibleContainer.querySelector(".collapsible-trigger");
  const child = collapsibleContainer.querySelector(".collapsible-child");

  trigger.addEventListener("click", function(event) {
    event.preventDefault();

    if (child.classList.contains("hidden")) {
      trigger.innerHTML = "hide content";
      child.classList.remove("hidden");
    } else {
      trigger.innerHTML = "show content";
      child.classList.add("hidden");
    }
  });
});
