﻿/*Let's test our simple Public Address module.*/var publicAddressSystem = require('announce.js');publicAddressSystem("The 6pm flight to Paris has been delayed.");/*We can export an object instead of a function.*///var say = require('talk');//say.softly("All Flights Are Cancelled."); // all flights are cancelled.//say.loudly("All Flights Are Cancelled."); // ALL FLIGHTS ARE CANCELLED./*Let's see if we can yell.*///var scream = require('yell');//scream("There is a fire. Get out of the building.");