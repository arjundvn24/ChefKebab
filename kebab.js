const Discord = require('discord.js');
const client = new Discord.Client();
const noobjsonData = require('location'); //location of directory of noob.json
const easyjsonData = require('location');//location of directory of easy.json
const mediumjsonData = require('location');//location of directory of medium.json
const hardjsonData = require('location');//location of directory of hard.json
client.login('');
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});
var level="";
var UserID="";
var focus=0;
var UserName="";
client.on('message', message => {
    if(message.content==='!kebab'){
      focus=1;
      UserID=message.author.id;
      UserName=message.author.username;
      console.log(UserName);
      message.channel.send("Enter the Level: ['noob','easy','medium','hard']");
    }});
client.on('message', message => {
  if(message.author.id===UserID&&focus===1){
      level=message.content;
      if(level==="noob"||level==="Noob"||level==="NOOB"){
      console.log(index=Math.floor(Math.random() * 355));
      console.log(noobjsonData[index].problemCode);
    message.channel.send(
    {
    "embed":{"title":noobjsonData[index].problemCode,
    "url":noobjsonData[index].link,
    "fields":[
      {"name": "Question Name:","value":noobjsonData[index].problemName},
      {"name":"Level:","value":level.toUpperCase()}
    ],
    "footer":{
      "text":"Requested by "+message.author.tag
    }
    }       
    });
  }
      else if(level==="easy"||level==="Easy"||level==="EASY"){
      console.log(index=Math.floor(Math.random() * 1145));
      console.log(easyjsonData[index].problemCode);
      message.channel.send(
        {
        "embed":{"title":easyjsonData[index].problemCode,
        "url":easyjsonData[index].link,
        "fields":[
          {"name": "Question Name:","value":easyjsonData[index].problemName},
          {"name":"Level:","value":level.toUpperCase()}
        ],
        "footer":{
          "text":"Requested by "+message.author.tag
        }
        }       
        });}

      else if(level==="medium"||level==="Medium"||level==="MEDIUM"){
      console.log(index=Math.floor(Math.random() * 987));
      console.log(mediumjsonData[index].problemCode);
      message.channel.send(
        {
        "embed":{"title":mediumjsonData[index].problemCode,
        "url":mediumjsonData[index].link,
        "fields":[
          {"name": "Question Name:","value":mediumjsonData[index].problemName},
          {"name":"Level:","value":level.toUpperCase()}
        ],
        "footer":{
          "text":"Requested by "+message.author.tag
        }
        }       
        });}
  
      else if(level==="hard"||level==="Hard"||level==="HARD"){
      console.log(index=Math.floor(Math.random() * 464));
      console.log(hardjsonData[index].problemCode);
      message.channel.send(
        {
        "embed":{"title":hardjsonData[index].problemCode,
        "url":hardjsonData[index].link,
        "fields":[
          {"name": "Question Name:","value":hardjsonData[index].problemName},
          {"name":"Level:","value":level.toUpperCase()}
        ],
        "footer":{
          "text":"Requested by "+message.author.tag
        }
        }});
      }}});  
        
  
