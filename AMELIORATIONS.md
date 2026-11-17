# Portfolio — notes de livraison

Site statique HTML, CSS et JavaScript, compatible avec les chemins relatifs de GitHub Pages. Aucun framework ni service d’envoi ajouté. Publication sur GitHub Pages via la branche main.

## Organisation retenue

Accueil : présentation, projets, compétences reliées aux réalisations, à propos, contact. Cinq fiches conservent leurs adresses, leurs captures commentées et les dépôts existants. Navigation entre projets et page 404 ajoutées.

## Direction visuelle

Trois pistes considérées : éditoriale ivoire/encre/bleu, atelier technique sombre/vert, galerie blanche/terracotta. La première est retenue pour la lisibilité et la priorité donnée aux réalisations.

Mode sombre principal : fond #0d1118, texte #f4f7fb, secondaire #b6c0cf, accents #83a8ff, #9b8cff et #62e0c7. Mode clair : fond #eef3f8, texte #162031, secondaire #536074, accents #476fe8, #735fe7 et #19a893. Cadre du portrait arrondi avec bordure et ombre discr?te ; les aper?us de Tadidi Ary et Grand March? utilisent des cadres verticaux avec un espace r?serv? au lien de d?couverte. Police système sans téléchargement, contenu limité à 1120 px, galerie sur deux colonnes puis une sur mobile. Captures non recadrées, hauteur réservée, chargement différé hors portrait. Focus clavier visible, lien d’évitement et préférence de réduction des animations.

## Informations à compléter

Les fichiers ne contiennent pas de CV, de dates de formation, de diplômes ni de chronologie d’expérience. Fournir ces éléments avant d’ajouter les rubriques correspondantes. Pour approfondir chaque étude de cas : préciser le rôle personnel, le travail en équipe, l’état du projet, les difficultés réellement rencontrées, les solutions, les résultats vérifiables et les limites. Aucune information manquante n’a été inventée.

Les compétences électroniques sont conservées comme compétences déclarées ; une réalisation documentée permettrait de les illustrer. Une version anglaise et un aperçu social avec URL absolue pourront être ajoutés lorsque les contenus traduits et l’adresse publique seront définis.

Le contact utilise les liens e-mail et téléphone existants. Le bouton e-mail ouvre le logiciel de messagerie ; aucun envoi automatique ni confirmation d’envoi simulée. Le seul stockage ajouté/utilisé par l’interface est la préférence de thème dans le navigateur. Aucun outil de mesure d’audience ajouté.

## Prévisualiser

Ouvrir `index.html` directement ou, depuis ce dossier, lancer `python -m http.server 8000 --bind 127.0.0.1`, puis consulter `http://127.0.0.1:8000`. Arrêter le serveur avec Ctrl+C. Pour l’hébergement existant, garder les fichiers HTML, CSS, JavaScript et `assets` à la racine du site.

## Vérifications réalisées

`python verifier_portfolio.py` contrôle les sept pages, les fichiers locaux, les ancres, l’unicité des identifiants, les titres principaux, les textes alternatifs et les dimensions des images. `node --check script.js` contrôle la syntaxe JavaScript. Les images référencées ont été décodées avec Pillow. Les associations principales de texte et de fond ont été calculées avec la formule WCAG et dépassent 4,5:1. `git diff --check` contrôle les espaces dans le diff.

La tentative d’aperçu avec Edge headless a échoué au démarrage du processus graphique. Le rendu mobile/ordinateur, les débordements éventuels et les interactions réelles (menu, clavier, préférence de thème) restent à vérifier dans un navigateur. Les destinations externes n’ont pas été contrôlées sur le réseau.

## Mise à jour de l’interface

Portrait encadré, cartes de projets harmonisées, filtres accessibles Tous / Mobile / Web / Logiciel, repérage de la section active, et styles mobiles affinés. Filtres masqués sans JavaScript : les cinq projets restent visibles. Contrôle des filtres exécuté avec Node, vérification des sept pages et syntaxe JavaScript validées.

Adresse publique vérifiée (HTTP 200) : https://jackina835-ux.github.io/me/
