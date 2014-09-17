'use strict';
var gender="";
var birthday="";

var myApp=angular.module('myApp.view1', ['ngRoute'])

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

myApp.controller('View1Ctrl',['$scope', function($scope) {
	/*$scope.user={"day":birthday,
                  "gender":gender};*/
 
	/*var day=getTheDay(birthday)
     if(day==null){return null;}
      $scope.akanName=akanName(day.toUpperCase(),gender.toUpperCase());
      console.log($scope.akanName);*/

}]);

/*myApp.filter('akanName', function() {
    return function(input) {
      input = input || '';
      //var gender = input1 ||'';
      var output = input;
      //console.log(birthday)
     var day=getTheDay(birthday)
     if(day==null){return null;}
      return akanName(day.toUpperCase(),gender.toUpperCase());
    };
  });
*/

function akanName($day, $gender){

if ($day=="MONDAY" && $gender=="MALE" ){
	return "Kwadwo";
}
else if ($day=="TUESDAY" && $gender=="MALE" ){
	return "Kwabena";
}
else if ($day=="WEDNESDAY" && $gender=="MALE" ){
	return "Kwaku";
}
else if ($day=="THURSDAY" && $gender=="MALE" ){
	return "Yaw";
}
else if ($day=="FRIDAY" && $gender=="MALE" ){
	return "Kofi";
}
else if ($day=="SATURDAY" && $gender=="MALE" ){
	return "Kwame";
}
else if ($day=="SUNDAY" && $gender=="MALE" ){
	return "Kwasi";
}
else if ($day=="MONDAY" && $gender=="FEMALE" ){
	return "Adwoa";
}
else if ($day=="TUESDAY" && $gender=="FEMALE" ){
	return "Abena";
}
else if ($day=="WEDNESDAY" && $gender=="FEMALE" ){
	return "Akua";
}
else if ($day=="THURSDAY" && $gender=="FEMALE" ){
	return "Yaa";
}
else if ($day=="FRIDAY" && $gender=="FEMALE" ){
	return "Afia";
}
else if ($day=="SATURDAY" && $gender=="FEMALE" ){
	return "Ama";
}
else if ($day=="SUNDAY" && $gender=="FEMALE" ){
	return "Akosua";
}


};

function getTheDay($date)

{

var myDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

var myDate=new Date(eval('"'+$date+'"'))

return myDays[myDate.getDay()]

}

// This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

window.fbAsyncInit = function() {
    FB.init({
      appId      : '1521331421417121',
      xfbml      : true,
      version    : 'v2.1'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?fields=id,name,birthday,gender', function(response) {
      console.log('Successful login for: ' + response.name);
      console.log('Successful login for: ' + response.gender);
      console.log('Successful login for: ' + response.birthday);
      getTheDay(response.birthday);
      //akanName(getTheDay(response.birthday),response.gender);
    // gender= 
        //'Gender: ' + response.gender + '.';
       // document.getElementById('gender').innerHTML=response.gender;
        var gender=response.gender.toString();
        birthday=response.birthday.toString();
      var day =  getTheDay(birthday)
        console.log(getTheDay(birthday))
         console.log(gender)
			console.log(akanName(day.toUpperCase(), gender.toUpperCase()))
        document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '! ' +'Gender: '+response.gender+'\n'+' Dayof Birth '+getTheDay(birthday)

        +'\nYour Akan Name:'+akanName(day.toUpperCase(), gender.toUpperCase());
       // console.log(birthday);      // console.log(gender);
    });
  }

  