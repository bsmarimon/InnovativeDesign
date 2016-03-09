Router.route('/', {
  onAfterAction: function() {
    this.render('landing');
    document.title = 'Innovative Design';
  }
});
Router.route('/officers', {
  onAfterAction: function() {
    this.render('officers');
    document.title = 'Officers | Innovative Design';
  }
});

Router.route('/photo',  {
  onAfterAction: function() {
    this.render('photo');
    document.title = 'Photo | Innovative Design';
  }
});

Router.route('/graphic',  {
  onAfterAction: function() {
    this.render('graphic');
    document.title = 'Graphic | Innovative Design';
  }
});

Router.route('/video',  {
  onAfterAction: function() {
    this.render('video');
    document.title = 'Video | Innovative Design';
  }
});

Router.route('/web',  {
  onAfterAction: function() {
    this.render('web');
    document.title = 'Web | Innovative Design';
  }
});

Router.route('/product',  {
  onAfterAction: function() {
    this.render('product');
    document.title = 'Graphic | Innovative Design';
  }
});

Router.route('/members',  {
  onAfterAction: function() {
    this.render('members');
    document.title = 'Members | Innovative Design';
  }
});

Router.route('/events',  {
  onAfterAction: function() {
    this.render('events');
    document.title = 'Events | Innovative Design';
  }
});

Router.route('/club',  {
  onAfterAction: function() {
    this.render('club');
    document.title = 'Club | Innovative Design';
  }
});

Router.route('/decal',  {
  onAfterAction: function() {
    this.render('decal');
    document.title = 'Decal | Innovative Design';
  }
});

Router.route('/request', function() {
  this.render('requestFix');
});

Router.route('/requests', function() {
  this.render('requestFix');
});

Router.route('/thanks', function() {
  this.render('thankyou');
});

Router.route('/red', {
  onAfterAction: function() {
    this.render('red');
    document.title = 'Red Tier | Innovative Design';
  }
});

Router.route('/decal/lesson/1',  {
  onAfterAction: function() {
    this.render('lesson1');
    document.title = 'Lesson 1 | Decal';
  }
});

Router.route('/decal/lesson/2',  {
  onAfterAction: function() {
    this.render('lesson2');
    document.title = 'Lesson 2 | Decal';
  }
});

Router.route('/decal/lesson/3',  {
  onAfterAction: function() {
    this.render('lesson3');
    document.title = 'Lesson 3 | Decal';
  }
});

Router.route('/decal/lesson/4',  {
  onAfterAction: function() {
    this.render('lesson4');
    document.title = 'Lesson 4 | Decal';
  }
});

Router.route('/decal/lesson/5',  {
  onAfterAction: function() {
    this.render('lesson5');
    document.title = 'Lesson 5 | Decal';
  }
});

Router.route('/decal/lesson/6',  {
  onAfterAction: function() {
    this.render('lesson6');
    document.title = 'Lesson 6 | Decal';
  }
});

Router.route('/decal/lesson/7',  {
  onAfterAction: function() {
    this.render('lesson7');
    document.title = 'Lesson 7 | Decal';
  }
});

Router.route('/decal/lesson/8',  {
  onAfterAction: function() {
    this.render('lesson8');
    document.title = 'Lesson 8 | Decal';
  }
});

Router.route('/decal/lesson/9',  {
  onAfterAction: function() {
    this.render('lesson9');
    document.title = 'Lesson 9 | Decal';
  }
});

Router.route('/decal/lesson/10',  {
  onAfterAction: function() {
    this.render('lesson10');
    document.title = 'Lesson 10 | Decal';
  }
});

Router.route('/decal/lesson/11', function() {
  this.render('lesson11');
});

Router.configure({
  layoutTemplate: 'navbar'
});
