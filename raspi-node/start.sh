#bin/bash

./geth --datadir "./data" --identity "node1" --http --http.port "8546" --http.addr 127.0.0.1 --http.corsdomain "*" --http.api "eth,web3,miner,personal,debug,net" --allow-insecure-unlock --port "30304" --verbosity 5 --networkid 12345 --syncmode "full" --maxpeers 3 --nodiscover console 2>node1.log
