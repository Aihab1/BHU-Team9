
![Logo](https://givebutter.s3.amazonaws.com/profiles/OFZClUNWGdolNqMnhUnvgXoYhUJK0XFJ6C22Vk63.png)
## Team Members

- [Aihab Umair](https://github.com/Aihab1) 
- [Rishabh Jain](https://github.com/Nazi-pikachu)
- [Aman Kumar](https://github.com/aman0710)
- [Ishaan Puri](https://github.com/ishu-2201)
- [Ajay Kumar Yadav](https://github.com/AJAY007L)
# OHLC Engine

1. It offers users a ability to search the different stocks based on the symbols and view the chart.

2. Users should be able to view the history of their searches.

3. Users should have ability to switch between OHLC, Candlestick charts, Colored Bar, Vertex Line and Hollow Candle. 




## Run Locally

Clone the project

```bash
  git clone https://github.com/vivekjaipur/BHU-Team9.git
```

Go to the project directory

```bash
  cd BHU-Team9
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

  
## Modules 
1. **Sub-Module-1(Reader)** : Reads the ‘Stock List’ data input (line by line from JSON), and sends the packet to the FSM (Finite-State-Machine) module.

2. **Sub-Module-2(FSM)** : FSM computes OHLC packets based on intervals and constructs 'BAR' chart data, based on timestamp.

3. **Sub-Module-3(Web Service)** : Client requests from Dashboard come here. Publishes (transmits) the BAR OHLC data as computed in real time.
 


## Tech Stack

**Server:** Node

**Frontend:** React.js

**Additional Libraries:** react-stockcharts,

**Data Structures:** Arrays, Strings, HashMap, Objects
  