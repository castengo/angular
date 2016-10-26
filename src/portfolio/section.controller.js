(function () {
'use strict';

angular.module('Portfolio')
.controller('SectionController', SectionController);

SectionController.$inject = ['section'];
function SectionController(section) {
  var sectioninfo = this;
  console.log("section controller: ",sectioninfo);
  sectioninfo.title = section.title;
  sectioninfo.image_url = section.image_url;
  sectioninfo.image_webpage = section.image_webpage;
  sectioninfo.description = section.description;
  sectioninfo.frameworks = section.frameworks;

};

})();
