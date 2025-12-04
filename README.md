# Portfolio – Salma M'hajar

Projet développé dans le cadre de la formation Développeuse Web – CEF.

--------------------------------------------------
1. Contenu du projet
--------------------------------------------------

Le site est composé des pages suivantes :

- index.html : page d'accueil, section "À propos" et compétences
- services.html : présentation de mon offre de services
- realisations.html : portfolio avec plusieurs projets
- blog.html : introduction à plusieurs articles de blog
- contact.html : formulaire de contact + coordonnées + Google Map
- mentions-legales.html : mentions légales (éditeur, hébergeur, crédits)

Le header et le footer sont identiques sur toutes les pages.

--------------------------------------------------
2. Technologies utilisées
--------------------------------------------------

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (vanilla)
- React.js (application indépendante hébergée sur CodeSandbox)
- Font Awesome 6
- Google Fonts : Nunito Sans

--------------------------------------------------
3. Structure du projet
--------------------------------------------------

.
├── index.html
├── services.html
├── realisations.html
├── blog.html
├── contact.html
├── mentions-legales.html
├── assets
│   ├── css
│   │   └── style.css
│   ├── img
│   │   ├── hero.jpg
│   │   ├── photo-salma.jpg
│   │   ├── contact-bg.jpg
│   │   ├── projets
│   │   │   ├── fresh-food.jpg
│   │   │   ├── restaurant-akira.jpg
│   │   │   └── espace-bien-etre.jpg
│   │   ├── blog
│   │   │   ├── article1.jpg
│   │   │   ├── article2.jpg
│   │   │   ├── article3.jpg
│   │   │   ├── article4.jpg
│   │   │   ├── article5.jpg
│   │   │   └── article6.jpg
│   │   └── favicon.png
│   └── js
│       └── main.js
├── captures
│   ├── w3c-index
│   ├── w3c-services
│   ├── w3c-realisations
│   ├── w3c-blog 
│   ├── w3c-contact
│   ├── w3c-mentions-legales
│   └── w3c-css 
└── README.md

--------------------------------------------------
4. Application React – Profil GitHub
--------------------------------------------------

L'application React (hébergée sur CodeSandbox) affiche les informations d'un profil GitHub en temps réel.

Fonctionnalités :
- Récupération des données via :
  https://api.github.com/users/{username}
- Affichage :
  - Avatar
  - Nom
  - Pseudo
  - Bio
  - Nombre de dépôts publics
  - Followers / Following
  - Lien direct vers le profil GitHub

Hooks utilisés :
- useState
- useEffect

Lien vers l'application React :
- Voir l'application : https://codesandbox.io/p/sandbox/w5q23h
- Voir le code     : https://codesandbox.io/p/sandbox/w5q23h

--------------------------------------------------
5. Prérequis
--------------------------------------------------

Pour consulter le site :
- Navigateur moderne (Chrome, Firefox, Edge…)

Pour travailler sur le code :
- (Optionnel) VS Code
- (Optionnel) Git installé

--------------------------------------------------
6. Installation & lancement en local
--------------------------------------------------

Cloner le dépôt :

git clone https://github.com/Mhajar-salma/portfolio-salma-mhajar

Ensuite :
1. Ouvrir le dossier dans votre éditeur.
2. Ouvrir index.html dans un navigateur.

Le site est 100 % statique → aucune installation (pas de npm install).
L'application React fonctionne séparément via CodeSandbox.

--------------------------------------------------
7. Validation W3C
--------------------------------------------------

Le code a été vérifié avec :
- Validateur HTML : https://validator.w3.org/
- Validateur CSS  : https://jigsaw.w3.org/css-validator/

Les captures des résultats sont disponibles dans le dossier "captures/".

--------------------------------------------------
8. Hébergement
--------------------------------------------------

Le site est disponible en ligne via GitHub Pages :
👉 https://mhajar-salma.github.io/portfolio-salma-mhajar/

L'application React est hébergée indépendamment via CodeSandbox.

--------------------------------------------------
9. Auteur
--------------------------------------------------

Projet développé et designé par Salma M'hajar
dans le cadre de la formation Développeuse Web – CEF.
