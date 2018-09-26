const notification = {
  active: true,
  qty: 2,
  notis: [
    {
      img: '../assets/media/tuerca-01.png',
      head: 'Nuevo nivel',
      title: 'subiste nivel!!!!!!',
    },
    {
      img: '../assets/media/profile-pic.png',
      head: 'Badge Aquired',
      title: 'Propedeutico de propedeuticos',
    },
  ],
};

if (notification.active === true) {
  let qty = notification.qty;
  for (let i = 0; i < qty; i++) {
    $('.notification-wrapper').append(
      `
      <div class="notification">
      <div class="notification_image">
          <img src="${notification.notis[i].img}" alt="">
      </div>
      <div class="notification_text">
          <p class="notification_text_head">${notification.notis[i].head}</p>
          <p class="notification_text_title">${notification.notis[i].title}</p>
      </div>
  </div>
      `
    );
  }

  $('.notification-wrapper').fadeIn();
  setTimeout(function() {
    $('.notification-wrapper').fadeOut();
  }, 5000);
}

$('.notification-wrapper').on('click', '.notification', function() {
  $(this).fadeOut();
});
