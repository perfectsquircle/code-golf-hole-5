#!/usr/bin/env node

"use strict"
const fs = require("fs")
const spawn = require('child_process').spawn
const path = require("path")
const assert = require("assert")

let args = process.argv
let file = args[2]
if (!file) {
    console.log("Must provide file as first argument")
    process.exit(1)
}

let runtime = getRuntime(file)

test(runtime, file).then(() => {
    let stat = fs.statSync(file)
    console.log(`Your score is ${stat.size}. The evil wizard has sent you back to 2017!`)
    process.exit(0)
}).catch((e) => {
    console.error(e.message || e)
    process.exit(1)
})

function test(runtime, file) {
    let tests = require("./tests.json");

    let testPromises = tests.reduce((promise, test) => {
        return promise.then(result => runTest(runtime, file, test.input, test.expectedOutput))
    }, Promise.resolve(true));

    return testPromises;
}

function runTest(runtime, file, input, expectedOutput) {
    return new Promise((resolve, reject) => {
        let errors = []
        let timeout = setTimeout(function () {
            reject("Timeout\n" + errors.join("\n"))
        }, 7000)
        let node
        if (runtime === "go") {
            node = spawn("go", ["run", file, input])
        } else {
            node = spawn(runtime, [file, input])
        }
        node.stdout.setEncoding('utf8')
        node.stdout.on("data", (data) => {
            try {
                clearTimeout(timeout)
                makeAssertions(input, expectedOutput, data)
                resolve("file passed tests")
            } catch (e) {
                reject(e);
            }
        })

        node.stderr.on("data", (data) => {
            errors.push(data)
            reject(errors.join("\n"))
        })

        node.stdin.end()
    })
}

function makeAssertions(input, expectedOutput, output) {
    // Trim trailing newline
    output = output.replace(/\r?\n?$/, "")
    assert.equal(expectedOutput, output, `The number was not converted correctly
    Input:    ${input}
    Expected: ${expectedOutput}
    Actual:   ${output}
    `)
    console.log("✔", input, " ".repeat(12 - input.length), output)
}

function getRuntime(file) {
    let extension = path.extname(file)
    switch (extension) {
        case ".js":
            return "node"
        case ".py":
            return "python3"
        case ".rb":
            return "ruby"
        case ".go":
            return "go"
        default:
            throw new Error("Unrecognized file type")
    }
}