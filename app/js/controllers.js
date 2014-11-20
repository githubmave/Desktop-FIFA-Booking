'use strict';

/* Controllers */

//angular.module('myApp.controllers', [])
  //.controller('MyCtrl1', ['$scope', function($scope) {
  	
  	//$scope.testList="I am fine";

  //}]);
 
 
  //.controller('MyCtrl2', ['$scope', function($scope) {

 // }]);
 
  var mainController=angular.module('myApp.controllers',[]);
 
   mainController.controller('MyFoodListCtrl',['$scope','$routeParams',function($scope,$routeParams){
 	
 	
 	$scope.routeId=$routeParams.itemId;
 	
 	
 	// Navigate the foodDetail html
 	
 	if($routeParams.itemId>0){
 		
 		$scope.preItem=Number($routeParams.itemId)-1;
 	}
 	else{
 		
 		$scope.preItem=0;
 	};
 		
 		
     // if($scope.routeId > $scope.foodList.length){
 		
 		$scope.nextItem=Number($routeParams.itemId)+1;
 	//}
 //else{
 		
 		//$scope.nextItem=0;
// };
 
 
 	
 	$scope.toggleActive=function(s){
 		s.active=!s.active;
 		
 	};
 	
 	
 	
 	
 	
 	$scope.total = function(){

		var total = 0;
		
		

		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.foodList, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
	
	//******************************
	//********************Add to cart
	
	// var uid = 1;
     
    //contacts array to hold list of all contacts
  //  var contacts = [{
   //     id: 0,
    //   'name': 'Mave',
     //       'email': 'hello@gmail.com',
      //      'phone': 'Brazil'
   // }];
     
    //save method create a new contact if not already exists
    //else update the existing object
  //  this.save = function (contact) {
   //    if (contact.id == null) {
            //if this is new contact, add it in contacts array
       //     contact.id = uid++;
       //     contacts.push(contact);
      //  } else {
            //for existing contact, find this contact using id
            //and update it.
         //   for (i in contacts) {
          //      if (contacts[i].id == contact.id) {
             //       contacts[i] = contact;
             //   }
          //  }
      //  }
 
  //  };
  
   $scope.cartItems=[{
   	
   	
   	   
   }];
   
 
   
   var itemId=1;
   
   
   $scope.addToCart=function(){
   	//if this is a new item
   	   if($scope.newItem.id==null){
   	   	$scope.newItem.id=itemId++;
   	   	
   	   	
   	   $scope.cartItems.push($scope.newItem);
   	   
   	   $scope.newItem={};
   	   }
   	   
   	 //  else{
   	   	
   	   	//if item existed
   	 //  	for(i in $scope.cartItems ){
   	   	//	if(cartItems[i].id==$scope.newItem.id){
   	   			
   	   		//	cartItems[i]=$scope.newItem;
   	   			
   	   	//	}
   	   		
   	   		
   	  // 	}
   	   	
   	  // }
   
   };
  
	
	//if (contact.id == null) {
            //if this is new contact, add it in contacts array
       //     contact.id = uid++;
       //     contacts.push(contact);
      //  } else {
            //for existing contact, find this contact using id
            //and update it.
         //   for (i in contacts) {
          //      if (contacts[i].id == contact.id) {
             //       contacts[i] = contact;
             //   }
          //  }
      //  }
	
	
	
	
	
	
	
	
	

 	
 //  ***************************************************************
  
    $scope.selectedTeam="";
    $scope.selectedMatch="";
    $scope.selectedOrder=0;
    
    
   
 
 	$scope.qutyList=[
 	
 	{ 
 		id:0,
 		quty:1 		
 	},
 	{ 
 		id:1,
 		quty:2
 	},
 	
 	{    id:2,
 		 quty:3 		
 	},
 	{   id:3,
 		quty:4
 	},
 	
 	
 	{ 
 		id:4,
 		quty:5 		
 	},
 	{ 
 		id:5,
 		quty:6
 	},
 	
 	{    id:6,
 		 quty:7 		
 	},
 	{   id:7,
 		quty:8
 	},
 
 
    { 
 		id:8,
 		quty:9
 	},
 	
 	{    id:9,
 		 quty:10 		
 	},
 	
 	
 	];
 	
 	$scope.foodList=[
 	
 	  {
     name:"Barot",
    shortname:"Netherland",
    price:15,
    
    matchs:['Netherland vs  England',
            'Netherland vs     Germany',
            'Netherland,        Chilly',
            'Netherland,       Bosilia'    
    
    ],
    
   
    
  
    
    active:false,
    bio:"Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
  },
  {
    name:"Jonathan G. Ferrar II",
    shortname:"Germany",
    price:35,
    
    matchs:['Germany vs  Brazil',
            'Germany vs England',
            'Germany,    Chilly',
            'Germany,    Bosilia'    
    
    ],
    
        "active":false,

    bio:"The Artist to Watch in 2012 by the London Review, Johnathan has already sold one of the highest priced-commissions paid to an art student, ever on record. The piece, entitled Gratitude Resort, a work in oil and mixed media, was sold for $750,000 and Jonathan donated all the proceeds to Art for Peace, an organization that provides college art scholarships for creative children in developing nations"
  
  },
  {
    "name":"Hillary Hewitt Goldwynn-Post",
    "shortname":"Brazil",
    "price":16,
    matchs:['Brazil vs  Germany',
            'Brazil vs England',
            'Brazil,Chilly',
            'Brazil,Bosilia'
           ],    
           
            "active":false,

    "bio":"Hillary is a sophomore art sculpture student at New York University, and has already won all the major international prizes for new sculptors, including the Divinity Circle, the International Sculptor's Medal, and the Academy of Paris Award. Hillary's CAC exhibit features 25 abstract watercolor paintings that contain only water images including waves, deep sea, and river."

  
  },
  {
    "name":"Hassum Harrod",
    "shortname":"England",
    "price":56,
    
        matchs:['England vs  Brazil',
            'England vs England',
            'England,Chilly',
            'England,Bosilia'
           ],    

    
            "active":false,

    "bio":"The Art College in New Dehli has sponsored Hassum on scholarship for his entire undergraduate career at the university, seeing great promise in his contemporary paintings of landscapes - that use equal parts muted and vibrant tones, and are almost a contradiction in art. Hassum will be speaking on \"The use and absence of color in modern art\" during Thursday's agenda."


  },
  {
    "name":"Jennifer Jerome",
    "shortname":"Chilly",
    "price":36,
    
        matchs:['Chilly vs  Brazil',
            'Chilly vs England',
            'Chilly,Chilly',
            'Chilly,Bosilia'
           ],    

    
            "active":false,

    "bio":"A native of New Orleans, much of Jennifer's work has centered around abstract images that depict flooding and rebuilding, having grown up as a teenager in the post-flood years. Despite the sadness of devastation and lives lost, Jennifer's work also depicts the hope and togetherness of a community that has persevered. Jennifer's exhibit will be discussed during Tuesday's Water in Art theme."


  },
  {
    "name":"LaVonne L. LaRue",
    "shortname":"Italy",
    "price":69,
        matchs:['Italy vs  Brazil',
            'Italy vs England',
            'Italy,Chilly',
            'Italy,Bosilia'
           ],    

            "active":false,

    "bio":"LaVonne's giant-sized paintings all around Chicago tell the story of love, nature, and conservation - themes that are central to her heart. LaVonne will share her love and skill of graffiti art on Monday's schedule, as she starts the painting of a 20-foot high wall in the Rousseau Room of Hotel Contempo in front of a standing-room only audience in Art in Unexpected Places."


  }
 
  
 
 	];
 	
 
 	
 }]);
 
 
//    mainController.controller('MyFoodListCtrl',['$scope','$routeParams',function($scope,$routeParams){

 mainController.controller('cartItemController', function($scope,CartItemService){

   
    
    $scope.test="I am test";
    
    $scope.cartItemList=CartItemService.list();
    
    $scope.newCartItem={};
    
    
    

  
});


//************************************************************
//********************************************************************************************

  mainController.controller('ContactController', function ($scope, ContactService) {
 
    $scope.contacts = ContactService.list();
 
    $scope.saveContact = function () {
        ContactService.save($scope.newcontact);
        $scope.newcontact = {};
    };
 
 
    $scope.delete = function (id) {
 
        ContactService.delete(id);
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    };
 
 
    $scope.edit = function (id) {
        $scope.newcontact = angular.copy(ContactService.get(id));
    };
});