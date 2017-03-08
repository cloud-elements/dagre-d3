/* global window */

var dagre = require("dagre");

if (!dagre) {
  dagre = window.dagre;
}

module.exports = dagre;
