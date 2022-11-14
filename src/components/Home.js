import bg from "../img/bg.png";



function Home() {
    return (
      
<div class="half-half-image-text bg-light">
<div class="container">
  <div class="row">
    <div class="col-md-8 col-md-70">
      <div class="content row ">
      <h1>Book a specialist</h1>
      <p>Tabibu is an simple to use appointment booking platform that can be used by patients, doctors or hospitals to schedule hospital visits.</p>
        <div>
          <a class="btn btn-danger" href="/Booking" role="button">Book Now
        </a></div>
      </div>
    </div>
    <div class="col-md-4 col-md-30 img-div" >
     
      <img class="img" src={bg} alt="bg" />
    
    </div>
  </div>
</div>
</div>

    )}
    export default Home;