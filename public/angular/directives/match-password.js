app.directive('match',function(){
	return {
		restrict:'A',
		controller: function($scope){
			$scope.matched=false;
			$scope.confirmPassword = function(pass){
				
				//If both password matches
				if(pass==$scope.confirm){
					$scope.matched=true;
				} else{
					$scope.matched=false;
				}
			}
		},
		link: function(scope,element,attrs){

			//Observe match and send match to controller
			attrs.$observe('match',function(){
				scope.confirmPassword(attrs.match);
			});

			//Watch confirm for change in value and again send match to controller for comparing
			scope.$watch('confirm',function(){
				scope.confirmPassword(attrs.match);
			});
		}
	};
});