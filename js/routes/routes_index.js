var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"login","component":"LoginComponent","pathMatch":"full","data":{"title":"Login-Lethean(LTHN)","heading":"Login","description":"Lethean(LTHN)Login","robots":true}}],"kind":"module"},{"name":"routes","filename":"src/app/plugins/lthn/chain/blockchain-routing.module.ts","module":"BlockchainRoutingModule","children":[{"path":"chain","canActivate":["AuthGuard"],"loadChildren":"./blockchain.module#BlockchainModule","children":[{"kind":"module","children":[],"module":"BlockchainModule"}]}],"kind":"module"},{"name":"routes","filename":"src/app/plugins/console/console-routing.module.ts","module":"ConsoleRoutingModule","children":[{"path":"console","canActivate":["AuthGuard"],"loadChildren":"./console.module#ConsoleModule"}],"kind":"module"},{"name":"routes","filename":"src/app/plugins/hive/post/post-routing.module.ts","module":"PostRoutingModule","children":[{"path":"p","loadChildren":"./post.module#PostModule","children":[{"kind":"module","children":[],"module":"PostModule"}]}],"kind":"module"},{"name":"routes","filename":"src/app/modules/root-routing.module.ts","module":"RootRoutingModule","children":[{"path":"","loadChildren":"./root.module#RootModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/root.module.ts","module":"RootModule","children":[{"path":"","component":"RootComponent","canActivate":["AuthGuard"],"pathMatch":"full","data":{"title":"Lethean(LTHN)","heading":"LetheanDashboard","description":"Lethean(LTHN)Webapp","robots":true}}],"kind":"module"}],"module":"RootModule"}]}],"kind":"module"},{"name":"routes","filename":"src/app/modules/settings/settings-routing.module.ts","module":"SettingsRoutingModule","kind":"module"},{"name":"routes","filename":"src/app/modules/user/user-routing.module.ts","module":"UserRoutingModule","children":[{"path":"user","loadChildren":"./user.module#UserModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/user/user.module.ts","module":"UserModule","children":[{"path":"","component":"UserComponent","data":{"title":"NewUser-Lethean(LTHN)","heading":"NewUserWizard","description":"Lethean(LTHN)NewUserPanel","robots":false}}],"kind":"module"}],"module":"UserModule"}]}],"kind":"module"},{"name":"routes","filename":"src/app/plugins/lthn/wallet/wallet-routing.module.ts","module":"WalletRoutingModule","children":[{"path":"wallet","canActivate":["AuthGuard"],"loadChildren":"./wallet.module#WalletModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/plugins/lthn/wallet/wallet.module.ts","module":"WalletModule","children":[{"path":"","component":"WalletComponent","data":{"title":"WalletManager-Lethean(LTHN)","heading":"Wallets","description":"LetheanWalletManager","robots":false}},{"path":"new","component":"NewComponent","data":{"title":"NewWallet-Lethean(LTHN)","heading":"CreateNewWallet","description":"Createawallet","robots":false}},{"path":"restore","component":"RestoreComponent","data":{"title":"RestoreWallet-Lethean(LTHN)","heading":"RestoreWallet","description":"RestoreWallet","robots":false}},{"path":"backup","component":"BackupComponent","data":{"title":"BackupWallet-Lethean(LTHN)","heading":"BackupWallet","description":"BackupWallet","robots":false}},{"path":"settings","component":"SettingsComponent","data":{"title":"WalletSettings-Lethean(LTHN)","heading":"WalletSettings","description":"WalletSettings","robots":false}}],"kind":"module"}],"module":"WalletModule"}]}],"kind":"module"},{"name":"routes","filename":"src/app/plugins/console/console.module.ts","module":"ConsoleModule","children":[{"path":"","component":"ConsoleComponent","data":{"title":"Console-Lethean(LTHN)","heading":"lthnConsole","description":"Lethean(LTHN)Console","robots":false}}],"kind":"module"}]}
