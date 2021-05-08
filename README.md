# TaxCode
## Run this command to clone hyper-ledger fabric  
$ curl -sSL https://bit.ly/2ysbOFE | bash -s
## You need node version 10.19.0 to run this project
## Install mongodb community server on your home folder
## Run this command to initiate mongodb community server 
$ ${HOME}db/bin/mongod --dbpath=${HOME}/mongodb-data
## Delete chaincode and fabcar from fabric-samples folder.
## Now put chaincode and fabcar in fabric-samples folder from this github repo.
## Run this command to install node-modules and dependecies
$ cd ~/fabric-samples/fabrcar/javascript 
$ npm install
## Run following command to deploy chaincode
$ cd ~/fabric-samples/fabrcar/ <br />
$ ./startFabric.sh javascript 
## After deployment run following node files
$ cd ./javascript/ <br />
$ node enrollAdmin.js <br />
$ node registerUser.js
## Now if you can run server by using following command
$ npm run dev
## You have to create admin and user separately to use both side of TaxCode webapp.
