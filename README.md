# react native app links(android)
Listen for app links in the app

# Steps 

1. create an project on https://console.firebase.google.com/

2. Create an react project using npx create-react-app my-test

3. Create Production build using yarn build

4. Deploy to firebase using 

    - firebase login
    - firbase init
    - firebase deploy

5. Create applinks.json using android assistent and paste in .well-known/applinks.json of builds folder of your web app, then redeploy.

6. On mobile app side create linking and prefix(your domain)

7. Provide refrence to NavigationCantaineer as: linking={linking}

8. Test the app according to your domain and related screen will open 

Have fun... Happy coding!!
