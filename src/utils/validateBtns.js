export const validateBtns = (e, firstBtnRef, secondBtnRef, thirdBtnRef) => {
  if (e.target.innerHTML === "1") {
    firstBtnRef.current.classList.add("active");
    secondBtnRef.current.classList.remove("active");
    thirdBtnRef.current.classList.remove("active");
  } else if (e.target.innerHTML === "2") {
    secondBtnRef.current.classList.add("active");
    firstBtnRef.current.classList.remove("active");
    thirdBtnRef.current.classList.remove("active");
  } else if (e.target.innerHTML === "3") {
    thirdBtnRef.current.classList.add("active");
    firstBtnRef.current.classList.remove("active");
    secondBtnRef.current.classList.remove("active");
  }
};
