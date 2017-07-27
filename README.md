Code Golf: Hole 5
===========================

## Introduction

Code Golf is a competition where given a programming prompt, the shortest source code (measured in bytes) to fully implement the prompt wins the challenge. Ties are broken by the first golfer to submit a solution of a given size.

## Challenge

An evil wizard has sent you (and your laptop) back in time to ancient Rome. He says if you want to return to 2017, you must write him a program that converts Roman numerals to Arabic numerals.

He will cast a spell to run your program with Roman numerals between I and MMXVII as the first argument. Your program must print the equivalent number in Arabic numerals to stdout. Only after your program has converted all the numbers will the wizard return you to modern times.

```bash
$ node my-solution.js 'CXXIII'
123
$ python3 my-solution.py 'CXXIII'
123
$ ruby my-solution.rb 'CXXIII'
123
$ go run my-solution.go 'CXXIII'
123
```

## Rules

* The languages are limited to JavaScript (Node.js 6.9), Python (3.6), Ruby (2.4), and Golang (1.8.1).
* Your submission is limited to a single file.
* A single Roman numeral is provided as the first argument.
    * The Roman numeral will always be "valid" (no characters out of place).
    * Valid characters for roman numerals are I, V, X, L, C, D, and M
    * See [Roman numeral rules](http://www.novaroma.org/via_romana/numbers.html)
* A single Arabic numeral must be printed to stdout, and it must be equal to the Roman numeral.
  * The Arabic numeral must be a positive integer and have no leading zeroes.
* Do not look up solutions online, use your brain. 
* Solve the problem for arbitrary input, don't code against the test cases.

## Scoring

Please submit a single file (.js, .py, .rb, or .go). The included node script `code-golf.sh` will be used to score your file. To run this script, you must have Node.js installed.

macOS
```bash
$ ./code-golf.js my-solution.js
Your score is 456
```

Windows
```
C:\> node code-golf.js my-solution.js
Your score is 456
```

Docker
```bash
$ docker build -t golf .
$ docker run -it -v "$PWD":/tmp/src golf bash
$ ./code-golf.js my-solution.js
Your score is 456
```

![golf](https://adamsarson.files.wordpress.com/2013/06/club-flying.gif?w=980)
