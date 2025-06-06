'use strict'
import Chart, { plugins } from 'chart.js/auto';
// les films 
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const filmId = params.get('id');

    const films = {
        breakfast: {
            title: 'The Breakfast Club',
            author: 'John Hughes',
            duration: '1h 37m',
            release: '1985',
            actors: 'Emilio Estevez, Molly Ringwald, Judd Nelson',
            synopsis: "Cinq lycéens que tout oppose se retrouvent en retenue un samedi. Au fil de la journée, les barrières tombent, les secrets se dévoilent et naît une complicité inattendue entre eux, remettant en question leurs identités sociales stéréotypées.",
            img: '/img/films_classic/breakfast_carre.jpg',
            srcset:'/img/films_classic/breakfastcarre@2x.jpg',
            rates: [2, 1, 1, 1, 0, 2, 0, 1, 0, 2],
            versions: ["Dans un lycée poussiéreux où les rôles sociaux sont aussi rigides que des lois de shérif, cinq adolescents que tout oppose se retrouvent un samedi matin pour une retenue. Sous l’œil d’une caméra discrète, entre affrontements secs et confidences inattendues, les masques tombent.",

            "Le surdoué, le rebelle, le sportif, la fille de bonne famille et la marginale dévoilent leurs blessures et leurs rêves oubliés, comme des cow-boys fatigués posant leurs armes autour d’un feu. Entre nostalgie, humour et vérité, cette journée changera leur regard sur eux-mêmes – et peut-être sur le monde."],
            genres : ["docu", "western"]
        },
        grease: {
            title: 'Grease',
            author: 'Randal Kleiser',
            duration: '1h 50m',
            release: '1978',
            actors: 'John Travolta, Olivia Newton-John',
            synopsis: "Durant l'été, Danny et Sandy vivent un amour de vacances. À la rentrée, ils se retrouvent par hasard au lycée, mais leurs mondes très différents compliquent leur romance, entre blousons noirs, cheerleaders et rock'n'roll.",
            img: '/img/films_classic/grease_carre.jpg',
            srcset:'/img/films_classic/greasecarre@2x.jpg',
            rates: [1, 1, 2, 2, 1, 2, 2, 0, 0, 1],
            versions: ["Années 1950, une caméra discrète suit les pas de Sandy, jeune fille naïve confrontée à l’univers fermé d’un lycée où règnent les T-Birds, un gang au cuir sombre et aux secrets bien gardés. Ce qui semblait être une histoire d’amour innocente devient vite une enquête tendue, où loyautés, mensonges et vérités cachées se mêlent sous le vernis du rock’n’roll.", 

            "Guidée par les Pink Ladies, Sandy découvre que derrière les sourires et les rires, la lutte pour appartenir peut tourner au piège. Un voyage documenté dans les coulisses troubles d’une jeunesse en apparence insouciante."],
            genres : ["docu", "thriller"]
        },
        dirty: {
            title: 'Dirty Dancing',
            author: 'Emile Ardolino',
            duration: '1h 40m',
            release: '1987',
            actors: 'Patrick Swayze, Jennifer Grey',
            synopsis: "En vacances dans une pension familiale, Baby, jeune fille de bonne famille, découvre la danse avec Johnny, un professeur charismatique. Leur relation, entre sensualité et tensions sociales, bouleversera leur été.",
            img: '/img/films_classic/dirty_carre.jpg',
            srcset:'/img/films_classic/dirtycarre@2x.jpg',
            rates: [1, 2, 2, 2, 1, 2, 1, 1, 0, 0],
            versions: [
            "Au cœur des années 60, une caméra suit Bébé, jeune fille enfermée dans la routine d’un village de vacances. Mais derrière les sourires figés, un groupe d’animateurs cache un secret : des répétitions clandestines de danse sensuelle, interdites aux regards officiels.", 

            "À mesure que Bébé s’immerge dans ce monde interdit, la tension monte, entre désir et menace. Sous l’œil impitoyable d’une surveillance invisible, la découverte de la danse devient un jeu dangereux, une lutte pour l’émancipation au prix d’un secret lourd à porter. Nostalgie d’une jeunesse volée, peur d’être démasquée, colère sourde contre les règles étouffantes… Une immersion haletante dans l’éveil d’une adolescente qui risque tout."],
            genres : ["docu", "thriller"]
        },
        pulp: {
            title: 'Pulp Fiction',
            author: 'Quentin Tarantino',
            duration: '2h 34m',
            release: '1994',
            actors: 'John Travolta, Uma Thurman, Samuel L. Jackson',
            synopsis: "Des histoires entremêlées de criminels à Los Angeles dans un style unique et non linéaire.",
            img: '/img/films_classic/pulp_carre.jpg',
            srcset:'/img/films_classic/pulpcarre@2x.jpg',
            rates: [2, 1, 1, 1, 2, 2, 1, 1, 2, 2],
            versions: [
            "Dans les coulisses colorées d’Hollywood, trois histoires se mêlent en un ballet inattendu. Un couple de jeunes voleurs rêve d’une vie meilleure, chantant leurs espoirs et leurs doutes dans un diner aux néons. Deux complices, venus d’ailleurs, entament une danse dangereuse pour récupérer une mystérieuse mallette, tandis que la passion et les secrets virevoltent comme dans un spectacle musical.",

            "Entre riffs de guitare et pas de danse, la violence cède parfois la place à l’émotion, dans une romance où le destin joue son propre tempo."],
            genres : ["romance", "musical"]
        },
        titanic: {
            title: 'Titanic',
            author: 'James Cameron',
            duration: '3h 14m',
            release: '1997',
            actors: 'Leonardo DiCaprio, Kate Winslet',
            synopsis: "En 1912, Rose, jeune aristocrate, embarque à bord du Titanic et y rencontre Jack, un artiste pauvre. Leur amour passionné naît dans l’opulence du paquebot, mais le destin tragique du navire changera leur vie à jamais.",
            img: '/img/films_classic/titanic_carre.jpg',
            srcset:'/img/films_classic/titaniccarre@2x.jpg',
            rates: [2, 1, 2, 1, 2, 1, 1, 0, 1, 2],
            versions: [
            "En 1912, le Titanic s’apprête à conquérir les mers, un paquebot futuriste défiant toute logique… jusqu’à ce qu’un iceberg… inattendu, mais aussi un peu bizarre, menace sa route. À bord, Jack, un artiste farfelu, et Rose, une bourgeoise aux idées bien arrêtées, se lancent dans une aventure rocambolesque mêlant amour naissant, quiproquos et technologies improbables.", 
            
            "Entre éclats de rire et situations loufoques, cette odyssée spatiale… enfin, presque, transforme la tragédie en une course folle à travers le temps et l’espace, où les cœurs battent au rythme d’une comédie futuriste pleine de surprises."],
            genres : ["comédie", "science fiction"]
        
            
        },
        lalaland: {
            title: 'La La Land',
            author: 'Damien Chazelle',
            duration: '2h 8m',
            release: '2016',
            actors: 'Emma Stone, Ryan Gosling',
            synopsis: "À Los Angeles, Mia, actrice en devenir, rencontre Sebastian, un musicien passionné de jazz. Entre rêves d’art et amour, leur relation vibre au rythme des choix difficiles et du prix à payer pour réussir.",
            img: '/img/films_classic/lalaland_carre.jpg',
            srcset:'/img/films_classic/lalalandcarre@2x.jpg',
            rates: [1, 0, 2, 1, 2, 2, 2, 0, 1, 1],
            versions: [
            "Dans un Los Angeles figé dans le temps, Mia, une jeune actrice pleine de rêves, enchaîne les auditions ratées tout en travaillant dans un vieux café qui semble n'avoir jamais vu la lumière du jour. Un soir, elle croise Sebastian, un pianiste aussi passionné que tourmenté, qui joue dans un club de jazz abandonné, ouvert uniquement à ceux qui n’ont plus rien à perdre. Leur histoire d’amour, portée par la musique et le souvenir d’un monde plus doux, s’épanouit au fil de nuits vibrantes… mais hantées.",

            "Plus ils se rapprochent, plus la ville semble se décomposer autour d’eux : les rues se vident, les visages s’effacent, et des mélodies oubliées résonnent dans les murs. Chaque pas vers leur rêve les plonge un peu plus dans un cauchemar qu’ils refusent de voir. Entre rires nerveux, tendresse désespérée, visions terrifiantes et danse au bord de la folie, Mia et Sebastian doivent choisir : fuir le passé… ou danser avec lui jusqu’à la fin."],
            genres : ["romance", "horreur"]
     },
        forrest: {
            title: 'Forrest Gump',
            author: 'Robert Zemeckis',
            duration: '2h 22m',
            release: '1994',
            actors: 'Tom Hanks, Robin Wright',
            synopsis: "Forrest, homme simple et sincère, traverse les grandes décennies de l’histoire américaine avec candeur, tout en poursuivant son amour de toujours, Jenny. Une vie extraordinaire, racontée avec tendresse et émotion.",
            img: '/img/films_classic/forrest_carre.jpg',
            srcset:'/img/films_classic/forrestcarre@2x.jpg',
            rates: [1, 2, 2, 1, 1, 2, 2, 0, 0, 2],
            versions: [
            "Dans la poussière étouffante d’une petite ville du Far West, Forrest, un homme simple au passé marqué par la douleur, attend le bus sur un banc abandonné. Entre les murmures du vent et les ombres menaçantes, il raconte son incroyable parcours – une lutte contre ses faiblesses physiques, les fantômes du passé, et une amitié fragile avec Jenny, seule lumière dans ce paysage hanté.", 
            
            "À travers ce récit où la réalité bascule parfois dans l’horreur, la frontière entre courage et survie s’efface, dans une chevauchée sombre où l’innocence côtoie l’effroi."],
            genres : ["western", "horreur"]
        },
        pretty: {
            title: 'Pretty Woman',
            author: 'Garry Marshall',
            duration: '1h 59m',
            release: '1990',
            actors: 'Julia Roberts, Richard Gere',
            synopsis: "Edward, homme d’affaires froid et puissant, engage Vivian, une prostituée au franc-parler, pour l’accompagner à des événements mondains. Une histoire d’amour improbable naît entre deux mondes que tout oppose.",
            img: '/img/films_classic/pretty_carre.jpg',
            srcset:'/img/films_classic/prettycarre@2x.jpg',
            rates: [1, 2, 2, 1, 1, 2, 1, 1, 0, 1],
            versions: [
            "Dans une ville futuriste écrasée par les néons et la poussière du désert, Edward, un homme d’affaires aux traits marqués par la solitude, erre loin des mondanités. Sur un boulevard oublié, il croise Vivian, une femme au passé dur, qui survit comme une pionnière dans ce Far West technologique.", 
            "Entre ruines de rêves anciens et espoirs fragiles, leur rencontre improbable déclenche une traversée où s’entremêlent souvenirs, dangers et une lueur inattendue de rédemption, au cœur d’un monde où la frontière entre homme et machine s’efface."],
            genres : ["science fiction", "western"]
        },

        blade: {
            title: 'Blade Runner',
            author: 'Ridley Scott',
            duration: '1h 57m',
            release: '1982',
            actors: 'Harrison Ford, Rutger Hauer',
            synopsis: "Dans un futur dystopique, Rick Deckard est chargé de traquer des réplicants, des androïdes illégaux aux émotions humaines. Son enquête prend une tournure étrange lorsqu’il commence à douter de sa propre nature",
            img: '/img/films_classic/blade_carre.jpg',
            srcset:'/img/films_classic/bladecarre@2x.jpg',
            rates: [2, 1, 1, 1, 2, 2, 1, 1, 2, 2],
            versions: [
            "Dans un futur pas si lointain, Los Angeles est le théâtre d’une drôle de comédie où androïdes et humains se cherchent… et s’aiment. Quatre répliquants fugueurs, loin d’être des machines froides, naviguent maladroitement dans un monde où leur humanité vacille. Chargé de les retrouver, un blade-runner au cœur tendre se retrouve malgré lui plongé dans une romance pleine de quiproquos, de situations cocasses et de tendres moments.", 
            "Entre rires, nostalgie et émotions pixelisées, cette histoire dévoile que même dans un monde artificiel, l’amour reste la plus belle des réalités."],
            genres : ["romance", "comédie"]
        },
        matrix: {
            title: 'Matrix',
            author: 'Lana Wachowski, Lilly Wachowski',
            duration: '2h 16m',
            release: '1999',
            actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
            synopsis: "Un hacker découvre que le monde réel est une simulation contrôlée par des machines.",
            img: '/img/films_classic/matrix_carre.jpg',
            srcset:'/img/films_classic/matrixcarre@2x.jpg',
            rates: [2, 1, 1, 1, 2, 2, 1, 1, 2, 2],
            versions: [
            "Dans un territoire désolé où la frontière entre réalité et illusion s’efface comme la poussière au vent, un homme nommé Neo découvre qu’il est traqué par des forces invisibles. Entre les étendues sauvages et les duels sous un ciel de plomb, il se bat pour libérer son esprit et comprendre la vérité enfouie sous les mirages.", 
            "Une quête solitaire, empreinte de douleur, de colère rentrée et de nostalgie des temps où la liberté avait un goût plus simple, dans un Far West où chaque pas est une lutte contre le destin."],
            genres : ["romance", "comédie"]
        },
        inception: {
            title: 'Inception',
            author: 'Christopher Nolan',
            duration: '2h 28m',
            release: '2010',
            actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt',
            synopsis: "Dom Cobb, voleur d’idées infiltrant les rêves, accepte une mission périlleuse : non pas voler une idée, mais en implanter une. Naviguant entre les niveaux de rêves, il risque de perdre la notion du réel.",
            img: '/img/films_classic/inception_carre.jpg',
            srcset:'/img/films_classic/inceptioncarre@2x.jpg',
            rates: [2, 1, 1, 1, 2, 2, 1, 1, 2, 1],
            versions: [
            "Dans un monde où les souvenirs dansent au rythme des mélodies, Dom Cobb, maître des rêves, mène une mission singulière : infiltrer les pensées pour semer un sentiment d’amour profond. Au fil de leurs pas de danse et des refrains envoûtants, chaque personnage découvre que le vrai pouvoir réside dans le cœur et la mémoire.", 
            "Entre romances troublantes et numéros musicaux oniriques, cette aventure mélodieuse explore les limites du réel et de l’émotion, là où les rêves deviennent chansons."],
            genres : ["romance", "comédie"]
        },
        interstellar: {
            title: 'Interstellar',
            author: 'Christopher Nolan',
            duration: '2h 49m',
            release: '2014',
            actors: 'Matthew McConaughey, Anne Hathaway',
            synopsis: "Dans un futur où la Terre est condamnée, un ancien pilote de la NASA part dans l’espace à la recherche d’une planète habitable, laissant sa fille derrière lui. Une odyssée spatiale mêlée d’amour filial et de relativité temporelle.",
            img: '/img/films_classic/interstellar_carre.jpg',
            srcset:'/img/films_classic/interstellarcarre@2x.jpg',
            rates: [2, 1, 1, 1, 2, 2, 1, 1, 1, 2],
             versions: [
            "Dans un futur où la Terre s’efface comme un désert oublié, un groupe de cow-boys de l’espace part en quête d’un nouveau territoire à chevaucher. Entre poussière cosmique et rires inattendus, ces aventuriers affrontent tempêtes, doutes et vieilles rancunes, tout en gardant l’espoir d’un horizon meilleur.", 
            "Une chevauchée pleine d’humour et de nostalgie, où la survie se mêle à la fraternité sous un ciel infini."],
            genres : ["western", "comédie"]
        },

        shining: {
            title: 'Shining',
            author: 'Stanley Kubrick',
            duration: '2h 26m',
            release: '1980',
            actors: 'Jack Nicholson, Shelley Duvall',
            synopsis: "Jack Torrance devient gardien d’un hôtel isolé, avec sa femme et son fils. L’isolement et les forces surnaturelles du lieu le plongent peu à peu dans la folie, menaçant sa famille.",
            img: '/img/films_classic/shining_carree.jpg',
            srcset:'/img/films_classic/shiningcarre@2x.jpg',
            rates: [1, 2, 2, 1, 1, 2, 2, 0, 1, 1],
            versions: [
            "Dans un hôtel isolé où la neige danse au rythme des souvenirs, Jack Torrance, écrivain tourmenté, s’efforce de renouer avec sa famille. Entre balades mélancoliques et chansons hantées, les tensions et les fantômes du passé se mêlent aux harmonies fragiles d’une romance aux allures de comédie musicale sombre.", 
            "Un voyage poignant où amour et peur s’entrelacent sur fond de mélodies lancinantes."],
            genres : ["romance", "musical"]
        },
        black: {
            title: 'Black Swan',
            author: 'Darren Aronofsky',
            duration: '1h 48m',
            release: '2010',
            actors: 'Natalie Portman, Mila Kunis',
            synopsis: "Nina, ballerine perfectionniste, décroche le rôle principal dans Le Lac des cygnes. En quête de perfection, elle sombre dans une spirale de pression, de rivalité et de paranoïa, confondant réalité et hallucination.",
            img: '/img/films_classic/black_carre.jpg',
            srcset:'/img/films_classic/blackcarre@2x.jpg',
            rates: [2, 1, 2, 1, 1, 2, 1, 1, 2, 2],
            versions: [
            "Dans une petite ville poussiéreuse du Far West, Nina, une danseuse ambitieuse, se prépare pour le spectacle du siècle. Entre duels comiques, rivalités farfelues et répétitions mouvementées, elle navigue entre tension et éclats de rire, cherchant à dompter à la fois son rôle et ses démons intérieurs.", 
            "Une chevauchée pleine d’humour et de surprises où la passion et le chaos s’entremêlent sous le soleil brûlant."],
            genres : ["western", "comédie"]
        },
        psychose: {
            title: 'Psychose',
            author: 'Alfred Hitchcock',
            duration: '1h 49m',
            release: '1960',
            actors: 'Anthony Perkins, Janet Leigh',
            synopsis: "Marion Crane vole une grosse somme d’argent et s’enfuit. Elle s’arrête dans un motel isolé tenu par Norman Bates, un homme étrange vivant avec sa mère. Un tournant macabre l’attend dans ce lieu sinistre.",
            img: '/img/films_classic/psychose_carre.jpg',
            srcset:'/img/films_classic/psychosecarre@2x.jpg',
            rates: [1, 2, 2, 1, 2, 2, 2, 0, 1, 1],
            versions: [
            "Dans un motel isolé où résonnent des airs mélancoliques, Marion, une fugitive en quête d’amour, croise Norman, un homme au passé mystérieux. Entre chants doux et secrets enfouis, leur rencontre tisse une romance fragile teintée de tensions et de mélodies hantées.", 
            "Un ballet musical où le danger et le désir se mêlent sous les projecteurs d’une nuit incertaine."],
            genres : ["romance", "musical"]
        },

        amelie: {
            title: 'Amelie Poulain',
            author: 'Jean-Pierre Jeunet',
            duration: '2h 2m',
            release: '2001',
            actors: 'Audrey Tautou, Mathieu Kassovitz',
            synopsis: "Amélie, jeune serveuse à l’imagination débordante, décide de faire le bien autour d’elle. Dans un Paris poétique, elle crée de petites merveilles anonymes… jusqu’à ce que l’amour frappe à sa porte.",
            img: '/img/films_classic/amelie_carre.jpg',
            srcset:'/img/films_classic/ameliecarre@2x.jpg',
            rates: [2, 1, 2, 1, 1, 2, 1, 1, 1, 2],
            versions: [
            "Dans une petite ville poussiéreuse où chacun cache ses secrets, Amélie, une jeune femme au regard perçant, mène une enquête discrète pour rendre justice aux âmes blessées. Entre duels silencieux, mystères enfouis et alliances fragiles, elle déjoue les pièges du passé tout en apprivoisant ses propres peurs.", 
            "Une quête haletante où l’humour et la tendresse percent sous la poussière d’un Western plein de surprises."],
            genres : ["thriller", "western"]
        },
        mamma: {
            title: 'Mamma Mia',
            author: 'Phyllida Lloyd',
            duration: '1h 48m',
            release: '2008',
            actors: 'Meryl Streep, Amanda Seyfried',
            synopsis: "Sur une île grecque, Sophie veut connaître l’identité de son père avant son mariage. En cachette, elle invite les trois anciens amants de sa mère Donna. Entre chansons d’ABBA, souvenirs et rires, la vérité éclatera.",
            img: '/img/films_classic/mamma_carre.jpg',
            srcset:'/img/films_classic/mammacarre@2x.jpg',
            rates: [2, 1, 2, 1, 2, 2, 2, 1, 1, 2],
            versions: [
            "Sur une île méditerranéenne baignée de lumière, une caméra suit Donna, une femme au passé trouble, qui se retrouve confrontée à trois hommes mystérieux venus raviver de vieux secrets. Entre révélations tendues et souvenirs enfouis, cette plongée documentaire dévoile les liens complexes d’une famille fragile, où joie et peur s’entrelacent sous le poids du passé.", 
            "Un récit rythmé par l’émotion et le suspense, loin des mélodies festives."],
            genres : ["docu", "thriller"]
        },
        bronzes: {
            title: 'Les Bronzes',
            author: 'Patrice Leconte',
            duration: '1h 30m',
            release: '1979',
            actors: 'Michel Blanc, Thierry Lhermitte, Josiane Balasko',
            synopsis: "Retrouvailles à la montagne pour la bande de copains des Bronzés. Entre catastrophes sur les pistes, quiproquos amoureux et dialogues cultes, les vacances virent au cauchemar hilarant.",
            img: '/img/films_classic/bronzes_carre.jpg',
            srcset: ' /img/films_classic/bronzes_carre@2x.jpg',
            rates: [1, 2, 1, 2, 2, 2, 2, 1, 0, 1],
            versions: [
            "Dans une station de ski isolée, un groupe d’amis se retrouve piégé par une mystérieuse tempête aux origines inconnues. Tandis que les tensions montent et que les espoirs vacillent, chacun doit affronter non seulement les éléments, mais aussi ses propres démons dans un combat pour la survie.", 
            "Un récit poignant où la camaraderie vacille sous la pression d’un futur incertain."],
            genres : ["drame", "science fiction"]
        },
    };


    const film = films[filmId];
    if (!film) return;

    document.querySelector('.movie__img--poster').src = film.img;
    document.querySelector('.movie__img--poster').srcset = film.srcset
    document.querySelector('.movie__img--poster').alt = film.title;
    document.querySelector('.movie__title').textContent = film.title.toUpperCase();
    document.querySelector('.movie__author').textContent = `de ${film.author}`;
    document.querySelector('.movie__duration').textContent = film.duration;
    document.querySelector('.movie__release--date').textContent = film.release;
    document.querySelector('.movie__actors').textContent = film.actors;
    document.querySelector('.movie__synopsis').textContent = film.synopsis;
    document.querySelector('.results__version').textContent = `Résultats de l'analyse de ${film.title}`;

    const resultsContent = document.querySelector('.results__content');
    if (film.versions && resultsContent) {
    resultsContent.innerHTML = '';
    film.versions.forEach(paragraph => {
    const p = document.createElement('p');
    p.classList.add('results__version');
    p.textContent = paragraph;
    resultsContent.appendChild(p);
  });
  const genres = document.querySelectorAll('.genres__item');
    genres.forEach(genre => {
        let genreTitle = genre.innerText.toLowerCase();
        console.log(`${genreTitle} - ${film.genres}`);
        if (film.genres.includes(genreTitle)) {
            genre.classList.add('active');
        }
    });
}

