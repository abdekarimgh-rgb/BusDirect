# BusDirect — Gestion des Réservations de Places

## 1. Présentation du projet

**BusDirect** est une application web interactive de gestion et d’attribution des sièges d’un autocar assurant le trajet **Safi → Marrakech**.

L’application permet à un agent de réservation de visualiser les 20 places de l’autocar, de gérer les réservations des passagers et de suivre en temps réel les disponibilités et la recette du trajet.

Le projet est développé avec **HTML5, CSS3, Tailwind CSS et JavaScript natif**, en utilisant la manipulation du DOM et la gestion des événements. L’interface est conçue pour être responsive, claire et intuitive.

## 2. Objectifs

- Visualiser le plan de la cabine et l’état des 20 sièges.
- Réserver une place en choisissant un siège ou en attribuant automatiquement le premier siège libre.
- Modifier une réservation existante : nom du passager et/ou numéro du siège.
- Supprimer une réservation et libérer immédiatement le siège.
- Empêcher les réservations avec un nom vide ou un nom de passager déjà utilisé.
- Mettre à jour automatiquement le nombre de places disponibles et la recette totale.
- Conserver les réservations après actualisation de la page grâce à `localStorage`.
- Proposer une interface adaptée aux ordinateurs, tablettes et mobiles.

## 3. Fonctionnalités principales

### Gestion des sièges

- Affichage des 20 sièges de l’autocar.
- Identification visuelle des sièges libres et occupés grâce à un code couleur.
- Affichage du nom du passager associé à chaque siège occupé.

### Réservation

- Saisie du nom du passager.
- Sélection d’un siège disponible.
- Attribution automatique du premier siège libre si aucun siège n’est sélectionné.
- Vérification des champs obligatoires et prévention des doublons de noms.

### Modification et suppression

- Sélection d’une réservation existante.
- Préremplissage des informations du passager.
- Modification du nom et/ou changement vers un siège libre.
- Suppression d’une réservation et libération du siège correspondant.

### Tableau de bord

- Compteur dynamique des places disponibles.
- Calcul automatique de la recette totale : **80 DH × nombre de sièges occupés**.
- Notifications de confirmation ou d’erreur dans le bloc concerné, avec disparition automatique après 3 secondes.

### Sauvegarde des données

Les réservations sont conservées dans le navigateur avec `localStorage`, afin de préserver leur état après actualisation de la page.

## 5. Technologies utilisées

- **HTML5** : structure sémantique de l’application.
- **CSS3** : styles et mise en page.
- **Tailwind CSS** : conception de l’interface et adaptation responsive.
- **JavaScript natif** : logique métier, manipulation du DOM, événements et validation des formulaires.
- **localStorage** : sauvegarde locale des réservations.
- **Git et GitHub** : gestion des versions et suivi du code.

## 6. Interface responsive

L’interface est conçue pour s’adapter aux différentes tailles d’écran :

| Mobile           
| Tablette         
| Petit ordinateur 
| Grand ordinateur 

L’objectif est de conserver une interface lisible et facile à utiliser sur tous les appareils.

## 7. Installation et lancement

### Cloner le dépôt

```bash
git clone https://github.com/abdekarimgh-rgb/BusDirect.git
```

### Accéder au dossier

```bash
cd BusDirect
```

### Lancer le projet

Ouvrir le dossier dans Visual Studio Code, puis lancer le fichier `index.html` dans un navigateur, idéalement avec l’extension Live Server si elle est disponible.

Si le projet utilise une compilation de Tailwind CSS, exécuter la commande configurée dans le projet avant de lancer l’application.

## 8. Organisation et gestion du projet

Le développement est organisé avec Git et GitHub afin de suivre les modifications et de faciliter la gestion du code.

Bonnes pratiques :

- Utiliser des commits avec des messages explicites.
- Développer les fonctionnalités de manière progressive.
- Vérifier les modifications avant leur intégration.
- Tester les opérations de réservation, de modification et de suppression.
- Documenter le code et maintenir le README à jour.

## 9. Accessibilité et qualité

Le projet vise à respecter les bonnes pratiques du développement web :

- Utilisation de balises HTML sémantiques.
- Formulaires associés à des labels explicites.
- Messages d’erreur compréhensibles.
- Navigation et interactions accessibles au clavier lorsque cela est applicable.
- Indicateurs visuels suffisamment contrastés.
- Mise en page responsive.
- Vérification du code HTML et des bonnes pratiques d’accessibilité.

## 10. Liens du projet

- **Repository GitHub :** https://github.com/abdekarimgh-rgb/BusDirect
- **Site déployé sur github pages :** https://abdekarimgh-rgb.github.io/BusDirect/
- **Planification des tâches :** https://trello.com/invite/b/6ad61254c9ce311f7f40fe48/ATTIc82f4142ef10ee35a2774db0ab511f15777FEE1B/busdirect

## 11. Auteur et contexte

Projet réalisé dans le cadre du référentiel **Développeur Web et Web Mobile**.

**project :** BusDirect — Gestion des Réservations de Places
**Technologies principales :** HTML5, CSS3, Tailwind CSS et JavaScript
**Date de début :** 19 octobre 2026
**Date limite de livraison :** 27 octobre 2026 à 17 h 20

---
