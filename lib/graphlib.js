/* global window */

var graphlib =require("graphlib");

if (!graphlib) {
  graphlib = window.graphlib;
}

module.exports = graphlib;
