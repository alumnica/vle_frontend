var points = [3000, 5000];
var percent = points[0] / points[1];

var avatarPercent = 0.7;
var bar = new ProgressBar.Line(progress, {
  strokeWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  color: 'white',
  trailColor: '#eee',
  trailWidth: 1,

  from: { color: '#FFEA82' },
  to: { color: '#38d430' },
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  },
  text: {
    // Initial value for text.
    // Default: null
    value: points[0],

    style: {
      transform: {
        prefix: true,
        value: 'translateY(-50%)',
      },
    },

    // Class name for text element.
    // Default: 'progressbar-text'
    // className: 'progressbar__label',
  },
});

bar.animate(percent); // Number from 0.0 to 1.0

var avatarBar = new ProgressBar.Line(avatarProgress, {
  strokeWidth: 2,
  easing: 'easeInOut',
  duration: 1400,
  color: 'orange',
  trailColor: '#eee',
  trailWidth: 2,
});

avatarBar.animate(avatarPercent); // Number from 0.0 to 1.0
