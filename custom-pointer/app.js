const cursor = document.getElementById("cursor");

function pointer() {
  document.addEventListener("mousemove", (event) => {
    // top: event.clientY - 10 px;
    // left: event.clientX - 10 px;
    // se le agregan esas clases
    cursor.setAttribute(
      "style",
      "top: " +
        (event.clientY - 10) +
        "px; left: " +
        (event.clientX - 10) +
        "px;"
    );

    cursor.style.display = "flex";
  });

  document.addEventListener("mouseleave", () => {
    cursor.style.display = "none";
  });
}

pointer();
