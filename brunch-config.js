const browsers = [
  'last 3 chrome versions',
  'last 3 chromeandroid versions',
  'last 3 firefox versions',
  'last 3 edge versions',
  'ios >= 9',
  'safari >= 9',
  'explorer >= 11',
];

exports.files = {
  javascripts: { joinTo: 'app.js' },
  stylesheets: { joinTo: 'app.css' },
};

exports.plugins = {
  autoprefixer: {
    browsers: browsers,
  },
  babel: {
    presets: [
      [
        'airbnb',
        {
          targets: {
            browsers: browsers,
          },
        },
      ],
    ],
  },
};
