const { ethers } = require('ethers');
var rpio = require('rpio');

// イーサリアムノードのURLを指定してプロバイダを作成
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8546');

// イーサリアムスマートコントラクトのABIとアドレスを設定
const contractABI = ["constructor(string,string) nonpayable","event Approval(address indexed,address indexed,uint256)","event BalanceUpdate(address indexed,address indexed,uint256)","event ToggleUpdated(bool)","event Transfer(address indexed,address indexed,uint256)","function allowance(address,address) view returns (uint256)","function approve(address,uint256) returns (bool)","function balanceOf(address) view returns (uint256)","function burn(uint256)","function decimals() view returns (uint8)","function decreaseAllowance(address,uint256) returns (bool)","function get() view returns (bool)","function increaseAllowance(address,uint256) returns (bool)","function mint(uint256)","function name() view returns (string)","function symbol() view returns (string)","function toggle()","function totalSupply() view returns (uint256)","function transfer(address,uint256) returns (bool)","function transferFrom(address,address,uint256) returns (bool)"]; // スマートコントラクトのABIを指定
const contractAddress = '0xF7882BED7931e11357dc39D0A6e1cbAd05e08461'; // スマートコントラクトのアドレスを指定

// ラズベリーパイのLEDのGPIOピンを指定
rpio.open(11, rpio.OUTPUT);

// イベントログの監視
async function watchEvent() {
  const contract = new ethers.Contract(contractAddress, contractABI, provider);
  
  // イベントログを監視
  contract.on('ToggleUpdated', (onOffState) => {
    // _on_off_stateがtrueの場合はLEDをON、falseの場合はOFF
    if (onOffState) {
      //ledPin.writeSync(1); // LED ON
        rpio.write(11, rpio.HIGH);
	console.log("LED ON");
    } else {
        rpio.write(11, rpio.LOW);
console.log("LED OFF");
    }
  });
}

// メイン関数
async function main() {
  try {
    // イベントログの監視を開始
    watchEvent();
    console.log('Watching for events...');
  } catch (error) {
    console.error('Error:', error);
  }
}

// プログラムの実行
main();

