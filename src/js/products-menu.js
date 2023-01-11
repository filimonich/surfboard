function Accordeon(selector) {
  const acco = document.querySelector(selector);
  const items = acco.querySelector(".products-menu").children;

  acco.addEventListener("click", function (e) {
    e.preventDefault();
    const target = e.target.closest(".accordeon-trigger");

    if (!target) return;

    const item = target.parentNode;

    if (item.classList.contains("products-active")) {
      item.classList.remove("products-active");
    } else {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("products-active");
      }
      item.classList.add("products-active");
    }
  });
}

new Accordeon("#products-m");

// const mesureWidth = (item) => {
//   // debugger;
//   let reqItemWidth = 0;

//   const screenWidth = $(window).width();
//   const container = item.closest(".products-menu");
//   const titlesBlocks = container.find(".products-menu__title");
//   const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

//   const textContainer = item.find(".products-menu__container");
//   const paddingLeft = parseInt(textContainer.css("padding-left"));
//   const paddingRight = parseInt(textContainer.css("padding-right"));

//   const isMobile = window.matchMedia("(max-width: 768px)").matches;

//   if (isMobile) {
//     reqItemWidth = screenWidth - titlesWidth;
//   } else {
//     reqItemWidth = 500;
//   }

//   return {
//     container: reqItemWidth,
//     textContainer: reqItemWidth - paddingRight - paddingLeft,
//   };
// };

// const closeEveryItemInContainer = (container) => {
//   const items = container.find(".products-menu__item");
//   const content = container.find(".products-menu__content");

//   items.removeClass("products-active");
//   content.width(0);
// };

// const openItem = (item) => {
//   const hiddenContent = item.find(".products-menu__content");
//   const reqWidth = mesureWidth(item);
//   const textBlock = item.find(".products-menu__container");

//   item.addClass("products-active");
//   hiddenContent.width(reqWidth.container);
//   textBlock.width(reqWidth.textContainer);
// };

// $(".products-menu__title").on("click", (e) => {
//   e.preventDefault();

//   const $this = $(e.currentTarget);
//   const item = $this.closest(".products-menu__item");
//   const itemOpened = item.hasClass("products-active");
//   const container = $this.closest(".products-menu");

//   if (itemOpened) {
//     closeEveryItemInContainer(container);
//   } else {
//     closeEveryItemInContainer(container);
//     openItem(item);
//   }
// });

// $(".products-menu__item").on("click", e => {
//   debugger;
//   e.preventDefault();

//   closeEveryItemInContainer($('.products-menu'))
// });
//
