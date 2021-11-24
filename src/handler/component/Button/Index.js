
function ScrollButton() {


  return (
    <div>
      <button id="Portfolio" onClick={()=> alert("portfolio")}>
          Portfolio
      </button>
      <button id="Contact" onClick={()=> alert("contact")}>
          Contact
      </button>
      <button id="Parcours" onClick={()=> alert("parcours")}>
          Parcours
      </button>
    </div>
  );
}

export default ScrollButton;
