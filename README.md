# TODO List App

Application web de gestion de tâches (**Todo List**) simple et évolutive avec **backend Laravel** et **frontend React**.

## Fonctionnalités

- **CRUD complet** : ajouter, afficher, modifier et supprimer des tâches
- Marquer les tâches comme **terminées** via une case à cocher
- Communication frontend-backend via **API RESTful**

## Technologies utilisées

- **Backend :**
    
    - PHP 8.x
    - Laravel Framework
    - SQLite
- **Frontend :**
    
    - &nbsp;React 18
        
    - Axios pour les requêtes HTTP
        
    - Bootstrap 5
        
    - Hooks standards (\`useState\`, \`useEffect\`) pour la gestion de l'état
        

&nbsp;

## Installation & Exécution

1.  Cloner le dépôt

```
git clone https://github.com/thrHamza/todo-app.git
```

- **Backend :**
    
    - Se rendre dans le dossier backend
        - `cd backend`
            
    - Installer les dépendances :
        - `composer install`
     
    - Configurer le fichier `.env` :
        - Copier `.env.example` en `.env`
          
    - Définir la base de données SQLite :
        - `DB_CONNECTION=sqlite`  
          `DB_DATABASE=database/database.sqlite`
            
    - Exécuter les migrations :
        - `php artisan migrate`
            
    - Lancer le serveur Laravel :
        
        - `php artisan migrate`
- **Frontend :**
    
    - Se rendre dans le dossier frontend :
        - `cd frontend`
            
    - Installer les dépendances :
        
        - `npm install`
            
    - Lancer le serveur de développement :
        - `npm run dev`
            
    - Ouvrir le navigateur à l'adresse :
        - http://127.0.0.1:5173/
            

&nbsp;

## Remarques

- Pas d'authentification requise
    
- URL de l'API : `http://127.0.0.1:8000/api/tasks`
