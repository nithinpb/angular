function FirstCtrl ($scope) {
	$scope.items = [
	{title: 'Paint', quantity: 8, price: 3.85},
	{title: 'Poll', quantity: 3, price: 4.5},
	];

	$scope.remove = function(index){
		$scope.items.splice(index, 1);
	}
}