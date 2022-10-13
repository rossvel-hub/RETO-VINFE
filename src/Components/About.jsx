import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="img-contacto">
        <img src="his1.png" className="d-block w-100 img-contacto" alt="..." />
      </div>
      <div>
        <p>
          Super Mario Bros. o Super Mario Brothers (スーパーマリオブラザーズ
          Sūpā Mario Burazāzu?, lit. Superhermanos Mario) es un videojuego de
          plataformas, diseñado por Shigeru Miyamoto, lanzado el 13 de
          septiembre de 1985 y producido por la empresa japonesa Nintendo, para
          la consola Nintendo Entertainment System (NES). El juego describe las
          aventuras de los hermanos Mario y Luigi, personajes que ya
          protagonizaron el arcade Mario Bros. de 1983. En esta ocasión ambos
          deben rescatar a la Princesa Peach del Reino Champiñón que fue
          secuestrada por el rey de los Koopas, Bowser. A través de ocho
          diferentes mundos, los jugadores pueden controlar a alguno de los dos
          hermanos y deben enfrentarse finalmente tras los niveles
          correspondientes de cada mundo a los monstruos de cada castillo para
          rescatar a la Princesa Peach. Super Mario Bros. fue el juego que
          popularizó al personaje de Mario,4​ convirtiéndolo en el ícono
          principal de Nintendo, y uno de los personajes más reconocidos de los
          videojuegos, así como su hermano menor Luigi. Además, presentó por
          primera vez a la Princesa Peach Toadstool, Toad, Bowser, entre otros
          personajes. Este juego es considerado el primer videojuego de
          plataformas de desplazamiento lateral de Nintendo y se ha convertido
          en un hito debido a la trascendencia de su diseño y papel en la
          industria de los videojuegos. Su lanzamiento fue el primer gran récord
          de ventas posterior a la crisis de la industria de los videojuegos de
          1983 (alcanzando más de 10 millones de cartuchos vendidos), por lo que
          popularizó, en cierta manera, a la consola NES. En 1999 fue reconocido
          como uno de los videojuegos más vendidos de todos los tiempos.5​
          Shigeru Miyamoto, su creador, relata la existencia de Super Mario
          Bros. debido a que cuando viajaba en un tren le gustaba mirar por la
          ventana, y se imaginaba que estaba allí saltando afuera.6​ Debido a la
          popularidad de Mario, se encuentra también en otros videojuegos como
          el original Donkey Kong y Super Smash Bros. Tras su éxito comercial,
          tuvo una secuela directa, conocida en fuera de Japón como Super Mario
          Bros.: The Lost Levels, ya que en occidente se comercializó como la
          secuela directa una variación de otro juego en el que había
          participado Miyamoto, Yume Koujou Doki Doki Panic!, debido a que se
          consideró la versión lanzada en Japón como demasiado difícil. Tuvo
          también una variedad de versiones «alternas», como All Night Nippon
          Super Mario Bros., así como adaptaciones a arcade, películas y series
          de televisión. El 13 de septiembre de 2010 se conmemoró el 25º
          aniversario del juego desde su salida para la Famicom en Japón, así
          como el 25° aniversario de la franquicia. En noviembre de 2010 la
          ciudad española de Zaragoza dedicó una avenida al famoso fontanero
        </p>
      </div>
      <div className="container cards-personajes">
      <div className="card mb-4" style={{ width: "18rem", margin:"10px" }}>
        <img src="maar.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">MARIO</h5>
          <p className="card-text">
          </p>
          <a href="#" className="btn btn-dark" style={{backgroundColor:"#171a4a"}}>
            Go somewhere
          </a>
        </div>
        <div class="card-footer" style={{backgroundColor:"#6dc83d", color: "white"}}>
          Footer
        </div>
      </div>
      <div className="card mb-4" style={{ width: "18rem", margin:"10px" }}>
        <img src="luu.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">LUIGI</h5>
          <p className="card-text">
          </p>
          <a href="#" className="btn btn-dark" style={{backgroundColor:"#171a4a"}}>
            Go somewhere
          </a>
        </div>
        <div class="card-footer" style={{backgroundColor:"#6dc83d", color: "white"}}>
          Footer
        </div>
      </div>

      <div className="card mb-4" style={{ width: "18rem", margin:"10px" }}>
        <img src="prinn.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">PRINCESA PEACH</h5>
          <p className="card-text">
          </p>
          <a href="#" className="btn btn-dark" style={{backgroundColor:"#171a4a"}}>
            Go somewhere
          </a>
        </div>
        <div class="card-footer" style={{backgroundColor:"#6dc83d", color: "white"}}>
          Footer
        </div>
      </div>

      <div className="card mb-4" style={{ width: "18rem", margin:"10px" }}>
        <img src="boow.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">BOWSER</h5>
          <p className="card-text">
          </p>
          <a href="#" className="btn btn-dark" style={{backgroundColor:"#171a4a"}}>
            Go somewhere
          </a>
        </div>
        <div class="card-footer" style={{backgroundColor:"#6dc83d", color: "white"}}>
          Footer
        </div>
      </div>


      </div>
    </div>
  );
};

export default About;
