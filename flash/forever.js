// code stolen (with permission) from https://tauon.dev

const KONAMI = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
    "Enter",
  ];

  let codes = [KONAMI];
  let keys = [];
  let codes_that_can_be_at_this_point = codes;
  
    
  window.addEventListener("keydown", (event) => {
    keys.push(event.key);
    codes_that_can_be_at_this_point = [];
    for (let code of codes) {
      let is_real = true;
      for (let key in keys) {
        is_real = keys[key] == code[key]
      }
      if (is_real) codes_that_can_be_at_this_point.push(code);
      if (is_real && code.length == keys.length) {
        keys = [];
        if (code == KONAMI) {
          window.location.href = "/flash/hyaku_forever";
       
        }
      }
    }
    if (codes_that_can_be_at_this_point.length == 0) keys = [];
  });