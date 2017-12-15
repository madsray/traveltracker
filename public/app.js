const app = angular.module('travelTracker',[]);

app.controller('MainController',['$http', function($http){
  // this.test="HELLOOOOOOO";
  this.travel=[];
this.createDestination= ()=> {
  console.log('Form data is: ', this.formData);
  $http({
    url: '/travel',
    method:'POST',
    data: this.formData
  }).then(response=>{ this.travel.push(response.data)
    this.createForm={};
  }, error => {
    console.error(error)
}).catch( err=>  console.log( error))

}


this.getDestination = () => {
  $http({ method: 'GET',
   url: '/travel'
 }).then(response=>{
   this.travel=response.data
 }).catch(err=> console.log(err));
}
this.getDestination();


}])
