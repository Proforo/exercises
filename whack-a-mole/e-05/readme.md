# E-05: JSON

1. Convert the entire Array provided into a JSON object. Bear in mind some of the ways in which JSON data differs from "Object Notation" within JavaScript:
   - Only double quote characters are valid to wrap strings and variables in JSON (vs single-quote and backtick symbols in JS)
   - All property names must wrapped in double-quotes

NOTE TO REVIEWER (ANDY?): Here, the JSON should be written to a separate file (`leaders.json`), but that's not possible with Codepen embedding. Consider what would be easiest here - perhaps just instructing them to write this as a string?


## Starting 

```js
let leaders = [
	{name: `Katherine Johnson`, secs: 34, miss: 2, score: 7200},
	{name: `Tim Berners-Lee`, secs: 29, miss: 0, score: 10000},
	{name: `Ada Lovelace`, secs: 31, miss: 0, score: 9600},
	{name: `Alan Turing`, secs: 32, miss: 1, score: 9200},
	{name: `Grace Hopper`, secs: 38, miss: 0, score: 8800},
	{name: `Satoshi Nakamoto`, secs: 40, miss: 0, score: 7150},
	{name: `Roy L. Clay, Sr.`, secs: 35, miss: 3, score: 6800},
	{name: `Linus Torvalds`, secs: 41, miss: 1, score: 6700}
]
```

## Solution
```json
[
	{
		"name": "Katherine Johnson",
		"secs": 34,
		"miss": 2,
		"score": 7200
	},
	{
		"name": "Tim Berners-Lee",
		"secs": 29,
		"miss": 0,
		"score": 10000
	},
	{
		"name": "Ada Lovelace",
		"secs": 31,
		"miss": 0,
		"score": 9600
	},
	{
		"name": "Alan Turing",
		"secs": 32,
		"miss": 1,
		"score": 9200
	},
	{
		"name": "Grace Hopper",
		"secs": 38,
		"miss": 0,
		"score": 8800
	},
	{
		"name": "Satoshi Nakamoto",
		"secs": 40,
		"miss": 0,
		"score": 7150
	},
	{
		"name": "Roy L. Clay, Sr.",
		"secs": 35,
		"miss": 3,
		"score": 6800
	},
	{
		"name": "Linus Torvalds",
		"secs": 41,
		"miss": 1,
		"score": 6700
	}
]
```
