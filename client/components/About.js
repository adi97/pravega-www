import React from 'react';
import '../styles/about.css';

class About {
  render() {
    return (
      <div>
        <AboutPravega />
        <AboutIISc />
      </div>
    );
  }
}

class AboutPravega {
  render() {
    return (
      <div className="about">
        <div >ABOUT PRAVEGA</div>
        <div>
             Pravega is the Sanskrit word for acceleration — the derivative of velocity. Pravega, IISc’s own fest, is designed to         attract those students who are the brightest, most creative, and most passionate about knowledge of any form to take part in this 3 day long extravaganza. The name reflects the ever growing nature of this festival of Science, technology and fun towards perfection. In its conception, it is the first and the largest of its kind and it hopes to carve a niche for itself in the country. For the metropolitan city of Bangalore, it will be the only fest with such a vision, and will come to be associated with the student community of the city itself. Each event is an original creation; each exhibition comes with a twist. Apart from being intellectually stimulating, they are as fun as it gets. Along with these, there are lectures from people in the forefront of academia and other social endeavors as well. In its second year, a significant pan-national presence of students from other well-known institutions is expected in Pravega. Pravega intends to create a scientifically and culturally stimulating environment: a forum where participants will continuously encounter, exchange, and imbibe new ideas. Towards that dream, Pravega continues to accelerate.
        </div>
      </div>
    );
  }
}
class AboutIISc {
  render() {
    return (
      <div className="about">
        <div>ABOUT IISC</div>
        <div>
          The Indian Institute of Science is India's premier research institution. Founded in 1909 by J.N. Tata, it is home to over forty departments, 3,500 students and 500 faculty members, all devoted to cutting edge research in science and technology. IISc regularly features as India's top institute in both global and national rankings. The students of IISc are some of the best minds India has to offer. Admission to any of the Institute's many programmes is extremely competitive, with only the top 0.1% of the nation's talent realizing their aspirations. IISc's campus is a sprawling 443 acres right in the centre of Bangalore. The campus is a deeply scenic and calm environment, filled with greenery and a huge variety of flora. In 2011, IISc pioneered the creation of the first 4 year Undergraduate Bachelor of Science programme in India. Now in its fourth year, it enjoys 200 young, dynamic minds who are the cream of India's student community. Not afraid to chase their passions, these students turned down much coveted offers from the IITs and NITs in favour of growing under the wing of India's best scientists. The Undergraduates have already made their mark on India's national college scene. They have won many national competitions, represented India in international science camps, and have even published research papers in reputed international journals. Now they take on organizing the first truly inter-college science festival in India.
        </div>
      </div>
    );
  }
}

export default About;
