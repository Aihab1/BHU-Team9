
![Logo](https://avatars.githubusercontent.com/u/2536284?s=280&v=4)


## Team Members

- [Aihab Umair](https://github.com/Aihab1) 
- [Rishabh Jain](https://github.com/Nazi-pikachu)
- [Aman Kumar](https://github.com/aman0710)
- [Ishaan Puri](https://github.com/ishu-2201)
- [Ajay Kumar Yadav](https://github.com/AJAY007L)


# OHLC Engine
We have created a dashboard based on which users would be able to analyze the sentiment of a specific stock. 

We have used the 'Stock List' dataset which was given to us and used its data to create an "OHLC" (Open/High/Low/Close) engine.

**Functionalities of the project:**
- User scan search different stocks based on the symbols and view the chart.
- Users can view the history of their searches.
- Users have the ability to switch between OHLC, Candlestick charts, Bar charts and Vertex Line.
## Tech Stack

**Client:** HTML, CSS, React.js 

**Server:** Node.js

**Data Structures:** Arrays, Strings, HashMap, Objects
  
**Charting Library:** react-stockcharts

## Modules 
1. **Sub-Module-1(Reader)** : Reads the ‘Stock List’ data input (line by line from JSON), and sends the packet to the FSM (Finite-State-Machine) module.

2. **Sub-Module-2(FSM)** : FSM computes OHLC packets based on intervals and constructs 'BAR' chart data, based on timestamp.

3. **Sub-Module-3(Web Service)** : Client requests from Dashboard come here. Publishes (transmits) the BAR OHLC data as computed in real time.
 
## Run Locally

Clone the project

```bash
  git clone https://github.com/vivekjaipur/BHU-Team9.git
```

Go to the project directory

```bash
  cd BHU-Team9
  cd ohlc-engine
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

  
