#bin/bash

./geth --datadir "./data" --identity "node1" --http --http.port "8545" --http.addr 127.0.0.1 --http.corsdomain "*" --http.api "eth,web3,miner,personal,debug,net" --allow-insecure-unlock --unlock "1a3fe3f17f817880eb86b14670a49a8979e7f639" --password "./password" --port "30304" --verbosity 5 --networkid 12345 --syncmode "full" --maxpeers 3 --mine --miner.gasprice 0 --miner.etherbase "1a3fe3f17f817880eb86b14670a49a8979e7f639" --nodiscover console 2>node1.log
