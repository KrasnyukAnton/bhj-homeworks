const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));
hasTooltip.forEach(item => {
  let tooltip = document.createElement("div");
  tooltip.innerText = item.getAttribute("title");
  tooltip.classList.add("tooltip");
  item.onclick = (event) => {
    const active = document.querySelector(".tooltip_active");
    if (active && (active !== tooltip)) {
      active.classList.toggle("tooltip_active")
    }
    tooltip.classList.toggle("tooltip_active");
    let tooltipStyle = Math.round(item.getBoundingClientRect().left).toString();
    tooltip.style.left = tooltipStyle + "px"
    item.insertAdjacentElement("afterend", tooltip);
    event.preventDefault();
  }
})