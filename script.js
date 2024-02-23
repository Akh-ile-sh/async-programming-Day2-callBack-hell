var wish = document.getElementById("wish");

var wishesText = function () {
  setTimeout(() => {
    wish.innerHTML = "10";
    setTimeout(() => {
      wish.innerHTML = "9";
      setTimeout(() => {
        wish.innerHTML = "8";
        setTimeout(() => {
          wish.innerHTML = "7";
          setTimeout(() => {
            wish.innerHTML = "6";
            setTimeout(() => {
              wish.innerHTML = "5";
              setTimeout(() => {
                wish.innerHTML = "4";
                setTimeout(() => {
                  wish.innerHTML = "3";
                  setTimeout(() => {
                    wish.innerHTML = "2";
                    setTimeout(() => {
                      wish.innerHTML = "1";
                      setTimeout(() => {
                        wish.innerHTML = "0";
                        setTimeout(() => {
                          wish.innerHTML = "HAPPY INDEPENDENCE DAY";
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

//Live Link:  https://65d82e36568a599f2afcb229--idyllic-jalebi-417667.netlify.app/
