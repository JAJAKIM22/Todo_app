import Card from 'react-bootstrap/Card';
import React from "react";
function Funpage() {
    return (
      <div class="row">
      <div class="col-sm-4">
        <div class="card" style={{ width: '18rem' }}>
          <div class="card-body">
            <h5 class="card-title">IS CODING FUN</h5>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSbH9EUHmctmrDKtr7GiRIkRpccHyE8ZD6Q&usqp=CAU" />
            <p class="card-text">Coding can be very engaging. Each line of code, if it works, causes something to happen in the console. Watching your idea take shape step-by-step is a blast. And the feeling after discovering a bug (and fixing it) is hard to replicate.</p>
            <a href="https://careerkarma.com/blog/is-coding-fun-or-boring/#:~:text=Yes!,of%20creating%20something%20that%20works." class="btn btn-primary">FUN</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style={{ width: '18rem' }}>
          <div class="card-body">
            <h5 class="card-title">HAPPINESS</h5>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLN47ToKrHJfRF7y7qhJzRTD3liLBBbkBDJQ&usqp=CAU" />
            <p class="card-text">Happiness is an emotional state characterized by feelings of joy, satisfaction, contentment, and fulfillment. While happiness has many different definitions, it is often described as involving positive emotions and life satisfaction.</p>
            <a href="https://www.verywellmind.com/what-is-happiness-4869755#:~:text=Happiness%20is%20an%20emotional%20state,positive%20emotions%20and%20life%20satisfaction." class="btn btn-primary">HAPPY</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style={{ width: '18rem' }}>
          <div class="card-body">
            <h5 class="card-title">UNLEASH</h5>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7HRe1t4hy4NZQgflXSYs5ucrjNrOEA-JVhw&usqp=CAU" />
            <p class="card-text">UNLEASH YOUR INNER BEAST! This is a Powerful New Motivational Speech by Motivational Speaker Freddy Fri. Officially released and edited by Motiversity.</p>
            <a href="https://www.youtube.com/watch?v=JVqSq84x7Wg"  class="btn btn-primary">UNLEASH</a>
          </div>
        </div>
      </div>
    </div>
     
      
      );
  
}
export default Funpage;