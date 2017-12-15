const app = angular.module('travelTracker',[]);

app.controller('MainController',['$http', function($http){
  // this.test="HELLOOOOOOO";
  this.travel=[];
  this.createForm={};

this.createDestination= ()=> {
  console.log('This button calls the create function', this.createForm);
  $http({
    method:'POST',
    url: '/travel',
    data: this.createForm
  }).then(response=>{

    this.travel.push(response.data)
    console.log(response.data)
    this.createForm= {};
    console.log(response.data)
  }, error => {
    console.error(error)
}).catch( err=>  console.log( error))

}


this.getDestination = () => {
  $http({ method: 'GET',
   url: '/travel'
 }).then(response=>{
   this.travel=response.data
   this.travels = this.travel[0];
 }).catch(err=> console.log(err));
}
this.getDestination();
this.deleteDestination= (id) => {
console.log('I am going to delete you');
  $http({
    method: 'DELETE',
    url: '/travel/' + id
  }).then(response => {
    // console.table(response.data);
    const removeByIndex = this.travel.findIndex(travel => travel._id === id)

    this.travel.splice(removeByIndex, 1);


    console.log('this is the array index number of the destination i want to delete: ', removeByIndex);
  }, error => { console.error(err.message)
  }).catch( err => console.error('Catch', err));
  }
  this.formdataUpdated={};
  this.updateDestination = (travel) => {
      travel.travelAgain=!travel.travelAgain;
      $http({
        method: 'PUT',
        url: '/travel/' + travel._id,
        data: {travelAgain: travel.travelAgain}
      }).then (response => {
        console.log(response.data.travelAgain);
      }, error =>{
        console.log(err.message);
      }).catch (err => console.error('Catch: ', err))
  }
  this.chooseOneDestination = ( travel ) => {
  this.travels = travel;
  console.log( this.travels.city );
}
}])
