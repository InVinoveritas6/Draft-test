let f = document.getElementById["f"],
   s = document.querySelector('.visually-hidden'),
   o = s.querySelectorAll("option"),
   inp = document.getElementById("inputSearch"),
   reg;



const div = document.createElement('div');
div.classList.add("blockSelect");
div.id = "f";
document.body.prepend(div);

div.insertAdjacentHTML('afterbegin', '<h1 class="title"> Тендеры в роли Заказчика</h1> <p data-modal class="showSelected">Показать выбранное</p>  <p class="title2"> Тендеры в роли Поставщика</p> <input data-modal type="text" id="inputLink" placeholder="Код ОКРБ или наименование закупаемой продукции" title="Type in a category">');

// o[0].addEventListener('click', () => {
//    addLevel(0);
//    console.log('Hello');
// });

// o[1].addEventListener('click', () => {
//    addLevel(1);
//    console.log('Hello');
// });

// o[2].addEventListener('click', () => {
//    addLevel(2);
//    console.log('Hello');
// });

// o[3].addEventListener('click', () => {
//    addLevel(3);
//    console.log('Hello');
// });

// o[4].addEventListener('click', () => {
//    addLevel(4);
//    console.log('Hello');
// });



inp.oninput = function () {
   reg = new RegExp(this.value, "ig");
   s.options.length = 0;
   for (var i = 0; i < o.length; i++) {
      reg.test(o[i].text) && s.options.add(o[i]);
      reg.lastIndex = 0;
   }
};

for (let i = 0; i <= o.length; i++) {
   o[i].addEventListener('click', () => {
      addLevel(i);
   });
};

function addLevel(i) {
   if (!o[i + 1].classList.contains(`level_${i+1}`)) {
      o[i + 1].classList.add(`level_${i+1}`);
      o[i + 1].classList.add(`arrow`);

   } else {
      o[i + 1].classList.remove(`level_${i+1}`);
      o[i + 1].classList.remove(`arrow`);

   }
};



const openModal = document.querySelectorAll('[data-modal]'),
   modal = document.querySelector('.modal'),
   modalRefund = document.querySelector('[data-close]');

openModal.forEach(btn => {
   btn.addEventListener('click', function () {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
   });
});

function refundModal() {
   modal.classList.add('hide');
   modal.classList.remove('show');
   document.body.style.overflow = '';
}

modalRefund.addEventListener('click', () => {
   refundModal();
});

modal.addEventListener('click', (e) => {
   if (e.target === modal) {
      refundModal();
   }
});

document.addEventListener('keydown', (e) => {
   if (e.code === "Escape" && modal.classList.contains('show')) {
      refundModal();
   }
});

// let expanded = false;

// const showCheckboxes = function () {
//    const checkboxes = document.getElementById("checkboxes");
//    if (!expanded) {
//       checkboxes.style.display = "block";
//       expanded = true;
//    } else {
//       checkboxes.style.display = "none";
//       expanded = false;
//    }
// };

// const selectBox = document.querySelector('.selectBox');
// selectBox.addEventListener('click', () => {
//    showCheckboxes();
//    console.log('hello');
// });
// let checkBox = document.querySelector('#checkboxes');
// checkBox.addEventListener('click', () => {
//    if (!checkBox.classList.contains('visible')) {
//       checkBox.classList.add('visible');
//    }
// })

// checkBox.addEventListener('click', () => {

// });

// checkBox.forEach(checkBox => console.log(checkBox));