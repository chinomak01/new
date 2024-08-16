import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './Contenido.css';

// Datos de las secciones
const sections = [
  {
    id: 'section1',
    title: 'Componentes de la leche materna',
    introduction: 'Proporcionar la mejor nutrición posible al bebé durante sus primeros meses de vida, apoyando su crecimiento y desarrollo de manera óptima.',
    objectives: [
      'Proporcionar la mejor nutrición posible al bebé durante sus primeros meses de vida, apoyando su crecimiento y desarrollo de manera óptima.'
    ],
    videoUrl: 'https://player.vimeo.com/video/999462724?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    parameters: [
      {
        title: 'Leche Materna',
        content: (
          <ul>
            <li>Proteínas: Incluyen caseína y proteínas del suero, como la lactoferrina, que ayuda en la absorción de hierro.</li>
            <li>Carbohidratos: Principalmente lactosa, que proporciona energía y favorece la absorción de calcio.</li>
            <li>Vitaminas y Minerales: Incluye vitaminas A, D, E, K, y minerales como calcio y hierro.</li>
          </ul>
        )
      },
      {
        title: 'Proceso Fisiológico',
        content: (
          <ul>
            <li>Producción de Leche: Iniciada por la hormona prolactina, que estimula las glándulas mamarias para producir leche.</li>
            <li>Reflejo de Eyección: Controlado por la oxitocina, que provoca la contracción de las células musculares alrededor de los alvéolos para expulsar la leche hacia los conductos mamarios.</li>
            <li>Demanda y Oferta: La cantidad de leche producida se ajusta según la demanda del bebé. Cuanto más frecuentemente se amamante, más leche se produce.</li>
          </ul>
        )
      }
    ],
  },
  {
    id: 'section2',
    title: 'Técnica correcta para dar de lactar',
    introduction: 'Es necesario saber que los recién nacidos tienen el estómago pequeño (del tamaño de una canica al nacer y de una nuez a los tres días) y la leche se digiere muy rápidamente, por lo que necesitan mamar con frecuencia. ',
    objectives: [
      'Fomentar técnicas correctas de lactancia que permitan satisfacer las necesidades básicas de supervivencia a todos los niños y niñas en la etapa mas vulnerables y dependientes de la vida.'
    ],
    videoUrl: 'https://vimeo.com/999462563',
    parameters: [
      {
        title: 'Posiciones para dar de lactar',
        content: (
          <ul>
            <li>El pecho se ofrece sosteniendo la mama entre el pulgar y los demás dedos, con la mano en forma de «c».</li>
            <li>Los dedos de abajo deben ir lejos del pezón.</li>
            <li>El pezón debe apuntar al paladar del bebé.</li>
            <li>Se debe ofrecer el pezón a la altura de la nariz del bebé, lo que le permitirá un mejor agarre</li>
            <li>Alinear bien al bebé. Su cabeza no debe estar torcida, sino que su hombro, su oreja y su cadera deben estar en la misma línea, enfrentados al cuerpo de la mujer</li>
            <li>Acercarlo a la teta con la boca bien abierta e introducir el pezón y la mayor parte posible de aréola.</li>
            <li>Los labios superior e inferior deben quedar abiertos como «boca de pescado». El mentón del bebé debe quedar en contacto con el pecho, no así su nariz</li>
            
          </ul>
        )
      },
      {
        title: 'Cuidados de enfermería',
        content: (
          <ul>
            <li>Lavado de manos antes y después de realizar la técnica.</li>
            <li>Lavado de manos antes y después de realizar la técnica.</li>
            <li> Explicar a la madre las técnicas correctas para evitar o minimizar la congestión mamaria y las molestias asociadas.</li>
            <li>Explicar signos y síntomas que requiere ser notificados al personal de salud</li>
            <li>•	Vigilar la capacidad de mamar del recién nacido.</li>
          </ul>
        )
      }
    ],
  },
  {
    id: 'section3',
    title: 'Posiciones para Lactancia Materna',
    introduction: 'La lactancia materna es un proceso natural y fundamental para el desarrollo saludable del recién nacido.',
    objectives: [
      'El objetivo de este tema es proporcionar información detallada sobre las diferentes posiciones de lactancia, destacando sus ventajas y adaptaciones para distintas circunstancias.'
    ],
    videoUrl: 'https://vimeo.com/999462823',
    parameters: [
      {
        title: 'Posiciones para dar de lactar',
        content: (
          <ul>
            <li>Posición de cuna: La madre sostiene al bebé con el brazo del mismo lado del pecho del que está amamantando.</li>
            <li>Posición de cuna en cruz: La madre utiliza el brazo opuesto para sostener la cabeza del bebé, lo que le permite tener un mayor control sobre el agarre del bebé al pecho.</li>
            <li>Sosteniendo como un balón: El bebé es colocado debajo del brazo de la madre (como si sostuviera un balón), con sus piernas apuntando hacia atrás.</li>
            <li>Recostada: La madre se acuesta de lado con el bebé a su lado, permitiendo que ambos descansen mientras amamantan.</li>
            <li>Recostada de un lado: Variante de la posición recostada, donde la madre y el bebé están acostados de lado frente a frente.</li>
          </ul>
        )
      },
      {
        title: 'Cuidados de enfermería',
        content: (
          <ul>
            <li>Educar a las madres sobre las diferentes posiciones de lactancia.</li>
            <li>Enseñar a mantener una postura adecuada durante la lactancia.</li>
            <li>Monitorear la técnica de lactancia utilizada por la madre.</li>
            <li>Promover el contacto piel a piel entre la madre y el bebé.</li>
            <li>Ofrecer soluciones personalizadas si la madre tiene dificultades debido a condiciones especiales.</li>
          </ul>
        )
      }
    ],
  },
  // Agrega más secciones si es necesario...
  {
    id: 'section4',
    title: 'Fases de la lactancia',
    introduction: '. La lactancia materna se divide en diferentes fases, cada una con características específicas que responden a las necesidades cambiantes del bebé y el cuerpo de la madre.',
    objectives: [
      'El objetivo de analizar las fases de la lactancia es proporcionar una comprensión detallada de cómo el cuerpo de la madre se adapta y responde a las necesidades del bebé a lo largo del tiempo.'
    ],
    videoUrl: 'https://vimeo.com/999462602',
    parameters: [
      {
        title: 'Posiciones para dar de lactar',
        content: (
          <ul>
            <li>1.	Lactogénesis I. Preparación para la Lactancia:En esta fase, las glándulas mamarias se desarrollan y comienzan a prepararse para la producción de leche. El cuerpo produce pequeñas cantidades de calostro, un líquido espeso y amarillento rico en anticuerpos y nutrientes esenciales. </li>
            <li>2.	Lactogénesis II. Inicio de la Producción Abundante de Leche: Conocida comúnmente como la "subida de la leche", esta fase marca el comienzo de la producción significativa de leche. La caída de los niveles hormonales, en especial de la progesterona, permite que la prolactina actúe, aumentando la cantidad de leche producida </li>
            <li>3.	Lactogénesis III. Mantenimiento de la Lactancia: Durante esta fase, la producción de leche se regula de acuerdo con la demanda del bebé. Cuanto más se amamanta al bebé, más leche produce el cuerpo. La composición de la leche también se adapta, ajustándose a las necesidades cambiantes del lactante</li>
            <li>4.	Involución Mamaria VI. Cese de la Lactancia: Esta fase se caracteriza por una disminución gradual en la producción de leche cuando el bebé comienza a depender de otros alimentos o se desteta por completo </li>
          </ul>
        )
      },
      {
        title: 'Cuidados de Enfermería Durante las Fases de la Lactancia',
        content: (
          <ul>
            <li>Asistencia en la Lactogénesis I: Proporcionar información y apoyo a las madres embarazadas sobre la importancia del calostro y cómo prepararse para la lactancia</li>
            <li>Apoyo en la Lactogénesis II: Asegurarse de que el bebé tenga un buen agarre para prevenir problemas como el dolor en los pezones o la mastitis.</li>
            <li>Mantenimiento en la Lactogénesis III: Ayudar a la madre a entender la importancia de la oferta y demanda para mantener una producción adecuada de leche.</li>
            <li>Soporte en la Involución Mamaria: Guiar a las madres en el proceso de destete y cómo manejar los cambios en el cuerpo durante esta fase.</li>
          </ul>
        )
      }
    ],
  },
  {
    id: 'section5',
    title: 'Ventajas y Desventajas de la Lactancia Materna: Para la madre',
    introduction: 'La lactancia materna es un proceso natural y fundamental para el desarrollo saludable del recién nacido.',
    objectives: [
      'El propósito de este estudio fue investigar y analizar las ventajas y desventajas de la lactancia materna desde el punto de vista de la madre. La lactancia materna es un aspecto fundamental de la crianza de los niños y puede tener un impacto significativo en la salud y el bienestar de la madre.'
    ],
    videoUrl: 'https://vimeo.com/999462724',
    parameters: [
      {
        title: 'Posiciones para dar de lactar',
        content: (
          <ul>
            <li>Posición de cuna: La madre sostiene al bebé con el brazo del mismo lado del pecho del que está amamantando.</li>
            <li>Posición de cuna en cruz: La madre utiliza el brazo opuesto para sostener la cabeza del bebé, lo que le permite tener un mayor control sobre el agarre del bebé al pecho.</li>
            <li>Sosteniendo como un balón: El bebé es colocado debajo del brazo de la madre (como si sostuviera un balón), con sus piernas apuntando hacia atrás.</li>
            <li>Recostada: La madre se acuesta de lado con el bebé a su lado, permitiendo que ambos descansen mientras amamantan.</li>
            <li>Recostada de un lado: Variante de la posición recostada, donde la madre y el bebé están acostados de lado frente a frente.</li>
          </ul>
        )
      },
      {
        title: 'Cuidados de enfermería',
        content: (
          <ul>
            <li>Educar a las madres sobre las diferentes posiciones de lactancia.</li>
            <li>Enseñar a mantener una postura adecuada durante la lactancia.</li>
            <li>Monitorear la técnica de lactancia utilizada por la madre.</li>
            <li>Promover el contacto piel a piel entre la madre y el bebé.</li>
            <li>Ofrecer soluciones personalizadas si la madre tiene dificultades debido a condiciones especiales.</li>
          </ul>
        )
      }
    ],
  },
  {
    id: 'section6',
    title: 'Ventajas y Desventajas de la Lactancia Materna: Para el lactante',
    introduction: 'La lactancia materna es universalmente recomendada por profesionales de la salud como la forma óptima de alimentar a los lactantes durante los primeros meses de vida. Los beneficios de la lactancia materna son extensos y bien documentados, abarcando desde la provisión de nutrientes esenciales y anticuerpos que refuerzan el sistema inmunológico del bebé',
    objectives: [
      'El objetivo de analizar las ventajas y desventajas de la lactancia materna para el lactante es proporcionar una comprensión completa de cómo esta práctica influye en la salud y el desarrollo del bebé. '
    ],
    videoUrl: 'https://player.vimeo.com/video/999462724?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    parameters: [
      {
        title: 'Ventajas:',
        content: (
          <ul>
            <li>1.	Composición Ideal: La leche materna contiene todos los nutrientes esenciales en las proporciones adecuadas que el lactante necesita para su crecimiento y desarrollo.</li>
            <li>2.	Digestibilidad: Es más fácil de digerir para el bebé en comparación con las fórmulas infantiles, reduciendo el riesgo de problemas digestivos como cólicos y estreñimiento. </li>
            <li>3.	Anticuerpos: Contiene anticuerpos y otros factores inmunológicos que ayudan a proteger al bebé contra infecciones y enfermedades</li>
            <li>5.	Vínculo Afectivo: La lactancia promueve un estrecho vínculo entre la madre y el bebé, fomentando el apego y la seguridad emocional del lactante.</li>
          </ul>
        )
      },
      {
        title: 'Desventajas',
        content: (
          <ul>
            <li>1. Bebé con Problemas de Succión: Algunos bebés pueden tener dificultades para aprender a succionar correctamente o pueden tener problemas médicos que dificultan la lactancia</li>
            <li>2.	Dieta de la Madre: La madre lactante debe tener cuidado con su dieta, ya que ciertos alimentos y bebidas pueden afectar al bebé. </li>
            <li>3.	Exigencia de Tiempo: La lactancia materna requiere un compromiso de tiempo significativo, lo que puede ser un desafío para las madres que trabajan o tienen otros compromisos.</li>
            <li>4.	Planificación: La madre debe planificar y asegurarse de estar disponible para las tomas frecuentes, lo que puede ser difícil en situaciones laborales o sociales.</li>
          </ul>
        )
      }
    ],
  },
  {
    id: 'section7',
    title: 'Datos claves o curiosos sobre la lactancia materna',
    introduction: ', la lactancia materna encierra una serie de características fascinantes y beneficios que trascienden lo meramente alimentario, influyendo profundamente en la salud y el bienestar tanto del bebé como de la madre.',
    objectives: [
      'El impacto de la lactancia materna no se limita al bienestar físico; también contribuye al desarrollo cognitivo y emocional del niño.'
    ],
    videoUrl: 'https://vimeo.com/999462771',
    parameters: [
      {
        title: ' Datos claves y curiosos',
        content: (
          <ul>
            <li>1. Composición Dinámica: La leche materna cambia su composición según las necesidades del bebé.</li>
            <li>2. Inmunidad Natural: La leche materna contiene anticuerpos, células inmunitarias y otros factores que protegen al bebé contra infecciones y enfermedades.</li>
            <li>3. Prevención de Enfermedades Crónicas: Los bebés alimentados con leche materna tienen un menor riesgo de desarrollar enfermedades crónicas como diabetes tipo 2, obesidad y enfermedades cardiovasculares en la vida adulta</li>
            <li>4. Beneficios cognitivos: Los estudios han demostrado que la lactancia materna está asociada con un mejor desarrollo cognitivo, incluyendo un mayor coeficiente intelectual en la infancia y la adolescencia.</li>
            <li>5. Reducción del Riesgo de Cáncer: Las mujeres que amamantan tienen un menor riesgo de desarrollar cáncer de mama y de ovario. </li>
          </ul>
        )
      },
      {
        title: 'Cuidados de enfermería',
        content: (
          <ul>
            <li>Educar a las madres sobre las diferentes posiciones de lactancia.</li>
            <li>Enseñar a mantener una postura adecuada durante la lactancia.</li>
            <li>Monitorear la técnica de lactancia utilizada por la madre.</li>
            <li>Promover el contacto piel a piel entre la madre y el bebé.</li>
            <li>Ofrecer soluciones personalizadas si la madre tiene dificultades debido a condiciones especiales.</li>
          </ul>
        )
      }
    ],
  },
  {
    id: 'section8',
    title: 'Encuesta',
    introduction: 'Tu opinión es muy valiosa para nosotros, ya que nos ayudará a mejorar y ajustar el contenido educativo que ofrecemos para apoyar a las madres y padres en esta etapa crucial.',
    objectives: [
      'El objetivo de esta encuesta es recopilar opiniones y sugerencias sobre el contenido existente sobre lactancia materna. Queremos identificar áreas de mejora y asegurarnos de que la información proporcionada sea clara, accesible y útil para quienes buscan apoyo y orientación en la lactancia materna.'
    ],
    videoUrl: 'https://vimeo.com/999462812',
    parameters: [
      {
        title: ' Link de la encuesta',
        content: (
          <ul>
           https://docs.google.com/forms/d/e/1FAIpQLScnj8DPzMCiJt-TZ4bBW512MmcJjyviQdTIfkdmzXYRFrOAxw/viewform?usp=sf_link
          </ul>
        )
      },
    ],
  },
];

// Componente principal
const Contenido = () => {
  return (
    <div className="contenido-container">
      {sections.map((section) => (
        <div key={section.id} id={section.id} className="section-container">
          <div className="section-header">
            <h2>{section.title}</h2>
          </div>
          <Fade bottom>
            <div className="intro-objectives">
              <div className="introduction">
                <h3>Introducción</h3>
                <p>{section.introduction}</p>
              </div>
              <div className="objectives">
                <h3>Objetivos</h3>
                <ul>
                  {section.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>
            </div>
            <h5>Video:</h5>
                  <div className="video-container">
                    <iframe 
                      src={section.videoUrl} 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      title={section.title}
                    ></iframe>
                  </div>
            <Accordion defaultActiveKey="0" flush className="parameters-accordion">
              {section.parameters.map((param, index) => (
                <Card key={index}>
                  <Accordion.Header eventKey={index.toString()}>
                    {param.title}
                  </Accordion.Header>
                  <Accordion.Body>
                    {param.content}
                  </Accordion.Body>
                </Card>
              ))}
            </Accordion>
          </Fade>
        </div>
      ))}
    </div>
  );
};

export default Contenido;
