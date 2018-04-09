var url = "http://api.openweathermap.org/data/2.5/weather?q=";
var apikey = "88b98003f7e9550fc752326fd5920051" ;
var request; // full API request
var city = "Quibdó"; // name of the city
var country = "CO"// name of country
var getRain;
var units = "metric" // the variable for the units in the json file
var speed=[0,50,100,150,200,250,300,350,400,450,500,550]
var lightRain =10
var mediumRain =20
var heavyRain = 30

function setup(){
createCanvas(1000,1000);
getWeather();
frameRate(60);

}

function draw(){

background('lightblue');
strokeWeight(2);
stroke('white');
textSize(50);
textAlign(CENTER);
// drawing lightrain
	if(getRain<5){
		text("lightrain", width/2,100);
		for (let i=0; i<width;i+= 100){
			speed[0]=speed[0]+lightRain;
			line(i,speed[0],i,speed[0]+10)
			if(speed[0]>height){
				speed[0]=0
			}
		}
		for (let i=50; i<width;i+= 100){
			speed[1]=speed[1]+lightRain;
			line(i,speed[1],i,speed[1]+10)
			if(speed[1]>height){
				speed[1]=0
			}
		}
		for (let i=0; i<width;i+= 100){
			speed[2]=speed[2]+lightRain;
			line(i,speed[2],i,speed[2]+10)
			if(speed[2]>height){
				speed[2]=0
			}
		}
		for (let i=50; i<width;i+= 100){
			speed[3]=speed[3]+lightRain;
			line(i,speed[3],i,speed[3]+10)
			if(speed[3]>height){
				speed[3]=0
			}
		}
		for (let i=0; i<width;i+= 100){
			speed[4]=speed[4]+lightRain;
			line(i,speed[4],i,speed[4]+10)
			if(speed[4]>height){
				speed[4]=0
			}
		}
		for (let i=50; i<width;i+= 100){
			speed[5]=speed[5]+lightRain;
			line(i,speed[5],i,speed[5]+10)
			if(speed[5]>height){
				speed[5]=0
			}
		}
		for (let i=0; i<width;i+= 100){
			speed[6]=speed[6]+lightRain;
			line(i,speed[6],i,speed[6]+10)
			if(speed[6]>height){
				speed[6]=0
			}
		}
		for (let i=50; i<width;i+= 100){
			speed[7]=speed[7]+lightRain;
			line(i,speed[7],i,speed[7]+10)
			if(speed[7]>height){
				speed[7]=0
			}
		}
		for (let i=0; i<width;i+= 100){
			speed[8]=speed[8]+lightRain;
			line(i,speed[8],i,speed[8]+10)
			if(speed[8]>height){
				speed[8]=0
			}
		}
		for (let i=50; i<width;i+= 100){
			speed[9]=speed[9]+lightRain;
			line(i,speed[9],i,speed[9]+10)
			if(speed[9]>height){
				speed[9]=0
			}
		}
		for (let i=0; i<width;i+= 100){
			speed[10]=speed[10]+lightRain;
			line(i,speed[10],i,speed[10]+10)
			if(speed[10]>height){
				speed[10]=0
			}
		}
		for (let i=50; i<width;i+= 100){
			speed[11]=speed[11]+lightRain;
			line(i,speed[11],i,speed[11]+10)
			if(speed[11]>height){
				speed[11]=0
			}
		}
	} // closes if statement

// drawing mediumrain

if(getRain>5 && getRain<10){
	text("Mediumrain", width/2,100);
	for (let i=0; i<width;i+= 100){
		speed[0]=speed[0]+mediumRain;
		line(i,speed[0],i,speed[0]+10)
		if(speed[0]>height){
			speed[0]=0
		}
	}
	for (let i=50; i<width;i+= 100){
		speed[1]=speed[1]+mediumRain;
		line(i,speed[1],i,speed[1]+10)
		if(speed[1]>height){
			speed[1]=0
		}
	}
	for (let i=0; i<width;i+= 100){
		speed[2]=speed[2]+mediumRain;
		line(i,speed[2],i,speed[2]+10)
		if(speed[2]>height){
			speed[2]=0
		}
	}
	for (let i=50; i<width;i+= 100){
		speed[3]=speed[3]+mediumRain;
		line(i,speed[3],i,speed[3]+10)
		if(speed[3]>height){
			speed[3]=0
		}
	}
	for (let i=0; i<width;i+= 100){
		speed[4]=speed[4]+mediumRain;
		line(i,speed[4],i,speed[4]+10)
		if(speed[4]>height){
			speed[4]=0
		}
	}
	for (let i=50; i<width;i+= 100){
		speed[5]=speed[5]+mediumRain;
		line(i,speed[5],i,speed[5]+10)
		if(speed[5]>height){
			speed[5]=0
		}
	}
	for (let i=0; i<width;i+= 100){
		speed[6]=speed[6]+mediumRain;
		line(i,speed[6],i,speed[6]+10)
		if(speed[6]>height){
			speed[6]=0
		}
	}
	for (let i=50; i<width;i+= 100){
		speed[7]=speed[7]+mediumRain;
		line(i,speed[7],i,speed[7]+10)
		if(speed[7]>height){
			speed[7]=0
		}
	}
	for (let i=0; i<width;i+= 100){
		speed[8]=speed[8]+mediumRain;
		line(i,speed[8],i,speed[8]+10)
		if(speed[8]>height){
			speed[8]=0
		}
	}
	for (let i=50; i<width;i+= 100){
		speed[9]=speed[9]+mediumRain;
		line(i,speed[9],i,speed[9]+10)
		if(speed[9]>height){
			speed[9]=0
		}
	}
	for (let i=0; i<width;i+= 100){
		speed[10]=speed[10]+mediumRain;
		line(i,speed[10],i,speed[10]+10)
		if(speed[10]>height){
			speed[10]=0
		}
	}
	for (let i=50; i<width;i+= 100){
		speed[11]=speed[11]+mediumRain;
		line(i,speed[11],i,speed[11]+10)
		if(speed[11]>height){
			speed[11]=0
		}
	}
} // closes if statement

// drawing heavyRain

if(getRain>10){
	text("Heavyrain", width/2,100);
	for (let i=0; i<width;i+= 100){
		speed[0]=speed[0]+heavyRain;
		line(i,speed[0],i,speed[0]+10)
		if(speed[0]>height){
			speed[0]=0
		}
	}
	for (let i=50; i<width;i+= 100){
		speed[1]=speed[1]+heavyRain;
		line(i,speed[1],i,speed[1]+10)
		if(speed[1]>height){
			speed[1]=0
		}
	}
	for (let i=0; i<width;i+= 100){
		speed[2]=speed[2]+heavyRain;
		line(i,speed[2],i,speed[2]+10)
		if(speed[2]>height){
			speed[2]=0
		}
	}
	for (let i=50; i<width;i+= 100){
		speed[3]=speed[3]+heavyRain;
		line(i,speed[3],i,speed[3]+10)
		if(speed[3]>height){
			speed[3]=0
		}
	}
	for (let i=0; i<width;i+= 100){
		speed[4]=speed[4]+heavyRain;
		line(i,speed[4],i,speed[4]+10)
		if(speed[4]>height){
			speed[4]=0
		}
	}
	for (let i=50; i<width;i+= 100){
		speed[5]=speed[5]+heavyRain;
		line(i,speed[5],i,speed[5]+10)
		if(speed[5]>height){
			speed[5]=0
		}
	}
	for (let i=0; i<width;i+= 100){
		speed[6]=speed[6]+heavyRain;
		line(i,speed[6],i,speed[6]+10)
		if(speed[6]>height){
			speed[6]=0
		}
	}
	for (let i=50; i<width;i+= 100){
		speed[7]=speed[7]+heavyRain;
		line(i,speed[7],i,speed[7]+10)
		if(speed[7]>height){
			speed[7]=0
		}
	}
	for (let i=0; i<width;i+= 100){
		speed[8]=speed[8]+heavyRain;
		line(i,speed[8],i,speed[8]+10)
		if(speed[8]>height){
			speed[8]=0
		}
	}
	for (let i=50; i<width;i+= 100){
		speed[9]=speed[9]+heavyRain;
		line(i,speed[9],i,speed[9]+10)
		if(speed[9]>height){
			speed[9]=0
		}
	}
	for (let i=0; i<width;i+= 100){
		speed[10]=speed[10]+heavyRain;
		line(i,speed[10],i,speed[10]+10)
		if(speed[10]>height){
			speed[10]=0
		}
	}
	for (let i=50; i<width;i+= 100){
		speed[11]=speed[11]+heavyRain;
		line(i,speed[11],i,speed[11]+10)
		if(speed[11]>height){
			speed[11]=0
		}
	}
} // closes if statement


} // closes draw


function WeatherData(data) {   // callback function for weatherdata
	getRain = data['rain']['3h'];
console.log(data);

}

function getWeather() {
	request = url + city + "," + country + "&units=" + units + "&APPID=" + apikey;
	loadJSON(request, WeatherData); //this is the key syntax and line of code to make a query request and get a query response
	console.log(request);
}
