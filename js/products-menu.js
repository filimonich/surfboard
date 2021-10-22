const mesureWidth = (item) => {
  const screenWidth = $(window).width();
  const container = item.closest(".products-menu");
  const titlesBlocks = container.find(".products-menu__title");
  const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    return screenWidth - titlesWidth;
  } else {
    return 500;
  }
};

const closeEveryItemInContainer = container => {
  const item = container.find(".products-menu__item");
  const content = container.find(".products-menu__content");

  item.removeClass(".products-menu__line-active");
  content.with(0);
};

const openItem = (item) => {
  const hiddenContent = item.find(".products-menu__content");
  const reqWidth = mesureWidth(item);

  item.addClass(".products-menu__line-active");
  hiddenContent.width(reqWidth);
};

$(".products-menu__title").on("click", (e) => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const item = $this.closest(".products-menu__item");
  const itemOpened = item.hasClass(".products-menu__line-active");
  const container = $this.closest(".products-menu");

  if (itemOpened) {
    closeEveryItemInContainer(container)
  } else {
    closeEveryItemInContainer(container)
    openItem(item);
  }
});

$(".products-menu__item").on("click", e => {
  e.preventDefault();

  closeEveryItemInContainer($('.products-menu'))
});



// const list = $('.products-menu');
// list.on('click', '.products-menu__item', function (e) {
//   e.preventDefault()
//   if (e.target.classList.contains('products-menu__content')) return
//   $(this).siblings('li').removeClass('products-menu__line-active')
//   $(this).toggleClass('products-menu__line-active')
// });