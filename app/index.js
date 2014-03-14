'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var JaniceGenerator = module.exports = function JaniceGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(JaniceGenerator, yeoman.generators.Base);

JaniceGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'ready',
    message: 'Are you sure you\'re ready for Janice?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.ready = props.ready;

    cb();
  }.bind(this));
};

JaniceGenerator.prototype.app = function app() {
    if (this.ready) {
        this.copy('janice-rand.png', 'janice-rand.png');
    }
};
