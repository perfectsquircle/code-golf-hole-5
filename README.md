Code Golf: Hole 5
===========================

## Introduction

Code Golf is a competition where given a programming prompt, the shortest source code (measured in bytes) to fully implement the prompt wins the challenge. Ties are broken by the first golfer to submit a solution of a given size.

## Challenge

An evil wizard has sent you (and your laptop) back in time to ancient Rome. He says if you want to return to 2017, you must write him a program that converts Roman numerals to Arabic numerals.

He will cast a spell to run your program with every Roman numeral between I and MMXVII as the first argument. Your program must print the equivalent number in Arabic numerals to stdout. Only then you will return to modern times.

```bash
$ node my-solution.js 'CXXIII'
123
$ python3 my-solution.py 'CXXIII'
123
$ ruby my-solution.rb 'CXXIII'
123
$ dotnet script my-solution.csx -- 'CXXIII'
123
$ go run my-solution.go 'CXXIII'
123
```

## Rules

* The languages are limited to JavaScript (Node.js 6.9), Python3 (3.6), Ruby (2.4), C# ([.NET Core 1.1](https://github.com/filipw/dotnet-script)), and Golang (1.8.1).
* Your submission is limited to a single file.
* The game board is provided through stdin, one row per line.
  * The game board is 7 columns wide and 6 rows tall
  * The board has 4 valid characters:
    * `.` is an empty cell
    * `x` is a red disc
    * `o` is a blue disc
    * `\n` is a new row
* The next disc is provided as the first argument, `x` for a red disc, `o` for a blue disc.
* Your program must print a single number
  * The number equals the column where dropping a disc results in a winning move.
  * The columns are indexed 1-7 from left to right.
  * A winning move results in 4 of the same color disc in a vertical, horizontal, or diagonal line.

## Scoring

Please submit a single file (.js, .py, .rb, or .csx). The included node script `code-golf.sh` will be used to score your file. To run this script, you must have Node.js installed.

macOS
```bash
$ ./code-golf.sh my-solution.js
Your score is 456
```

Windows
```
C:\> node code-golf.sh my-solution.js
Your score is 456
```

Docker
```bash
$ docker build -t golf .
$ docker run -it -v "$PWD":/tmp/src golf bash
$ ./code-golf.sh my-solution.js
Your score is 456
```

![golf](https://media.giphy.com/media/13fTigyJHlacwM/giphy.gif)
