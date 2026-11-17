# Portfolio — version française et anglaise

Site statique : HTML, CSS et JavaScript. Adresse : https://jackina835-ux.github.io/me/

## Présentation

Interface sobre, fond charbon en mode sombre et blanc cassé en mode clair, accent vert, typographies Manrope et DM Sans avec polices système de remplacement. Photo droite, sans rotation. Le thème est mémorisé et appliqué avant l’affichage.

La plateforme React / Spring Boot / PostgreSQL apparaît en premier. Quatre réalisations professionnelles et un jeu académique sont identifiés selon les informations fournies. Les compétences mises en avant sont reliées aux réalisations présentées. Le parcours et le stage sont repris des CV, sans ajout de niveau de maîtrise ni de résultat chiffré.

Accueil et cinq fiches disponibles en français et en anglais. Le sélecteur conserve la fiche en cours. Les captures des applications restent dans leur langue d’origine. Les deux CV fournis sont téléchargeables depuis les pages et conservés sans modification dans `assets/cv/`. LinkedIn provient de `suivre.txt` ; les liens GitHub existants sont conservés.

## Vérification

- `python verifier_portfolio.py` : treize pages, liens relatifs, ancres, identifiants, textes alternatifs et dimensions des images.
- `node --check script.js` et `node --check theme-init.js` : syntaxe JavaScript.
- Vérification dans Microsoft Edge : accueil FR / EN à 1440, 768, 390 et 320 px, thèmes, mémorisation du thème, filtres, menu mobile, touche Échap et téléchargement du CV dans chaque langue.
- Treize pages vérifiées à 390 px : absence de débordement horizontal et chargement de toutes les images.
- Navigation et cinq projets accessibles sans JavaScript. Réduction des mouvements prise en compte dans la feuille de style.
- `git diff --check` : contrôle des espaces.

## Informations à approfondir

La contribution exacte dans les éventuels projets d’équipe, les difficultés techniques rencontrées et l’état de livraison de chaque projet restent à préciser pour enrichir les études de cas. Aucun de ces éléments n’est inventé.

Le compte GitHub inscrit dans les PDF fournis se termine par `jackina835-uxet`, alors que le compte utilisé par le site et le dépôt est `jackina835-ux`. Les PDF sources restent inchangés.

## Prévisualisation

Lancer `python -m http.server 8000 --bind 127.0.0.1` depuis la racine, puis ouvrir http://127.0.0.1:8000/. Le site est publié sur GitHub Pages via la branche `main`.