// Création du graphique radar

if (film.rates) {
    const ctx = document.getElementById('myChart').getContext('2d');
    
    const data = {
      labels: [
        'Joie',
        'Tristesse',
        'Peur',
        'Colère',
        'Surprise',
        'Nostalgie',
        'Anxiété',
        'Sérénité',
        'Euphorie',
        'Humour'
      ],
      datasets: [{
        label: film.title,
        data: film.rates,
        fill: true,
        backgroundColor: 'rgba(0, 250, 235, 0.4)',
        borderColor: 'rgb(0, 250, 235)',
        pointBackgroundColor: 'rgb(0, 250, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 250, 235)'
      }]
    };
    
    const config = {
      type: 'radar',
      data: data,
      options: {
        plugins: {
          legend: {
            display: false // Masque la légende
          },
          title: {
            display: false
          }
        },
        scales: {
          r: {
            ticks: {
            color: '#00FAEB',           
            font: {
                size: 24,
                weight: 'bold'
            },
            backdropColor: 'transparent',
              callback: function(value) {
                return Number.isInteger(value) ? value : '';
              },
              stepSize: 1,
              precision: 0
            },
            suggestedMin: 0,
            suggestedMax: 2,
            grid: {
              color: 'rgba(141, 107, 214, 1)', // Couleur des cercles
              lineWidth: 1.5 
            },
            angleLines: {
              color: 'rgba(141, 107, 214, 1)', // Lignes radiales
              lineWidth: 1.5
            },
            pointLabels: {
              color: '#8D6BD6', // Couleur des labels
              font: {
                size: 20
              }
            }
          }
        },
        elements: {
          line: {
            borderWidth: 3
          }
        }
      }
    };
    
       new Chart(ctx, config);
    }
});
// Rate chart 
// source => https://www.chartjs.org/docs/latest/charts/radar.html

