/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const TyC = ({}): JSX.Element => {
  return (
    <View style={styles.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Términos y condiciones</Text>
        </View>

        <View>
          <Text style={styles.subtitle}>
            1. Las bases, términos y condiciones aquí establecidas rigen,
            reglamentan y se aplican a todo tipo de suscripciones suministradas
            por ERREPAR SA. Esto incluye sus marcas comerciales Errepar y
            Erreius sean en soporte papel, bajo modalidad online o en cualquier
            otro soporte o medio, incluyendo sus módulos personalizables y demás
            aplicaciones individuales y/o asociadas.
          </Text>
          <Text style={styles.subtitle}>
            2. Cada suscripción, incluyendo las que se otorguen a modo de prueba
            o cortesía se rigen por las condiciones especiales convenidas según
            el tipo de producto suministrado, pero además se complementa con lo
            establecido en las presentes condiciones y términos de uso.
          </Text>
          <Text style={styles.subtitle}>
            3. Consideramos “usuario” al suscriptor y a las personas físicas y
            jurídicas autorizadas por él para el uso del producto suministrado.
            Si el suscriptor fuere empleador del usuario, el solo hecho de
            acceder por el último a este sitio implicará la aceptación de las
            presentes bases y condiciones por ambos. A tal fin consideraremos
            sin excepción que el referido usuario cuenta con expresa
            autorización y representación de su empleador para aceptar las
            presentes bases y condiciones, importando el acceso declaración
            explícita del usuario de que lo hace bajo su responsabilidad, en la
            representación invocada y bajo autorización de su empleador.
          </Text>
          <Text style={styles.subtitle}>
            4. El suscriptor (usuario) declara conocer que ERREPAR /
            ERREIUS(suministrador) le ha concedido un permiso de acceso
            intransferible, en los términos y bajo el alcance del producto
            suscripto. Por lo tanto, no se le permite cederlo o transferirlo
            bajo ninguna forma o modalidad. Tampoco le está permitido al
            suscriptor del/de los producto/s en soporte papel reproducirlo/s o
            publicarlo/s bajo cualquier forma o modalidad.
          </Text>
          <Text style={styles.subtitle}>
            5. El suministrador podrá acceder a información relacionada con
            quienes acceden al sitio. En especial mediante el uso de tecnología
            cookie o cualquier otra afín. También podrá acceder a información
            vinculada con el tipo de sistema utilizado por el usuario, clase de
            navegadores, tipo de sección o secciones más frecuentadas y, en
            general, a cualquier otra relacionada que le permita mejorar
            permanentemente el contenido del sitio y conocer las necesidades de
            los clientes. El usuario da su conformidad irrevocable para el
            ejercicio de esta facultad por el suministrador en los términos y
            alcances de esta cláusula. En caso de requerirlo, el usuario puede
            modificar su programa de navegación para que lance una advertencia
            en el momento en el que ingresa una cookie o bien deshabilitarlas.
            Para ello deberá consultar el menú de Ayuda de su navegador. Si se
            declinan, es posible que no pueda utilizar acceder a ciertas
            características o funcionalidades. Es posible que sean enviados
            correos electrónicos periódicamente a través de nuestro sitio con
            ofertas especiales, nuevos productos y otra información publicitaria
            que consideremos relevante para usted o que pueda brindarle algún
            beneficio. Estos correos electrónicos serán enviados a la dirección
            que usted proporcione y podrán ser cancelados en cualquier momento.
          </Text>
          <Text style={styles.subtitle}>
            6. El suministrador recopila información personal, tal como nombre y
            apellido, domicilio, teléfono, dirección de correo electrónico y
            números de tarjeta de crédito, solo cuando es informada
            voluntariamente por usted. El suministrador no solicitará
            información que sea incompatible con la finalidad de sus
            actividades, ni que directa o indirectamente revele datos sensibles.
            El suministrador podrá contratar a terceros para llevar a cabo
            ciertas tareas tales como, envío de correos postales y electrónicos,
            data entry, análisis estadístico de datos, entre otras. Dichos
            terceros sólo contarán con el acceso a la Información necesaria para
            cumplir con sus tareas y funciones, no pudiendo utilizarla para
            otros fines. En el supuesto de comprobarse que los datos personales
            recolectados no resultan útiles o que no cumplen con el fin para el
            cual fueron recabados, los mismos deberán destruirse conforme al
            Procedimiento de eliminación segura de información. En cumplimiento
            con el Art. 10 de la Ley 25.326, el suministrador no venderá,
            alquilará o compartirá la información personal de suscriptores,
            proveedores y/o colaboradores excepto en las formas establecidas en
            esta política. El suministrador hará todo lo que esté a su alcance
            para proteger la privacidad de la información. Pero eventualmente,
            puede suceder que en virtud de órdenes judiciales o de regulaciones
            legales, se vea obligado a revelar información a las autoridades o
            terceras partes. El suministrador implementa todas las medidas
            necesarias para mantener la seguridad de la información personal que
            brindan los suscriptores, proveedores y/o empleados, contemplando
            las medidas técnicas y organizativas internas necesarias para
            garantizar la seguridad y confidencialidad de los datos, tratando
            por todos los medios de evitar el acceso no autorizado a los mismos.
            Sin embargo, en razón del estado actual de la tecnología, el
            suministrador no puede garantizar en un 100% que el acceso no
            autorizado nunca ocurrirá. El suministrador no responderá en caso de
            presentarse una violación a sus sistemas de seguridad cuando medie
            fuerza mayor o caso fortuito. El área responsable de Tecnología y
            Sistemas se encarga del cumplimiento de toda la normativa
            relacionada a la Seguridad de la Información, a través de las
            Políticas, Normas y Procedimientos aprobados para tal fin.
          </Text>
          <Text style={styles.subtitle}>
            7. El sitio web podría contener enlaces a otros sitios que pudieran
            ser de su interés. Una vez que usted hace clic en estos enlaces y
            abandona nuestra página, ya no tendremos control sobre al sitio al
            que es redirigido y por lo tanto no somos responsables de los
            términos o privacidad ni de la protección de sus datos en esos otros
            sitios terceros. Dichos sitios están sujetos a sus propias políticas
            de privacidad por lo cual es recomendable que los consulte para
            confirmar que usted está de acuerdo con ellas.
          </Text>
          <Text style={styles.subtitle}>
            8. Los titulares de los datos cuentan con los siguientes derechos: ➣
            Derecho de Información: Toda persona podrá solicitar su información
            en bases de datos personales, finalidad y responsables. ➣ Derecho de
            Acceso: El titular de los datos podrá obtener información de sus
            datos personales incluidos en nuestro banco de datos, que podrá ser
            entregada dentro de los DIEZ días corridos de la solicitud
            fehaciente, en intervalos no inferiores a seis meses. ➣ Derecho de
            Rectificación, Actualización o Supresión de datos: Errepar procederá
            a la rectificación, supresión o actualización de los datos
            personales en el plazo máximo de CINCO días hábiles de recibido el
            reclamo por medio fehaciente. Para dar cumplimiento a dichas
            solicitudes, el titular de los datos deberá acompañar el formulario
            con su petición junto con copia de su DNI a la dirección de correo
            electrónico: clientes@errepar.com Ponemos a disposición el
            formulario para el ejercicio del derecho al acceso y el formulario
            para la rectificación, actualización o supresión de datos
            personales. Descargar formularios: ➣ Formulario Derecho de Acceso ➣
            Formulario para Rectificar Datos
          </Text>
          <Text style={styles.subtitle}>
            9. Los datos proporcionados por los usuarios deben ser adecuados y
            pertinentes. En caso de que éstos sean falsos, incompletos,
            inexactos o no estén actualizados, el suministrador se exime de toda
            responsabilidad sobre las consecuencias que dichos errores pudieren
            causar. El suministrador puede proporcionar los datos a terceros de
            ser necesario aunque sin fines comerciales. Los datos ingresados en
            cualquier aplicación o módulo del producto son de uso exclusivo y
            privado, siendo propiedad y responsabilidad del suscriptor.
          </Text>
          <Text style={styles.subtitle}>
            10. El suministrador tiene ahora o más adelante la facultad de
            modificar el formato, las secciones, las bases, la organización y,
            en general, podrá reformar, reformular e incluso discontinuar tanto
            la estructura como cualquier otro aspecto del presente sitio.
            También podrá hacerlo respecto de cualquiera de los productos en
            formato online, en soporte papel y/o bajo cualquier otra modalidad
            que considere necesario realizar, a su solo criterio y por cualquier
            causa. El ejercicio de esta facultad es aceptado por cada suscriptor
            por el solo hecho de acceder a este sitio, consintiendo que el
            suministrador no contraerá ningún tipo de responsabilidad por el
            ejercicio en ningún momento y bajo ninguna circunstancia de la
            facultad reservada en este punto.
          </Text>
          <Text style={styles.subtitle}>
            11. El suministrador incorpora permanentemente nueva tecnología y
            funcionalidades sobre los módulos que componen MI ERREPAR/ MI
            ERREIUS y las implementa de forma automática. La aceptación de estas
            condiciones de uso implica la autorización expresa por parte del
            suscriptor. Para realizar estas acciones es posible que deban
            realizarse cambios y migraciones de datos existentes hacia nuevas
            plataformas, ejecutándose de forma automática en cada
            implementación. Es responsabilidad del suscriptor, realizar el
            propio control sobre la información migrada y notificar al
            suministrador en el caso de notar cualquier anomalía sobre la misma.
            El suministrador no será responsable por modificaciones/omisiones
            surgidos como consecuencia de errores en los sistemas ocasionados
            por este o cualquier otro tipo de procedimiento.
          </Text>
          <Text style={styles.subtitle}>
            12. El usuario y/o suscriptor acepta y declara que conoce desde su
            mismo ingreso a este sitio que toda la información a la que acceda
            según el tipo y soporte de producto suscripto es de propiedad y
            titularidad exclusiva del suministrador. Sabe por lo tanto que solo
            podrá utilizarla bajo las condiciones de su suscripción y siempre
            para su uso personal y exclusivo, más allá de la eventual aplicación
            de la información obtenida a su actividad profesional, docente,
            académica y/o administrativa. El usuario conoce y acepta que dentro
            de la propiedad intelectual y exclusiva del suministrador se incluye
            no solo la información obtenida mediante su suscripción y/o acceso a
            este sitio, sino también los textos publicados, comentarios,
            sistematización, ordenamiento, índices, formatos y, en general, todo
            contenido en sustancia y forma al que acceda y/o que le fuere
            enviado al suscriptor por parte del suministrador.
          </Text>
          <Text style={styles.subtitle}>
            13. El suscriptor y/o usuario declara conocer que no le está
            permitido hacer uso ni del producto ni de los demás elementos
            mencionados en esta cláusula para ningún otro destino diverso del
            previsto en la suscripción correspondiente. En especial acepta que
            no le está permitido difundirlos, copiarlos, comercializarlos en
            ninguna forma o modo, cederlos ni transferirlos bajo ninguna
            modalidad y, en general, reproducirlos fuera de lo convenido y del
            fin contemplado. El suministrador informa que toda infracción a tal
            estipulación le dará derecho a ejercer los derechos y acciones
            civiles y criminales contemplados en la ley 11723, así como a
            reclamar los daños y perjuicios ocasionados sin perjuicio de
            cualquier otra acción o derecho que pudiere otorgársele por
            cualquier otra disposición normativa.
          </Text>
          <Text style={styles.subtitle}>
            14. El suministrador aclara que los contenidos gratuitos (libres,
            liberados, prueba y/o cortesía) tienen por objeto difundir la marca
            y/o producto, por lo que la utilización de/los mismos también se
            encuentra sujeto a las condiciones señaladas en los puntos 7 y 8.
          </Text>
          <Text style={styles.subtitle}>
            15. El suscriptor y/o usuario es y será responsable de cualquier
            desvío o infracción a los términos de uso y condiciones de
            suscripción reglamentados en el presente, sea para productos online
            y/o productos en soporte papel y/o en cualquier otro soporte. La
            vigencia de su suscripción será la convenida para cada producto con
            el suministrador. El solo ingreso al sitio web y/o utilización de
            funcionalidades o aplicaciones importará para el suscriptor y/o
            usuario la aceptación de las presentes bases, términos y
            condiciones. Los suscriptores de productos en soporte papel
            recibirán incorporado a su obra y/o actualización un ejemplar
            impreso del presente reglamento, junto con una recomendación expresa
            en cada factura a fin de que acceda a este sitio y lea atentamente
            las presentes bases. Dentro de los 30 días de recibida la primera
            factura con tal recomendación impresa, aquel suscriptor que
            estuviera en desacuerdo con alguna de las presentes disposiciones
            podrá observarla en forma escrita mediante el envío de un e-mail a
            clientes@errepar.com o utilizando cualquier otra forma de
            comunicación fehaciente. Transcurrido dicho lapso, el suministrador
            considerará este reglamento definitivamente aceptado.
          </Text>
          <Text style={styles.subtitle}>
            16. Toda información sobre textos legales, normativos,
            jurisprudencia, doctrina, modelos contractuales o afines y cálculos,
            fechas de referencia, alertas, en general, todo contenido al que
            pudiera acceder el suscriptor constituyen meramente una guía
            orientativa de ayuda profesional y/o académica que no reemplaza ni
            sustituye el conocimiento científico o el criterio lógico y racional
            del suscriptor, quien hará uso de ellos siempre bajo la órbita de su
            especialidad técnica y en la forma y modo que decida utilizarlos,
            bajo su única y exclusiva responsabilidad. El suscriptor es
            informado por la lectura de este reglamento y acepta conocer que
            todos los textos e información normativa, legal, dispositiva y
            judicial a que acceda con motivo de su suscripción provienen de
            fuentes oficiales y/o eventualmente privadas publicadas,
            susceptibles de contener erratas y/o errores de impresión ajenos al
            suministrador. También es posible que por la dinámica propia de
            tales contenidos puedan existir a su respecto actualizaciones o
            modificaciones no incorporadas, por razones de tiempo o por
            cualquier otra circunstancia, a los productos enviados en soporte
            papel o incluso a los contenidos publicados online. Por tal razón,
            cada suscriptor asume el expreso compromiso de contactarse vía
            e-mail o telefónicamente con el centro de atención del
            suministrador, siempre con carácter previo a la efectiva aplicación
            o uso de cualquier contenido publicado o que le hubiere sido
            enviado, con el objeto de validar y confirmar directamente la
            definitiva exactitud y vigencia de los contenidos de su interés.
            Teléfono de validación: 011-4370-2002, atención de lunes a viernes
            de 9 a 18 horas. Dirección de correo electrónico de validación:
            clientes@errepar.com. El suministrador no es ni será responsable por
            erratas, errores de impresión, desactualización de textos normativos
            o legales, publicación sintética o reducida de fallos judiciales y,
            en general, por cualquier distorsión y/o errata de cualquier
            naturaleza, ya sea en todos y/o en cada uno de sus contenidos,
            cuando el suscriptor omitiera la consulta y validación previa
            recomendada en esta cláusula. Asimismo, el suscriptor acepta y
            declara conocer que los datos, opiniones, comentarios o trabajos
            académicos y/o doctrinarios en general publicados online o en
            soporte papel corren por cuenta exclusiva de sus respectivos
            autores, los que no necesariamente pueden coincidir con o reflejar
            el pensamiento y opinión del suministrador ni representar una única
            corriente de criterio, siendo común, por el contrario, que existan
            discrepancias y multiplicidad de opiniones, diversidad de
            pensamientos e interpretaciones científicas y académicas cuya
            evaluación, conocimiento y efectivo uso y aplicación corren y
            correrán exclusivamente por cuenta y bajo responsabilidad exclusiva
            del suscriptor.
          </Text>
          <Text style={styles.subtitle}>
            17. El suministrador no es responsable por la veracidad de la
            información comercial, datos, publicidad y demás aspectos que puedan
            estar incorporados al sitio o a los diferentes contenidos por
            patrocinadores y/o enlaces comerciales y/o avisadores. Del mismo
            modo, toda relación comercial o de cualquier otra naturaleza que
            pudiera existir o trabarse entre un suscriptor y dichos terceros
            será considerada siempre y sin excepciones como completamente ajena
            al suministrador, quien no contrae ninguna responsabilidad sobre
            aquella. Tampoco el suministrador será responsable por
            interrupciones, discontinuidades o defectos técnicos de cualquier
            naturaleza inherentes al funcionamiento del servicio, accesibilidad
            de sus contenidos y, en general, por defectos propios de los sitios
            ajenos a su gestión o causados por equipos, software o cuestiones
            técnicas inherentes a cada suscriptor. Este último además toma a su
            cargo el compromiso de adoptar una adecuada protección de sus
            equipos y software a fin de evitar el envío y/o recepción a y/o
            desde el sitio de virus o alteraciones informáticas similares, no
            resultando responsable el suministrador bajo ninguna circunstancia
            de daños y perjuicios provocados o vinculados con esta causa.
          </Text>
          <Text style={styles.subtitle}>
            18. El precio de todos los productos comercializados bajo cualquier
            modo por la Editorial se entenderá siempre que reviste carácter
            provisorio, quedando el precio definitivo sujeto a las
            actualizaciones y/o reajustes que resulten menester aplicar sobre la
            base de los incrementos de costos que en virtud de las
            circunstancias macroeconómicas pudieran generarse en el futuro,
            tales como incrementos de materias primas, cualquier tipo de
            insumos, variaciones de alícuotas impositivas o tributarias,
            incrementos salariales y, en definitiva, cualquier variación
            trascendente que pudiera afectar los costos previsionados por la
            Compañía para la fijación del precio provisorio. En ese orden, y de
            producirse alguna de tales variaciones, ERREPAR informará mediante
            aviso o comunicación de rutina al cliente/suscriptor, con 30 días de
            anticipación, la modificación correspondiente y procederá a cambiar
            los importes futuros contemplados en el eventual débito mediante
            tarjeta de crédito y/o cualquier otra forma de cobro que considere
            pertinente. El suscriptor o cliente, dentro de los 30 días de
            recibido el aviso antes mencionado, podrá solicitar la cancelación
            del producto mediante alguna de las siguientes formas: a) por e-mail
            a clientes@errepar.com; b) por carta certificada con acuse de
            recibo. Transcurrido dicho plazo sin observaciones, se considerará
            aceptada y conformada la variación del precio provisorio del
            producto.
          </Text>
          <Text style={styles.subtitle}>
            19. Todo usuario que incumpla o infraccione de cualquier modo los
            términos de su suscripción y el presente reglamento podrá ser
            automáticamente y sin previo aviso discontinuado en su accesibilidad
            por el suministrador, sin perjuicio de las acciones y derechos que
            este último podrá ejercer para reclamar el resarcimiento de los
            daños y perjuicios ocasionados.
          </Text>
          <Text style={styles.subtitle}>
            20. Las presentes bases, términos y condiciones podrán ser
            modificados en un futuro al solo criterio del suministrador, sin dar
            derecho a reclamo alguno por el suscriptor. Las modificaciones
            comenzarán a regir desde su incorporación al presente reglamento sin
            perjuicio de su envío con las sucesivas actualizaciones del producto
            en soporte papel. Por tal razón cada suscriptor, en previsión de
            esta circunstancia, asume el compromiso de acceder regularmente,
            como mínimo una vez por mes, al sitio del suministrador y realizar
            una lectura íntegra de las bases y condiciones de su suscripción.
          </Text>
          <Text style={styles.subtitle}>
            21. Todo diferendo de interpretación o controversia que surgiera
            entre un suscriptor y el suministrador será dirimido en primer lugar
            amigablemente en mediación prejudicial y, de subsistir el diferendo,
            conocerán de él los Tribunales Nacionales de la Ciudad Autónoma de
            Buenos Aires.
          </Text>
          <Text style={styles.subtitle}>
            Dirección Nacional del Derecho de Autor. Hecho el depósito que marca
            la ley 11723 © ERREPAR SA – Parada Sistema patentado, modelos y
            marcas registrados Dirección: Viamonte 1484 (1055) Buenos Aires -
            República Argentina ERREPAR SA
          </Text>
        </View>
        <View style={{paddingVertical: 16}} />
      </ScrollView>
    </View>
  );
};

export default TyC;

const styles = StyleSheet.create({
  screenContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff90',
  },

  containerSections: {
    width: '100%',
    marginBottom: 16,
  },
  title: {
    color: '#00a88f',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  containerTitle: {
    width: '100%',
    paddingBottom: 20,
    paddingTop: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#00000070',
  },
});
