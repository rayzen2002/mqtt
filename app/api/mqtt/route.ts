import { NextResponse } from "next/server";
import mqtt from 'mqtt'

const host = "mqtt://test.mosquitto.org"
const options = {}
const publishTopic = `TOPICO/TESTE`
let msg = 'off'
let ledIsOn = false
const client = mqtt.connect(host, options);

client.on("connect", () => {
  client.subscribe("presence", (err) => {
    if (!err) {
      client.publish("presence", "Hello mqtt");
    }
  });
});
function panelPublish(){
  if(ledIsOn){
    msg = 'off'
    ledIsOn = false
  } else{
    msg = "on"
    ledIsOn = true
  }
  client.publish(publishTopic, msg, {qos: 0, rentain: false})
  console.log(`${publishTopic} :  ${msg}`)
}

client.on("message", (topic, message) => {
  // message is Buffer
  console.log(message.toString());
  client.end();
});

export async function GET(){
  panelPublish()
  return NextResponse.json({Test: "MQTT Openned"})
}