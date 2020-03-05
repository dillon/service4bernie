import React from 'react';

const Letter = ({ short }) => (
  <div>
    <p>
      Como miembros de la industria de servicios alimentarios, expresamos nuestro
      apoyo a Bernie Sanders como Presidente. Su plataforma política reconoce la
      precariedad que enfrentamos en nuestra industria, y reconocemos a Bernie como
      un aliado en nuestra lucha por una vida estable y digna. Tenemos claro que como
      trabajadores de la industria alimentaria típicamente tenemos que asegurar nuestro
      seguro de salud a través de las opciones que provee el mercado, y no tenemos garantizado
      el permiso parental ni permisos de enfermedad. Aunque participemos de una industria
      notoriamente anti-sindicalista — donde las posibilidades de negociación colectiva
      han sido históricamente extinguidas — somos capaces de actuar colectivamente de
      manera organizada y unida. Con nuestra voz colectiva, invitamos a que Bernie
      aprenda de nuestra lucha, y que se entregue a ella como nosotros nos hemos
      comprometido a apoyar su campaña.
    </p>
    <p style={{ marginBottom: 0 }}>
      Nos hemos unido como trabajadores de la industria alimentaria para imaginar de
      manera colectiva un presente y futuro igual de brillante que nuestra comunidad.
      Somos una de las bases principales de voluntarios y donantes a la campaña de
      Bernie y estamos expresando nuestro apoyo a su presidencia a través de este
      foro ya que no tenemos sindicato ni consejo representativo que nos representen.
      Firmamos este comunicado teniendo en mente el slogan central de la campaña de
      Bernie:
      {' '}
      <i style={{ color: 'white' }}>No yo, nosotros.</i>
    </p>
    <div>
      {short
        ? ''
        : (
          <>
            <p>
              Las siguientes son razones por las cuales los trabajadores de la industria
              de servicios alimentarios estamos – o deberíamos estar – en apoyo de
              Bernie Sanders como presidente:
            </p>
            <ol style={{ marginBottom: 0 }}>
              <li>
                Necesitamos asegurar un sistema de salud de pago simple con &ldquo;Medicare para todos.&rdquo; Es necesario asegurar la libertad que este tipo de protección nos proporciona — tanto para nosotros como para nuestras familias. Muchos de nosotros le dedicamos parte de nuestro sueldo al seguro de salud de nuestras familias, e incluso el seguro de salud de nuestros padres. Nuestra industria no ofrece posibilidades de aumentos ni bonificaciones. Esta industria no nos asegura puestos permanentes. Por ende, es necesario que aseguremos la salud para nosotros y para nuestras familias, en tanto que ambos vayamos envejeciendo.
              </li>
              <li>
                Sanders tiene planificado crear servicios sociales más expansivos por fuera de los que ya provee nuestra industria, pero que necesitamos urgentemente dado a los requisitos físicos de nuestro trabajo y su inconsistencia.
              </li>
              <li>
                Queremos de Presidente a alguien que proteja a los indocumentados, tanto dentro de la industria de servicios alimentarios como por fuera. Necesitamos reforma inmigratoria anclada en la compasión humana y con posibilidades aumentadas de ciudadanía. Como Sanders, también exigimos que se detenga toda práctica de deportación y exigimos la abolición de ICE.
              </li>
              <li>
                De manera consistente, Bernie Sanders ha luchado por la protección y la expansión de la seguridad social, cuya protección es esencial para nuestra jubilación digna.
              </li>
              <li>
                La campaña de Sanders se ha establecido en base a los esfuerzos de diversas comunidades de gente de color a través del país. Estamos en una industria que es igual de diversa como es segregada. Nos comprometemos a continuar luchando contra el mal de la supremacía blanca. Como trabajadores de la industria de servicios alimentarios, es nuestra responsabilidad seguir el ejemplo de la coalición multirracial de Bernie para actuar en contra del racismo — especialmente la anti-negritud — dentro de nuestros lugares de trabajo, nuestra fuerza laboral, y en la conciencia pública.
              </li>
              <li>
                Siendo trabajadores que usamos principalmente materia animal y vegetal, entendemos la importancia de tener un Presidente comprometido a emprender un Nuevo Acuerdo Verde y a legislar reformas de justicia ambiental comprensivas para asegurar la producción de comida de manera sostenible, y seguridad alimentaria y seguridad de agua para todos, especialmente con la llegada de la catástrofe climática.
              </li>
              <li>
                Desde su primera campaña de candidatura presidencial, Sanders ha demostrado su gran compromiso hacia la educación pública. Mientras evoluciona el papel del socialismo democrático en nuestro discurso nacional, todos tenemos que aprender a compartir conocimiento acerca de nuestros derechos como trabajadores. El éxito que ha tenido Sanders como candidato evidencia lo que podemos lograr cuando buscamos mejorar las condiciones para las personas de nuestra y las demás industrias.
              </li>
              <li>
                Bernie Sanders es un candidato pro-trabajador. Entre sus compromisos principales, Sanders busca ampliar la participación laboral en sindicatos y proteger los derechos del trabajador. Esto es esencial para los trabajadores que actúan dentro de industrias que no proveen protecciones laborales, tal como las industrias alimentarias y agricultoras.
              </li>
              <li>
                Los riesgos que podremos tomar cuando tengamos protección social no solo mejoran nuestra calidad de vida, sino también mejoraran la industria alimentaria y permitirán su crecimiento y evolución. Incluso nos permitirán tener vidas más plenas y ricas por fuera de nuestros trabajos.
              </li>
              <li>
                Una gran parte de los trabajadores de servicio estamos cargados con deuda estudiantil, y no logramos mantenernos al tanto con nuestros pagos mensuales o buscar más posibilidades de empleo por fuera de restaurantes, cafés, y bares. Bernie es el único candidato que quiere cancelar toda la deuda estudiantil de todos, y garantizar matrículas gratuitas en universidades públicas de ahora en adelante. De nuevo, estos cambios también beneficiarían a nuestra industria.
              </li>
              <li>
                Algunos de nosotros tenemos la flexibilidad de horarios necesaria para contribuir al proceso de organización política para realizar estos cambios — esta oportunidad es única y esencial a nuestra industria.
              </li>
              <li style={{ marginBottom: 0 }}>
                La campaña de Sanders es la única que demuestra una visión optimista y positiva hacia el futuro — rechaza el entendimiento neoliberal de un presente &ldquo;suficientemente bueno&rdquo; donde la mayoría de nosotros escasamente sobrevivimos. Aunque amemos la industria de servicio, rechazamos la posicionalidad donde somos la &ldquo;clase baja&rdquo; que sirve a los ricos. Diariamente somos testigos de los imbalances de poder que suceden en nuestras labores, y queremos un Presidente que defienda a trabajadores tales como nosotros. Por nuestros compañeros de trabajo — y por aquellos trabajadores que desconocemos — tenemos que imaginar un mundo mejor. Todos merecemos una vida digna.
              </li>

            </ol>
          </>
        )}

    </div>

  </div>
);


export default Letter;
