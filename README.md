
# DENTAL-ARCADES-SEGMENTATION (Application Web)

Afin de simplifier la vie des professionnels de la dentisterie médicale qui se servent de ces
données pour leurs traitements orthodontiques, notre Application Web se concentre principalement sur
l'utilisation d'un modèle de Deep Learning appelé MeshSegNet pour segmenter automatiquement les dents en 3D à partir de maillages.



## Fonctionnalités :
Pour atteindre nos objectifs, notre application web doit offrir ces fonctionnalités :
-  Segmentation des arcades dentaires.
- Visualisation des objets 3D (arcades dentaire).
- Téléchargement des objets prédits.

## Généralités sur le modèle MeshSegNet: 
- Définition : 
MeshSegNet : un réseau neuronal profond multi-échelle qui apprend les caractéristiques géométriques de haut niveau utilisées pour la segmentation dentaire de bout en bout sur des surfaces dentaires 3D.

- Architecture MeshSegNet : 

![App Screenshot](https://github.com/HafsaBoussaboun/DENTAL-ARCADES-SEGMENTATION/blob/main/Architecture_MeshSegnet.png?raw=true)


## Screenshots
### écran de démarrage
Une fois le code exécuté, l'application démarre automatiquement et vous êtes immédiatement dirigé vers cette interface. Cette page d'accueil constitue votre point de départ pour explorer de manière approfondie les différentes fonctionnalités

![App Screenshot](https://github.com/HafsaBoussaboun/DENTAL-ARCADES-SEGMENTATION/blob/main/1.png?raw=true)

Après avoir appuyé sur le bouton "upload" l'utilisateur sélectionne un fichier depuis son ordinateur, puis il clique sur le bouton "Predict" pour segmenter l'objet qu'il a choisi.

![App Screenshot](https://github.com/HafsaBoussaboun/DENTAL-ARCADES-SEGMENTATION/blob/main/2.png?raw=true)

Après avoir réussi la segmentation de l'objet, nous offrons à l'utilisateur deux choix. Il peut soit
télécharger le fichier en cliquant sur "Download vtp File", ce qui lui permet de conserver une
copie du résultat pour une utilisation future, soit visualiser le fichier segmenté.
L'option de visualisation permet aux utilisateurs de zoomer, de faire pivoter et d'examiner en détail les spécificités de la segmentation, ce qui facilite leur compréhension du résultat obtenu.

![App Screenshot](https://github.com/HafsaBoussaboun/DENTAL-ARCADES-SEGMENTATION/blob/main/3.png?raw=true)

Si l'utilisateur a opté pour la deuxième option, celle de visualiser le fichier segmenté, la page suivante s'affiche.

![App Screenshot](https://github.com/HafsaBoussaboun/DENTAL-ARCADES-SEGMENTATION/blob/main/4.png?raw=true)


### Page d’information :
Cette page a pour vocation de mettre en avant les fonctionnalités essentielles de notre
application.

![App Screenshot](https://github.com/HafsaBoussaboun/DENTAL-ARCADES-SEGMENTATION/blob/main/5.png?raw=true)

### Page de Contact :
Sur cette page, les utilisateurs ont la possibilité de nous contacter en cas de soucis techniques ou s'ils souhaitent partager leurs commentaires avec nous.

![App Screenshot](https://github.com/HafsaBoussaboun/DENTAL-ARCADES-SEGMENTATION/blob/main/6.png?raw=true)

### Page de Visualisation : 
En sélectionnant l'option "Visualisation", l'utilisateur a la possibilité de visualiser des objets 3D sans avoir besoin de les segmenter au préalable. L'utilisateur sélectionne l'objet de son choix qu'il souhaite visualiser, puis la page de
visualisation s'affiche automatiquement.

![App Screenshot](https://github.com/HafsaBoussaboun/DENTAL-ARCADES-SEGMENTATION/blob/main/7.png?raw=true)

## API Utilisée 

Pour des informations plus détaillées concernant l'API, veuillez consulter le référentiel GitHub suivant :
https://github.com/HafsaBoussaboun/MeshSegnet_API.git

