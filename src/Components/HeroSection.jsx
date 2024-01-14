import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';

const SectionComponent = () => {
  const imageUrls = [
    'https://projectsdeal.co.uk/images/home/google_read_reviews.png',
    'https://projectsdeal.co.uk/images/home/Sitejabber_final.png',
    'https://projectsdeal.co.uk/images/home/Trustpilot.png',
    'https://projectsdeal.co.uk/images/home/yelp_final.png',
    'https://projectsdeal.co.uk/images/home/Yell_1.png',
    'https://projectsdeal.co.uk/images/home/5-Star-Reviews-on-Facebook.png',
  ]; 
  const testimonials = [
    {
      name: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      stars: 5,
    },
    {
      name: 'Jennifer',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      stars: 5,	
    },
    {
      name: 'Emma',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      stars: 5,	
    },
  ];
const cardData = [
  {
    icon: <img src='https://projectsdeal.co.uk/images/experience.png' alt="Icon" />,
    description: 'Ask any 5 of your Own Classmates & we bet at least 3 of them would already be our clients',
  },
  {
    icon: <img src='https://projectsdeal.co.uk/images/08.png' alt="Icon" />,
    description: 'Over 96% of our clients have scored Merits & Distinctions Since 2001,Its effortless now!',
  },
  {
    icon: <img src='https://projectsdeal.co.uk/images/satisfaction.png' alt="Icon" />,
    description: 'Intermediate drafts & Unlimited number of Revisions to meet the Supervisors thought process',
  },
  {
    icon: <img src='https://projectsdeal.co.uk/images/deadline.png' alt="Icon" />,
    description: '100% Confidentiality,0% Plagiarism on turnitin,Get Ready for Submission Work',
  },
];
  const renderCardRow = (cards) => {
	return cards.map((card, index) => (
	    <Col key={index} md={3} className="mb-3">
      		<div className="card" style={{background: 'url("https://projectsdeal.co.uk/img/patterns/01.png")',border: 'none'}}>
        		<div className="card-body">
          			<div className="text-center mb-3" style={{fontSize:"3.5rem", backgroundColor:"#454545", color:"white", borderRadius:"50%", height:"100px", width:"100px", marginLeft:"70px"}}>{card.icon}</div>
          			<h5 className="card-title" style={{fontSize:"2rem", fontWeight:"500"}}>{card.name}</h5>
          			<p style={{fontSize:"0.8rem"}} className="card-text">{card.description}</p>
        		</div>
      		</div>
    	   </Col>
  	));
  };
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const changeTestimonial = (direction) => {
    setCurrentTestimonialIndex((prevIndex) => {
      let newIndex;
      if (direction === 'next') {
        newIndex = prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      } else {
        newIndex = prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      }
      return newIndex;
    });
  };
  const currentTestimonial = testimonials[currentTestimonialIndex];
  return (
    <Container style={{marginTop:"500px"}}>
      <Row className="mt-3">
        <Col>
          <h2 style={{color:"#d69f0f", textAlign:"center", marginBottom:"30px"}}>Dissertation Writing Services UK</h2>
          <p style={{fontSize:"1.22rem"}}>Projectsdeal is the UK's only dissertation writing service that is consistently awarded the title of "No.1 Dissertation Writing Service" by every major public review platform, including Google, TrustPilot, Sitejabber, Yell, and Yelp, with all reviews receiving a perfect 5-star rating. The rationale behind this achievement is simple: We Deliver! We go to the extreme ends to ensure our Clients are Happy and Super Successful. And that's Non-Negotiable for us.</p>
	  <p style={{fontSize:"1.22rem"}}>We have been, we are, and we will always be the Most Loved & Trusted Dissertation Writing Service in the UK. We are proud, & you will be too! We are proud of our achievements & flawless track record. Please read our reviews:</p>
          <div className="d-flex align-items-center justify-content-center">
            {imageUrls.map((url, index) => (
              <Image
                key={index}
                src={url}
                alt={`Image ${index + 1}`}
		width={190}
		height={150}
		className="mx-3"
              />
            ))}
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h3 style={{color:"#d69f0f", textAlign:"center", marginBottom:"30px", fontSize:"3rem", fontWeight:"400"}}>We specialise in Essays, Assignments, Courseworks, Online exams, and Dissertation Writing Services, Since 2001!</h3>
          <p>We have literally delivered success and helped thousands of anxious and vulnerable students, many many of your senior and super seniors peers, with Assignments, Coursework, Online exams, and Dissertations. We understand and appreciate the challenges you face in juggling your job, studies, family, your ugly and demanding supervisor, and we feel responsible that your career and literally your life depends on your Results. We have delivered success, Since 2001, So now it's effortless to deliver exactly what your supervisor is looking for. If you study in UK, you can please focus on your other important priorities while we look after your academic success. <em>Effortlessly!</em></p>
        </Col>
      </Row>
      <Row className="mt-3 my-3">
        <Col style={{textAlign:"center"}}>
          <h2 style={{marginBottom:"30px", fontWeight:"400", fontSize:"37px"}}>Just Sit Back Relax & Consider Your Work Done!!</h2>
          <img src="https://projectsdeal.co.uk/img/Order-Now-Button-Vector.png" style={{height:"50px", width:"200px", cursor:"pointer"}}/>
          <p style={{fontSize:"1.22rem", textAlign:"left", marginTop:"20px"}}>Projectsdeal is the <strong>best dissertation writing services in the UK</strong>, with all 5 star reviews. Our team of experienced British writers will craft your dissertation with a research-oriented approach, ensuring exceptional quality. Our dissertation writers will diligently work on your dissertation, making it engaging and captivating, ultimately helping you score distinction. Projectsdeal has years of experience in the industry, making it one of the top dissertation writing service in UK. All of our dissertation helpers are veteran writers and research experts with several years of expertise. We are hailed as the best dissertation help for providing PhD thesis, assignments and essay writing.</p>
        </Col>
      </Row>
      <Row className="mt-3 my-3">
        <Col md={6}>
    	   <video width="650" height="400" src="https://youtu.be/YVbMIIdpvWQ" frameborder="0" allowfullscreen controls muted></video>
  	</Col>
  	<Col md={6}>
           <ul style={{fontSize:"1.3rem", listStyleType:"none"}}>
      		<li><i className="fa-solid fa-check mr-2"></i>Established 2001</li>
      		<li><i className="fa-solid fa-check mr-2"></i>24 Years of Successful Track Record</li>
      		<li><i className="fa-solid fa-check mr-2"></i>PhD Qualified Writers</li>
      		<li><i className="fa-solid fa-check mr-2"></i>Top Notch Quality</li>
		<li><i className="fa-solid fa-check mr-2"></i>Enjoy Full Confidentiality</li>
      		<li><i className="fa-solid fa-check mr-2"></i>Plagiarism Free</li>
      		<li><i className="fa-solid fa-check mr-2"></i>Free Unlimited Revisions</li>
      		<li><i className="fa-solid fa-check mr-2"></i>Professional Project Management</li>
		<li><i className="fa-solid fa-check mr-2"></i>5 Stars Reviews on Google, SiteJabber, TrustPilot</li>
      		<li><i className="fa-solid fa-check mr-2"></i>600+ Domain Experts</li>
      		<li><i className="fa-solid fa-check mr-2"></i>46 Project Coordinators</li>
      		<li><i className="fa-solid fa-check mr-2"></i>Guaranteed Grades</li>
    	   </ul>
  	</Col>
      </Row>
      <Row className="mt-3 my-3">
        <Col style={{textAlign:"center"}}>
          <h2 style={{marginBottom:"30px", color:"#0b56ab", fontWeight:"400", fontSize:"35px"}}>For Urgent Deadlines WhatsApp us</h2>
          <Button style={{backgroundColor:"#59ce72", padding:"15px", borderRadius:"20px", border:'none'}}><i className="fa-brands fa-whatsapp mx-2"></i>WhatsApp +44 2388687867</Button>
          <p style={{fontSize:"1.22rem", textAlign:"left", marginTop:"20px"}}>When it comes to hiring Best Dissertation Writing Service in London trust becomes one of the major concerns for students. Students have many concerns regarding the methodology, deadlines, quality of work, pricing, experience of the British writers, plagiarism, and revisions or amendments etc. We are so good that the results of our works speak for themselves as more than 82% of our clients have bagged for themselves Merits and Distinctions. Balancing your odd Job, other imp priorities and Score!</p>
	  <p style={{fontSize:"1.22rem", textAlign:"left", marginTop:"20px"}}>A dissertation determines your overall grade and can either help your academic career or break it. It requires investing time, energy, motivation and skills such as research skills in order to do a great job. However, to ensure that your dissertation is not only accepted but also wins you a great grade and high regard, you must present an original dissertation that fulfills the objectives it has indicated. It should be well-researched, coherent and a demonstration of knowledge applied in solving a real life situation effectively.</p>
        </Col>
      </Row>
      <Row className="mt-3 my-3">
        <Col style={{textAlign:"center"}}>
          <h2 style={{marginBottom:"30px", color:"#0b56ab", fontWeight:"400", fontSize:"45px"}}>What makes Projectsdeal UK #1 Dissertation Writing Service</h2>
	  <Row className="mt-3">
  	      {renderCardRow([
    		   { icon: <i className="fa-solid fa-thumbs-up"></i>, name: "Premimum Quality", description: "Projectsdeal is Gold Standard in Academic Research & Writing" },
    		   { icon: <i className="fa-solid fa-ban"></i>, name: "Plagiarism Free", description: "Use Official License of Turnitin to Validate <6% plagiarism" },
    		   { icon: <i className="fa-regular fa-clock"></i>, name: "Meeting Deadline", description: "Projectsdeal team values on-time submission. We deliver before the deadline. Relax!" },
    		   { icon: <i className="fa-solid fa-lock"></i>, name: "100% Privacy", description: "Follow Strict Code of Confidentiality. We are known for HIGH Business Ethics." },
  	      ])}
	  </Row>
	  <Row className="mt-3">
  	      {renderCardRow([
    		   { icon: <i className="fa-solid fa-money-bill-wave"></i>, name: "Affordable Prices", description: "Every year if more than 80% of your own class can afford it, you can surely! Your work be worth every pound spend." },
    		   { icon: <i className="fa-solid fa-phone"></i>, name: "Dedicated Team", description: "Dedicated Personal Managers to ensure high level of service experience." },
    		   { icon: <i className="fa-regular fa-file"></i>, name: "Free Revision", description: "We understand that your supervisor is our client! We prioritize your success above all else, so feel free to request any number of modifications." },
    		   { icon: <i className="fa-solid fa-rotate"></i>, name: "Payback Guarantee", description: "Our Terms & Conditions are designed with Fair Usage and SOLID Guarantees to ensure success! Result is all that matters!" },
  	      ])}
	  </Row>
        </Col>
      </Row>
      <Row className="mt-3 my-3">
        <Col style={{textAlign:"center"}}>
          <h1 style={{marginBottom:"30px", color:"#ff0000", fontSize:"45px", fontWeight:"700"}}>Simply get rid of your Dissertation worries Now:</h1>
	  <ul style={{fontSize:"2rem", listStyleType:"none"}}>
		<li>1. Just select your domain</li>
		<li>2. Choose the exact word count</li>
		<li>3. Select the final submission date</li>
		<li>4. Get instant pricing</li>
	  </ul>
          <img src="https://projectsdeal.co.uk/images/order-now.png" style={{height:"70px", width:"300px", cursor:"pointer"}}/>
        </Col>
      </Row>
      <Row className="mt-3 my-3">
        <h2 style={{textAlign:"center", color:"#0b56ab", fontWeight:"400", fontSize:"35px"}}>Recent Dissertation Writing Services Reviews</h2>
	<Row>
           <Col md={12}>
             <div className="text-center" style={{ backgroundColor: 'whitesmoke', padding: '20px', borderRadius: '10px' }}>
		   <div>
              		<p>"{currentTestimonial.comment}"</p>
            	   </div>
            	   <div className="d-flex justify-content-center align-items-center">
              		{Array.from({ length: currentTestimonial.stars }).map((_, index) => (
                	    <i key={index} className="fa-solid fa-star mx-1" style={{ color: ' #f5d142', fontSize:'0.7rem'}}></i>
              		))}
            	   </div>
            	   <div className="mt-2">
              		<em>-{currentTestimonial.name}</em>
            	   </div>
               </div>
           </Col>
	</Row>
        <Row className="justify-content-center mt-4">
          <Col md={8} className="text-center">
             <Button className="mx-2 bg-light text-muted" style={{border:'none', fontWeight:'500'}} onClick={() => changeTestimonial('previous')}>
                Previous
              </Button>
              <Button className="mx-2 bg-light text-muted" style={{border:'none', fontWeight:'500'}} onClick={() => changeTestimonial('next')}>
            	Next
              </Button>
          </Col>
        </Row>
      </Row>
      <Row className="mt-3 my-3">
        <Col>
          <h2 style={{textAlign:"center", color:"#0b56ab", fontWeight:"400", fontSize:"35px"}}>How we consistently achieve Merits and Distinctions in Dissertations?</h2>
	  <p style={{fontSize:"1.2rem", marginTop:"20px"}}>To produce such a dissertation and get high marks for it, you need to know how a dissertation is evaluated so that you can tailor it for a great evaluation. While these evaluations differ among different departments or universities the criteria is pretty much the same and may include the following:</p>
	  <p>Emphasis is mainly placed on the skill with which you have used the research methods to obtain scientifically presented findings as well as masterfully draw conclusions from these results.</p>
	  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        	<li><p>The dissertation should be original and relevant as well as demonstrate your ability to thoroughly conduct a research study.</p></li>
        	<li><p>Your literature review should be relevant and very specific to your topic instead of an account of general information related to your field of study. The review should be both descriptive and critically analyze previous works while explicitly showing how his research methodology and the review are linked.</p></li>
        	<li><p>The dissertation you present should have the research methodology appropriate and justified. You should minimize the likelihood of bias and limitations.</p></li>
  		<li><p>The findings from your research should answer your research questions as well as meet your objectives. There should be no doubt as to the testing of your hypotheses.</p></li>
        	<li><p>Your results should be well presented such that the patterns can be clearly identified and have been summarized.</p></li>
        	<li><p>In your discussion, make a point of analyzing the main points first and speculations or reconceptualization should be well-founded in the results presented as well as linked to literature. Results should be interpreted exhaustively and innovatively related to the research hypothesis.</p></li>
        	<li><p>The reference list should give a complete and accurate account of sources used in the dissertation.</p></li>
	        <li><p>Finally, there should be some recommendations for future studies.</p></li>
        	<li><p>Once the evaluation is done by supervisors and advisors who propose a grade that is either confirmed or rejected by a board of examiners, the final grade is given.</p></li>
          </ul>
          <h4>We Make Dissertation Writing Easier!</h4>
	  <p style={{fontSize:"1.2rem", marginTop:"10px"}}>With our dissertation writing help will make writing your dissertation easier. We put our wealth of experience into use and making us reliable and accurate dissertation help and writing services. We guarantee you the best through our time-proven research and thesis writing service. We are your go-to dissertation writing help provider, ensuring that your dissertation meets your university specifications. Our experience spans across all major universities in UK, where we have consistently delivered exceptional results with all 5 star reviews on all platforms. With our expertise, we are committed to providing the highest quality dissertation assistance to students from all academic backgrounds.</p>
        </Col>
      </Row>
      <Row className="mt-3 my-3">
        <Col style={{textAlign:"center"}}>
          <h1 style={{marginBottom:"10px", fontWeight:"400"}}>Simply relieve yourself from your dissertation worries in just 1 step:</h1>
          <img src="https://projectsdeal.co.uk/images/Learn-More.png" style={{height:"80px", width:"180px", cursor:"pointer", marginBottom:"80px"}}/>
        </Col>
        <Row className="justify-content-center mt-3 my-3">
           {cardData.map((card, index) => (
          	<Col key={index} md={3} className="mb-4">
            	    <Card className="text-center" style={{backgroundColor:'#263d5b'}}>
              		<Card.Body>
                	    <div className="rotating-icon">{card.icon}</div>
                	    <Card.Text style={{fontWeight:'300', color:'white'}}>{card.description}</Card.Text>
              		</Card.Body>
            	    </Card>
          	</Col>
           ))}
      	</Row>
      </Row>
      <Row className="m-0">
        <Col>
          <h4 style={{marginBottom:"30px", textAlign:'center'}}>Frequently Asked Questions</h4>
	  <p style={{fontSize:"1.2rem", lineHeight:'50%'}}>What do you need to start writing my dissertation ?</p>
	  <p style={{fontSize:"1.2rem"}}>In order to write your dissertation, we'll need the following:</p>
	  <p style={{fontSize:"1.2rem", lineHeight:'50%'}}>1. Dissertation handbook, Proposal approved by university, ethics form</p>
	  <p style={{fontSize:"1.2rem", lineHeight:'50%'}}>2. A full list of requirements, deadlines, and expectations of your work.</p>
	  <br/>
          <p style={{fontSize:"1.2rem", lineHeight:'50%'}}>Can you <a href="https://projectsdeal.co.uk/do-my-dissertation.aspx">do my dissertation?</a></p>
	  <p style={{fontSize:"1.2rem", lineHeight:'170%'}}>Yes. Our experienced team can handle all aspects, including topic selection, <a href="https://projectsdeal.co.uk/dissertation-proposal-writing-service.aspx">dissertation proposal help</a>, ethics forms, questionnaire, data collection, and analysis. We will conduct a thorough <a href="https://projectsdeal.co.uk/literature-review-writing-services-uk.aspx">literature review</a>, ensuring that the latest and most relevant references are incorporated into your dissertation. We carefully consider all your comments and requirements. With our years of expertise, our writers provide precise recommendations and conclusions to add value to your research field. Our aim is to provide you with a fully ready-for-submission dissertation that includes proper research and referencing to guarantee excellent grades.</p>
	  <br/>
	  <p style={{fontSize:"1.2rem", lineHeight:'50%'}}>How do I get reliable dissertation help services in the UK?</p>
	  <p style={{fontSize:"1.2rem", lineHeight:'170%'}}>We maintain 100% confidentiality as we understand the importance of results to your life, to your career. The massive amount of expectations the supervisors and the university has of you in known to us. All out clients for the last 20 years are all students from PhD, Masters and undergraduate. We conduct knowledge transfer sessions so you can also learn while you score! Your entire career, your entire life depends on your Scorecard. Hence we have multiple intermediate interactions to ensure all of us work as one team and progress together on your Essay, Coursework, Dissertation. So, please be assured!</p>
        </Col>
      </Row>
      <Row className="mt-3 my-3">
          <h2 style={{marginBottom:"30px", textAlign:"center", fontSize:"35px", color:"#a98511",fontWeight:"400"}}>Awarded Best Dissertation Writing Service in the UK - <a href="https://projectsdeal.co.uk/Projectsdeal-Press-Recognition.aspx" style={{fontSize:'1rem', fontWeight:'400'}}>Press Recognition</a></h2>
	  <Row className="justify-content-between">>
	      <Col md={2}><img src="https://s.yimg.com/rz/p/yahoo_finance_en-US_h_p_financev2_2.png" height='90px' width="200px" alt="img"/></Col>
	      <Col md={2}><img src="https://projectsdeal.co.uk/images/Bbc_london_logo.jpg" height='80px' width="200px" alt="img"/></Col>
	      <Col md={2}><img src="https://projectsdeal.co.uk/images/Khaleej_Times_Logo.png" height='80px' width="200px" alt="img"/></Col>
	      <Col md={2}><img src="https://projectsdeal.co.uk/images/the-guardian-logo.jpeg" height='80px' width="200px" alt="img"/></Col>
	      <Col md={2}><img src="https://1000logos.net/wp-content/uploads/2022/05/Benzinga-Logo.png" height='80px' width="200px" alt="img"/></Col>
	  </Row>
	  <p>Why is PROJECTSDEAL the popular choice and ranked as the best dissertation writing services in UK?<br/>The very reason https://projectsdeal.co.uk is clearly Ranked No.1 on every single platform for over 20 years in a row is because we have a flawless trackrecord since 2001. We are the UK's first Dissertation and Coursework Writing Company. We are the Biggest team of over 600 full time seasoned professionals like project coordination teams, Domain experts, Sophisticated academic Writers, Senior proof readers, and we are blessed with very very dependable and superior leadership.</p>
	  <p>Can someone write my dissertation if I do not have the project title?<br/>We first have to define the precise research title for your research. Meaning we must start by narrowing down your exact area of research and consolidate that into a meaningful dissertation title. After that you have to get it approved from your supervisor. Once the Dissertation title is approved we can start with the Dissertation Proposal. The Dissertation Proposal must have a very clearly defined Aim of our research, followed by perfectly established research objectives we need to meet by the end of our research and clear Research Questions. We need latest references from important journals and identify right authors to refer to. This is what we do, we continuously research and write Dissertations and Research papers and hence we give you full leverage of our expertise. Please <Button style={{backgroundColor:"#59ce72", padding:"15px", borderRadius:"20px", border:'none'}}><i className="fa-brands fa-whatsapp mx-2"></i>WhatsApp +44 2388687867</Button> and we shall personally have a detailed discussion adhelp you more meaningfully.</p>
	  <br/>
	  <p>Can you please brief me about the process?<br/>Lets define the exact word count and the deadline. For your Dissertation we can help you define the title in your area of interest and start step by step to define the research proposal and take it forward chapter wise. Once we define the exact deliverable and the deadline. We shall offer you the professional fees for our help. After that we shall process your payment formalities and onboard you. You will have your unique project id along with your dedicated project coordinator. So we can progress step by step and work as one team all along. You can check the detailed process of <a href="https://projectsdeal.co.uk/how-we-work.aspx">how we work.</a></p>
	  <br/>
	  <p>What qualifications do your dissertation writers have?<br/>All of our writers come with a lot of experience in dissertation writing. They hold Master and Ph.D. degrees from reputed universities. They have published their own papers and possess extensive knowledge in all domains & degrees (Mangement, Marketing, <a href="https://projectsdeal.co.uk/law-dissertation-writing-services.aspx">Nursing, Law, Undergrad, Masters, PhD thesis writing service</a>). Their experienced writers enable them to write dissertations in a wide range of fields. Moreover, they're skilled at writing 100% academic dissertation, Since 2001.</p>
	  <br/>
	  <p>Can I see some sample work?</p>
	  <p>Here are some Dissertation Examples</p>
	  <p><a href="https://projectsdeal.co.uk/Samples/Dissertation-Samples/Dissertation%20-%20Finance%20-%20ESG.pdf">Sample 1</a> | <a href="https://projectsdeal.co.uk/Samples/Dissertation-Samples/Dissertation%20-%20Education.pdf">Sample 2</a> | <a href="https://projectsdeal.co.uk/Samples/Dissertation-Samples/Dissertation%20-%20Negatives%20Outcome%20of%20Food%20Waste%20in%20Restaurants%20in%20the%20UK.pdf">Sample 3</a></p>
      </Row>
      <Row className="mt-3 my-3">
        <Col style={{textAlign:"center"}}>
          <h1 style={{ fontSize:"40px", fontWeight:"600"}}>Are you working with us for the First time? If Yes?</h1>
	  <h1 style={{marginBottom:"30px", fontSize:"37px", fontWeight:"400"}}>Good News!! <a href="https://projectsdeal.co.uk/dissertation-writing-services-cost.aspx">Click here</a> to avail your Full First Order Discount instantly:</h1>
          <img src="https://projectsdeal.co.uk/images/Learn-More.png" style={{height:"80px", width:"180px", cursor:"pointer"}}/>
        </Col>
	<p>How long is a dissertation?<br/>An average dissertation has a word count between 7,000 to 20,000 words. But different universities set different word limits for dissertation. So, be sure to check the word limit with your university.</p>
	<br/>
	<p>What is the general dissertation structure?<br/>Generally, <a href="https://projectsdeal.co.uk/dissertation-structure.aspx">dissertation structure</a> in the UK includes the following: Title Page, Acknowledgment, Abstract, <a href="https://projectsdeal.co.uk/dissertation-introduction.aspx">Introduction</a>, Literature Review, Aims and Objectives, Research Analysis, <a href="https://projectsdeal.co.uk/dissertation-methodology.aspx">Methodology</a>, Results Discussion Chapters, General Discussion, Conclusion and Contribution - Implications and Future Directions</p>
	<br/>
	<p>Can I contact you at any time?<br/>Yes. ProjectsDeal allocated a personal project manager as soon as the dissertation order is placed. Our team is available 24/7 in order to assist you whenever you need us. Feel free to email us or contact us via WhatsApp. Manager will be available till final successful submission.</p>
      </Row>
      <Row className="mt-3 my-3">
	<h2 style={{marginBottom:"30px", fontSize:"27px", color:"#a98511",fontWeight:"400", textAlign:'center'}}>Why Students should take help of Top Dissertation Writing Services?</h2>
        <Col md={6}>
    	   <video width="650" height="400" src="https://youtu.be/PPFFr51UkS8" frameborder="0" allowfullscreen controls muted></video>
  	</Col>
  	<Col md={6}>
           <p><strong>Right topic selection:</strong><br/>Projectsdeal will give you viable topics that wont make you hit a roadblock. We recommend latest dissertation topic that is interesting, with lot of research and contribution scope.</p>
	   <p className="mt-4"><strong>More access to the library and research data</strong><br/>We have more access to the library than you will ever get, thus making us get more primary and secondary research material than you.</p>
	   <p className="mt-4"><strong>Years of experience and team of expert domain writers:</strong><br/>Our writers have more experience than you because they have written so many dissertations for several individuals, and this goes on every year. We can easily help you score your desired grades.</p>
  	</Col>
	<p className="mt-3">You can calculate custom cost online and order online. Within 15 minutes, Personal project manager would be assigned, experienced dissertation writers will start your work. Allocated manager shall stay in touch with you on whatsapp till final successful submission.</p>
      </Row>
      <Row className="mt-5 my-3">
        <Col style={{textAlign:"center"}}>
          <h2 style={{marginBottom:"20px", fontSize:"37px", fontWeight:"400"}}>Just Sit Back Relax & Consider Your Work Done!!</h2>
          <img src="https://projectsdeal.co.uk/images/order-now.png" style={{height:"90px", width:"400px", cursor:"pointer"}}/>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionComponent;
