let prevTarget, prevURL, currentURL;

document.addEventListener("click", handleClick);

function handleClick(event) {
    currentURL = window.location.href;
    let isClickOnRightTarget = !!event.target.closest(".editor-input-element");
    if (!isClickOnRightTarget) return;
    if (prevTarget === event.target) return;
    if (prevURL === currentURL) return;

    let text = `==========================<br />Спасибо за внимание! <br />Ответ написан: ${new Date().toLocaleDateString()} в ${new Date().toLocaleTimeString()}<br />==========================`;

    event.target.innerHTML += text;
    prevTarget = event.target;
    prevURL = currentURL;
}
