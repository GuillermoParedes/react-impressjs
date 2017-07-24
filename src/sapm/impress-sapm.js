import React from 'react';
import LogoLaravel from './../../public/images/laravelLogo.png'
import LogoMysql from './../../public/images/mysqlLogo.png'
import WebLogo from './../../public/images/html5jscss.png'
import ScrumLogo from './../../public/images/scrumLogo.png'
import ScrumMesaLogo from './../../public/images/Scrum2.png'

import Sprint1 from './../../public/images/sprints/sprint_1.png'
import Sprint2 from './../../public/images/sprints/sprint_2.png'
import Sprint3 from './../../public/images/sprints/sprint_3.png'
import Sprint4 from './../../public/images/sprints/sprint_4.png'
import Sprint5 from './../../public/images/sprints/sprint_5.png'

export default [
    {
        id: "introduccion",
        className: "slide",
        data: {
            n: 1,
            x: -1000,
            y: -1500
        },
        content: [
            <q> <strong>SISTEMA ACADÉMICO <br/> ADMINISTRATIVO </strong> <br /><b>Caso: <br/></b> Postgrado
                Autofinanciado de Matemática</q>
        ]
    },
    {
        id:"participantes",
        className: "slide",
        data: {
            n: 2,
            y: -1500
        },
        content: [
            <q>
                <strong>Postulante:</strong> <br/>Guillermo D. Paredes Torrez <br/>
                <strong>Tutor Metodologico:</strong><br/> M.Sc. Rosa Flores Morales <br/>
                <strong>Asesor:</strong><br/> Lic. Celia E. Tarquino Peralta <br/>
            </q>
        ]
    },
    {
        id:"antecedentes",
        className: "slide",
        data: {
            n: 3,
            x: 1000,
            y: -1500
        },
        content: [
            <h5><strong>ANTECEDENTES <br/> CARRERA DE MATEMÁTICA </strong></h5>,
            <p>La Carrera de Matemática se crea el 28 de marzo de 1967 como unidad académica en el Instituto
                Superior de Ciencias Básicas para responder a la creciente necesidad de apoyo en matemáticas
                a otras carreras llegando a formalizar la Licenciatura en Matemáticas como una profesión más al
                servicio del país dentro del Área de las Ciencias Básicas.</p>
        ]
    },
    {
        id:"resumen",
        className: "slide",
        data: {
            n: 4,
            x: 1000,
            y: -2500
        },
        content: [
            <h5><strong>RESUMEN</strong></h5>,
            <p>El Sistema Académico Administrativo es un proyecto en el que se realiza una solución sobre la
                interacción entre la administración y el postgraduante. El proyecto contribuye a que la
                administración de la Unidad de Postgrado en Matemática de la Universidad Mayor de San Andrés,
                mejore sus tiempos en el proceso de inscripción, obtención casi inmediata de datos un
                postgraduante ya registrado.</p>
        ]
    },
    {
        id: "problema",
        className: "style-visualizador",
        data: {
            n: 5,
            x: 3500,
            y: 2100,
            rotateZ: 180,
            scale: 6
        },
        content: [
            <p ><b>LOS</b> <span className="thoughts ">PROBLEMA</span></p>
        ]
    },
    {
        id: "problema_principal",
        className: "slide",
        data: {
            n: 6,
            x: 850,
            y: 3000,
            rotateZ: 90,
            scale: 5
        },
        content: [
            <section><h5><strong className="scaling-up">PROBLEMA PRINCIPAL</strong></h5> <br /> <br />
                El proceso de administración y seguimiento académico de los cursos de Postgrado en
                Matemática, es muy deficiente dado que la información está dispersa en papeles y/o folders, lo
                que dificulta la retroalimentación de información y entrega inmediata de información específica
                sobre un postgraduante.</section>
        ]
    },
    {
        id: "problema_secundario",
        className: "slide",
        data: {
            n: 7,
            x: 2825,
            y: 2325,
            z: -3000,
            rotateZ: 300,
            scale: 1
        },
        content: [
            <section><h5><strong className="scaling-up">PROBLEMA SECUNDARIOS</strong></h5> <br /> <br />
            <li>Pérdida de horas-hombre, para el registro de postgraduantes.</li>
            <li>Repetición de tareas.</li>
            <li>Poco control y almacenamiento de documentos.</li>
            </section>
        ]
    },
    {
        id: "objetivo",
        className: "style-visualizador",
        data: {
            n: 8,
            x: 10500,
            y: 2100,
            rotateZ: 270,
            scale: 1
        },
        content: [
            <h2 ><b>LOS</b> <span className="scaling scaling-up">OBJETIVOS</span></h2>
        ]
    },
    {
        id: "objetivo_principal",
        className:"slide",
        data: {
            n: 9,
            x: 6700,
            y: -300,
            scale: 6
        },
        content: [
            <section><h5><strong className="scaling-up">OBJETIVO PRINCIPAL</strong></h5> <br /> <br />
                Diseñar, Implementar y Desarrollar el Sistema Académico para la Unidad de Postgrado en
                Matemática, en donde el rol administrador podrá realizar un mejor seguimiento de los
                postgraduantes, a nivel de notas, pagos, información del interesado, de manera que se reducirá
                en gran medida la cantidad de tiempo invertida en realizar tareas de manera manual.</section>
        ]
    },
    {
        id: "objetivo_secundario",
        className:"slide",
        data: {
            n: 10,
            x: 6300,
            y: 2000,
            rotateZ: 20,
            scale: 4
        },
        content: [
            <section><h5><strong className="scaling-up">OBJETIVO SECUNDARIO</strong></h5> <br /> <br />
                <li>Diseñar el sistema, con cada uno de los requerimientos.</li>
                <li>Implementación del sistema.</li>
                <li>Prueba del sistema</li>
                <li>Subir el sistema a un servidor para su uso.</li>
            </section>
        ]
    },
    {
        id: "justificacion-alcances-limites-aportes",
        className: "style-visualizador",
        data: {
            n: 11,
            x: 6000,
            y: 4000,
            scale: 2
        },
        content: [
            <p ><b>AHORA</b> <span className="thoughts ">JUSTIFICACIONES, ALCANCES, LIMITES Y APORTES</span></p>
        ]
    },
    {
        id: "justificacion",
        className: "slide",
        data: {
            n: 12,
            x: 6200,
            y: 4300,
            z: -800,
            rotateX: -40,
            rotateY: 10,
            scale: 2
        },
        content: [
            <section><h5><strong className="scaling-up">JUSTIFICACIONES</strong></h5> <br /> <br />
                <li>ECONÓMICA.</li>
                <li>SOCIAL.</li>
                <li>TÉCNICA</li>
            </section>
        ]
    },
    {
        id: "alcances",
        className: "slide",
        data: {
            n: 13,
            x: 3000,
            y: 6000,
            z: 4000,
            rotateX: -70,
            rotateY: 30,
            scale: 10
        },
        content: [
            <section><h5><strong className="scaling-up">ALCANCES ADMINISTRADOR <br/>Parte 1</strong></h5> <br />
                <li>Login Administrativo, el cual solo tendrá acceso una o dos personas al control total
                    del Sistema Académico Administrativo de la Unidad de Postgrado de Matemática.</li>
                <li>Módulo de registro, actualización de las especialidades, programas,
                    postgraduantes, materias, horas, docentes, inscripciones.</li>
            </section>
        ]
    },
    {
        id: "alcances_part2",
        className: "slide",
        data: {
            n: 14,
            x: 3000,
            y: 5000,
            rotateX: -70,
            rotateY: 0,
        },
        content: [
            <section><h5><strong className="scaling-up">ALCANCES ADMINISTRADOR <br/> Parte 2</strong></h5> <br />
                <li>Módulo de repositorio de documentos digitales, que serán categorizados por
                categoría, que será señalada más adelante.</li>
                <li>Módulo de control de pagos de cada postgraduante, que será el registro de cuanto
                y cuando, fue efectuado el pago de la colegiatura.</li>
            </section>
        ]
    },
    {
        id: "alcances_part3",
        className: "slide",
        data: {
            n: 15,
            x: 3000,
            y: 6000,
        },
        content: [
            <section><h5><strong className="scaling-up">ALCANCES ADMINISTRADOR <br/> Parte 3</strong></h5> <br />
                <li>El repositorio de documentos, solo albergara archivos que se han cargados
                manualmente al sistema, no habrá ninguna conexión con Sistemas de
                Almacenamiento externos en la nube.</li>
                <li>El control de pagos, solo se efectuará cuando el postgraduante haga entrega de la
                boleta de pago, al personal administrativo</li>
            </section>
        ]
    },
    {
        id: "alcances_part4",
        className: "slide",
        data: {
            n: 16,
            x: 3000,
            y: 7000,
        },
        content: [
            <section><h5><strong className="scaling-up">ALCANCES POSTGRADUANTE </strong></h5> <br />
                <li>Login, ingreso al sistema desplegando los menús que tiene habilitados.</li>
                <li> Panel de datos personales, donde podrá realizar actualización de los datos básicos
                    del postgraduante.</li>
                <li>Visualización de Notas, donde podrá ver las notas que tiene de las materias que
                    ya concluyo.</li>
                <li>Materias cursadas, visualizara todas las materias donde está inscrito.</li>
            </section>
        ]
    },
    {
        id: "limites",
        className: "slide",
        data: {
            n: 17,
            x: 10000,
            y: 4000,
            scale: 2
        },
        content: [
            <p ><b>LIMITES</b> <br /> <br />
                <li>Rol Administrativo, quien realizara todo lo relacionado a la administración del sistema.</li>
                <li>Rol Postgraduante, quien podrá revisar en un panel datos relevantes y que le interesen,sobre las especialidades que tomo.</li>
            </p>
        ]
    },
    {
        id: "aportes",
        className: "slide",
        data: {
            n: 17,
            x: 10500,
            y: 4500,
            rotateX: -90,
            rotateY: 30,
            scale: 2
        },
        content: [
            <p ><b>APORTES</b>
                <p>El Sistema Académico, será de gran ayuda para la Unidad de Postgrado en Matemática, ya que
                    les facilitara en gran medida las tareas cotidianas que realizan, en los momentos de inscripción,
                    control de pagos, notificaciones a los postgraduante, almacenamiento de documentos digitales.</p>
            </p>
        ]
    },
    {
        id: "tecnologias",
        className: "slide",
        data: {
            n: 18,
            x: 11000,
            y: 3000,
            rotateX: -270,
            rotateY: 60,
            scale: 2
        },
        content: [
            <p ><b>LAS TECNOLOGIAS USADAS SON:</b>
                <br /> <br />
                <img src={LogoLaravel} alt="" style={{width: '250px'}} />
                <br /> <br />
                <img src={LogoMysql} alt="" style={{width: '250px', marginLeft: '20px'}} />
                <img src={WebLogo} alt="" style={{width: '250px', marginLeft: '20px', marginRight: '20px'}} />
            </p>
        ]
    },
    {
        id: "metodologia",
        className: "slide",
        data: {
            n: 8,
            x: 11000,
            y: 2100,
            rotateZ: 270,
            scale: 1
        },
        content: [
            <img src={ScrumLogo} style={{ background: '#e1e1e1', borderRadius: '60px 10px 20px 50px', width: '100%', marginTop: '43px'}} alt=""/>
        ]
    },
    {
        id:"scrum",
        className:"slide",
        data: {
            n: 8,
            x: 12000,
            y: 3100,
            rotateZ: 270,
            scale: 1
        },
        content: [
            <img src={ScrumMesaLogo} alt="" style={{width: '700px', marginTop: '46px',marginLeft: '15px', backgroundColor: '#E1E1E1', padding: '20px'}}  />
        ]
    },
    {
        id:"requerimientos",
        className:"slide",
        data: {
            n: 8,
            x: 12000,
            y: 2100,
            rotateZ: 270,
            scale: 1
        },
        content: [
            <section>
                <h5><b>LOS REQUERIMIENTOS</b></h5>
                <li>Desarrollar una base de datos.</li>
                <li>Desarrollo de una pagina web para la institución.</li>
                <li>Desarrollo una interfaz, módulos y las funciones necesarias para el usuario administrador.</li>
                <li>Desarrollo una interfaz, módulos y las funciones necesarias para el usuario postgraduante.</li>
                <li>Realizar la subida al servidor y que sea disponible en <br /> <a href="http://pgmat.fcpn.edu.bo"> LA PÁGINA DE POSTGRADO</a> </li>
            </section>
        ]
    },
    {
        id:"sprints",
        className:"style-visualizador", //"slide",
        data: {
            n: 8,
            x: 12000,
            y: 1100,
            rotateZ: 270,
            scale: 1
        },
        content: [
            <section>
                <h5><b>APLICANDO METODOLOGÍA</b></h5>
                <p>En total fueron 5 Sprints, elaborados durante 12 meses.</p>
            </section>
        ]
    },
    {
        id:"sprint_1",
        className:"slide", //"style-visualizador",
        data: {
            n: 8,
            x: 22000,
            y: 0,
            rotateZ: 270,
            scale: 1
        },
        content: [
            <section>
                <h5><b>SPRINT 1</b></h5>
                <img style={{width:'700px'}} src={Sprint1} alt=""/>
            </section>
        ]
    },
    {
        id:"sprint_2",
        className:"slide", //"style-visualizador",
        data: {
            n: 8,
            x: 22000,
            y: 500,
            z: 500,
            rotateX: 670,
            scale: 1
        },
        content: [
            <section>
                <h5><b>SPRINT 2</b></h5>
                <img style={{width:'700px'}} src={Sprint2} alt=""/>
            </section>
        ]
    },
    {
        id:"sprint_3",
        className:"slide", //"style-visualizador",
        data: {
            n: 8,
            x: 22000,
            y: 0,
            z: 1000,
            rotateX: 670,
            scale: 1
        },
        content: [
            <section>
                <h5><b>SPRINT 3</b></h5>
                <img style={{width:'700px'}} src={Sprint3} alt=""/>
            </section>
        ]
    },
    {
        id:"sprint_4",
        className:"slide", //"style-visualizador",
        data: {
            n: 8,
            x: 22000,
            y: -500,
            z: 1500,
            rotateX: 670,
            scale: 1
        },
        content: [
            <section>
                <h5><b>SPRINT 4</b></h5>
                <img style={{width:'700px'}} src={Sprint4} alt=""/>
            </section>
        ]
    },
    {
        id:"sprint_5",
        className:"slide", //"style-visualizador",
        data: {
            n: 8,
            x: 22000,
            y: -1000,
            z: 2000,
            rotateX: 670,
            scale: 1
        },
        content: [
            <section>
                <h5><b>SPRINT 5</b></h5>
                <img style={{width:'700px', height: '360px'}} src={Sprint5} alt=""/>
            </section>
        ]
    },
    {
        id:"control_calidad_pruebas_seguridad",
        className:"style-visualizador", //"slide",
        data: {
            n: 8,
            x: 28000,
            y: 0,
            z: 500,
            rotateX: 670,
            scale: 1
        },
        content: [
            <section>
                <h5><b>CONTROL DE CALIDAD Y SEGURIDAD</b></h5>
            </section>
        ]
    },
    {
        id:"control_calidad",
        className:"slide", //"style-visualizador",
        data: {
            n: 8,
            x: 30000,
            y: 0,
            z: 500,
            rotateX: 670,
            scale: 1
        },
        content: [
            <section>
                <h5><b>CONTROL DE CALIDAD</b></h5>
                <li>FUNCIONALIDAD</li>
                <li>CONFIABILIDAD</li>
                <li>USABILIDAD</li>
                <li>COMPATIBILIDAD</li>
                <li>MANTENIBILIDAD</li>
                <li>PORTABILIDAD</li>
            </section>
        ]
    },
    {
        id:"control_calidad_funcionalidad",
        className:"slide", //"style-visualizador",
        data: {
            n: 8,
            x: 30000,
            y: 1000,
            z: 500,
            rotateX: 670,
            scale: 1
        },
        content: [
            <section>
                <h5><b>FUNCIONALIDAD</b></h5>
                <p>La formula: EED = E / (E + D) ec. 1</p>
                <p>Donde:
                    E = Número de errores antes de la entrega del sistema.
                    D = Número errores después de la entrega.
                    El valor ideal de EDD es 1, esto quiere decir que no se encontraron errores o defectos en el
                    sistema.</p>
            </section>
        ]
    },
    {
        id:"control_calidad_confiabilidad",
        className:"slide", //"style-visualizador",
        data: {
            n: 8,
            x: 30000,
            y: 2000,
            z: 500,
            rotateX: 670,
            scale: 1
        },
        content: [
            <section>
                <h5><b>CONFIABILIDAD</b></h5>

                <table>
                    <tr>
                        <th>TIEMPO DE SERVICIO</th>
                        <th>N. DE PETICIONES</th>
                        <th>FALLOS ENCONTRADOS</th>
                        <th>PROBABILIDAD DE FALLOS</th>
                        <th>TIEMPO ENTRE FALLOS</th>
                    </tr>
                    <tr>
                        <td>5 HORAS</td>
                        <td>15</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>10 HORAS</td>
                        <td>25</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>20 HORAS</td>
                        <td>50</td>
                        <td>1</td>
                        <td>0.02</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>40 HORAS</td>
                        <td>100</td>
                        <td>2</td>
                        <td>0.02</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>TOTAL</td>
                        <td> </td>
                        <td> </td>
                        <td>0.04</td>
                        <td>40</td>
                    </tr>
                </table>

            </section>
        ]
    },
    {
        id:"control_calidad_usabilidad",
        className:"slide", //"style-visualizador",
        data: {
            n: 8,
            x: 30000,
            y: 3000,
            z: 500,
            rotateX: 670,
            scale: 1
        },
        content: [
            <section>
                <h5><b>USABILIDAD</b></h5>
                <h5><b>COMPATIBILIDAD</b></h5>
                <h5><b>USABILIDAD</b></h5>
                <h5><b>MANTENIBILIDAD</b></h5>
                <h5><b>PORTABILILDAD</b></h5>

            </section>
        ]
    },
    {
        id:"conclusiones_recomendaciones",
        className:"slide", //"style-visualizador",
        data: {
            n: 8,
            x: 30000,
            y: 4000,
            z: 500,
            rotateX: 670,
            scale: 1
        },
        content: [
            <section>
                <h5><b>CONCLUSIONES</b></h5>
                <h5><b>RECOMENDACIONES</b></h5>
            </section>
        ]
    },
    {
        id:"preguntas",
        className:"slide", //"style-visualizador",
        data: {
            n: 8,
            x: 30000,
            y: 5000,
            z: 1500,
            rotateX: 670,
            scale: 1
        },
        content: [
            <section>
                <h5><b>DUDAS</b></h5>
            </section>
        ]
    },
    {
        id:"gracias",
        className:"slide", //"style-visualizador",
        data: {
            n: 8,
            x: 30000,
            y: 5000,
            z: 1500,
            rotateX: 670,
            scale: 1
        },
        content: [
            <section>
                <h5><b>GRACIAS</b></h5>
            </section>
        ]
    },
];