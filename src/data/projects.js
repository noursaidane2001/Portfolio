const projects = [
    {
        id: 1,
        title: 'ETTABA',
        description: 'Ce projet consiste à développer une application web de gestion dédiée à un administrateur.  L’objectif est de permettre une gestion centralisée des utilisateurs, des fermes, des jardins potagers(appelés « Ettabas »), des événements, des produits et des animaux. L’administrateur pourra gérer toutes les entités du système via un tableau de bord ergonomique et sécurisé.',
        tache: ["Implémenter le Patron State (GOF)", "Implémenter le principe Low Coupling (GRASP)", "Implémenter le Principe d’Inversion de Dépendance (Principes SOLID)", "Définir une contrainte sur le Produit (Régles OCL)"],
        tech: [
            ['SpringBoot', 'spring'],
            ['Angular', 'angular'],
            ['MySQL', 'mysql']
        ],
        repo: 'https://github.com/noursaidane2001/EttabaVPC'
    },
    {
        id: 2,
        title: 'ZidniTech',
        description: 'Ce projet est une application mobile développée avec Flutter permettant aux utilisateurs de commander des produits informatiques (ordinateurs, accessoires, périphériques, composants, etc.) depuis leur smartphone. L’objectif principal est de faciliter l’achat en ligne de matériel informatique à travers une interface fluide, rapide et ergonomique, tout en offrant une expérience utilisateur moderne et sécurisée. L’application s’adresse à des clients particuliers ou professionnels souhaitant parcourir un large catalogue de produits, consulter les détails techniques et effectuer leurs achats directement depuis leur téléphone.',
        tech: [
            ['Flutter (Dart)', 'flutter'],
            ['Firebase Storage', 'fire']
        ],
        tache: ["Mise en place de la structure Flutter (architecture MVC)", "Création des pages Principales"]
    },
    {
        id: 3,
        title: 'Application Web pour supporter le Système d’Assurance Qualité Interne à l’ISAMM',
        description: 'Ce projet consiste à développer une application web de gestion de l’assurance qualité à l’ISAMM, permettant le suivi des enquêtes qualité, des KPI, des audits internes et la centralisation de la documentation pour faciliter la prise de décision et l’amélioration continue.',
        tech: [
            ['Symfony', 'symfony']
        ],
        tache: ["Analyse des besoins et rédaction du cahier des charges.",
            "Conception UML et architecture de l’application.",
            "Développement des modules : enquêtes qualité, KPI, audits et documentation."],
        post: "https://github.com/ton-user/projet-biblio"
    },
    {
        id: 4,
        title: "Plateforme de Gestion du Parcours Ingénieur à l’ISAMM",
        description: 'Le projet vise à développer une plateforme web de gestion du parcours des étudiants en ingénierie à l’ISAMM. Elle permettra de gérer les comptes étudiants, les options choisies, les stages, les PFA/ PFE et les matières. Les étudiants pourront suivre leur parcours académique, consulter leurs projets et recevoir des notifications sur les échéances importantes. Le personnel administratif pourra centraliser les informations, gérer les inscriptions aux options et suivre l’avancement des étudiants. Cette plateforme offre ainsi un outil intégré, sécurisé et interactif pour améliorer la gestion et le suivi académique.',
        tech: [
            ['ReactJS', 'react'],
            ['Tailwind', 'tailwind'],
            ['Node.js', 'node'],
            ['Express.js', 'express'],
            ['MongoDB', 'mongo']
        ],
        repo: 'https://github.com/noursaidane2001/ISAMM_Palteform',
        tache: [
            "Conception UML et modélisation de la base de données",
            "Développement du backend avec Node.js et Express.js",
            "Développement du frontend avec React.js",
            "Gestion des comptes utilisateurs et choix d’options",
            "Collaboration avec l’équipe"
        ]

    },
    {
        id: 5,
        title: "IoT Smart Chicken House – Monitoring & Automation System",
        description: 'Ce projet vise à développer un système intelligent de surveillance et d’automatisation pour les poulaillers en utilisant l’Internet des Objets (IoT). Grâce à des capteurs et actionneurs connectés à un microcontrôleur ESP32, le système collecte des données en temps réel sur la température et l’humidité, et contrôle automatiquement l’environnement (climatisation, pompe à eau, éclairage) pour assurer le bien-être des poules. Une application mobile cross-platform Flutter permet aux utilisateurs de visualiser les données, recevoir des notifications et contrôler les équipements à distance via un service cloud: Firebase.',
        tech: [
            ['ESP32 (Microcontrôleur)', ''],
            ['DHT11 (Température & Humidité)', ''],
            ['Relais', ''],
            ['Arduino (C++)', ''],
            ['Flutter (Dart)', 'flutter'],
            ['Wi-Fi', ''],
            ['Firebase', 'fire']
        ],
        repo: 'https://github.com/noursaidane2001/Iot_Chiken_House',
        tache: [
            "Concevoir l’architecture matérielle et logicielle du système IoT.",
            "Développer le firmware ESP32 pour la lecture des capteurs et le contrôle des actionneurs.",
            "Créer l’application mobile Flutter pour visualiser et contrôler les dispositifs.",
            "Mettre en place la communication Wi-Fi et intégration Firebase.",
            "Tester et ajuster les seuils d’automatisation pour un environnement optimal pour les poules."
        ]


    },
    {
        "id": "6",
        "title": "eStream - Plateforme d'organisation de tournois et diffusion en direct des jeux vidéo",
        "description": "Application web (PFE) destinée aux gamers tunisiens permettant d'organiser des tournois de jeux vidéo, de diffuser en direct des parties, et de créer une communauté interactive autour de l'e-sport. La plateforme offre des fonctionnalités de gestion des tournois, chat en temps réel, système d'abonnement entre joueurs, et intégration avec YouTube et Twitch.",
        "tech": [
            ["React.js", "react"],
            ["Node.js", "node"],
            ["Express.js", "express"],
            ["MongoDB", "mongo"],
            ["Socket.io", "socketio-original"],
            ["YouTube API", "youtubelogo"],
            ["Twitch API", "twitch"]
        ],
        "tache": [
            "Analyse des besoins et étude comparative des plateformes e-sport existantes (Challonge, OoredooEZ, Sked, Esports.tn)",
            "Conception de l'architecture MERN Stack (MongoDB, Express.js, React.js, Node.js)",
            "Développement du système d'authentification et gestion des comptes utilisateurs (inscription, connexion, vérification email)",
            "Implémentation de la gestion des profils joueurs avec système de followers/following",
            "Création du module d'organisation de tournois avec paramètres personnalisables (nombre participants, date, jeu, lien Discord)",
            "Intégration de l'API Twitch pour l'importation des 100 jeux vidéo les plus populaires",
            "Développement du système de diffusion en direct via intégration YouTube API",
            "Implémentation du chat en temps réel avec Socket.io pour les tournois et directs",
            "Création du tableau de bord administrateur avec gestion des utilisateurs (blocage/déblocage)",
            "Développement du système de réclamations avec traitement par l'administrateur",
        ]
    },
    {
        "id": "7",
        "title": "Gestion de Stock - Vérification et Test Logiciel",
        "description": "Système informatisé de gestion de stock pour magasin avec implémentation complète de tests unitaires. Le projet met l'accent sur la qualité logicielle à travers une campagne de tests exhaustive utilisant JUnit 5. Il permet la gestion efficace des produits (ajout, suppression, recherche, réservation) avec une traçabilité optimale et une réduction des erreurs de gestion manuelle.",
        "tech": [
            ["Java", "java-original"],
            ["JUnit 5", "junit5-logo.png"],
            ["Eclipse IDE", "eclipse-original"],
            ["Maven", "maven-original"]
        ],
        "repo": "https://github.com/noursaidane2001/GestionStock",
        "tache": [
            "Analyse des besoins fonctionnels et non-fonctionnels du système de gestion de stock",
            "Conception de l'architecture orientée objet avec les classes Produit, Magasin et GestionMagasin",
            "Implémentation de la fonctionnalité d'ajout de produits avec validation des coordonnées",
            "Mise en place du Framework JUnit 5 pour les tests unitaires",
            "Écriture de tests unitaires pour l'ajout de produits (cas valides et invalides)",
            "Conception des interfaces utilisateur en Java Swing pour interaction avec le système",
            "Validation de la testabilité et maintenabilité du code selon les spécifications non-fonctionnelles",
        ]
    }

]


export default projects