# react-native-app project
Open your project in an IDE. 
```
	
To run the application in the android emulator we have to set up the android studio and android emulator. 
Install Android Studio
Emulator
Open emulator.
Then go to terminal of the ide/folder and run the following command to run the app in android device
```
npx react-native run-android
```
Application journey
1. Home Screen - There is a button ALL INVOICES on clicking sales rep/ application user will be able to see all invoices.
2. Invoices Screen - All invoices of collection date as current date will be shown here. Application users can click on any one of the lists.
3. Payment Screens - By default the amount entered in the input box will be the total pending amount. Users can edit the amount ranging from 1 to pending amount. Entries of 0 or amount exceeding than pending amount will show toast to the app user. User has to choose any one of three payment methods. After filling a valid amount and choosing a payment method, the user will be able to click on the confirm button. That will land the user to again the home screen after viewing 2.5 seconds of a success screen. 
4. Home Screen and after again going to invoices screen the pending amount will be updated for the invoice. 
