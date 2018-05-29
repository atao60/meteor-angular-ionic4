// Client entry point, imports all client code

//import '/imports/startup/client';
//import '/imports/startup/both';

import 'zone.js';
import 'reflect-metadata';

import { Meteor } from 'meteor/meteor';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MeteorObservable } from 'meteor-rxjs';
import { AppModule } from './imports/app/app.module';

import { enableProdMode } from '@angular/core';

Meteor.startup(() => {
  if (Meteor.isProduction) {
    enableProdMode();
  }

  // platformBrowserDynamic().bootstrapModule(AppModule);
  const subscription = MeteorObservable.autorun()
  .subscribe(() => {
    if (Meteor.loggingIn()) {
      return;
    }
    
    setTimeout(() => subscription.unsubscribe());
    platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
  });
});


