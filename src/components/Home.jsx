import React from 'react';
import { Container, Row, Col,Form,Button,Carousel } from 'react-bootstrap';
import { Icon } from '@iconify/react';

const Home = () => {

    const startPage = ()=> {
        const countingEl = document.querySelectorAll(".room")

        countingEl.forEach(countingEl=>{
            countingEl.innerText = "0" 
            increaseCount()
            function increaseCount(){
                let currentNum = +countingEl.innerText
                const dataCeil = countingEl.getAttribute("data-ceil");
                const increase = dataCeil/800
                currentNum = Math.ceil(increase + currentNum)
               
                
                if(currentNum < dataCeil){
                    countingEl.innerText = currentNum 
                    setTimeout(increaseCount, 40)
                }
                else(countingEl.innerText = dataCeil)
             
           
            }
        
        })
        
    }

    

    return (
        <div>
            <Container fluid onLoad={startPage}>
                <Row>
                    <Col xs={12} className='bg'>
                        <Row>
                            <Col xs={6}>
                                <div className='homeText'>
                                    <h2>HEALTH WEBSITE</h2>
                                    <span>
                                        What are you waiting for? come... and you are still standing there!!
                                        What are you waiting for? come... and you are still standing there!!
                                        What are you waiting for? come... and you are still standing there!!
                                        What are you waiting for? come... and you are still standing there!!
                                        What at are you waiting for? come... and you are still standing there!!
                                    </span>
                                    <br />
                                    <br />
                                    <br />

                                    <a href="#">Make an appointment</a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>


                <Container>
                    <Row className='float-on-bg'>
                        <Col className="float" >
                            <p><Icon icon="wpf:assistant" className='logo' /></p>
                            <span>24 Hours service</span>
                            <h4>Appointments</h4>
                            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Eum cupiditate numquam ab? Voluptatem tempore, expedita magnam maiores tempora laborum perspiciatis,
                                ipsam amet obcaecati blanditiis nihil, culpa porro voluptatibus optio quas!</h4>
                            <br />
                            <br />
                            <a href="#">Make an appointment</a>
                        </Col>
                        <Col className="float">
                            <p><Icon icon="akar-icons:clock" color="white" height="60"/></p>
                            <span>Day-to-day services</span>
                            <h4>Working hours</h4>
                            <Row className='working-hours'>
                                <Col>Sun-Wed:</Col>
                                <Col>10am - 12am</Col>
                            </Row>

                            <Row className='working-hours'>
                                <Col>Sun-Wed:</Col>
                                <Col>10am - 12am</Col>
                            </Row>
                            <Row className='working-hours'>
                                <Col>Sun-Wed:</Col>
                                <Col>10am - 12am</Col>
                            </Row>

                        </Col>
                        <Col className="float">
                            <p><Icon icon="healthicons:accident-and-emergency" color="white" height="60"/></p>
                            <span>24 Hours service</span>
                            <h4>Emergency</h4>
                            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Eum cupiditate numquam ab? Voluptatem tempore, expedita magnam maiores tempora laborum perspiciatis,
                                ipsam amet obcaecati blanditiis nihil, culpa porro voluptatibus optio quas!</h4>

                        </Col>

                    </Row>
                </Container>

                <Container>
                    <Row className='services-note'>
                        <Col>
                            <Col xs={12}>
                                <div className="img">
                                    <img src="./images/woman.jpg" alt="woman" className='image-responsive' />
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="img">
                                    <img src="./images/woman1.jpg" alt="woman" className='image-responsive' />
                                </div>
                            </Col>
                        </Col>
                        <Col>
                            <div className="img1 img">
                                <img src="./images/man.jpg" alt="woman" className='image-responsive' />
                            </div>


                        </Col>
                        <Col className='service'>
                            <h3>Emergency</h3>
                            <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Eum cupiditate numquam ab? Voluptatem tempore, expedita magnam maiores tempora laborum perspiciatis,
                                ipsam amet obcaecati blanditiis nihil, culpa porro voluptatibus optio quas!</h5>
                            <br />
                            <a href="#">Services</a>

                        </Col>

                    </Row>
                </Container>

                <Container  class="exp-container">
                    <Row>

                        <Col >
                            <div>
                                
                                <div class="room" data-ceil="1000">0+</div>
                                <h3 className='text-center'>Happy customers</h3>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                
                                <div class="room" data-ceil="800">0+</div>
                                <h3 className='text-center'>Good check-ups</h3>
                            </div>
                        </Col>
                        <Col>
                            <div>
                               
                                <div class="room" data-ceil="500">0+</div>
                                <h3 className='text-center'>Successful surgeries</h3>
                            </div>
                        </Col>
                    </Row>
                    {/* <button onClick={startPage}>Take the shot!</button> */}
                </Container>

                <Row>
                    <Col xs={12} className='text-center what-we-do'>
                        <h2>Our satisfactory patient care</h2>
                        <div className="hr">
                            <div className="red"></div>
                        </div>

                        <h5>With our patience and hospitality we are known to have the best health care in these fields</h5>
                    </Col>
                </Row>


                <Container>
                    <Row className='what-we-do-row'>
                        <Col className='what-we-do-col'>
                            <Row className='row'>
                                <Col xs={2}><Icon icon="fa-solid:tooth" color="#e12454" height="40"/></Col>
                                <Col><h3>Dental care</h3></Col>
                            </Row>
                            <Row>
                                <Col>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='what-we-do-col'>
                        <Row className='row'>
                                <Col xs={2}><Icon icon="eos-icons:test-tube" color="#e12454" height="40" /></Col>
                                <Col><h3>Laboratory tests</h3></Col>
                            </Row>
                            <Row>
                                <Col>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='what-we-do-col'>
                        <Row className='row'>
                                <Col xs={2}><Icon icon="file-icons:dna" color="#e12454" height="40" /></Col>
                                <Col><h3>Gynecology</h3></Col>
                            </Row>
                            <Row>
                                <Col>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='what-we-do-row'>
                        <Col className='what-we-do-col'>
                        <Row className='row'>
                                <Col xs={2}><Icon icon="healthicons:pharmacy-alt" color="#e12454" height="40" /></Col>
                                <Col><h3>Pharmaceuticals</h3></Col>
                            </Row>
                            <Row>
                                <Col>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='what-we-do-col'>
                        <Row className='row'>
                                <Col xs={2}><Icon icon="icon-park-twotone:brain" color="#e12454" height="40" /></Col>
                                <Col><h3>Neurology</h3></Col>
                            </Row>
                            <Row>
                                <Col>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='what-we-do-col'>
                        <Row className='row'>
                                <Col xs={2}><Icon icon="medical-icon:i-surgery" color="#e12454" height="40" /></Col>
                                <Col><h3>Surgeries</h3></Col>
                            </Row>
                            <Row>
                                <Col>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>


            </Container>

            <Container className='book-an-appointment-container' fluid>
                    <Row>
                        {/* <Col xs={4} className='book-an-appointment-col'> */}
                           {/* <img src="./images/helpinghand.jpg" alt="" className='img-responsive'/> */}
                        {/* </Col> */}
                        {/* <Col xs={2}></Col> */}
                        <Col className='book-an-appointment-col form text-center'>
                       <form>
                        <h2>BOOK APPOINTMENT</h2>
                        <h5>With our patience and hospitality we are known to have the best health care in these fields</h5>
                       <div>
                        <input type="text" placeholder='name'/>
                        <input type="text" placeholder='name'/>
                        </div> 
                       <div>
                        <input type="text" placeholder='name'/>
                        <input type="text" placeholder='name'/>
                        </div> 
                       <div>
                        <input type="text" placeholder='name'/>
                        <input type="text" placeholder='name'/>
                        </div> 
                        <div>
                            <textarea/>
                        </div>
                       </form>
                        </Col>
                       
                    </Row>
                </Container>


                <Container>
                <Row>
                    <Col xs={12} className='text-center what-we-do'>
                        <h2>WHAT PEOPLE SAY ABOUT US</h2>
                        <div className="hr">
                            <div className="red"></div>
                        </div>

                        <h5>
                            About <span>1000+</span> people visit our hospital for checkups, delivery sessions, surgeries and so on.<br/>
                            With our patience and hospitality we are known to have the best health care which attract customers and investors</h5>
                    </Col>
                </Row>


                <Row>
                    <Col className='carousel'>
                  

                    <Carousel variant="dark">
      <Carousel.Item>
    <Container>
        <Row className='carousel-text-row'>
            <Col className='carousel-text'>
             <Row>
                <Col xs={3}className='carousel-text-img'>
                <div className="img-div">
                    <img src="./images/wini.jpg" alt="womn" />
                </div>
                </Col>
                <Col className='carousel-name'>
                    <div className="name">
                        <h4>Asante Winifred</h4>
                    </div>
                </Col>
             </Row>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo amet recusandae cumque architecto! Atque
                     sit possimus illum voluptatem, praesentium, cum blanditiis numquam, deleniti enim vitae repudiandae alias eum nisi!</h5>
            </Col>
            <Col className='carousel-text'>
            <Row>
                <Col xs={3}className='carousel-text-img'>
                <div className="img-div">
                    <img src="./images/wini.jpg" alt="womn" />
                </div>
                </Col>
                <Col className='carousel-name'>
                    <div className="name">
                        <h4>Asante Winifred</h4>
                    </div>
                </Col>
             </Row>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo amet recusandae cumque architecto! Atque
                     sit possimus illum voluptatem, praesentium, cum blanditiis numquam, deleniti enim vitae repudiandae alias eum nisi!</h5>
            </Col>
        </Row>
    </Container>
    
      </Carousel.Item>
      <Carousel.Item>
      <Container>
        <Row className='carousel-text-row'>
            <Col className='carousel-text'>
             <Row>
                <Col xs={3}className='carousel-text-img'>
                <div className="img-div">
                    <img src="./images/wini.jpg" alt="womn" />
                </div>
                </Col>
                <Col className='carousel-name'>
                    <div className="name">
                        <h4>Asante Winifred</h4>
                    </div>
                </Col>
             </Row>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo amet recusandae cumque architecto! Atque
                     sit possimus illum voluptatem, praesentium, cum blanditiis numquam, deleniti enim vitae repudiandae alias eum nisi!</h5>
            </Col>
            <Col className='carousel-text'>
            <Row>
                <Col xs={3}className='carousel-text-img'>
                <div className="img-div">
                    <img src="./images/wini.jpg" alt="womn" />
                </div>
                </Col>
                <Col className='carousel-name'>
                    <div className="name">
                        <h4>Asante Winifred</h4>
                    </div>
                </Col>
             </Row>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo amet recusandae cumque architecto! Atque
                     sit possimus illum voluptatem, praesentium, cum blanditiis numquam, deleniti enim vitae repudiandae alias eum nisi!</h5>
            </Col>
        </Row>
    </Container>
      </Carousel.Item>
      <Carousel.Item>
      <Container>
        <Row className='carousel-text-row'>
            <Col className='carousel-text'>
             <Row>
                <Col xs={3}className='carousel-text-img'>
                <div className="img-div">
                    <img src="./images/wini.jpg" alt="womn" />
                </div>
                </Col>
                <Col className='carousel-name'>
                    <div className="name">
                        <h4>Asante Winifred</h4>
                    </div>
                </Col>
             </Row>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo amet recusandae cumque architecto! Atque
                     sit possimus illum voluptatem, praesentium, cum blanditiis numquam, deleniti enim vitae repudiandae alias eum nisi!</h5>
            </Col>
            <Col className='carousel-text'>
            <Row>
                <Col xs={3}className='carousel-text-img'>
                <div className="img-div">
                    <img src="./images/wini.jpg" alt="womn" />
                </div>
                </Col>
                <Col className='carousel-name'>
                    <div className="name">
                        <h4>Asante Winifred</h4>
                    </div>
                </Col>
             </Row>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo amet recusandae cumque architecto! Atque
                     sit possimus illum voluptatem, praesentium, cum blanditiis numquam, deleniti enim vitae repudiandae alias eum nisi!</h5>
            </Col>
        </Row>
    </Container>
      </Carousel.Item>
    </Carousel>
                    </Col>
                </Row>
                </Container>

                
                <Container className='text-center partners-who-support-us' fluid>
                <Row>
                    <Col xs={12}>
                        <h2>PARTNERS WHO SUPPORTS US</h2>
                        <div className="hr">
                            <div className="red"></div>
                        </div>

                        <h5>
                            About <span>1000+</span> people visit our hospital for checkups, delivery sessions, surgeries and so on.<br/>
                            With our patience and hospitality we are known to have the best health care which attract customers and investors
                            <br/>About <span>1000+</span> people visit our hospital for checkups, delivery sessions, surgeries and so on.<br/>
                            With our patience and hospitality we are known to have the best health care which attract customers and investors
                            </h5>
                    </Col>
                </Row>
                <Row className='partners-who-support-us logo'>
                    <Col>
                   <a href="http://unicef.org"> <img src="./images/unicef.png" alt="" className='sponsers-logo'/></a>
                    </Col>
                    <Col>
                   <a href="http://usaid.org"> <img src="./images/USAID.png" alt="" className='sponsers-logo'/></a>
                    </Col>
                    <Col>
                   <a href="http://mpharma.org"> <img src="./images/m1.png" alt="" className='sponsers-logo mpharma'/></a>
                    </Col>
                    <Col>
                   <a href="http://who.org"> <img src="./images/who.png" alt="" className='sponsers-logo'/></a>
                    </Col>
                    <Col>
                   <a href="http://medshare.org"> <img src="./images/medshare.png" alt="" className='sponsers-logo'/></a>
                    </Col>
                    
                </Row>
                </Container>

        
        </div>
    );
}

export default Home;
