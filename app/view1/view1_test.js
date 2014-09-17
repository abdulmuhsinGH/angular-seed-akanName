'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var scope={};
      var view1Ctrl = $controller('View1Ctrl',{$scope:scope});
      expect(view1Ctrl).toBeDefined();
    }));
    
   
  });

  describe('filter', function(){

    it('filter should be defined', inject(function($filter) {
      
      var view1Ctrl = $filter('filter');
      expect(view1Ctrl).toBeDefined();
    }));
    
   
  });

  describe('akanName', function(){
    it('should show the right akan name male',inject(function(){
      expect(akanName("MONDAY","MALE")).toEqual("Kwadwo");
    }));
  });

describe('akanName', function(){
    it('should show the right day',inject(function(){
      expect(akanName("TUESDAY","FEMALE")).toEqual("Abena");
    }));
  });
describe('gettheday', function(){
<<<<<<< HEAD
    it('should show the day for the date',inject(function(){
=======
    it('should show the right akan name',inject(function(){
>>>>>>> 15ba42d088e9a77be8036efbc2189d0ea4c8dfc3
      expect(getTheDay("16 September 2014")).toEqual("Tuesday");
    }));
  });

<<<<<<< HEAD
describe('FB testAPI', function(){

    it('should be defined', inject(function() {
      //var testApi =
      expect(testAPI).toBeDefined();
    }));
    
   
  });

=======
>>>>>>> 15ba42d088e9a77be8036efbc2189d0ea4c8dfc3

});