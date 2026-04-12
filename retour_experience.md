# Retour d'Expérience (REX) - Projet Portfolio Personnel

## 1. Contexte et Objectifs
Ce projet a consisté en la création de zéro d'un portfolio professionnel en ligne. L'objectif était de concevoir une véritable vitrine numérique, dynamique et chaleureuse, permettant de mettre en valeur :
- Les compétences techniques (Backend, Frontend).
- Les différentes expériences professionnelles.
- Les projets majeurs réalisés sous forme de cartes avec galeries d'images (carrousels).
- Les certifications obtenues, avec preuves visuelles à l'appui.
- Un moyen direct et fonctionnel pour être contacté sans quitter l'interface.

## 2. Stack Technologique Adoptée
L'approche choisie s'est orientée vers des technologies modernes garantissant performance, maintenabilité et simplicité de déploiement :
* **Développement Web** : React.js (initialisé via *Vite* pour une compilation ultra-rapide).
* **Styling et UI** : Tailwind CSS, très largement utilisé pour assurer un design entièrement réactif (Responsive), incluant des thèmes de couleurs personnalisés, des animations d'apparition fluides et une interface "Glassmorphism" épurée.
* **Navigation** : `react-router-dom` pour le fonctionnement en mode Single Page Application (SPA).
* **Services Tiers** : **EmailJS** pour opérer un formulaire de contact de bout en bout sans avoir besoin de développer et d'héberger un backend API dédié.
* **DevOps et Hébergement** : Versioning sur **GitHub** et intégration continue sur **Vercel** pour un déploiement instantané.

## 3. Étapes Clés et Composants Réalisés
1. **La structure globale et le Routage** : Mise en place d'une `Navbar` adaptative avec indicateur actif.
2. **Conception UI/UX** : Intégration de pages distinctes (`Home`, `About`, `Skills`, `Projects`, `Experiences`, `Certifications`) conçues avec le souci du détail et agrémentées de l'excellente librairie d'icônes `lucide-react`.
3. **Création de contenu media** : Automatisation de captures d'écrans pour présenter concrètement les projets hébergés en local et les diplômes PDF, créant ainsi un vrai portfolio visuel.

## 4. Défis Rencontrés & Solutions
Tout projet comporte son lot d'accrocs enrichissants. Voici ceux qui ont été surmontés :

### Défi A : Rendu des images et dimensionnement
- *Problème :* Aligner et uniformiser le rendu de plusieurs captures d'écrans de tailles inégales (projets locaux, PDF).
- *Solution :* Utilisation approfondie des conteneurs Tailwind (`object-cover`, `object-top`, ratios forcés et carrousels interactifs) pour maintenir un rendu homogène.

### Défi B : Le classique "Bug de l'actualisation" (Erreur Vercel 404 NOT_FOUND)
- *Problème :* Vercel tentait d'interpréter les routes de l'application (comme `/projets`) en tant que fichiers physiques sur le serveur.
- *Solution :* Ajout en racine du projet d'un fichier `vercel.json` qui définit un `rewrite` de toutes les requêtes (`/(.*)`) vers le point d'entrée unique `index.html`.

### Défi C : Câblage et sécurisation du formulaire EmailJS en production
- *Problème :* Le formulaire refusait de transmettre le courriel une fois le site mis en production en raison de clés API factices ou de problèmes de sécurité cross-origin.
- *Solution :* Reprise minutieuse du processus d'inscription EmailJS. Création d'un Service, configuration et traduction du modèle d'e-mail avec les bonnes variables (`{{user_name}}`, `{{user_email}}`, `{{message}}`), intégration des clés finales, et **surtout**, whitelisting (autorisation) du domaine Vercel final (`https://portfolio-theta-tawny-66.vercel.app`) pour sécuriser la *Public Key*.

## 5. Bilan Global
L'application finale est professionnelle, esthétique, fonctionnelle et immédiatement accessible en ligne. Ce processus collaboratif de pair-programming a permis d'instaurer des bonnes pratiques de développement, allant du code "propre" jusqu'au lancement en production. 

Le socle de cette application est pensé pour être facilement évolutif : ajouter de futurs projets ou de nouvelles compétences se résumera désormais à remplir de simples données !

---
*Ce document récapitule les travaux conjoints de développement réalisés et documentés avec Antigravity - Avril 2026*
