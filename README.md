# Firepad Collaborative Editing React Component Hello-World

1. Sign up and/or log into Firebase and create a project.
2. In https://console.firebase.google.com, go to your project.
3. Go to ```Database->Rules``` and set the rules to:

```
{
 "rules": {
   ".read": true,
   ".write": true
 }
}
```

This means that anyone can read and update the Firebase DB. That may not be the best idea in Real Life.

4. ```yarn```
5. ```yarn start```


This project was bootstrapped with https://github.com/facebookincubator/create-react-app. Firepad/Firebase integration is based on https://github.com/firebase/firepad/blob/master/examples/code.html . 


